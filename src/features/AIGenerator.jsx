import { useEffect, useRef, useState } from 'react'
import { loadState, saveState, makeId } from '../lib/localStore'
import { initialCardState } from '../lib/spacedRepetition'
import { generateExercisesFromText } from '../lib/aiGenerator'
import { extractTextFromFile, releaseOcrWorker, classifyFile, SUPPORTED_ACCEPT } from '../lib/fileExtract'
import './styles/hub.css'

const NOTES_KEY = 'notes'
const SETS_KEY = 'mock-test-sets'
const DECKS_KEY = 'flashcard-decks'

const TYPE_META = {
  mcq: { label: 'Multiple choice', icon: '📝' },
  fillIn: { label: 'Fill in the blank', icon: '✏️' },
  flashcard: { label: 'Flashcard', icon: '🗂️' },
}

const FILE_KIND_ICON = {
  pdf: '📄',
  docx: '📝',
  'legacy-doc': '📝',
  image: '🖼️',
  text: '📃',
  unknown: '📁',
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function normalize(s) {
  return (s || '').trim().toLowerCase().replace(/\s+/g, ' ')
}

export default function AIGenerator({ initialText = '', initialSourceLabel = '', onNavigate }) {
  // ── input screen state ──
  const [sourceTab, setSourceTab] = useState('paste')
  const [text, setText] = useState(initialText)
  const [sourceLabel, setSourceLabel] = useState(initialSourceLabel)
  const notes = useState(() => loadState(NOTES_KEY, []))[0]

  // ── file upload state ──
  const [files, setFiles] = useState([]) // { id, file, name, size, kind, status, progress, text, error }
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)
  const processingRef = useRef(false)
  const appendedIdsRef = useRef(new Set())

  const [status, setStatus] = useState('idle') // idle | loading | reviewing | summary | saved
  const [progress, setProgress] = useState(null)
  const [error, setError] = useState(null)
  const [partialErrors, setPartialErrors] = useState([])
  const [remainingCredits, setRemainingCredits] = useState(null)

  // ── review flow state ──
  const [items, setItems] = useState([]) // normalized exercises + runtime answer state
  const [index, setIndex] = useState(0)

  // ── save step state ──
  const [testTitle, setTestTitle] = useState('')
  const [deckName, setDeckName] = useState('')
  const [savedInto, setSavedInto] = useState({ testId: null, deckId: null, questionCount: 0, cardCount: 0 })

  const pickNote = (note) => {
    setText(note.body)
    setSourceLabel(note.title)
    setSourceTab('paste')
  }

  const editText = (value) => {
    setText(value)
    setSourceLabel('')
  }

  // Release the persistent OCR worker when the generator is left, not on
  // every render — it's expensive to spin back up so it's kept alive while
  // this screen is mounted.
  useEffect(() => () => { releaseOcrWorker() }, [])

  // Sequential extraction queue: processingRef is a plain ref (not state) so
  // the guard is synchronous and immune to React StrictMode's double-invoke
  // of effects in development — without it, two files could start
  // extracting (and two OCR workers spin up) at once.
  useEffect(() => {
    if (processingRef.current) return
    const next = files.find((f) => f.status === 'pending')
    if (!next) return

    processingRef.current = true
    setFiles((prev) => prev.map((f) => (f.id === next.id ? { ...f, status: 'extracting', progress: 0 } : f)))

    extractTextFromFile(next.file, (p) => {
      setFiles((prev) => prev.map((f) => (f.id === next.id ? { ...f, progress: p } : f)))
    })
      .then((extracted) => {
        setFiles((prev) => prev.map((f) => (f.id === next.id ? { ...f, status: 'done', progress: 1, text: extracted } : f)))
      })
      .catch((err) => {
        setFiles((prev) => prev.map((f) => (f.id === next.id ? { ...f, status: 'error', error: err.message } : f)))
      })
      .finally(() => {
        processingRef.current = false
      })
  }, [files])

  // As files finish extracting, fold their text into the shared input box
  // (append-only, each file exactly once) so the AI Generator's existing
  // paste/generate pipeline needs no changes to work with uploads.
  useEffect(() => {
    const toAppend = files.filter((f) => f.status === 'done' && !appendedIdsRef.current.has(f.id))
    if (toAppend.length === 0) return

    toAppend.forEach((f) => appendedIdsRef.current.add(f.id))
    const pieces = toAppend.map((f) => (files.length > 1 ? `--- ${f.name} ---\n${f.text}` : f.text))
    setText((prev) => (prev.trim() ? `${prev}\n\n${pieces.join('\n\n')}` : pieces.join('\n\n')))
  }, [files])

  const handleFilesSelected = (fileList) => {
    const incoming = Array.from(fileList || [])
    if (incoming.length === 0) return
    const entries = incoming.map((file) => ({
      id: makeId(),
      file,
      name: file.name,
      size: file.size,
      kind: classifyFile(file),
      status: 'pending',
      progress: 0,
      text: '',
      error: null,
    }))
    setFiles((prev) => [...prev, ...entries])
  }

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const retryFile = (id) => {
    setFiles((prev) => prev.map((f) => (f.id === id ? { ...f, status: 'pending', progress: 0, error: null } : f)))
  }

  const generate = async () => {
    const trimmed = text.trim()
    if (trimmed.length < 10) {
      setError('Add a bit more text — at least a sentence or two — to generate questions from.')
      return
    }
    setError(null)
    setPartialErrors([])
    setStatus('loading')
    setProgress({ done: 0, total: 1 })

    try {
      const { exercises, remainingCredits: rc, partialErrors: errs } = await generateExercisesFromText(trimmed, {
        onProgress: (done, total) => setProgress({ done, total }),
      })

      if (exercises.length === 0) {
        setError('No questions came back for this text. Try pasting a longer or more detailed passage.')
        setStatus('idle')
        return
      }

      setItems(
        exercises.map((e) => ({
          ...e,
          keep: true,
          selectedOption: null,
          textAnswer: '',
          checked: false,
          isCorrect: null,
          graded: null,
          showHint: false,
        }))
      )
      setIndex(0)
      setRemainingCredits(rc ?? null)
      setPartialErrors(errs || [])

      const mcqCount = exercises.filter((e) => e.kind === 'mcq' || e.kind === 'fillIn').length
      const cardCount = exercises.filter((e) => e.kind === 'flashcard').length
      setTestTitle(mcqCount ? `AI quiz — ${new Date().toLocaleDateString()}` : '')
      setDeckName(cardCount ? `AI flashcards — ${new Date().toLocaleDateString()}` : '')

      setStatus('reviewing')
    } catch (err) {
      setError(err.message || 'Something went wrong generating questions.')
      setStatus('idle')
    }
  }

  const updateItem = (id, patch) => {
    setItems((prev) => prev.map((it) => (it._id === id ? { ...it, ...patch } : it)))
  }

  const goNext = () => {
    if (index >= items.length - 1) {
      setStatus('summary')
    } else {
      setIndex((i) => i + 1)
    }
  }
  const goBack = () => setIndex((i) => Math.max(0, i - 1))

  const selectedQuizItems = items.filter((r) => r.keep && (r.kind === 'mcq' || r.kind === 'fillIn'))
  const selectedCards = items.filter((r) => r.keep && r.kind === 'flashcard')

  const saveSelected = () => {
    let testId = null
    let deckId = null

    if (selectedQuizItems.length > 0) {
      const questions = selectedQuizItems.map((r) =>
        r.kind === 'mcq'
          ? { id: makeId(), type: 'mcq', q: r.q, options: r.options, correct: r.correct }
          : { id: makeId(), type: 'fillIn', q: r.q, correctAnswer: r.correctAnswer, hints: r.hints || [] }
      )
      const sets = loadState(SETS_KEY, [])
      testId = makeId()
      const title = testTitle.trim() || `AI quiz — ${new Date().toLocaleDateString()}`
      saveState(SETS_KEY, [{ id: testId, title, questions, source: 'ai' }, ...sets])
    }

    if (selectedCards.length > 0) {
      const cards = selectedCards.map((r) => ({ id: makeId(), front: r.front, back: r.back, srs: initialCardState() }))
      const decks = loadState(DECKS_KEY, [])
      deckId = makeId()
      const name = deckName.trim() || `AI flashcards — ${new Date().toLocaleDateString()}`
      saveState(DECKS_KEY, [{ id: deckId, name, cards, source: 'ai' }, ...decks])
    }

    setSavedInto({ testId, deckId, questionCount: selectedQuizItems.length, cardCount: selectedCards.length })
    setStatus('saved')
  }

  const startOver = () => {
    setStatus('idle')
    setItems([])
    setIndex(0)
    setError(null)
    setPartialErrors([])
    setText('')
    setSourceLabel('')
  }

  // ===================================================================
  // SAVED SCREEN
  // ===================================================================
  if (status === 'saved') {
    return (
      <div className="hub-page">
        <p className="hub-eyebrow">AI GENERATOR</p>
        <h2 className="hub-title">Saved ✅</h2>
        <div className="hub-card">
          {savedInto.testId && (
            <div className="hub-row" style={{ marginBottom: savedInto.deckId ? 10 : 0 }}>
              <div style={{ fontSize: 13 }}>{savedInto.questionCount} question{savedInto.questionCount !== 1 ? 's' : ''} saved to Mock Tests</div>
              {onNavigate && <button className="hub-btn hub-btn-ghost" onClick={() => onNavigate('mocktest')}>Open →</button>}
            </div>
          )}
          {savedInto.deckId && (
            <div className="hub-row">
              <div style={{ fontSize: 13 }}>{savedInto.cardCount} card{savedInto.cardCount !== 1 ? 's' : ''} saved to Flashcards</div>
              {onNavigate && <button className="hub-btn hub-btn-ghost" onClick={() => onNavigate('flashcards')}>Open →</button>}
            </div>
          )}
        </div>
        <button className="hub-btn" onClick={startOver}>Generate more</button>
      </div>
    )
  }

  // ===================================================================
  // SUMMARY SCREEN
  // ===================================================================
  if (status === 'summary') {
    const quizItems = items.filter((it) => it.kind === 'mcq' || it.kind === 'fillIn')
    const correctCount = quizItems.filter((it) => it.isCorrect).length
    const cardItems = items.filter((it) => it.kind === 'flashcard')
    const knewCount = cardItems.filter((it) => it.graded === 'knew').length
    const keptCount = items.filter((it) => it.keep).length
    const pct = quizItems.length > 0 ? Math.round((correctCount / quizItems.length) * 100) : null

    return (
      <div className="hub-page">
        <p className="hub-eyebrow">AI GENERATOR</p>
        <h2 className="hub-title">Results</h2>

        <div className="hub-card" style={{ textAlign: 'center' }}>
          {quizItems.length > 0 ? (
            <>
              <div className="hub-score-ring" style={{ '--pct': pct }}>
                <div className="hub-score-ring-inner">{pct}%</div>
              </div>
              <div style={{ fontWeight: 700 }}>{correctCount} / {quizItems.length} correct</div>
            </>
          ) : (
            <div style={{ padding: '10px 0', fontWeight: 700 }}>🗂️ Flashcards generated</div>
          )}
          {cardItems.length > 0 && (
            <div style={{ fontSize: 12, color: 'var(--hub-text-muted)', marginTop: quizItems.length > 0 ? 10 : 0 }}>
              {knewCount} / {cardItems.length} flashcards you already knew
            </div>
          )}
        </div>

        <div style={{ fontSize: 12, color: 'var(--hub-text-muted)', margin: '4px 0 12px' }}>
          {keptCount} of {items.length} selected to save — go back to change your picks.
        </div>

        <div className="hub-card">
          {selectedQuizItems.length > 0 && (
            <div style={{ marginBottom: selectedCards.length > 0 ? 12 : 0 }}>
              <label style={{ fontSize: 12, color: 'var(--hub-text-muted)' }}>Mock test title</label>
              <input className="hub-input" style={{ marginTop: 6 }} value={testTitle} onChange={(e) => setTestTitle(e.target.value)} />
            </div>
          )}
          {selectedCards.length > 0 && (
            <div>
              <label style={{ fontSize: 12, color: 'var(--hub-text-muted)' }}>Flashcard deck name</label>
              <input className="hub-input" style={{ marginTop: 6 }} value={deckName} onChange={(e) => setDeckName(e.target.value)} />
            </div>
          )}
          {selectedQuizItems.length === 0 && selectedCards.length === 0 && (
            <div className="hub-empty">Nothing selected — go back and turn a few items back on to save them.</div>
          )}
        </div>

        <div className="hub-row">
          <button className="hub-btn hub-btn-ghost" onClick={() => { setIndex(items.length - 1); setStatus('reviewing') }}>← Review again</button>
          <button className="hub-btn" disabled={keptCount === 0} onClick={saveSelected}>Save {keptCount} item{keptCount !== 1 ? 's' : ''}</button>
        </div>
      </div>
    )
  }

  // ===================================================================
  // REVIEWING SCREEN — one answerable card at a time
  // ===================================================================
  if (status === 'reviewing') {
    const item = items[index]
    if (!item) return null

    const quizSoFar = items.slice(0, index + 1).filter((it) => it.kind === 'mcq' || it.kind === 'fillIn')
    const answeredSoFar = quizSoFar.filter((it) => it.checked)
    const correctSoFar = quizSoFar.filter((it) => it.isCorrect).length
    const meta = TYPE_META[item.kind]
    const canAdvance = item.kind === 'flashcard' ? !!item.graded : item.checked

    return (
      <div className="hub-page">
        <div className="hub-row" style={{ marginBottom: 10 }}>
          <button
            className="hub-btn hub-btn-ghost"
            onClick={() => { if (confirm('Discard this generation and start over?')) startOver() }}
          >
            ✕ Exit
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {answeredSoFar.length > 0 && (
              <span className="hub-badge-pill">✓ {correctSoFar}/{answeredSoFar.length}</span>
            )}
            <span style={{ fontSize: 12, color: 'var(--hub-text-muted)' }}>{index + 1} / {items.length}</span>
          </div>
        </div>

        <div className="hub-progress-track" style={{ marginBottom: 16 }}>
          <div className="hub-progress-fill" style={{ width: `${((index + 1) / items.length) * 100}%` }} />
        </div>

        <div className="hub-card">
          <div className="hub-row" style={{ alignItems: 'flex-start', marginBottom: 10 }}>
            <span className="hub-badge-pill">{meta.icon} {meta.label}</span>
            <label className="hub-switch" title="Save this one" onClick={(e) => e.stopPropagation()}>
              <input type="checkbox" checked={item.keep} onChange={() => updateItem(item._id, { keep: !item.keep })} />
              <span className="hub-switch-track" />
            </label>
          </div>

          {item.kind === 'flashcard' ? (
            <FlashcardCard item={item} onReveal={() => updateItem(item._id, { checked: true })} />
          ) : item.kind === 'mcq' ? (
            <McqCard
              item={item}
              onSelect={(i) => {
                if (item.checked) return
                updateItem(item._id, { selectedOption: i, checked: true, isCorrect: i === item.correct })
              }}
            />
          ) : (
            <FillInCard
              item={item}
              onChangeAnswer={(v) => updateItem(item._id, { textAnswer: v })}
              onToggleHint={() => updateItem(item._id, { showHint: !item.showHint })}
              onSubmit={() => {
                if (item.checked || !item.textAnswer.trim()) return
                updateItem(item._id, { checked: true, isCorrect: normalize(item.textAnswer) === normalize(item.correctAnswer) })
              }}
            />
          )}
        </div>

        <div className="hub-row" style={{ marginTop: 12 }}>
          <button className="hub-btn hub-btn-ghost" disabled={index === 0} onClick={goBack}>← Back</button>
          {(item.kind !== 'flashcard' || item.graded) && (
            <button className="hub-btn" disabled={!canAdvance} onClick={goNext}>
              {index === items.length - 1 ? 'See results' : 'Next →'}
            </button>
          )}
        </div>

        {item.kind === 'flashcard' && item.checked && !item.graded && (
          <div className="hub-grade-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <button className="hub-grade-btn" data-grade="0" onClick={() => { updateItem(item._id, { graded: 'review' }); goNext() }}>Need review</button>
            <button className="hub-grade-btn" data-grade="3" onClick={() => { updateItem(item._id, { graded: 'knew' }); goNext() }}>I knew this</button>
          </div>
        )}
      </div>
    )
  }

  // ===================================================================
  // INPUT SCREEN
  // ===================================================================
  return (
    <div className="hub-page">
      <p className="hub-eyebrow">NEW</p>
      <h2 className="hub-title">AI Generator</h2>
      <p style={{ fontSize: 13, color: 'var(--hub-text-muted)', marginTop: -10, marginBottom: 16 }}>
        Paste notes, upload a PDF/Word doc/image, or pick a saved note — get multiple-choice, fill-in-the-blank, and flashcard questions generated automatically.
      </p>

      <div className="hub-tabs">
        <button className={`hub-tab ${sourceTab === 'paste' ? 'active' : ''}`} onClick={() => setSourceTab('paste')}>Paste text</button>
        <button className={`hub-tab ${sourceTab === 'upload' ? 'active' : ''}`} onClick={() => setSourceTab('upload')}>Upload file</button>
        {notes.length > 0 && (
          <button className={`hub-tab ${sourceTab === 'notes' ? 'active' : ''}`} onClick={() => setSourceTab('notes')}>From a note</button>
        )}
      </div>

      {sourceTab === 'notes' ? (
        <>
          {notes.map((n) => (
            <div key={n.id} className="hub-list-item hub-row" style={{ cursor: 'pointer' }} onClick={() => pickNote(n)}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{n.title}</div>
                <div style={{ fontSize: 11, color: 'var(--hub-text-muted)' }}>{n.body.slice(0, 60)}{n.body.length > 60 ? '…' : ''}</div>
              </div>
              <span className="hub-badge-pill">Use →</span>
            </div>
          ))}
        </>
      ) : sourceTab === 'upload' ? (
        <>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={SUPPORTED_ACCEPT}
            style={{ display: 'none' }}
            onChange={(e) => { handleFilesSelected(e.target.files); e.target.value = '' }}
          />
          <div
            className={`hub-dropzone ${dragOver ? 'is-dragover' : ''}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragOver(false)
              handleFilesSelected(e.dataTransfer.files)
            }}
          >
            <div style={{ fontSize: 28 }}>📤</div>
            <div style={{ fontWeight: 700, marginTop: 6 }}>Drop files here or click to browse</div>
            <div style={{ fontSize: 12, color: 'var(--hub-text-muted)', marginTop: 4 }}>
              PDF, Word (.docx), images (PNG/JPG), or plain text — up to 25MB each
            </div>
          </div>

          {files.length > 0 && (
            <div style={{ marginTop: 12 }}>
              {files.map((f) => (
                <div key={f.id} className="hub-list-item">
                  <div className="hub-row" style={{ alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: 18 }}>{FILE_KIND_ICON[f.kind] || FILE_KIND_ICON.unknown}</span>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--hub-text-muted)' }}>{formatBytes(f.size)}</div>

                        {(f.status === 'pending' || f.status === 'extracting') && (
                          <div style={{ marginTop: 6 }}>
                            <div className="hub-progress-track">
                              <div className="hub-progress-fill" style={{ width: `${Math.max(6, Math.round(f.progress * 100))}%` }} />
                            </div>
                            <div style={{ fontSize: 11, color: 'var(--hub-text-muted)', marginTop: 4 }}>
                              {f.kind === 'image' ? 'Reading text (OCR)…' : 'Extracting text…'} {Math.round(f.progress * 100)}%
                            </div>
                          </div>
                        )}
                        {f.status === 'done' && (
                          <div style={{ fontSize: 11, color: 'var(--hub-success)', marginTop: 4 }}>
                            ✅ Added {f.text.length.toLocaleString()} characters to the text below
                          </div>
                        )}
                        {f.status === 'error' && (
                          <div style={{ fontSize: 11, color: 'var(--hub-danger)', marginTop: 4 }}>
                            ⚠️ {f.error} <button className="hub-btn hub-btn-ghost" style={{ padding: '2px 8px', fontSize: 11, marginLeft: 4 }} onClick={() => retryFile(f.id)}>Retry</button>
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="hub-btn hub-btn-danger" style={{ padding: '6px 10px' }} onClick={() => removeFile(f.id)}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {text.trim() && (
            <button className="hub-btn hub-btn-ghost" style={{ marginTop: 4, width: '100%' }} onClick={() => setSourceTab('paste')}>
              Review extracted text →
            </button>
          )}
        </>
      ) : (
        <>
          {sourceLabel && (
            <div style={{ fontSize: 11, color: 'var(--hub-text-muted)', marginBottom: 6 }}>From: {sourceLabel}</div>
          )}
          <textarea
            className="hub-textarea"
            style={{ minHeight: 160 }}
            placeholder="Paste a paragraph, chapter summary, or lecture notes here…"
            value={text}
            onChange={(e) => editText(e.target.value)}
          />
        </>
      )}

      {error && <div className="hub-error">{error}</div>}
      {partialErrors.length > 0 && status === 'idle' && (
        <div className="hub-error">Some of the text couldn't be processed — try shortening it.</div>
      )}

      <button
        className="hub-btn"
        style={{ marginTop: 14, width: '100%' }}
        disabled={status === 'loading' || text.trim().length < 10}
        onClick={generate}
      >
        {status === 'loading'
          ? progress && progress.total > 1
            ? `Generating… (${progress.done}/${progress.total})`
            : 'Generating…'
          : 'Generate questions'}
      </button>

      {typeof remainingCredits === 'number' && (
        <div style={{ fontSize: 11, color: 'var(--hub-text-muted)', marginTop: 10, textAlign: 'center' }}>
          {remainingCredits} generation credit{remainingCredits !== 1 ? 's' : ''} remaining
        </div>
      )}
    </div>
  )
}

// ===================================================================
// Card renderers
// ===================================================================

function McqCard({ item, onSelect }) {
  return (
    <>
      <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>{item.q}</p>
      {item.options.map((opt, i) => {
        let cls = 'hub-answer-option'
        if (item.checked) {
          if (i === item.correct) cls += ' is-correct'
          else if (i === item.selectedOption) cls += ' is-incorrect'
        } else if (i === item.selectedOption) {
          cls += ' is-selected'
        }
        return (
          <button key={i} className={cls} disabled={item.checked} onClick={() => onSelect(i)}>
            {opt}
          </button>
        )
      })}
      {item.checked && item.explanation && (
        <div className={`hub-result-banner ${item.isCorrect ? 'is-correct' : 'is-incorrect'}`}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.isCorrect ? '✅ Correct' : '❌ Not quite'}</div>
          <div style={{ color: 'var(--hub-text-muted)' }}>{item.explanation}</div>
        </div>
      )}
    </>
  )
}

function FillInCard({ item, onChangeAnswer, onToggleHint, onSubmit }) {
  return (
    <>
      <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>{item.q}</p>
      <input
        className="hub-input"
        type="text"
        placeholder="Type your answer…"
        value={item.textAnswer}
        disabled={item.checked}
        onChange={(e) => onChangeAnswer(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onSubmit() }}
      />

      {item.hints?.length > 0 && !item.checked && (
        <div style={{ marginTop: 8 }}>
          {!item.showHint ? (
            <button className="hub-btn hub-btn-ghost" style={{ fontSize: 12 }} onClick={onToggleHint}>💡 Show hint</button>
          ) : (
            <div style={{ fontSize: 12, color: 'var(--hub-text-muted)' }}>{item.hints.join(' · ')}</div>
          )}
        </div>
      )}

      {item.checked && (
        <div className={`hub-result-banner ${item.isCorrect ? 'is-correct' : 'is-incorrect'}`}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.isCorrect ? '✅ Correct' : '❌ Not quite'}</div>
          {!item.isCorrect && <div>Correct answer: {item.correctAnswer}</div>}
          {item.explanation && <div style={{ color: 'var(--hub-text-muted)', marginTop: 4 }}>{item.explanation}</div>}
        </div>
      )}

      {!item.checked && (
        <button className="hub-btn" style={{ marginTop: 10 }} disabled={!item.textAnswer.trim()} onClick={onSubmit}>
          Check answer
        </button>
      )}
    </>
  )
}

function FlashcardCard({ item, onReveal }) {
  return (
    <>
      <div className="hub-flashcard" style={{ background: 'var(--hub-surface-2)', borderRadius: 14 }} onClick={() => !item.checked && onReveal()}>
        {item.checked ? item.back : item.front}
      </div>
      <div className="hub-empty" style={{ padding: '8px 0' }}>
        {item.checked ? 'How well did you know this?' : 'Tap the card to reveal the answer'}
      </div>
    </>
  )
}
