import { useScrollReveal } from '../hooks/useScrollReveal'

// Wraps content in a fade + slight upward motion on scroll into view.
export default function Reveal({ as: Tag = 'div', className = '', style, children }) {
  const [ref, isVisible] = useScrollReveal()
  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
