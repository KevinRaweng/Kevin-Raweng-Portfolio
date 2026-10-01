import { useEffect, useState } from 'react'
import { useActiveSection, useScrollProgress } from '../hooks/useActiveSection'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#capstone', label: 'Capstone' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = ['top', ...LINKS.map((l) => l.href.slice(1))]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-gold/20 bg-navy-900/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-gold font-mono text-sm font-medium text-gold">
            KR
          </span>
          <span className="hidden whitespace-nowrap font-display text-sm font-semibold tracking-wide text-base-content xl:block">
            Kevin Raweng Anak Usan
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href.slice(1) ? 'true' : undefined}
              className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-gold ${
                active === l.href.slice(1)
                  ? 'text-gold'
                  : 'text-base-content/70'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm rounded-none font-mono text-xs">
            Get in touch
          </a>
        </div>

        <button
          className="btn btn-ghost btn-sm rounded-none md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-xs">{open ? 'CLOSE' : 'MENU'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/20 bg-navy-900/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-widest text-base-content/70 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-sm w-fit rounded-none font-mono text-xs"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}

      <div
        className="h-px w-full origin-left bg-gold/70 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  )
}
