import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'

const GROUPS = {
  engineering: {
    label: 'Software Engineering',
    chips: [
      { title: 'Frontend', items: ['React (Vite)', 'JSX', 'React Router', 'Hooks (useState / useEffect / useReducer)', 'Component-based UI'] },
      { title: 'Backend', items: ['Python', 'FastAPI', 'Uvicorn', 'REST API design', 'Middleware', 'CORS config'] },
      { title: 'Database', items: ['PostgreSQL', 'SQLAlchemy ORM', 'MongoDB Atlas', 'pgAdmin', 'Schema design (PK/FK, joins)'] },
      { title: 'Auth & Security', items: ['JWT auth', 'bcrypt hashing', 'RBAC', '.env / secrets management', 'Prompt-injection awareness'] },
      { title: 'Practices', items: ['Git workflow', 'Swagger / OpenAPI', 'Jupyter / Google Colab', 'Streamlit', 'Agent safety & least privilege'] },
    ],
  },
  ai: {
    label: 'AI & Data',
    chips: [
      { title: 'Generative AI & RAG', items: ['Gemini API', 'LangChain', 'Embeddings', 'Vector stores', 'RAG pipelines', 'PDF / document ingestion'] },
      { title: 'AI Agents', items: ['ReAct (Reason, Act, Observe)', 'Tool design (@tool)', 'Structured output', 'Error handling', 'Agent evaluation', 'LangSmith tracing'] },
      { title: 'Orchestration', items: ['LangGraph (StateGraph)', 'Conditional routing', 'Reducers', 'Checkpointers & thread IDs', 'Short & long-term memory', 'Multi-agent patterns', 'Human-in-the-loop', 'MCP'] },
      { title: 'Data Analysis', items: ['pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Exploratory analysis', 'Missing-data & duplicate handling'] },
      { title: 'Machine Learning', items: ['scikit-learn', 'Supervised & unsupervised', 'Classification & regression', 'Decision trees', 'Random forest', 'SVM', 'One-hot encoding', 'Feature selection & scaling', 'Hyperparameter tuning'] },
      { title: 'Model Evaluation', items: ['Train/test split', 'Accuracy / Precision / Recall / F1', 'RMSE / MAE / R²', 'Baseline models', 'Overfitting & underfitting'] },
      { title: 'Deep Learning', items: ['Neural networks', 'Backpropagation', 'Gradient descent', 'FNN / Dense', 'CNN', 'RNN', 'LSTM', 'Dropout', 'TensorFlow', 'PyTorch'] },
      { title: 'Computer Vision', items: ['OpenCV', 'Convolution & filters', 'Stride / padding / pooling', 'ReLU activation', 'Classification vs detection vs segmentation', 'Bounding boxes & confidence', 'YOLO (Ultralytics)', 'Label Studio annotation'] },
    ],
  },
  core: {
    label: 'Core Competencies',
    chips: [
      { title: 'Trust & Safety', items: ['Content Moderation', 'Policy Enforcement', 'DMCA Guidelines', 'Copyright Review', 'Compliance'] },
      { title: 'Operations', items: ['Process Execution', 'Process Documentation', 'Queue Management', 'SLA Adherence'] },
      { title: 'Technical Support', items: ['PC & Laptop Troubleshooting', 'IT Support', 'Machinery Maintenance', 'Video Editing'] },
      { title: 'Tools & Software', items: ['Microsoft Office Suite', 'Digital Marketing Tools', 'Social Media Admin'] },
      { title: 'Soft Skills', items: ['Team Collaboration', 'Escalation Resolution', 'Strategic Feedback', 'Bilingual EN/BM'] },
    ],
  },
}

export default function Skills() {
  const [tab, setTab] = useState('engineering')
  const group = GROUPS[tab]

  return (
    <Section id="skills" tone="dark" grid eyebrow="02 / Skills" title="What I bring">
      <Reveal className="mb-8">
        <div role="tablist" className="inline-flex flex-wrap border border-gold/30">
          {Object.entries(GROUPS).map(([key, g]) => (
            <button
              key={key}
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                tab === key
                  ? 'bg-gold text-navy-900'
                  : 'text-base-content/60 hover:text-gold'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        {tab !== 'core' && (
          <p className="mt-3 font-mono text-[11px] text-base-content/45">
            In progress: Certificate in AI &amp; Cloud for Construction
          </p>
        )}
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {group.chips.map((c, i) => (
          <Reveal
            key={c.title}
            style={{ transitionDelay: `${i * 45}ms` }}
            className="border border-gold/15 bg-navy-800/60 p-3.5"
          >
            <p className="eyebrow mb-3">{c.title}</p>
            <div className="flex flex-wrap gap-1.5">
              {c.items.map((item) => (
                <span
                  key={item}
                  className="border border-gold/25 bg-navy-900 px-2 py-0.5 font-mono text-[10px] text-base-content/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
