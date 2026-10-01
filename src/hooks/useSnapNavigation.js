import { useEffect } from 'react'

const POLL_MS = 50
const SETTLE_MS = 150 // no movement for this long means the scroll has finished
const START_GRACE_MS = 300 // if nothing has moved by now, smooth scrolling isn't running
const MAX_DURATION_MS = 1600

/**
 * Makes in-page anchor links scroll smoothly *and* land flush on a section.
 *
 * Two things go wrong if you leave this to the browser:
 *
 * 1. Chromium's scroll-snap engine cancels an in-flight smooth scroll and pulls
 *    the page back to the snap point it started from, so a nav click never
 *    leaves the current section. We suspend snapping for the duration of the
 *    animation and hand control back once the scroll settles.
 * 2. `scrollend` can fire before the animation has even started, which would
 *    restore snapping immediately and re-trigger (1). We watch the actual
 *    scroll position instead, and fall back to an instant jump in environments
 *    that don't animate smooth scrolls at all.
 */
export function useSnapNavigation() {
  useEffect(() => {
    const root = document.documentElement
    let timer = null

    const restoreSnap = () => {
      if (timer !== null) clearTimeout(timer)
      timer = null
      root.style.scrollSnapType = ''
    }

    const scrollTo = (target, behavior) =>
      target.scrollIntoView({ behavior, block: 'start' })

    const watchUntilSettled = (target) => {
      const startedAt = performance.now()
      const startY = window.scrollY
      let lastY = startY
      let stillSince = null

      // Polled with timers rather than rAF: rAF is frozen in a background or
      // hidden tab, which would strand snapping in the "off" state.
      const tick = () => {
        const y = window.scrollY
        const elapsed = performance.now() - startedAt

        // Nothing has moved, so smooth scrolling isn't animating in this
        // environment, so jump straight to the target instead.
        if (y === startY && elapsed > START_GRACE_MS) {
          scrollTo(target, 'instant')
          restoreSnap()
          return
        }

        if (y === lastY) {
          if (stillSince === null) stillSince = elapsed
        } else {
          stillSince = null
          lastY = y
        }

        const settled = stillSince !== null && elapsed - stillSince >= SETTLE_MS
        if ((settled && y !== startY) || elapsed > MAX_DURATION_MS) {
          restoreSnap()
          return
        }

        timer = setTimeout(tick, POLL_MS)
      }

      timer = setTimeout(tick, POLL_MS)
    }

    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) {
        return
      }

      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const id = link.getAttribute('href').slice(1)
      const target = id && document.getElementById(id)
      if (!target) return

      event.preventDefault()
      window.history.replaceState(null, '', `#${id}`)

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      restoreSnap() // cancel any watcher still running from a previous click
      root.style.scrollSnapType = 'none'

      if (reduced) {
        scrollTo(target, 'instant')
        restoreSnap()
        return
      }

      scrollTo(target, 'smooth')
      watchUntilSettled(target)
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
      restoreSnap()
    }
  }, [])
}
