import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Play, RotateCcw, Volume2, VolumeX, Trophy, ShieldAlert, Sparkles, Library, Maximize2, Minimize2 } from 'lucide-react'
import { loadState, saveState } from '../lib/localStore'
import { estimateRequests } from '../lib/aiGenerator'
import {
  MIN_QUESTIONS, toGameQuestions, shuffle, shuffleOptions, loadSavedMcqSets, getCachedQuestions,
  generateGameQuestions, saveQuestionsAsMockTest, questionsToTranscript,
} from '../lib/gameQuestions'
import { GAMES, GAME_BY_KEY } from './games'
import { useSfx } from './games/gameKit'
import SaveToSolutions from './SaveToSolutions'
import './styles/hub.css'
import './styles/games.css'

const BEST_KEY = 'game-best'

/**
 * Study games built on the same MCQ schema as the Quiz feature.
 *
 * Questions come from (in order): the `questions` prop, a cached generation for
 * `sourceText`, a saved Mock Test, or a fresh AI generation from `sourceText`.
 * Any of the known MCQ shapes is accepted — see lib/gameQuestions.js.
 *
 * @param {{
 *   questions?: object[],
 *   sourceText?: string,     // e.g. the solution on screen; enables "Generate"
 *   courseName?: string,     // used as the title when saving
 *   title?: string,
 *   onBack?: () => void,
 *   active?: boolean,        // false while a keep-alive host has the panel hidden
 * }} props
 */
export default function McqGame({ questions: provided, sourceText = '', courseName = '', title = 'Study Games', onBack, active = true }) {
  const [pool, setPool] = useState(() => toGameQuestions(provided))
  const [stage, setStage] = useState('menu') // menu | playing | results
  const [gameKey, setGameKey] = useState(null)
  const [round, setRound] = useState([])
  const [runId, setRunId] = useState(0)
  const [result, setResult] = useState(null)
  const [sound, setSound] = useState(true)
  const [best, setBest] = useState(() => loadState(BEST_KEY, {}))
  const sfx = useSfx(sound)

  // Fullscreen: native API on the whole game, with a viewport-filling fallback
  // for browsers (e.g. iOS Safari) that refuse it.
  const rootRef = useRef(null)
  const [nativeFs, setNativeFs] = useState(false)
  const [fakeFs, setFakeFs] = useState(false)
  const isFull = nativeFs || fakeFs

  useEffect(() => {
    const onChange = () => setNativeFs(!!document.fullscreenElement && document.fullscreenElement === rootRef.current)
    document.addEventListener('fullscreenchange', onChange)
    return () => {
      document.removeEventListener('fullscreenchange', onChange)
      if (document.fullscreenElement === rootRef.current) document.exitFullscreen?.().catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (!fakeFs) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setFakeFs(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [fakeFs])

  const toggleFullscreen = async () => {
    const el = rootRef.current
    if (!el) return
    if (isFull) {
      setFakeFs(false)
      if (document.fullscreenElement) await document.exitFullscreen().catch(() => {})
      return
    }
    try {
      if (!el.requestFullscreen) throw new Error('Fullscreen API unavailable')
      await el.requestFullscreen()
    } catch {
      setFakeFs(true)
    }
  }

  // Provided questions can change (e.g. parent regenerates) — follow them.
  useEffect(() => {
    if (provided) setPool(toGameQuestions(provided))
  }, [provided])

  // Reuse a previous generation for the same text instead of paying again.
  useEffect(() => {
    if (provided || pool.length || !sourceText) return
    const cached = getCachedQuestions(sourceText)
    if (cached.length >= MIN_QUESTIONS) setPool(cached)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const game = gameKey ? GAME_BY_KEY[gameKey] : null

  const start = (key) => {
    const g = GAME_BY_KEY[key]
    if (!g || pool.length < g.minQuestions) return
    const picked = shuffle(pool).slice(0, g.roundSize || pool.length).map(shuffleOptions)
    setGameKey(key)
    setRound(picked)
    setRunId((n) => n + 1)
    setResult(null)
    setStage('playing')
  }

  const finish = (r) => {
    sfx(r.won ? 'win' : 'lose')
    const prev = best[gameKey] || 0
    if (r.score > prev) {
      const next = { ...best, [gameKey]: r.score }
      setBest(next)
      saveState(BEST_KEY, next)
    }
    setResult({ ...r, newBest: r.score > prev && r.score > 0, prevBest: prev })
    setStage('results')
  }

  const backToMenu = () => { setStage('menu'); setResult(null) }

  return (
    <div ref={rootRef} className={`hub-page gm${isFull ? ' is-fs' : ''}${fakeFs ? ' is-fake-fs' : ''}`}>
      <div className="gm-bar">
        {stage === 'playing' ? (
          <button type="button" className="hub-btn hub-btn-ghost" onClick={() => { if (window.confirm('Leave this game? Your progress will be lost.')) backToMenu() }}>
            <ArrowLeft size={14} /> Games
          </button>
        ) : onBack ? (
          <button type="button" className="hub-btn hub-btn-ghost" onClick={onBack}><ArrowLeft size={14} /> Back</button>
        ) : <span />}
        <div className="gm-bar__title">{stage === 'playing' && game ? game.name : title}</div>
        <div className="gm-bar__tools">
          <button type="button" className="gm-icon-btn" onClick={() => setSound((s) => !s)} aria-pressed={sound} title={sound ? 'Mute sound' : 'Turn sound on'}>
            {sound ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button type="button" className="gm-icon-btn gm-fs-btn" onClick={toggleFullscreen} aria-pressed={isFull} title={isFull ? 'Exit fullscreen' : 'Fullscreen'}>
            {isFull ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span>{isFull ? 'Exit' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {stage === 'menu' && (
        <Menu pool={pool} best={best} sourceText={sourceText} onPool={setPool} onStart={start} />
      )}

      {stage === 'playing' && game && (
        <game.Component key={runId} questions={round} active={active} sfx={sfx} onComplete={finish} best={best[gameKey] || 0} />
      )}

      {stage === 'results' && result && game && (
        <Results
          game={game} result={result} courseName={courseName}
          onAgain={() => start(gameKey)} onMenu={backToMenu}
        />
      )}
    </div>
  )
}

// ─── Menu: pick a question source, then a game ───────────────────────────────

function Menu({ pool, best, sourceText, onPool, onStart }) {
  const [saved] = useState(() => loadSavedMcqSets())
  const [busy, setBusy] = useState(false)
  const [progress, setProgress] = useState(null)
  const [error, setError] = useState(null)
  const [notice, setNotice] = useState(null)

  const hasText = sourceText.trim().length >= 10
  const requests = useMemo(() => estimateRequests(sourceText), [sourceText])

  const generate = async () => {
    setBusy(true)
    setError(null)
    setNotice(null)
    setProgress({ done: 0, total: requests || 1 })
    try {
      const { questions, partialErrors } = await generateGameQuestions(sourceText, {
        onProgress: (done, total) => setProgress({ done, total }),
      })
      if (questions.length < MIN_QUESTIONS) setNotice(`Only ${questions.length} question${questions.length === 1 ? '' : 's'} came back — some games need more.`)
      else if (partialErrors.length) setNotice('Some of the text couldn’t be processed, so you may see fewer questions.')
      onPool(questions)
    } catch (err) {
      setError(err.message || 'Something went wrong generating questions.')
    } finally {
      setBusy(false)
    }
  }

  const ready = pool.length > 0

  return (
    <>
      {!ready && (
        <div className="hub-card gm-source">
          <p className="gm-source__title">Choose your questions</p>
          <p className="gm-source__sub">Games run on multiple-choice questions — the same ones the Quiz feature makes.</p>

          {hasText && (
            <>
              <button type="button" className="hub-btn gm-source__cta" disabled={busy} onClick={generate}>
                <Sparkles size={15} />
                {busy ? (progress?.total > 1 ? `Generating… (${progress.done}/${progress.total})` : 'Generating…') : 'Generate from this solution'}
              </button>
              {requests > 1 && !busy && <p className="gm-source__note">⚡ Sent as {requests} requests — each one uses a credit.</p>}
            </>
          )}

          {saved.length > 0 && (
            <div className="gm-saved">
              <p className="gm-saved__label"><Library size={13} /> Or use a saved Mock Test (free)</p>
              {saved.map((s) => (
                <button key={s.id} type="button" className="hub-list-item gm-saved__row" onClick={() => onPool(s.questions)}>
                  <span className="gm-saved__name">{s.title}</span>
                  <span className="hub-badge-pill">{s.questions.length} Qs</span>
                </button>
              ))}
            </div>
          )}

          {!hasText && saved.length === 0 && (
            <div className="hub-empty">
              No questions yet. Generate a quiz in the Quiz tool and save it to Mock Tests, or open a solution and generate from it here.
            </div>
          )}
          {error && <div className="hub-error">{error}</div>}
        </div>
      )}

      {ready && (
        <div className="gm-ready">
          <span className="hub-badge-pill">{pool.length} question{pool.length !== 1 ? 's' : ''} ready</span>
          <button type="button" className="gm-link" onClick={() => onPool([])}>Change source</button>
        </div>
      )}
      {notice && <div className="gm-notice">{notice}</div>}

      <div className="gm-list" role="list" aria-label="Choose a game">
        {GAMES.map((g) => {
          const short = ready && pool.length < g.minQuestions
          const locked = !ready || short
          return (
            <button
              key={g.key} type="button" role="listitem"
              className={`gm-card ${locked ? 'is-locked' : ''}`}
              disabled={locked} onClick={() => onStart(g.key)}
            >
              <span className="gm-card__icon"><g.Icon size={22} strokeWidth={1.8} /></span>
              <span className="gm-card__body">
                <span className="gm-card__name">{g.name}</span>
                <span className="gm-card__blurb">{g.blurb}</span>
                <span className="gm-card__meta">
                  {g.tags.map((t) => <span key={t} className="gm-tag">{t}</span>)}
                  {best[g.key] > 0 && <span className="gm-tag gm-tag--best"><Trophy size={10} /> {best[g.key]}</span>}
                  {short && <span className="gm-tag gm-tag--warn">Needs {g.minQuestions}+ questions</span>}
                </span>
              </span>
              <span className="gm-card__go" aria-hidden="true"><Play size={16} /></span>
            </button>
          )
        })}
      </div>
    </>
  )
}

// ─── Results ─────────────────────────────────────────────────────────────────

function Results({ game, result, courseName, onAgain, onMenu }) {
  const { won, score, correct, total, missed, newBest, bestStreak, review } = result
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const [saved, setSaved] = useState(null)
  const [saveErr, setSaveErr] = useState(null)

  const saveMissed = () => {
    try {
      saveQuestionsAsMockTest(`${game.name} — missed questions`, missed)
      setSaved('Saved to Mock Tests')
      setSaveErr(null)
    } catch (err) {
      setSaveErr(err.message)
    }
  }

  return (
    <div className="hub-card gm-results">
      <div className={`gm-results__icon ${won ? 'is-win' : 'is-lose'}`}>{won ? <Trophy size={28} /> : <ShieldAlert size={28} />}</div>
      <h3 className="gm-results__title">{won ? (pct === 100 ? 'Flawless!' : 'Round complete') : 'Out of lives'}</h3>
      <p className="gm-results__sub">{game.name}{newBest ? ' · 🏆 New best!' : ''}</p>

      <div className="gm-results__grid">
        <div><span>Score</span><strong>{score}</strong></div>
        <div><span>Correct</span><strong>{correct}/{total}</strong></div>
        <div><span>Accuracy</span><strong>{pct}%</strong></div>
        {bestStreak !== undefined && <div><span>Best streak</span><strong>🔥 {bestStreak}</strong></div>}
      </div>

      <ReviewList items={review || missed.map((m) => ({ q: m, status: 'wrong', picked: null }))} fullReview={!!review} />

      <div className="gm-results__btns">
        <button type="button" className="hub-btn" onClick={onAgain}><RotateCcw size={14} /> Play again</button>
        <button type="button" className="hub-btn hub-btn-ghost" onClick={onMenu}>Choose another game</button>
      </div>

      <div className="gm-results__save">
        {missed.length > 0 && (
          <button type="button" className="hub-btn hub-btn-ghost" disabled={!!saved} onClick={saveMissed}>{saved || 'Practise missed in Mock Tests'}</button>
        )}
        {missed.length > 0 && (
          <SaveToSolutions
            title={`${courseName || 'Game'} — missed questions`.slice(0, 100)}
            content={questionsToTranscript(missed)}
            modelName="ai-generator"
          />
        )}
      </div>
      {saveErr && <div className="hub-error">{saveErr}</div>}
    </div>
  )
}

// ─── Review with Show / Hide solution ────────────────────────────────────────

const STATUS = {
  correct: { icon: '✅', label: 'Correct' },
  wrong: { icon: '❌', label: 'Missed' },
  missed: { icon: '💥', label: 'Got past you' },
  revealed: { icon: '👁', label: 'Answer revealed' },
  unseen: { icon: '⏳', label: 'Not reached' },
}

function ReviewList({ items, fullReview }) {
  const [open, setOpen] = useState(() => new Set())
  if (!items.length) return null

  const toggle = (i) => setOpen((prev) => {
    const next = new Set(prev)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    return next
  })
  const allOpen = open.size === items.length

  return (
    <details className="gm-missed" open={fullReview || undefined}>
      <summary>{fullReview ? `Review all ${items.length} questions` : `Review ${items.length} missed question${items.length !== 1 ? 's' : ''}`}</summary>
      <button type="button" className="gm-reveal" onClick={() => setOpen(allOpen ? new Set() : new Set(items.map((_, i) => i)))}>
        {allOpen ? 'Hide all solutions' : 'Show all solutions'}
      </button>
      {items.map((it, i) => {
        const st = STATUS[it.status] || STATUS.wrong
        const shown = open.has(i)
        const q = it.q
        return (
          <div key={q._id || i} className="gm-missed__item">
            <div className="gm-review__head">
              <span className={`gm-review__badge is-${it.status}`}>{st.icon} {st.label}</span>
              {it.points > 0 && <span className="gm-review__pts">+{it.points}</span>}
            </div>
            <p>{q.q}</p>
            <button type="button" className="gm-reveal" aria-expanded={shown} onClick={() => toggle(i)}>
              {shown ? 'Hide solution' : 'Show solution'}
            </button>
            {shown && (
              <div className="gm-solution">
                {Number.isInteger(it.picked) && it.picked >= 0 && it.picked !== q.correct && q.options[it.picked] && (
                  <p className="gm-solution__yours">✗ You shot: {q.options[it.picked]}</p>
                )}
                <p className="gm-missed__a">✓ {q.options[q.correct]}</p>
                {q.explanation ? <p className="gm-missed__why">{q.explanation}</p> : <p className="gm-missed__why">No explanation was provided for this question.</p>}
              </div>
            )}
          </div>
        )
      })}
    </details>
  )
}
