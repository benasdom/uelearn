// Question plumbing for the study games (features/McqGame.jsx + features/games/*).
//
// The games speak the SAME schema as the Quiz feature (see normalizeExercise in
// aiGenerator.js), so a question can move between Quiz, Mock Tests and Games
// without translation:
//
//   { _id, kind: 'mcq', q, options: string[], correct: number, explanation: string|null }
//
// `toGameQuestion` also accepts the other shapes that exist in the app —
// the raw backend exercise ({ type:'mcq', question, correctIndex }), a saved
// Mock Test question ({ type:'mcq', q, correct }) and the old McqGame shape
// ({ question, answer }) — and always returns the canonical one above.

import { loadState, saveState, makeId } from './localStore'
import { generateExercisesFromText } from './aiGenerator'
import { bumpGenerations } from './activity'

export const MIN_QUESTIONS = 3

const SETS_KEY = 'mock-test-sets' // same key MockTest + AIGenerator use
const CACHE_KEY = 'game-question-cache'
const CACHE_LIMIT = 8

// Identical wording to the Quiz Generator's "quiz" mode, which the backend is
// known to respond to. The backend still picks the mix of question types, so
// buildGameQuestions() below turns whatever comes back into playable MCQs.
const GAME_INSTRUCTION = 'Create multiple-choice and fill-in-the-blank questions only.'

const clean = (v) => (typeof v === 'string' ? v.trim() : v == null ? '' : String(v).trim())

let idCounter = 0
const localId = () => `game_${Date.now()}_${++idCounter}`

/**
 * Coerces any known MCQ shape into the canonical game question, or returns
 * null when it can't be played (not an MCQ, <2 options, no resolvable answer).
 */
export function toGameQuestion(raw) {
  if (!raw || typeof raw !== 'object') return null

  const kind = raw.kind || raw.type
  if (kind && kind !== 'mcq') return null

  const q = clean(raw.q ?? raw.question)
  if (!q || !Array.isArray(raw.options)) return null

  // Drop blank options but remember where they were so `correct` stays valid.
  const cleaned = raw.options.map(clean)
  const kept = cleaned.map((o, i) => (o ? i : -1)).filter((i) => i >= 0)
  if (kept.length < 2) return null

  let idx = -1
  if (Number.isInteger(raw.correct)) idx = raw.correct
  else if (Number.isInteger(raw.correctIndex)) idx = raw.correctIndex
  else {
    const answerText = clean(raw.answer ?? raw.correctAnswer).toLowerCase()
    if (answerText) idx = cleaned.findIndex((o) => o.toLowerCase() === answerText)
  }

  const correct = kept.indexOf(idx)
  if (correct < 0) return null

  return {
    _id: raw._id || raw.id || localId(),
    kind: 'mcq',
    q,
    options: kept.map((i) => cleaned[i]),
    correct,
    explanation: clean(raw.explanation) || null,
  }
}

/** Normalises a list, dropping unplayable items and duplicate questions. */
export function toGameQuestions(list) {
  if (!Array.isArray(list)) return []
  const seen = new Set()
  const out = []
  for (const raw of list) {
    const q = toGameQuestion(raw)
    if (!q) continue
    const key = q.q.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(q)
  }
  return out
}

// ─── Turning any generated exercise into an MCQ ───────────────────────────────

const MAX_OPTIONS = 4

function answerOf(raw) {
  if (!raw || typeof raw !== 'object') return ''
  const kind = raw.kind || raw.type
  if (kind === 'mcq') {
    const opts = Array.isArray(raw.options) ? raw.options : []
    const i = Number.isInteger(raw.correct) ? raw.correct : raw.correctIndex
    return clean(opts[i])
  }
  if (kind === 'fillIn') return clean(raw.correctAnswer)
  if (kind === 'flashcard') return clean(raw.back)
  return ''
}

/**
 * Builds playable MCQs from a mixed list of exercises (mcq / fillIn / flashcard),
 * in the canonical schema. MCQs pass through; fill-ins and flashcards become
 * MCQs whose distractors are borrowed from the other items' answers.
 */
export function buildGameQuestions(exercises) {
  if (!Array.isArray(exercises)) return []

  const direct = toGameQuestions(exercises)
  const seen = new Set(direct.map((d) => d.q.toLowerCase()))

  const answers = exercises.map(answerOf)
  const spare = []
  direct.forEach((d) => d.options.forEach((o, i) => { if (i !== d.correct) spare.push(o) }))

  const out = [...direct]
  exercises.forEach((raw, idx) => {
    const kind = raw && (raw.kind || raw.type)
    if (kind !== 'fillIn' && kind !== 'flashcard') return

    const q = clean(kind === 'fillIn' ? raw.q ?? raw.question : raw.front)
    const answer = answers[idx]
    if (!q || !answer || seen.has(q.toLowerCase())) return

    const lower = answer.toLowerCase()
    const near = (t) => t.length <= answer.length * 3 + 20
    const uniq = (list) => [...new Set(list.map((t) => t.trim()).filter(Boolean))]
    const candidates = shuffle(
      uniq([...answers.filter((_, k) => k !== idx), ...spare]).filter((t) => t.toLowerCase() !== lower)
    )
    const picks = [...candidates.filter(near), ...candidates.filter((t) => !near(t))].slice(0, MAX_OPTIONS - 1)
    if (picks.length < 1) return

    const options = shuffle([answer, ...picks])
    seen.add(q.toLowerCase())
    out.push({
      _id: raw._id || localId(),
      kind: 'mcq',
      q,
      options,
      correct: options.indexOf(answer),
      explanation: clean(raw.explanation) || null,
    })
  })

  return out
}

// ─── Shuffling ────────────────────────────────────────────────────────────────

export function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** New question with options in random order and `correct` re-pointed. */
export function shuffleOptions(question) {
  const order = shuffle(question.options.map((_, i) => i))
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    correct: order.indexOf(question.correct),
  }
}

// ─── Saved Mock Tests (free source) ───────────────────────────────────────────

/** Mock Test sets that contain at least MIN_QUESTIONS playable MCQs. */
export function loadSavedMcqSets() {
  const sets = loadState(SETS_KEY, [])
  if (!Array.isArray(sets)) return []
  return sets
    .map((s) => ({
      id: s.id,
      title: clean(s.title) || 'Untitled test',
      questions: toGameQuestions(s.questions),
    }))
    .filter((s) => s.questions.length >= MIN_QUESTIONS)
}

/** Saves game questions as a Mock Test — identical shape to AIGenerator's save. */
export function saveQuestionsAsMockTest(title, questions) {
  const sets = loadState(SETS_KEY, [])
  const id = makeId()
  const mapped = questions.map((r) => ({ id: makeId(), type: 'mcq', q: r.q, options: r.options, correct: r.correct }))
  const ok = saveState(SETS_KEY, [
    { id, title: clean(title) || `AI quiz — ${new Date().toLocaleDateString()}`, questions: mapped, source: 'ai' },
    ...(Array.isArray(sets) ? sets : []),
  ])
  if (!ok) throw new Error('Could not save — your browser storage may be full.')
  return id
}

/** Plain-text version for Save to Solutions — same layout AIGenerator uses. */
export function questionsToTranscript(questions) {
  return questions
    .map(
      (it, i) =>
        `${i + 1}. ${it.q}\nOptions: ${it.options.join(' | ')}\nAnswer: ${it.options[it.correct]}${it.explanation ? `\n${it.explanation}` : ''}`
    )
    .join('\n\n')
}

// ─── Per-text cache so reopening doesn't pay for the same questions twice ─────

function hashText(text) {
  let h = 5381
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0
  return `${text.length}:${(h >>> 0).toString(36)}`
}

export function getCachedQuestions(text) {
  const t = clean(text)
  if (!t) return []
  const cache = loadState(CACHE_KEY, [])
  const hit = Array.isArray(cache) ? cache.find((c) => c.key === hashText(t)) : null
  return hit ? toGameQuestions(hit.questions) : []
}

function cacheQuestions(text, questions) {
  const key = hashText(clean(text))
  const cache = loadState(CACHE_KEY, [])
  const rest = (Array.isArray(cache) ? cache : []).filter((c) => c.key !== key)
  saveState(CACHE_KEY, [{ key, at: Date.now(), questions }, ...rest].slice(0, CACHE_LIMIT))
}

// ─── Generation ───────────────────────────────────────────────────────────────

/**
 * Generates MCQs from text via the same backend call the Quiz Generator uses.
 * @returns {Promise<{ questions: object[], remainingCredits?: number, partialErrors: string[] }>}
 */
export async function generateGameQuestions(text, { onProgress } = {}) {
  const { exercises, remainingCredits, partialErrors } = await generateExercisesFromText(text, {
    onProgress,
    instruction: GAME_INSTRUCTION,
  })

  const questions = buildGameQuestions(exercises)
  if (questions.length === 0) {
    throw new Error(
      exercises.length > 0
        ? `The AI returned ${exercises.length} item${exercises.length !== 1 ? 's' : ''}, but none could be turned into game questions. Try again or use a longer passage.`
        : (partialErrors && partialErrors[0]) || 'No questions came back for this text. Try a longer or more detailed passage.'
    )
  }

  cacheQuestions(text, questions)
  bumpGenerations()
  return { questions, remainingCredits, partialErrors: partialErrors || [] }
}
