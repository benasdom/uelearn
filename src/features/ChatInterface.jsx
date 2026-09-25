import { useEffect, useRef, useState } from 'react'
import { askChat } from '../lib/aiConversation'
import { bumpGenerations } from '../lib/activity'
import SaveToSolutions from './SaveToSolutions'

export default function ChatInterface() {
  const [messages, setMessages] = useState([]) // { role: 'user'|'assistant', content }
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, sending])

  const send = async () => {
    const text = draft.trim()
    if (!text || sending) return
    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setDraft('')
    setSending(true)
    setError(null)
    try {
      const reply = await askChat(next)
      setMessages([...next, { role: 'assistant', content: reply }])
      bumpGenerations()
    } catch (err) {
      setError(err.message || 'Could not get a reply. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const transcript = messages.map((m) => `${m.role === 'user' ? 'You' : 'Tutor'}: ${m.content}`).join('\n\n')

  return (
    <div className="hub-page hub-page--chat">
      <p className="hub-eyebrow" style={{ marginBottom: 6 }}>AI CHAT</p>

      {messages.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
          <SaveToSolutions title="AI chat transcript" content={transcript} modelName="ai-chat" />
        </div>
      )}

      <div className="hub-chat-scroll">
        {messages.length === 0 && (
          <div className="hub-empty">Ask anything about your course — this stays a normal conversation, so you can follow up.</div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`hub-chat-bubble hub-chat-bubble--${m.role}`}>
            {m.content}
          </div>
        ))}
        {sending && <div className="hub-chat-bubble hub-chat-bubble--assistant hub-chat-bubble--typing">…</div>}
        <div ref={endRef} />
      </div>

      {error && <div className="hub-error">{error}</div>}

      <div className="hub-chat-input-row">
        <textarea
          className="hub-textarea"
          placeholder="Type a message…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
        />
        <button className="hub-btn" onClick={send} disabled={sending || !draft.trim()}>Send</button>
      </div>
    </div>
  )
}
