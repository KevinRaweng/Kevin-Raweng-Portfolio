import Section from './Section'
import Reveal from './Reveal'

const PROJECTS = [
  {
    name: 'Defect Detection',
    context: 'Computer-vision module · Pantau AI backend',
    status: 'Integrated',
    summary:
      'A trained YOLO checkpoint that reads site photos submitted by subcontractors and returns the defects it finds, their location in the frame, and a severity assessment, replacing an earlier mock-analysis stub with real inference.',
    classesLabel: 'Detected classes',
    classes: ['crack', 'abscission', 'bulge', 'corrosion', 'leakage'],
    highlights: [
      'Detections map onto the four-level severity scale the rest of the platform already uses, with the worst detection setting the overall reading.',
      'Weights load once at application startup rather than per request, so inference does not re-read the checkpoint on every upload.',
      'Class names are verified against the checkpoint at startup, so a mismatched weights file fails loudly instead of silently mislabelling every prediction.',
      'An inspector can override the model’s severity through a verification endpoint, keeping a human in the loop on the call that matters.',
    ],
    stack: ['Ultralytics YOLO', 'Pillow', 'FastAPI', 'PostgreSQL', 'Python'],
  },
  {
    name: 'PPE Compliance Detection',
    context: 'Course project · Computer Vision, Week 15',
    status: 'Course project',
    summary:
      'Annotating a construction safety dataset by hand and training a YOLO detector to find protective equipment in site photos: the full annotation → training → inference pipeline, end to end.',
    classesLabel: 'Annotated classes',
    classes: ['helmet', 'vest', 'gloves'],
    highlights: [
      'Bounding-box annotation in Label Studio, exported as a YOLO dataset of images, normalised label files and a class mapping.',
      'Object detection rather than plain classification: every annotation carries both what the object is and where it sits in the frame.',
      'The model learns to recognise equipment from labelled examples instead of hand-written rules about colour or shape.',
      'Training loop (predict → compare against labels → compute loss → update weights) kept distinct from inference on unseen images.',
    ],
    stack: ['Ultralytics YOLO', 'Label Studio', 'Python'],
  },
]

export default function Projects() {
  return (
    <Section id="projects" tone="light" eyebrow="05 / Projects" title="Things I've built">
      <div className="space-y-5">
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.name}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="border border-gold/25 bg-navy-900/50 p-5 md:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="eyebrow mb-2">{p.context}</p>
                <h3 className="font-display text-xl font-bold text-base-content md:text-2xl">
                  {p.name}
                </h3>
              </div>
              <span className="border border-gold/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold">
                {p.status}
              </span>
            </div>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-base-content/75">
              {p.summary}
            </p>


            <div className="mt-5">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-base-content/45">
                {p.classesLabel}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.classes.map((c) => (
                  <span
                    key={c}
                    className="border border-gold/40 px-2 py-0.5 font-mono text-[10px] text-gold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <ul className="mt-5 space-y-2">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="relative max-w-3xl pl-4 text-sm leading-relaxed text-base-content/75 before:absolute before:left-0 before:text-gold before:content-['·']"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-gold/20 bg-navy-800 px-2 py-0.5 font-mono text-[10px] text-base-content/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
