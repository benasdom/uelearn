import { useState } from 'react'
import { askTutor } from '../lib/aiConversation'
import { bumpGenerations } from '../lib/activity'
import SaveToSolutions from './SaveToSolutions'

export default function AITutor({ initialText = '' }) {
  const [topic, setTopic] = useState(initialText)
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [qa, setQa] = useState([])
  const [error, setError] = useState(null)

  const ask = async () => {
    const trimmed = topic.trim()
    if (!trimmed) return
    setStatus('loading')
    setError(null)
    try {
      const { qa: result } = await askTutor(trimmed)
      setQa(result)
      setStatus('done')
      bumpGenerations()
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const transcript = qa.map((x, i) => `${i + 1}. ${x.q}\n${x.a}`).join('\n\n')

  return (
    <div className="hub-page">
      <p className="hub-eyebrow" style={{ marginBottom: 6 }}>AI TUTOR</p>
      <div className="hub-card">
        <textarea
          className="hub-textarea"
          placeholder="What do you want explained? e.g. 'Explain normalization in databases'"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          rows={3}
        />
        <button
          className="hub-btn"
          style={{ marginTop: 10, width: '100%' }}
          onClick={ask}
          disabled={status === 'loading' || !topic.trim()}
        >
          {status === 'loading' ? 'Thinking…' : 'Explain this'}
        </button>
        {error && <div className="hub-error">{error}</div>}
      </div>

      {qa.length > 0 && (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <SaveToSolutions title={`Tutor: ${topic.slice(0, 60)}`} content={transcript} modelName="ai-tutor" />
          </div>
          {qa.map((item, i) => (
            <div className="hub-card" key={i}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.q}</div>
              <div style={{ fontSize: 13, color: 'var(--hub-text-muted)', whiteSpace: 'pre-wrap' }}>{item.a}</div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
