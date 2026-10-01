import Reveal from './Reveal'

// Title block, in the manner of a technical drawing. Fills the space the
// profile photo used to occupy and keeps the corner-bracket motif in the hero.
const SPEC = [
  ['Location', 'Kuching, Sarawak, Malaysia'],
  ['Focus', 'Full-stack · AI · Computer Vision'],
  ['Completes', '6 November 2026'],
  ['Open to', 'Junior developer roles'],
]

export default function Hero() {
  return (
    <section
      id="top"
      className="snap-section relative flex min-h-[100svh] items-center overflow-hidden bg-navy-900"
    >
      <div
        className="blueprint-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 px-6 py-32 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="eyebrow mb-5">Full-Stack Developer in Training</p>
          <h1 className="text-4xl font-bold leading-tight text-base-content md:text-6xl">
            Kevin Raweng Anak Usan
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-base-content/75 md:text-lg">
            Three years in trust &amp; safety and operations, now building
            full-stack, AI-integrated platforms for the construction industry,
            one blueprint at a time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#capstone" className="btn btn-primary rounded-none font-mono text-xs">
              View Capstone Project
            </a>
            <a
              href="#contact"
              className="btn btn-outline rounded-none border-gold font-mono text-xs text-gold hover:border-gold hover:bg-gold hover:text-navy-900"
            >
              Contact Me
            </a>
            <a
              href="/Kevin_Raweng_Anak_Usan_Resume.pdf"
              download
              className="btn btn-ghost rounded-none font-mono text-xs text-base-content/80 underline underline-offset-4 hover:text-gold"
            >
              Download R&eacute;sum&eacute; (PDF)
            </a>
          </div>

          <div className="mt-10 inline-block border border-gold/40 bg-navy-800/60 px-4 py-3">
            <p className="font-mono text-[11px] leading-snug text-base-content/80">
              <span className="mr-2 inline-block h-2 w-2 translate-y-[-1px] bg-gold" />
              Currently enrolled
              <br />
              AI &amp; Cloud for Construction, Cohort 1
            </p>
          </div>
        </Reveal>

        <Reveal className="w-full justify-self-center md:justify-self-end">
          <div className="bracket-frame">
            <span className="bracket-extra" aria-hidden="true" />
            <dl className="w-full border border-gold/30 bg-navy-800/50 p-5">
              {SPEC.map(([label, value], i) => (
                <div
                  key={label}
                  className={i ? 'mt-4 border-t border-gold/15 pt-4' : ''}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {label}
                  </dt>
                  <dd className="mt-1 font-mono text-xs leading-snug text-base-content/80">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
