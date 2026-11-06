import { useEffect, useRef, useState } from 'react'
import { askTutor } from '../lib/aiConversation'
import { bumpGenerations } from '../lib/activity'
import { loadState, saveState } from '../lib/localStore'
import { getPending, trackPending } from '../lib/pendingRequests'
import SaveToSolutions from './SaveToSolutions'

function restoreTutor(storageKey, initialText) {
  const saved = storageKey ? loadState(storageKey, null) : null
  if (saved && Array.isArray(saved.qa) && saved.qa.length) {
    return { topic: typeof saved.topic === 'string' ? saved.topic : initialText, qa: saved.qa }
  }
  return { topic: initialText, qa: [] }
}

// `persistKey` is opt-in (solutions studio only): the last explanation is kept
// so leaving the page doesn't lose it. The Learning Hub starts fresh as before.
export default function AITutor({ initialText = '', persistKey = '' }) {
  const storageKey = persistKey ? `tutor:${persistKey}` : null
  const restored = useRef(null)
  if (restored.current === null) restored.current = restoreTutor(storageKey, initialText)

  const [topic, setTopic] = useState(restored.current.topic)
  const [status, setStatus] = useState(() => (storageKey && getPending(storageKey) ? 'loading' : restored.current.qa.length ? 'done' : 'idle')) // idle | loading | done | error
  const [qa, setQa] = useState(restored.current.qa)
  const [error, setError] = useState(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // Came back while an answer was still on its way — wait for it.
  useEffect(() => {
    const inflight = storageKey ? getPending(storageKey) : null
    if (!inflight) return
    inflight
      .then((saved) => { if (mountedRef.current) { setQa(saved.qa); setTopic(saved.topic); setStatus('done') } })
      .catch((err) => { if (mountedRef.current) { setError(err.message || 'Something went wrong. Please try again.'); setStatus('error') } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ask = async () => {
    const trimmed = topic.trim()
    if (!trimmed) return
    setStatus('loading')
    setError(null)
    // Saved on arrival even if the student has left the page by then.
    const request = askTutor(trimmed).then(({ qa: result }) => {
      const saved = { topic: trimmed, qa: result }
      if (storageKey) saveState(storageKey, saved)
      bumpGenerations()
      return saved
    })
    if (storageKey) trackPending(storageKey, request)
    try {
      const saved = await request
      if (mountedRef.current) { setQa(saved.qa); setStatus('done') }
    } catch (err) {
      if (mountedRef.current) {
        setError(err.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
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
