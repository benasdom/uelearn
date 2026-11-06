import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { loadState, saveState, removeState, makeId } from '../lib/localStore'
import { initialCardState } from '../lib/spacedRepetition'
import { generateExercisesFromText, estimateRequests } from '../lib/aiGenerator'
import { extractTextFromFile, releaseOcrWorker, classifyFile, SUPPORTED_ACCEPT } from '../lib/fileExtract'
import { bumpGenerations } from '../lib/activity'
import { mistakesAsExercises, recordAnswer, subscribeMistakes } from '../lib/mistakeBank'
import { HText, OptionButton } from './highlight/Highlighter'
import { hlKeys } from './highlight/highlightStore'
import SaveToSolutions from './SaveToSolutions'
import './styles/hub.css'
import './styles/mistakes.css'

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

// mode: 'all' (default, Learning Hub behaviour) | 'quiz' (MCQ + fill-in only)
//       | 'flashcards' (cards only). Filtering happens after the backend
// answers, with a plain-language steer sent along so we don't waste calls.
const MODE_META = {
  all:        { eyebrow: 'NEW',        title: 'AI Generator',    cta: 'Generate questions', instruction: '', keep: () => true },
  quiz:       { eyebrow: 'QUIZ',       title: 'Quiz Generator',  cta: 'Generate quiz',      instruction: 'Create multiple-choice and fill-in-the-blank questions only.', keep: (e) => e.kind !== 'flashcard' },
  flashcards: { eyebrow: 'FLASHCARDS', title: 'Flashcard Maker', cta: 'Generate flashcards', instruction: 'Create flashcards only (a short front prompt and a concise back answer).', keep: (e) => e.kind === 'flashcard' },
}

// A backend exercise (or a saved mistake) plus the runtime answer state the
// review screen needs.
function toItem(e, extra = {}) {
  return {
    ...e,
    keep: true,
    selectedOption: null,
    textAnswer: '',
    checked: false,
    isCorrect: null,
    graded: null,
    showHint: false,
    ...extra,
  }
}

// `trackKey` is opt-in (the solutions studio passes it; the general Learning Hub
// doesn't). When set, the quiz: remembers wrong answers, offers to practise them
// first, and can be resumed after leaving the page.
export default function AIGenerator({ initialText = '', initialSourceLabel = '', onNavigate, mode = 'all', embedded = false, trackKey = '', trackLabel = '' }) {
  const modeMeta = MODE_META[mode] || MODE_META.all
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

  // ── Mistake tracking + resume (only when trackKey is set) ──
  const SESSION_KEY = trackKey ? `quiz-session:${mode}:${trackKey}` : null
  const roundIdRef = useRef(makeId())
  const [resumable, setResumable] = useState(() => {
    if (!SESSION_KEY) return null
    const saved = loadState(SESSION_KEY, null)
    return saved && Array.isArray(saved.items) && saved.items.length ? saved : null
  })
  const [mistakesFirst, setMistakesFirst] = useState(() => (trackKey ? loadState(`quiz-mistakes-first:${trackKey}`, true) !== false : false))
  const [mistakeTick, bumpMistakes] = useReducer((n) => n + 1, 0)
  useEffect(() => (trackKey ? subscribeMistakes(bumpMistakes) : undefined), [trackKey])
  const openMistakes = useMemo(
    () => (trackKey && mode !== 'flashcards' ? mistakesAsExercises(trackKey) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trackKey, mode, mistakeTick]
  )

  // ── review flow state ──
  const [items, setItems] = useState([]) // normalized exercises + runtime answer state
  const [index, setIndex] = useState(0)

  // ── save step state ──
  const [testTitle, setTestTitle] = useState('')
  const [deckName, setDeckName] = useState('')
  const [savedInto, setSavedInto] = useState({ testId: null, deckId: null, questionCount: 0, cardCount: 0 })

  // Keep the quiz in progress so leaving the page (or a refresh) doesn't lose it.
  useEffect(() => {
    if (!SESSION_KEY) return
    if (status === 'reviewing' || status === 'summary') {
      saveState(SESSION_KEY, { items, index, status, testTitle, deckName, roundId: roundIdRef.current, at: Date.now() })
    }
  }, [SESSION_KEY, status, items, index, testTitle, deckName])

  const requestEstimate = estimateRequests(text)

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
    setResumable(null)
    setStatus('loading')
    setProgress({ done: 0, total: 1 })

    try {
      const { exercises: all, remainingCredits: rc, partialErrors: errs } = await generateExercisesFromText(trimmed, {
        onProgress: (done, total) => setProgress({ done, total }),
        instruction: modeMeta.instruction || undefined,
      })
      const exercises = all.filter(modeMeta.keep)

      if (exercises.length === 0) {
        setError(
          all.length > 0
            ? `The AI returned ${all.length} item${all.length !== 1 ? 's' : ''}, but none were ${mode === 'flashcards' ? 'flashcards' : 'quiz questions'}. Try again or use a longer passage.`
            : 'No questions came back for this text. Try pasting a longer or more detailed passage.'
        )
        setStatus('idle')
        return
      }

      const fresh = exercises.map((e) => toItem(e))
      // Questions the student missed before go first (free to replay), and any
      // freshly generated duplicate of one of them is dropped.
      let list = fresh
      if (trackKey && mistakesFirst && openMistakes.length) {
        const stems = new Set(openMistakes.map((m) => normalize(m.q)))
        list = [
          ...openMistakes.map((m) => toItem(m, { fromMistake: true })),
          ...fresh.filter((f) => f.kind === 'flashcard' || !stems.has(normalize(f.q))),
        ]
      }
      roundIdRef.current = makeId()
      setItems(list)
      setIndex(0)
      setRemainingCredits(rc ?? null)
      setPartialErrors(errs || [])

      const mcqCount = list.filter((e) => e.kind === 'mcq' || e.kind === 'fillIn').length
      const cardCount = list.filter((e) => e.kind === 'flashcard').length
      setTestTitle(mcqCount ? `AI quiz — ${new Date().toLocaleDateString()}` : '')
      setDeckName(cardCount ? `AI flashcards — ${new Date().toLocaleDateString()}` : '')

      setStatus('reviewing')
      bumpGenerations()
    } catch (err) {
      setError(err.message || 'Something went wrong generating questions.')
      setStatus('idle')
    }
  }

  const updateItem = (id, patch) => {
    setItems((prev) => prev.map((it) => (it._id === id ? { ...it, ...patch } : it)))
  }

  // Record one answer in the mistake bank (no-op unless tracking is on).
  const track = (item, ok) => {
    if (!trackKey || (item.kind !== 'mcq' && item.kind !== 'fillIn')) return
    recordAnswer({ key: trackKey, label: trackLabel }, item, ok, roundIdRef.current)
  }

  // A quiz made purely of the student's saved mistakes — free, no credits.
  const practiseMistakes = () => {
    if (!openMistakes.length) return
    roundIdRef.current = makeId()
    setResumable(null)
    setError(null)
    setPartialErrors([])
    setItems(openMistakes.map((m) => toItem(m, { fromMistake: true })))
    setIndex(0)
    setTestTitle(`${trackLabel || 'Course'} — mistakes ${new Date().toLocaleDateString()}`)
    setDeckName('')
    setStatus('reviewing')
  }

  const resumeSession = () => {
    if (!resumable) return
    roundIdRef.current = resumable.roundId || makeId()
    setItems(resumable.items)
    setIndex(Math.min(resumable.index || 0, resumable.items.length - 1))
    setTestTitle(resumable.testTitle || '')
    setDeckName(resumable.deckName || '')
    setStatus(resumable.status === 'summary' ? 'summary' : 'reviewing')
    setResumable(null)
  }

  const discardSession = () => {
    if (SESSION_KEY) removeState(SESSION_KEY)
    setResumable(null)
  }

  const changeMistakesFirst = (v) => {
    setMistakesFirst(v)
    if (trackKey) saveState(`quiz-mistakes-first:${trackKey}`, v)
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
    if (SESSION_KEY) removeState(SESSION_KEY)
    setStatus('saved')
  }

  const startOver = () => {
    if (SESSION_KEY) removeState(SESSION_KEY)
    setResumable(null)
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
    const transcript = items
      .map((it, i) => {
        if (it.kind === 'mcq') return `${i + 1}. ${it.q}\nOptions: ${it.options.join(' | ')}\nAnswer: ${it.options[it.correct]}${it.explanation ? `\n${it.explanation}` : ''}`
        if (it.kind === 'fillIn') return `${i + 1}. ${it.q}\nAnswer: ${it.correctAnswer}${it.explanation ? `\n${it.explanation}` : ''}`
        return `${i + 1}. ${it.front}\n${it.back}`
      })
      .join('\n\n')

    return (
      <div className="hub-page">
        <p className="hub-eyebrow">AI GENERATOR</p>
        <div className="hub-row" style={{ alignItems: 'flex-start' }}>
          <h2 className="hub-title">Results</h2>
          <SaveToSolutions title={sourceLabel || `AI generator — ${new Date().toLocaleDateString()}`} content={transcript} modelName="ai-generator" />
        </div>

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

        {trackKey && quizItems.length > 0 && (
          <div className="gm-bank" role="status" style={{ marginTop: 12 }}>
            <p>
              {correctCount === quizItems.length
                ? '🎉 No new mistakes this round.'
                : `🎯 ${quizItems.length - correctCount} missed question${quizItems.length - correctCount === 1 ? '' : 's'} saved — practise them first next time from the start screen.`}
            </p>
          </div>
        )}

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
            <span>
              <span className="hub-badge-pill">{meta.icon} {meta.label}</span>
              {item.fromMistake && <span className="hub-tag-missed">Missed before</span>}
            </span>
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
                track(item, i === item.correct)
              }}
            />
          ) : (
            <FillInCard
              item={item}
              onChangeAnswer={(v) => updateItem(item._id, { textAnswer: v })}
              onToggleHint={() => updateItem(item._id, { showHint: !item.showHint })}
              onSubmit={() => {
                if (item.checked || !item.textAnswer.trim()) return
                const ok = normalize(item.textAnswer) === normalize(item.correctAnswer)
                updateItem(item._id, { checked: true, isCorrect: ok })
                track(item, ok)
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
  const resumeAnswered = resumable ? resumable.items.filter((it) => it.checked).length : 0
  return (
    <div className="hub-page">
      {trackKey && resumable && (
        <div className="hub-resume" role="region" aria-label="Unfinished quiz">
          <div className="hub-resume__text">
            <strong>{resumable.status === 'summary' ? 'Your last quiz' : 'Quiz in progress'}</strong>
            <span>
              {resumable.status === 'summary'
                ? `${resumable.items.length} questions · results ready`
                : `${resumeAnswered} of ${resumable.items.length} answered`}
            </span>
          </div>
          <div className="hub-resume__btns">
            <button type="button" className="hub-btn" onClick={resumeSession}>
              {resumable.status === 'summary' ? 'View results' : 'Continue'}
            </button>
            <button type="button" className="hub-btn hub-btn-ghost" onClick={discardSession}>Discard</button>
          </div>
        </div>
      )}

      {trackKey && openMistakes.length > 0 && (
        <div className="hub-resume" role="region" aria-label="Questions you missed">
          <div className="hub-resume__text">
            <strong>🎯 {openMistakes.length} question{openMistakes.length === 1 ? '' : 's'} you missed before</strong>
            <span>Practise them now — free, no credits used.</span>
          </div>
          <div className="hub-resume__btns">
            <button type="button" className="hub-btn" onClick={practiseMistakes}>Practise</button>
          </div>
          <label className="hub-checkline" style={{ flexBasis: '100%' }}>
            <input type="checkbox" checked={mistakesFirst} onChange={(e) => changeMistakesFirst(e.target.checked)} />
            Put them first when I generate a new quiz
          </label>
        </div>
      )}

      {!embedded && (
        <>
          <p className="hub-eyebrow">{modeMeta.eyebrow}</p>
          <h2 className="hub-title">{modeMeta.title}</h2>
          <p style={{ fontSize: 13, color: 'var(--hub-text-muted)', marginTop: -10, marginBottom: 16 }}>
            Paste notes, upload a PDF/Word doc/image, or pick a saved note — get multiple-choice, fill-in-the-blank, and flashcard questions generated automatically.
          </p>
        </>
      )}

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

      {requestEstimate > 1 && (
        <div style={{ fontSize: 12, color: 'var(--hub-text-muted)', marginTop: 10 }}>
          ⚡ This text will be sent as {requestEstimate} separate requests — trim it to use fewer credits.
        </div>
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
          : modeMeta.cta}
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
      <HText as="p" k={hlKeys.question(item)} text={item.q} style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }} />
      {item.options.map((opt, i) => {
        let cls = 'hub-answer-option'
        if (item.checked) {
          if (i === item.correct) cls += ' is-correct'
          else if (i === item.selectedOption) cls += ' is-incorrect'
        } else if (i === item.selectedOption) {
          cls += ' is-selected'
        }
        return (
          <OptionButton key={i} className={cls} disabled={item.checked} onActivate={() => onSelect(i)}>
            <HText k={hlKeys.option(item, opt)} text={opt} />
          </OptionButton>
        )
      })}
      {item.checked && item.explanation && (
        <div className={`hub-result-banner ${item.isCorrect ? 'is-correct' : 'is-incorrect'}`}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.isCorrect ? '✅ Correct' : '❌ Not quite'}</div>
          <HText as="div" k={hlKeys.explanation(item)} text={item.explanation} style={{ color: 'var(--hub-text-muted)' }} />
        </div>
      )}
    </>
  )
}

function FillInCard({ item, onChangeAnswer, onToggleHint, onSubmit }) {
  return (
    <>
      <HText as="p" k={hlKeys.question(item)} text={item.q} style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }} />
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
          {!item.isCorrect && <div>Correct answer: <HText k={hlKeys.answer(item)} text={item.correctAnswer} /></div>}
          {item.explanation && <HText as="div" k={hlKeys.explanation(item)} text={item.explanation} style={{ color: 'var(--hub-text-muted)', marginTop: 4 }} />}
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
