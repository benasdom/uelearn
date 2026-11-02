import { useEffect, useRef, useState } from 'react'
import { askChat } from '../lib/aiConversation'
import { bumpGenerations } from '../lib/activity'
import { loadState, saveState, removeState } from '../lib/localStore'
import { getPending, trackPending } from '../lib/pendingRequests'
import SaveToSolutions from './SaveToSolutions'

const MAX_SAVED_MESSAGES = 80

const isMsg = (m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string'
const capped = (list) => list.slice(-MAX_SAVED_MESSAGES)

// Rebuilds a saved conversation. A trailing user message with no reply means the
// student left before the answer arrived (and it isn't still on its way), so
// it goes back into the box to be sent again rather than hanging unanswered.
function restoreChat(storageKey) {
  if (!storageKey) return { messages: [], draft: '' }
  const saved = loadState(storageKey, [])
  const list = Array.isArray(saved) ? saved.filter(isMsg) : []
  const last = list[list.length - 1]
  if (last && last.role === 'user' && !getPending(storageKey)) {
    return { messages: list.slice(0, -1), draft: last.content }
  }
  return { messages: list, draft: '' }
}

// `persistKey` is opt-in: the solutions studio passes one so the conversation
// survives leaving the page; the general Learning Hub doesn't, and keeps its
// original start-fresh behaviour.
export default function ChatInterface({ context = '', saveTitle = 'AI chat transcript', persistKey = '' }) {
  const storageKey = persistKey ? `chat:${persistKey}` : null
  const restored = useRef(null)
  if (restored.current === null) restored.current = restoreChat(storageKey)

  const [messages, setMessages] = useState(restored.current.messages) // { role: 'user'|'assistant', content }
  const [draft, setDraft] = useState(restored.current.draft)
  const [sending, setSending] = useState(() => !!(storageKey && getPending(storageKey)))
  const [error, setError] = useState(null)
  const endRef = useRef(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // Keep the conversation on the device.
  useEffect(() => {
    if (storageKey) saveState(storageKey, capped(messages))
  }, [storageKey, messages])

  // We came back while a reply was still on its way — wait for it.
  useEffect(() => {
    const inflight = storageKey ? getPending(storageKey) : null
    if (!inflight) return
    inflight
      .then((done) => { if (mountedRef.current) setMessages(done) })
      .catch((err) => { if (mountedRef.current) setError(err.message || 'Could not get a reply. Please try again.') })
      .finally(() => { if (mountedRef.current) setSending(false) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearChat = () => {
    if (!window.confirm('Clear this conversation? This can’t be undone.')) return
    setMessages([])
    setError(null)
    if (storageKey) removeState(storageKey)
  }

  useEffect(() => {
    endRef.current?.scrollIntoView?.({ behavior: 'smooth' })
  }, [messages, sending])

  const send = async () => {
    const text = draft.trim()
    if (!text || sending) return
    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setDraft('')
    setSending(true)
    setError(null)
    // The reply is saved the moment it arrives, even if the student has left the
    // page by then — it's been paid for, so it shouldn't vanish with the screen.
    const request = askChat(next, { context }).then((reply) => {
      const done = [...next, { role: 'assistant', content: reply }]
      if (storageKey) saveState(storageKey, capped(done))
      bumpGenerations()
      return done
    })
    if (storageKey) trackPending(storageKey, request)
    try {
      const done = await request
      if (mountedRef.current) setMessages(done)
    } catch (err) {
      if (mountedRef.current) setError(err.message || 'Could not get a reply. Please try again.')
    } finally {
      if (mountedRef.current) setSending(false)
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 8 }}>
          {storageKey && (
            <button type="button" className="hub-btn hub-btn-ghost" onClick={clearChat}>Clear chat</button>
          )}
          <SaveToSolutions title={saveTitle} content={transcript} modelName="ai-chat" />
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
