import { useEffect, useRef, useState } from 'react'
import { generatePodcastScript } from '../lib/aiConversation'
import { bumpGenerations } from '../lib/activity'
import { isSpeechSupported } from '../lib/textToSpeech'
import SaveToSolutions from './SaveToSolutions'

function pickTwoVoices() {
  if (!isSpeechSupported()) return [null, null]
  const voices = window.speechSynthesis.getVoices()
  const english = voices.filter((v) => v.lang?.startsWith('en'))
  const pool = english.length >= 2 ? english : voices
  if (pool.length === 0) return [null, null]
  // Prefer two voices that differ (by name) so the two hosts sound distinct.
  const a = pool[0]
  const b = pool.find((v) => v.name !== a.name) || pool[0]
  return [a, b]
}

export default function PodcastStudio() {
  const [topic, setTopic] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | ready | error
  const [lines, setLines] = useState([])
  const [error, setError] = useState(null)
  const [playingIdx, setPlayingIdx] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)
  const voicesRef = useRef([null, null])
  const stopRef = useRef(false)

  useEffect(() => {
    if (!isSpeechSupported()) return
    const load = () => { voicesRef.current = pickTwoVoices() }
    load()
    window.speechSynthesis.onvoiceschanged = load
    return () => { window.speechSynthesis.onvoiceschanged = null }
  }, [])

  const generate = async () => {
    const trimmed = topic.trim()
    if (!trimmed) return
    setStatus('loading')
    setError(null)
    setLines([])
    try {
      const script = await generatePodcastScript(trimmed)
      setLines(script)
      setStatus('ready')
      bumpGenerations()
    } catch (err) {
      setError(err.message || 'Could not script this episode.')
      setStatus('error')
    }
  }

  const stopPlayback = () => {
    stopRef.current = true
    if (isSpeechSupported()) window.speechSynthesis.cancel()
    setIsPlaying(false)
    setPlayingIdx(-1)
  }

  const play = async () => {
    if (!isSpeechSupported() || lines.length === 0) return
    stopRef.current = false
    setIsPlaying(true)
    for (let i = 0; i < lines.length; i++) {
      if (stopRef.current) break
      setPlayingIdx(i)
      const voice = lines[i].speaker === 'Host A' ? voicesRef.current[0] : voicesRef.current[1]
      await new Promise((resolve) => {
        const utter = new SpeechSynthesisUtterance(lines[i].text)
        if (voice) utter.voice = voice
        utter.pitch = lines[i].speaker === 'Host A' ? 1 : 0.85
        utter.onend = resolve
        utter.onerror = resolve
        window.speechSynthesis.speak(utter)
      })
    }
    setIsPlaying(false)
    setPlayingIdx(-1)
  }

  const script = lines.map((l) => `${l.speaker}: ${l.text}`).join('\n\n')

  return (
    <div className="hub-page">
      <p className="hub-eyebrow" style={{ marginBottom: 6 }}>CREATE PODCAST CONVERSATION</p>
      <div className="hub-card">
        <textarea
          className="hub-textarea"
          placeholder="What should the two hosts discuss? e.g. 'The causes of World War I'"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          rows={3}
        />
        <button
          className="hub-btn"
          style={{ marginTop: 10, width: '100%' }}
          onClick={generate}
          disabled={status === 'loading' || !topic.trim()}
        >
          {status === 'loading' ? 'Writing script…' : 'Generate episode'}
        </button>
        {error && <div className="hub-error">{error}</div>}
        {!isSpeechSupported() && <div className="hub-error">Your browser can't read this aloud, but you can still generate and save the script.</div>}
      </div>

      {lines.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            {isSpeechSupported() && (
              isPlaying
                ? <button className="hub-btn hub-btn-danger" onClick={stopPlayback}>Stop</button>
                : <button className="hub-btn" onClick={play}>▶ Play episode</button>
            )}
            <SaveToSolutions title={`Podcast: ${topic.slice(0, 60)}`} content={script} modelName="ai-podcast-script" />
          </div>
          <div className="hub-card">
            {lines.map((l, i) => (
              <div
                key={i}
                style={{
                  padding: '8px 0',
                  borderBottom: i < lines.length - 1 ? '1px solid var(--hub-border)' : 'none',
                  opacity: playingIdx === -1 || playingIdx === i ? 1 : 0.55,
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: l.speaker === 'Host A' ? 'var(--hub-accent-2)' : 'var(--hub-accent)' }}>
                  {l.speaker}{playingIdx === i && ' · speaking'}
                </div>
                <div style={{ fontSize: 13 }}>{l.text}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
