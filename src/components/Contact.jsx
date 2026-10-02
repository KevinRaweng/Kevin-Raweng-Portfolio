import Section from './Section'
import Reveal from './Reveal'

const LINKS = [
  { label: 'Email', value: 'kevinraweng9601@gmail.com', href: 'mailto:kevinraweng9601@gmail.com' },
  { label: 'Phone', value: '+6014-579-4534', href: 'tel:+60145794534' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kevinraweng', href: 'https://linkedin.com/in/kevinraweng' },
  { label: 'GitHub', value: 'github.com/KevinRaweng', href: 'https://github.com/KevinRaweng' },
]

const EXTERNAL = new Set(['LinkedIn', 'GitHub'])

export default function Contact() {
  return (
    <Section
      id="contact"
      tone="light"
      grid
      eyebrow="07 / Contact"
      title="Let's build something."
      footer={
        <div className="border-t border-gold/15 pt-6">
          <p className="font-mono text-[11px] text-base-content/40">
            © 2026 Kevin Raweng Anak Usan
          </p>
        </div>
      }
    >
      <Reveal>
        <p className="max-w-2xl text-base leading-relaxed text-base-content/75">
          Open to full-stack and junior developer opportunities, especially where
          operational discipline and new technical skills can both be put to work.
        </p>
      </Reveal>

      <Reveal className="mt-10 grid gap-px overflow-hidden border border-gold/20 bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={EXTERNAL.has(l.label) ? '_blank' : undefined}
            rel={EXTERNAL.has(l.label) ? 'noreferrer' : undefined}
            className="group bg-navy-900 p-5 transition-colors hover:bg-navy-700"
          >
            <p className="eyebrow mb-2">{l.label}</p>
            <p className="break-words text-sm text-base-content/80 group-hover:text-gold">
              {l.value}
            </p>
          </a>
        ))}
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap items-center gap-5">
        <a
          href="/Kevin_Raweng_Anak_Usan_Resume.pdf"
          download
          className="btn btn-primary btn-sm rounded-none font-mono text-xs"
        >
          Download Resume (PDF)
        </a>
        <p className="font-mono text-xs uppercase tracking-widest text-base-content/50">
          Kuching, Sarawak, Malaysia
        </p>
      </Reveal>
    </Section>
  )
}
