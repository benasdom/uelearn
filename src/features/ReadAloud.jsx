import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Play, Pause, Volume2, VolumeX, UploadCloud, FileText, RotateCcw,
  ChevronsLeft, ChevronsRight, Gauge, X,
} from 'lucide-react'
import { extractTextFromFile, releaseOcrWorker, SUPPORTED_ACCEPT } from '../lib/fileExtract'
import { useWordReader, speechSupported } from '../lib/useWordReader'
import './styles/readaloud.css'

const MIN_WPM = 100
const MAX_WPM = 1000
const PRESETS = [200, 350, 500, 750]
const WPM_KEY = 'uel:readAloud:wpm'

function loadWpm() {
  try {
    const n = Number(localStorage.getItem(WPM_KEY))
    return n >= MIN_WPM && n <= MAX_WPM ? n : 300
  } catch { return 300 }
}

// Where the eye should land in a word (≈ a third of the way in). Highlighting
// it and pinning it to the centre line is what lets the eye stay still.
function pivotOf(word) {
  const len = word.length
  if (len <= 1) return 0
  if (len <= 5) return 1
  if (len <= 9) return 2
  if (len <= 13) return 3
  return 4
}

const WordStage = ({ word }) => {
  if (!word) return <div className="ra-stage__empty">Ready</div>
  const p = Math.min(pivotOf(word), word.length - 1)
  return (
    <div className="ra-word" aria-hidden="true">
      <span className="ra-word__pre">{word.slice(0, p)}</span>
      <span className="ra-word__pivot">{word[p]}</span>
      <span className="ra-word__post">{word.slice(p + 1)}</span>
    </div>
  )
}

const fmtTime = (secs) => {
  if (!isFinite(secs) || secs < 1) return '0:00'
  const m = Math.floor(secs / 60)
  const s = Math.round(secs % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function ReadAloud() {
  const [text, setText] = useState('')
  const [fileName, setFileName] = useState('')
  const [busy, setBusy] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)

  const [wpm, setWpm] = useState(loadWpm)
  const [muted, setMuted] = useState(true) // always starts silent; the user opts in
  const soundOk = speechSupported()

  const reader = useWordReader(text, { wpm, muted })
  const { words, index, playing, finished } = reader
  const fileRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => { try { localStorage.setItem(WPM_KEY, String(wpm)) } catch { /* noop */ } }, [wpm])
  useEffect(() => () => { releaseOcrWorker() }, [])

  const handleFile = useCallback(async (file) => {
    if (!file) return
    setError('')
    setBusy(true)
    setProgress(0)
    try {
      const extracted = await extractTextFromFile(file, setProgress)
      if (!extracted || extracted.split(/\s+/).length < 3) throw new Error('There is hardly any text in that file.')
      setFileName(file.name)
      setText(extracted)
    } catch (e) {
      setError(e?.message || 'Could not read that file.')
    } finally {
      setBusy(false)
    }
  }, [])

  const clearFile = () => {
    reader.pause()
    setText('')
    setFileName('')
    setError('')
    if (fileRef.current) fileRef.current.value = ''
  }

  const onKeyDown = (e) => {
    if (!words.length) return
    const onRange = e.target?.type === 'range'
    if (e.code === 'Space' && !['BUTTON', 'INPUT'].includes(e.target?.tagName)) {
      e.preventDefault(); reader.toggle()
    } else if (e.key === 'ArrowLeft' && !onRange) { e.preventDefault(); reader.skip(-10) }
    else if (e.key === 'ArrowRight' && !onRange) { e.preventDefault(); reader.skip(10) }
    else if (e.key.toLowerCase() === 'm' && !onRange) setMuted((m) => !m)
  }

  const remaining = useMemo(() => ((words.length - index) / wpm) * 60, [words.length, index, wpm])
  const pct = words.length > 1 ? (index / (words.length - 1)) * 100 : 0

  // ── no file yet ────────────────────────────────────────────────────────────
  if (!words.length) {
    return (
      <div className="ra-page">
        <header className="ra-head">
          <h2 className="ra-title">Read aloud</h2>
          <p className="ra-sub">Upload your notes. Words pop up one at a time, so your eyes stop travelling and your speed climbs.</p>
        </header>

        <label
          className={`ra-drop ${dragOver ? 'is-over' : ''} ${busy ? 'is-busy' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files?.[0]) }}
        >
          <input
            ref={fileRef} type="file" accept={SUPPORTED_ACCEPT} hidden disabled={busy}
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <UploadCloud size={30} strokeWidth={1.5} />
          <strong>{busy ? 'Reading your file…' : 'Choose a notes file'}</strong>
          <span>{busy ? `${Math.round(progress * 100)}%` : 'PDF, Word, text or a photo of notes · or drop it here'}</span>
          {busy && <span className="ra-drop__bar"><i style={{ width: `${Math.max(6, progress * 100)}%` }} /></span>}
        </label>

        {error && <div className="ra-error" role="alert">{error}</div>}
      </div>
    )
  }

  // ── reader ─────────────────────────────────────────────────────────────────
  return (
    <div className="ra-page" tabIndex={-1} ref={rootRef} onKeyDown={onKeyDown}>
      <div className="ra-file">
        <FileText size={15} />
        <span className="ra-file__name">{fileName}</span>
        <span className="ra-file__meta">{words.length.toLocaleString()} words</span>
        <button className="ra-icon-btn" onClick={clearFile} aria-label="Choose a different file"><X size={15} /></button>
      </div>

      <div className={`ra-stage ${playing ? 'is-playing' : ''}`} onClick={reader.toggle} role="button"
           aria-label={playing ? 'Pause' : 'Play'}>
        <span className="ra-stage__tick ra-stage__tick--top" />
        <WordStage word={playing || index > 0 || finished ? words[index] : ''} />
        <span className="ra-stage__tick ra-stage__tick--bottom" />
        {!playing && !finished && index === 0 && <div className="ra-stage__hint">Tap to start</div>}
        {finished && <div className="ra-stage__hint">Finished — tap to read again</div>}
      </div>

      <div className="ra-progress">
        <input
          type="range" min="0" max={words.length - 1} value={index}
          onChange={(e) => reader.seek(Number(e.target.value))}
          style={{ '--p': `${pct}%` }}
          aria-label="Position in the notes"
        />
        <div className="ra-progress__row">
          <span>{Math.round(pct)}%</span>
          <span>{fmtTime(remaining)} left</span>
        </div>
      </div>

      <div className="ra-controls">
        <button className="ra-ctl" onClick={() => reader.skip(-10)} aria-label="Back 10 words"><ChevronsLeft size={20} /></button>
        <button className="ra-ctl ra-ctl--main" onClick={reader.toggle} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? <Pause size={26} /> : finished ? <RotateCcw size={24} /> : <Play size={26} />}
        </button>
        <button className="ra-ctl" onClick={() => reader.skip(10)} aria-label="Forward 10 words"><ChevronsRight size={20} /></button>

        <button
          className={`ra-sound ${muted ? '' : 'is-on'}`}
          onClick={() => soundOk && setMuted((m) => !m)}
          disabled={!soundOk}
          aria-pressed={!muted}
          title={soundOk ? 'Turn the voice on or off (M)' : 'This browser cannot read aloud'}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          <span>{!soundOk ? 'No voice' : muted ? 'Sound off' : 'Sound on'}</span>
        </button>
      </div>

      <div className="ra-speed">
        <div className="ra-speed__top">
          <span className="ra-speed__label"><Gauge size={15} /> Speed</span>
          <span className="ra-speed__value"><b>{wpm}</b> words/min</span>
        </div>
        <input
          type="range" min={MIN_WPM} max={MAX_WPM} step={25} value={wpm}
          onChange={(e) => setWpm(Number(e.target.value))}
          style={{ '--p': `${((wpm - MIN_WPM) / (MAX_WPM - MIN_WPM)) * 100}%` }}
          aria-label="Reading speed in words per minute"
        />
        <div className="ra-speed__presets">
          {PRESETS.map((p) => (
            <button key={p} className={wpm === p ? 'is-active' : ''} onClick={() => setWpm(p)}>{p}</button>
          ))}
        </div>
      </div>

      <p className="ra-keys">Space play/pause · ← → jump 10 words · M sound</p>
    </div>
  )
}
