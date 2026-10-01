import Section from './Section'
import Reveal from './Reveal'

const CARDS = [
  {
    title: 'Certificate in AI & Cloud for Construction',
    org: 'Cohort 1, CENTEXS Kuching Campus, Santubong (Gamuda Technologies x CENTEXS Sarawak)',
    place: 'Sarawak, Malaysia',
    dates: 'June 2026 – 6 November 2026',
    badge: 'In Progress',
  },
  {
    title: 'Diploma in Industrial Electronics (Mechatronics Engineering)',
    org: 'German-Malaysian Institute',
    place: 'Bangi, Selangor',
    dates: '2018',
    badge: null,
  },
]

export default function Education() {
  return (
    <Section id="education" tone="dark" eyebrow="06 / Education" title="Training">
      <div className="grid gap-6 md:grid-cols-2">
        {CARDS.map((c, i) => (
          <Reveal
            key={c.title}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="flex flex-col border border-gold/20 bg-navy-800/60 p-6"
          >
            {c.badge && (
              <span className="mb-4 w-fit border border-gold px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold">
                {c.badge}
              </span>
            )}
            <h3 className="text-base font-semibold text-base-content">{c.title}</h3>
            <p className="mt-2 text-sm text-base-content/70">{c.org}</p>
            <p className="mt-1 text-sm text-base-content/60">{c.place}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-gold">
              {c.dates}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
