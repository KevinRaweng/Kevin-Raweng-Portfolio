import Section from './Section'
import Reveal from './Reveal'

const STACK = [
  'React (Vite)',
  'FastAPI',
  'PostgreSQL',
  'SQLAlchemy',
  'JWT',
  'bcrypt',
  'RBAC',
  'LangChain',
  'LangGraph',
  'Gemini',
  'MongoDB Atlas',
]

const FEATURES = [
  'Technical lead of a four-developer team, reviewing and merging the team\u2019s pull requests to keep the main branch release-ready',
  'NCR (Non-Conformance Report) tracking across aluminium, carpentry, and M&E subcontractors',
  'SLA timers and before/after defect verification',
  'Contractor quality-risk scoring',
  'Planned RAG chatbot for compliance queries against the Sarawak Buildings Ordinance 1994 and QLASSIC CIS 7:2021, grounded via Gemini embeddings in a MongoDB Atlas vector store',
  'Planned defect-analysis agent built on LangGraph, routing to specialist tools for classification, compliance checking and risk scoring, with inspector approval gated by human-in-the-loop',
]

export default function Capstone() {
  return (
    <Section id="capstone" tone="dark" grid eyebrow="04 / Capstone" title="Featured project">
      <Reveal>
        <div className="bracket-frame">
          <span className="bracket-extra" aria-hidden="true" />
          <div className="border border-gold/30 bg-navy-800/70 p-7 md:p-9">
            <p className="eyebrow mb-2">Technical Lead · Garuda Qualities · Certificate in AI &amp; Cloud for Construction</p>
            <h3 className="font-display text-2xl font-bold text-base-content md:text-3xl">
              Pantau AI
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-base-content/75">
              A platform for managing construction defect lifecycles between main
              contractors and specialist subcontractors in Sarawak, built to
              bring structure and accountability to a process that&apos;s
              traditionally paper-based and slow.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="border border-gold/30 px-2.5 py-1 font-mono text-[11px] text-gold"
                >
                  {s}
                </span>
              ))}
            </div>

            <ol className="mt-8 space-y-3">
              {FEATURES.map((f, i) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-base-content/80">
                  <span className="font-mono text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
