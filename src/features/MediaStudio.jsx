import { useEffect, useRef, useState } from 'react'
import {
  generateImage,
  startVideoGeneration,
  pollVideoUntilDone,
  fetchGenerationHistory,
  CREDITS_PER_IMAGE_GENERATION,
  CREDITS_PER_VIDEO_GENERATION,
} from '../lib/mediaGenerator'
import './styles/hub.css'

const TABS = [
  { key: 'image', label: 'Image' },
  { key: 'video', label: 'Video' },
  { key: 'history', label: 'History' },
]

export default function MediaStudio({ onNavigate }) {
  const [tab, setTab] = useState('image')

  return (
    <div className="hub-page">
      <p className="hub-eyebrow">AI STUDIO</p>
      <h2 className="hub-title">Image &amp; video generator</h2>

      <div className="hub-tabs">
        {TABS.map((t) => (
          <div
            key={t.key}
            className={`hub-tab ${tab === t.key ? 'active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </div>
        ))}
      </div>

      {tab === 'image' && <ImagePanel />}
      {tab === 'video' && <VideoPanel />}
      {tab === 'history' && <HistoryPanel />}
    </div>
  )
}

// ===========================================================================
// SHARED BITS
// ===========================================================================

function CreditNotice({ cost }) {
  return (
    <div className="hub-badge-pill" style={{ marginBottom: 12 }}>
      ⚡ Costs {cost} credits
    </div>
  )
}

function RemainingCredits({ value }) {
  if (value == null) return null
  return (
    <div style={{ fontSize: 12, color: 'var(--hub-text-muted)', marginTop: 8 }}>
      {value} credits remaining
    </div>
  )
}

function ErrorBanner({ message }) {
  if (!message) return null
  return <div className="hub-error">{message}</div>
}

function StatusBadge({ status }) {
  const meta = {
    PROCESSING: { label: 'Processing', bg: 'var(--hub-accent)' },
    SUCCESS: { label: 'Done', bg: 'var(--hub-success)' },
    FAILED: { label: 'Failed', bg: 'var(--hub-danger)' },
  }[status] || { label: status, bg: 'var(--hub-text-muted)' }

  return (
    <span
      className="hub-badge-pill"
      style={{ background: meta.bg, color: 'white', borderColor: meta.bg }}
    >
      {meta.label}
    </span>
  )
}

function formatDate(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

// ===========================================================================
// IMAGE TAB
// ===========================================================================

function ImagePanel() {
  const [prompt, setPrompt] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null) // generation object
  const [remainingCredits, setRemainingCredits] = useState(null)
  const controllerRef = useRef(null)

  useEffect(() => () => controllerRef.current?.abort(), [])

  const generate = async () => {
    const trimmed = prompt.trim()
    if (trimmed.length < 3) {
      setError('Describe what you want to see — a little more detail helps a lot.')
      return
    }
    setError(null)
    setStatus('loading')
    controllerRef.current = new AbortController()

    try {
      const { generation, remainingCredits: rc } = await generateImage(trimmed, {
        signal: controllerRef.current.signal,
      })
      setResult(generation)
      setRemainingCredits(rc ?? null)
      setStatus('done')
    } catch (err) {
      if (err.name === 'AbortError') return
      setError(err.message || 'Something went wrong generating the image. No credits were deducted.')
      setStatus('idle')
    }
  }

  const startOver = () => {
    setStatus('idle')
    setResult(null)
    setError(null)
    setPrompt('')
  }

  if (status === 'done' && result) {
    return (
      <div>
        <div className="hub-card" style={{ padding: 0, overflow: 'hidden' }}>
          <img
            src={result.resultUrl}
            alt={result.prompt}
            style={{ width: '100%', display: 'block', borderRadius: '16px 16px 0 0' }}
          />
          <div style={{ padding: 14 }}>
            <div style={{ fontSize: 13, marginBottom: 8 }}>{result.prompt}</div>
            <div className="hub-row">
              <StatusBadge status={result.status} />
              <span style={{ fontSize: 11, color: 'var(--hub-text-muted)' }}>{formatDate(result.dateCreated)}</span>
            </div>
            <RemainingCredits value={remainingCredits} />
          </div>
        </div>
        <div className="hub-row" style={{ gap: 10 }}>
          <a
            className="hub-btn"
            style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}
            href={result.resultUrl}
            download
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
          <button className="hub-btn hub-btn-ghost" style={{ flex: 1 }} onClick={startOver}>
            New image
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <CreditNotice cost={CREDITS_PER_IMAGE_GENERATION} />
      <div className="hub-card">
        <textarea
          className="hub-textarea"
          placeholder="Describe the image you want — e.g. 'a red panda studying at a library, watercolor style'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={status === 'loading'}
          rows={4}
        />
        <ErrorBanner message={error} />
        <button
          className="hub-btn"
          style={{ width: '100%', marginTop: 10 }}
          onClick={generate}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Generating…' : 'Generate image'}
        </button>
      </div>
      {status === 'loading' && (
        <div className="hub-empty">Rendering your image — this usually takes a few seconds.</div>
      )}
    </div>
  )
}

// ===========================================================================
// VIDEO TAB
// ===========================================================================

function VideoPanel() {
  const [prompt, setPrompt] = useState('')
  const [status, setStatus] = useState('idle') // idle | starting | processing | done
  const [error, setError] = useState(null)
  const [job, setJob] = useState(null) // generation object, updated as it polls
  const [remainingCredits, setRemainingCredits] = useState(null)
  const controllerRef = useRef(null)

  useEffect(() => () => controllerRef.current?.abort(), [])

  const generate = async () => {
    const trimmed = prompt.trim()
    if (trimmed.length < 3) {
      setError('Describe the video you want — a little more detail helps a lot.')
      return
    }
    setError(null)
    setStatus('starting')
    controllerRef.current = new AbortController()

    try {
      const { generation } = await startVideoGeneration(trimmed, { signal: controllerRef.current.signal })
      setJob(generation)
      setStatus('processing')

      const { generation: finalGen, remainingCredits: rc } = await pollVideoUntilDone(generation.id, {
        signal: controllerRef.current.signal,
        onTick: (g) => setJob(g),
      })

      setJob(finalGen)
      setRemainingCredits(rc ?? null)
      if (finalGen.status === 'FAILED') {
        setError(finalGen.errorMessage || 'Video generation failed. No credits were deducted.')
        setStatus('idle')
      } else {
        setStatus('done')
      }
    } catch (err) {
      if (err.name === 'AbortError') return
      setError(err.message || 'Something went wrong generating the video.')
      setStatus(job ? 'processing' : 'idle') // job may still finish server-side; don't lose it
    }
  }

  const startOver = () => {
    controllerRef.current?.abort()
    setStatus('idle')
    setJob(null)
    setError(null)
    setPrompt('')
  }

  if (status === 'done' && job?.resultUrl) {
    return (
      <div>
        <div className="hub-card" style={{ padding: 0, overflow: 'hidden' }}>
          <video
            src={job.resultUrl}
            controls
            style={{ width: '100%', display: 'block', borderRadius: '16px 16px 0 0', background: '#000' }}
          />
          <div style={{ padding: 14 }}>
            <div style={{ fontSize: 13, marginBottom: 8 }}>{job.prompt}</div>
            <div className="hub-row">
              <StatusBadge status={job.status} />
              <span style={{ fontSize: 11, color: 'var(--hub-text-muted)' }}>{formatDate(job.dateCreated)}</span>
            </div>
            <RemainingCredits value={remainingCredits} />
          </div>
        </div>
        <div className="hub-row" style={{ gap: 10 }}>
          <a
            className="hub-btn"
            style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}
            href={job.resultUrl}
            download
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
          <button className="hub-btn hub-btn-ghost" style={{ flex: 1 }} onClick={startOver}>
            New video
          </button>
        </div>
      </div>
    )
  }

  const isBusy = status === 'starting' || status === 'processing'

  return (
    <div>
      <CreditNotice cost={CREDITS_PER_VIDEO_GENERATION} />
      <div className="hub-card">
        <textarea
          className="hub-textarea"
          placeholder="Describe the video you want — e.g. 'a neon hologram of a cat driving at top speed'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isBusy}
          rows={4}
        />
        <ErrorBanner message={error} />
        <button className="hub-btn" style={{ width: '100%', marginTop: 10 }} onClick={generate} disabled={isBusy}>
          {status === 'starting' ? 'Starting…' : status === 'processing' ? 'Generating…' : 'Generate video'}
        </button>
      </div>
      {isBusy && (
        <div className="hub-empty">
          {status === 'starting'
            ? 'Starting the job…'
            : 'Your video is being generated — this can take a few minutes. Feel free to switch tabs; it keeps running.'}
        </div>
      )}
    </div>
  )
}

// ===========================================================================
// HISTORY TAB
// ===========================================================================

function HistoryPanel() {
  const [typeFilter, setTypeFilter] = useState('ALL')
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading') // loading | done | error
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    setError(null)

    fetchGenerationHistory({ type: typeFilter === 'ALL' ? undefined : typeFilter, pageSize: 30 })
      .then(({ items: fetched }) => {
        if (cancelled) return
        setItems(fetched)
        setStatus('done')
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message || 'Could not load your generation history.')
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [typeFilter])

  return (
    <div>
      <div className="hub-tabs">
        {['ALL', 'IMAGE', 'VIDEO'].map((f) => (
          <div key={f} className={`hub-tab ${typeFilter === f ? 'active' : ''}`} onClick={() => setTypeFilter(f)}>
            {f === 'ALL' ? 'All' : f === 'IMAGE' ? '🖼️ Images' : '🎬 Videos'}
          </div>
        ))}
      </div>

      {status === 'loading' && <div className="hub-empty">Loading your history…</div>}
      {status === 'error' && <ErrorBanner message={error} />}
      {status === 'done' && items.length === 0 && (
        <div className="hub-empty">No generations yet — go make something in the Image or Video tab.</div>
      )}

      {status === 'done' &&
        items.map((gen) => (
          <div key={gen.id} className="hub-list-item">
            <div className="hub-row" style={{ alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
                  {gen.generationType === 'IMAGE' ? '🖼️' : '🎬'} {gen.prompt}
                </div>
                <div style={{ fontSize: 11, color: 'var(--hub-text-muted)' }}>
                  {formatDate(gen.dateCreated)} · {gen.creditsCharged} credits
                </div>
              </div>
              <StatusBadge status={gen.status} />
            </div>
            {gen.resultUrl && gen.generationType === 'IMAGE' && (
              <img
                src={gen.resultUrl}
                alt={gen.prompt}
                style={{ width: '100%', borderRadius: 10, marginTop: 10 }}
              />
            )}
            {gen.resultUrl && gen.generationType === 'VIDEO' && (
              <video src={gen.resultUrl} controls style={{ width: '100%', borderRadius: 10, marginTop: 10 }} />
            )}
          </div>
        ))}
    </div>
  )
}
