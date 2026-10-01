import Section from './Section'
import Reveal from './Reveal'

const STATS = [
  { value: '5+ yrs', label: 'professional experience' },
  { value: '2 languages', label: 'EN / BM' },
  { value: '5 mo', label: 'capstone build' },
  { value: '2018', label: 'diploma (Mechatronics)' },
]

export default function About() {
  return (
    <Section id="about" tone="light" eyebrow="01 / About" title="Background">
      <Reveal>
        <p className="max-w-3xl text-base leading-relaxed text-base-content/75">
          Dedicated professional with a diverse background spanning trust and
          safety, content moderation, engineering, and customer service,
          combined with compliance, IT support, and precise process execution.
          Currently expanding into full-stack software development and AI/cloud
          technologies through the Certificate in AI &amp; Cloud for Construction
          programme (Gamuda Technologies x CENTEXS Sarawak), applying this
          training to a capstone platform for construction-industry compliance.
          Fluent in English and Bahasa Malaysia, with a collaborative,
          detail-oriented approach to both operational and technical work.
        </p>
      </Reveal>

      <Reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-gold/20 bg-gold/20 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-navy-800 p-5">
            <p className="font-display text-xl font-bold text-gold">{s.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-base-content/60">
              {s.label}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
