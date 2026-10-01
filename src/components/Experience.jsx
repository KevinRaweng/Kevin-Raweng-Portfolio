import Section from './Section'
import Reveal from './Reveal'

const ENTRIES = [
  {
    company: 'Accenture',
    location: 'Kuala Lumpur',
    role: 'Trust and Safety Associate',
    dates: 'Apr 2024 – Mar 2026',
    bullets: [
      'Promoted to Tier 2 Support Agent within one year, guiding and supporting Tier 1 staff.',
      'Managed high-priority queues for a major video streaming client, executing urgent livestream takedowns under a strict 15-minute SLA.',
      'Evaluated complex channel termination appeals and processed copyright takedowns per DMCA guidelines.',
    ],
  },
  {
    company: 'Cognizant',
    location: 'Kuala Lumpur',
    role: 'Process Executive',
    dates: 'Sep 2022 – Sep 2023',
    bullets: [
      'Moderated online content to ensure strict adherence to compliance and quality standards.',
      'Fact-checked digital materials, consistently achieving 98% accuracy.',
      'Resolved escalated cases, improving overall turnaround time by 15%.',
    ],
  },
  {
    company: 'ALC Tech (M) Sdn Bhd',
    location: 'Kepong, Kuala Lumpur',
    role: 'Assistant Engineer',
    dates: 'Oct 2021 – Aug 2022',
    bullets: [
      'Performed regular maintenance and troubleshooting repairs on company machinery.',
      'Provided comprehensive IT troubleshooting and technical support to staff.',
    ],
  },
  {
    company: 'Grab',
    location: 'Cyberjaya, Selangor',
    role: 'Driver',
    dates: 'Aug 2018 – Mar 2019',
    bullets: [
      'Provided safe, reliable, efficient transport services with high customer satisfaction.',
    ],
  },
  {
    company: 'Starbucks Coffee',
    location: 'Kajang, Selangor',
    role: 'Barista',
    dates: 'Mar 2018 – Jul 2018',
    bullets: [
      'Served customers efficiently as both barista and cashier during high-volume shifts.',
    ],
  },
  {
    company: 'KESM Industries Berhad',
    location: 'Petaling Jaya, Selangor',
    role: 'Technician (Internship)',
    dates: 'Jul 2017 – Nov 2017',
    bullets: ['Repaired and meticulously inspected electronic boards for defects.'],
  },
]

export default function Experience() {
  return (
    <Section id="experience" tone="light" eyebrow="03 / Experience" title="Where I've worked">
      <div className="relative ml-3 border-l border-gold/25 pl-8">
        {ENTRIES.map((e, i) => (
          <Reveal
            key={e.company + e.dates}
            style={{ transitionDelay: `${i * 40}ms` }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 border border-gold bg-navy-800" />
            <p className="font-mono text-[11px] uppercase tracking-widest text-gold">
              {e.dates}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-base-content">
              {e.role}
            </h3>
            <p className="font-mono text-xs text-base-content/60">
              {e.company}, {e.location}
            </p>
            <ul className="mt-3 space-y-1.5">
              {e.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-4 text-sm leading-relaxed text-base-content/75 before:absolute before:left-0 before:text-gold before:content-['·']"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
