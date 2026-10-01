import Reveal from './Reveal'

// Alternating navy shades so scrolling feels continuous between sections.
export default function Section({
  id,
  tone = 'dark', // 'dark' = near-black navy, 'light' = slightly lighter navy
  grid = false,
  eyebrow,
  title,
  children,
  footer, // optional strip pinned to the bottom edge of the section
  className = '',
}) {
  return (
    <section
      id={id}
      className={`snap-section relative flex min-h-[100svh] flex-col justify-center ${
        tone === 'dark' ? 'bg-navy-900' : 'bg-navy-800'
      } ${className}`}
    >
      {grid && (
        <div className="blueprint-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      )}
      <div className="relative mx-auto w-full max-w-5xl px-6 py-20 md:py-24">
        {(eyebrow || title) && (
          <Reveal className="mb-10">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl font-bold text-base-content md:text-4xl">
                {title}
              </h2>
            )}
            <div className="mt-4 h-px w-16 bg-gold" />
          </Reveal>
        )}
        {children}
      </div>
      {footer && (
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-8 md:absolute md:inset-x-0 md:bottom-0">
          {footer}
        </div>
      )}
    </section>
  )
}
