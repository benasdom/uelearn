import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { ArrowLeft, Play, RotateCcw, Volume2, VolumeX, Trophy, ShieldAlert, Sparkles, Library, Maximize2, Minimize2, Target, X } from 'lucide-react'
import { loadState, saveState, makeId } from '../lib/localStore'
import { estimateRequests } from '../lib/aiGenerator'
import {
  MIN_QUESTIONS, toGameQuestions, loadSavedMcqSets, getCachedQuestions,
  saveQuestionsAsMockTest, questionsToTranscript, beginGeneration, activeGeneration,
} from '../lib/gameQuestions'
import {
  buildRound, countOpen, fixedCount, listOpen, mistakesAsGameQuestions, recordAnswer,
  removeMistake, clearMistakes, subscribeMistakes,
} from '../lib/mistakeBank'
import { GAMES, GAME_BY_KEY } from './games'
import { useSfx } from './games/gameKit'
import { HText } from './highlight/Highlighter'
import { hlKeys } from './highlight/highlightStore'
import SaveToSolutions from './SaveToSolutions'
import './styles/hub.css'
import './styles/games.css'
import './styles/mistakes.css'

const BEST_KEY = 'game-best'

// How the next round treats questions the student has missed before.
const ROUND_MODES = [
  { key: 'first', label: 'Mistakes first' },
  { key: 'only', label: 'Mistakes only' },
  { key: 'mix', label: 'Fresh mix' },
]

const normText = (s) => String(s ?? '').toLowerCase().replace(/\s+/g, ' ').trim()

function ago(ts) {
  if (!ts) return ''
  const m = Math.round((Date.now() - ts) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.round(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.round(h / 24)}d ago`
}

/** The student's open mistakes for `trackKey`, kept live as answers are recorded. */
function useMistakeState(trackKey, pool) {
  const [tick, bump] = useReducer((n) => n + 1, 0)
  useEffect(() => (trackKey ? subscribeMistakes(bump) : undefined), [trackKey])
  return useMemo(() => {
    if (!trackKey) return { open: 0, fixed: 0, items: [], playable: [] }
    const items = listOpen(trackKey)
    return { open: items.length, fixed: fixedCount(trackKey), items, playable: mistakesAsGameQuestions(trackKey, pool) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackKey, pool, tick])
}

function useOpenCount(trackKey) {
  const [n, setN] = useState(() => (trackKey ? countOpen(trackKey) : 0))
  useEffect(() => (trackKey ? subscribeMistakes(() => setN(countOpen(trackKey))) : undefined), [trackKey])
  return n
}

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
 *   trackKey?: string,       // opt-in: remember missed questions under this key
 *                            // (and offer them first next time). Omit = no tracking.
 * }} props
 */
export default function McqGame({ questions: provided, sourceText = '', courseName = '', title = 'Study Games', onBack, active = true, trackKey = '' }) {
  const [pool, setPool] = useState(() => toGameQuestions(provided))
  const [stage, setStage] = useState('menu') // menu | playing | results
  const [gameKey, setGameKey] = useState(null)
  const [round, setRound] = useState([])
  const [runId, setRunId] = useState(0)
  const [result, setResult] = useState(null)
  const [sound, setSound] = useState(true)
  const [best, setBest] = useState(() => loadState(BEST_KEY, {}))
  const sfx = useSfx(sound)

  // Mistake tracking (only when a trackKey is supplied).
  const [roundMode, setRoundMode] = useState(() => {
    const v = trackKey ? loadState(`game-round-mode:${trackKey}`, null) : null
    return ROUND_MODES.some((m) => m.key === v) ? v : 'first'
  })
  const roundIdRef = useRef('')
  const statsRef = useRef({ opened: 0, cleared: 0 })
  const [roundStats, setRoundStats] = useState({ opened: 0, cleared: 0 })

  const changeMode = (m) => {
    setRoundMode(m)
    if (trackKey) saveState(`game-round-mode:${trackKey}`, m)
  }

  // Called by each game for every answer — so a round abandoned halfway still
  // remembers what was missed.
  const handleAnswer = useCallback((q, ok) => {
    if (!trackKey) return
    const res = recordAnswer({ key: trackKey, label: courseName }, q, ok, roundIdRef.current)
    if (res && res.opened) statsRef.current.opened += 1
    if (res && res.cleared) statsRef.current.cleared += 1
  }, [trackKey, courseName])

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

  const start = (key, forcedMode) => {
    const g = GAME_BY_KEY[key]
    if (!g) return
    const mistakes = trackKey ? mistakesAsGameQuestions(trackKey, pool) : []
    const mode = mistakes.length ? forcedMode || roundMode : 'mix'
    const picked = buildRound({ pool, mistakes, mode, size: g.roundSize, minQuestions: g.minQuestions })
    if (picked.length < g.minQuestions) return
    roundIdRef.current = makeId()
    statsRef.current = { opened: 0, cleared: 0 }
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
    setRoundStats({ ...statsRef.current })
    setStage('results')
  }

  const backToMenu = () => { setStage('menu'); setResult(null) }

  return (
    <div ref={rootRef} className={`hub-page gm${isFull ? ' is-fs' : ''}${fakeFs ? ' is-fake-fs' : ''}`}>
      <div className="gm-bar">
        {stage === 'playing' ? (
          <button type="button" className="hub-btn hub-btn-ghost" onClick={() => {
            const msg = trackKey
              ? 'Leave this game? Your score will be lost, but the questions you’ve missed so far are saved.'
              : 'Leave this game? Your progress will be lost.'
            if (window.confirm(msg)) backToMenu()
          }}>
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
        <Menu
          pool={pool} best={best} sourceText={sourceText} onPool={setPool} onStart={start}
          trackKey={trackKey} courseName={courseName} mode={roundMode} onMode={changeMode}
        />
      )}

      {stage === 'playing' && game && (
        <game.Component
          key={runId} questions={round} active={active} sfx={sfx} onComplete={finish}
          onAnswer={trackKey ? handleAnswer : undefined} best={best[gameKey] || 0}
        />
      )}

      {stage === 'results' && result && game && (
        <Results
          game={game} result={result} courseName={courseName}
          trackKey={trackKey} roundStats={roundStats}
          onAgain={() => start(gameKey)} onPractise={() => start(gameKey, 'only')} onMenu={backToMenu}
        />
      )}
    </div>
  )
}

// ─── Menu: pick a question source, then a game ───────────────────────────────

function Menu({ pool, best, sourceText, onPool, onStart, trackKey, courseName, mode, onMode }) {
  const [saved] = useState(() => loadSavedMcqSets())
  const [busy, setBusy] = useState(false)
  const [cancelling, setCancelling] = useState(false)
  const [progress, setProgress] = useState(null)
  const [error, setError] = useState(null)
  const [notice, setNotice] = useState(null)
  const [showMistakes, setShowMistakes] = useState(false)
  const handleRef = useRef(null) // the generation this screen is watching
  const offRef = useRef(null) // its progress unsubscribe
  const bank = useMistakeState(trackKey, pool)

  const hasText = sourceText.trim().length >= 10
  const requests = useMemo(() => estimateRequests(sourceText), [sourceText])

  // Watch a generation (new, or one already running from before this screen
  // was mounted). Unmounting only stops WATCHING — the generation carries on and
  // caches its questions, so leaving the tab never wastes the credits spent.
  const attach = useCallback((h) => {
    handleRef.current = h
    setBusy(true)
    setCancelling(false)
    setError(null)
    setNotice(null)
    if (offRef.current) offRef.current()
    offRef.current = h.subscribe(setProgress)

    h.promise
      .then(({ questions, partialErrors, cancelled }) => {
        if (cancelled) {
          if (questions.length) {
            setNotice(`Cancelled — kept the ${questions.length} question${questions.length === 1 ? '' : 's'} already generated.`)
            onPool(questions)
          } else {
            setNotice('Cancelled — nothing was generated. A request that had already reached the server may still have used a credit.')
          }
          return
        }
        if (questions.length < MIN_QUESTIONS) setNotice(`Only ${questions.length} question${questions.length === 1 ? '' : 's'} came back — some games need more.`)
        else if (partialErrors.length) setNotice('Some of the text couldn’t be processed, so you may see fewer questions.')
        onPool(questions)
      })
      .catch((err) => setError(err.message || 'Something went wrong generating questions.'))
      .finally(() => {
        if (handleRef.current === h) {
          handleRef.current = null
          setBusy(false)
          setCancelling(false)
        }
        if (offRef.current) { offRef.current(); offRef.current = null }
      })
  }, [onPool])

  useEffect(() => {
    const running = activeGeneration(sourceText)
    if (running) attach(running)
    return () => { if (offRef.current) offRef.current() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generate = () => attach(beginGeneration(sourceText))
  const cancel = () => {
    if (!handleRef.current) return
    setCancelling(true)
    handleRef.current.cancel()
  }

  // How many questions the next round can draw on under the chosen mode.
  const playableMode = bank.playable.length ? mode : 'mix'
  const poolStems = useMemo(() => new Set(pool.map((q) => normText(q.q))), [pool])
  const extraFromBank = playableMode === 'mix' ? 0 : bank.playable.filter((q) => !poolStems.has(normText(q.q))).length
  const available = pool.length + extraFromBank
  const poolReady = pool.length > 0
  const ready = available > 0

  const modeHint = {
    first: `Your ${bank.open} missed question${bank.open === 1 ? '' : 's'} come first, then the rest of the round.`,
    only: `Just your ${bank.open} missed question${bank.open === 1 ? '' : 's'} — topped up with a few others if a game needs more.`,
    mix: 'Missed questions get no priority this time — a fresh shuffle of everything.',
  }[mode]

  return (
    <>
      {trackKey && (bank.open > 0 || bank.fixed > 0) && (
        <div className="hub-card gm-mistakes">
          {bank.open > 0 ? (
            <>
              <div className="gm-mistakes__head">
                <span className="gm-mistakes__icon" aria-hidden="true"><Target size={20} /></span>
                <div className="gm-mistakes__text">
                  <strong>{bank.open} question{bank.open === 1 ? '' : 's'} to fix</strong>
                  <span>Saved from your earlier rounds{courseName ? ` in ${courseName}` : ''}</span>
                </div>
                <button type="button" className="gm-link" aria-expanded={showMistakes} onClick={() => setShowMistakes((v) => !v)}>
                  {showMistakes ? 'Hide' : 'Review'}
                </button>
              </div>

              <div className="gm-seg" role="radiogroup" aria-label="How to build your next round">
                {ROUND_MODES.map((m) => (
                  <button
                    key={m.key} type="button" role="radio"
                    aria-checked={mode === m.key}
                    className={mode === m.key ? 'is-active' : ''}
                    onClick={() => onMode(m.key)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <p className="gm-mistakes__hint">{modeHint}</p>

              {showMistakes && (
                <MistakesPanel trackKey={trackKey} courseName={courseName} items={bank.items} playable={bank.playable} />
              )}
            </>
          ) : (
            <p className="gm-mistakes__clear">
              <span aria-hidden="true">✅</span> All caught up — you’ve fixed {bank.fixed} mistake{bank.fixed === 1 ? '' : 's'} so far.
            </p>
          )}
        </div>
      )}

      {!poolReady && (
        <div className="hub-card gm-source">
          <p className="gm-source__title">{bank.open > 0 ? 'Want fresh questions too?' : 'Choose your questions'}</p>
          <p className="gm-source__sub">
            {bank.open > 0
              ? 'You can already practise your mistakes below. Generate a set to mix new questions in.'
              : 'Games run on multiple-choice questions — the same ones the Quiz feature makes.'}
          </p>

          {hasText && (
            <>
              <div className="gm-genrow">
                <button type="button" className="hub-btn gm-source__cta" disabled={busy} onClick={generate}>
                  <Sparkles size={15} />
                  {busy ? (progress?.total > 1 ? `Generating… (${progress.done}/${progress.total})` : 'Generating…') : 'Generate from this solution'}
                </button>
                {busy && (
                  <button type="button" className="hub-btn hub-btn-ghost gm-cancel" disabled={cancelling} onClick={cancel}>
                    <X size={14} /> {cancelling ? 'Cancelling…' : 'Cancel'}
                  </button>
                )}
              </div>
              {busy && (
                <p className="gm-source__note" role="status">
                  Questions already generated are kept if you cancel. You can leave this screen — it keeps running.
                </p>
              )}
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

          {!hasText && saved.length === 0 && bank.open === 0 && (
            <div className="hub-empty">
              No questions yet. Generate a quiz in the Quiz tool and save it to Mock Tests, or open a solution and generate from it here.
            </div>
          )}
          {error && <div className="hub-error">{error}</div>}
        </div>
      )}

      {poolReady && (
        <div className="gm-ready">
          <span className="hub-badge-pill">{pool.length} question{pool.length !== 1 ? 's' : ''} ready</span>
          <button type="button" className="gm-link" onClick={() => onPool([])}>Change source</button>
        </div>
      )}
      {notice && <div className="gm-notice" role="status">{notice}</div>}

      <div className="gm-list" role="list" aria-label="Choose a game">
        {GAMES.map((g) => {
          const short = ready && available < g.minQuestions
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

// ─── Mistakes review ─────────────────────────────────────────────────────────

function MistakesPanel({ trackKey, courseName, items, playable }) {
  const [shown, setShown] = useState(() => new Set())
  const [msg, setMsg] = useState(null)

  const toggle = (id) =>
    setShown((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const saveAsTest = () => {
    try {
      saveQuestionsAsMockTest(`${courseName || 'Course'} — mistakes`, playable)
      setMsg('Saved to Mock Tests — you can practise them there too.')
    } catch {
      setMsg('Couldn’t save right now — try again.')
    }
  }

  const clearAll = () => {
    if (window.confirm(`Forget all ${items.length} saved mistakes? This can’t be undone.`)) clearMistakes(trackKey)
  }

  return (
    <div className="gm-mpanel">
      <ul className="gm-mlist">
        {items.map((it) => {
          const q = it.q
          const answer = q.kind === 'fillIn' ? q.correctAnswer : q.options[q.correct]
          const open = shown.has(it.id)
          return (
            <li key={it.id} className="gm-mitem">
              <div className="gm-mitem__meta">
                <span>Missed ×{it.wrong}</span>
                <span>{ago(it.lastWrong)}</span>
                <button
                  type="button" className="gm-micon" aria-label="Remove this question from my mistakes"
                  title="Remove" onClick={() => removeMistake(trackKey, it.id)}
                >
                  <X size={13} />
                </button>
              </div>
              <HText as="p" className="gm-mitem__q" k={hlKeys.question(q)} text={q.q} />
              <button type="button" className="gm-reveal" aria-expanded={open} onClick={() => toggle(it.id)}>
                {open ? 'Hide answer' : 'Show answer'}
              </button>
              {open && (
                <div className="gm-mitem__ans">
                  <p className="gm-missed__a">✓ <HText k={hlKeys.answer(q)} text={answer} /></p>
                  {q.explanation && <HText as="p" className="gm-missed__why" k={hlKeys.explanation(q)} text={q.explanation} />}
                </div>
              )}
            </li>
          )
        })}
      </ul>
      <div className="gm-mpanel__actions">
        {playable.length > 0 && (
          <button type="button" className="hub-btn hub-btn-ghost" onClick={saveAsTest}>Save to Mock Tests</button>
        )}
        <button type="button" className="hub-btn hub-btn-ghost gm-danger" onClick={clearAll}>Clear all</button>
      </div>
      {msg && <p className="gm-source__note" role="status">{msg}</p>}
    </div>
  )
}

// ─── Results ─────────────────────────────────────────────────────────────────

function Results({ game, result, courseName, trackKey, roundStats, onAgain, onPractise, onMenu }) {
  const { won, score, correct, total, missed, newBest, bestStreak, review } = result
  const openMistakes = useOpenCount(trackKey)
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

      {trackKey && (roundStats.opened > 0 || roundStats.cleared > 0 || openMistakes > 0) && (
        <div className="gm-bank" role="status">
          <Target size={16} aria-hidden="true" />
          <p>
            {roundStats.opened > 0 && <span>{roundStats.opened} new mistake{roundStats.opened === 1 ? '' : 's'} saved</span>}
            {roundStats.opened > 0 && roundStats.cleared > 0 && ' · '}
            {roundStats.cleared > 0 && <span className="gm-bank__good">{roundStats.cleared} fixed 🎉</span>}
            {(roundStats.opened > 0 || roundStats.cleared > 0) && openMistakes > 0 && ' · '}
            {openMistakes > 0 && <span>{openMistakes} left to fix</span>}
            {openMistakes === 0 && <span className="gm-bank__good"> — all caught up!</span>}
          </p>
          {openMistakes > 0 && (
            <button type="button" className="hub-btn gm-bank__go" onClick={onPractise}>
              Practise {openMistakes === 1 ? 'it' : `my ${openMistakes}`} now
            </button>
          )}
        </div>
      )}

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
            <HText as="p" k={hlKeys.question(q)} text={q.q} />
            <button type="button" className="gm-reveal" aria-expanded={shown} onClick={() => toggle(i)}>
              {shown ? 'Hide solution' : 'Show solution'}
            </button>
            {shown && (
              <div className="gm-solution">
                {Number.isInteger(it.picked) && it.picked >= 0 && it.picked !== q.correct && q.options[it.picked] && (
                  <p className="gm-solution__yours">✗ You shot: {q.options[it.picked]}</p>
                )}
                <p className="gm-missed__a">✓ <HText k={hlKeys.answer(q)} text={q.options[q.correct]} /></p>
                {q.explanation
                  ? <HText as="p" className="gm-missed__why" k={hlKeys.explanation(q)} text={q.explanation} />
                  : <p className="gm-missed__why">No explanation was provided for this question.</p>}
              </div>
            )}
          </div>
        )
      })}
    </details>
  )
}
