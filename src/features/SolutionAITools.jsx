// Learning Hub tools, hosted inside the solution viewer (Showfiles).
//
// Everything here is the *same* feature code the Learning Hub runs — this file
// only decides which tool shows, seeds it with the solution the student is
// looking at, and keeps the experience safe to ship:
//
//   • Lazy: each tool is its own chunk (the AI generator pulls in PDF/OCR
//     helpers), so opening a solution doesn't pay for tools nobody clicks.
//   • Isolated: an ErrorBoundary per tool — one crashing tool can't take the
//     PDF + solution down with it.
//   • Keep-alive for paid tools: switching tabs hides a tool instead of
//     unmounting it, so a quiz that just cost credits isn't thrown away by
//     a stray click. Study tools (decks / mock tests) read localStorage on
//     mount, so those remount every visit to always show fresh data.

import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import {
  ListChecks, Layers, GraduationCap, Mic, MessagesSquare,
  Clapperboard, Library, Timer, ArrowLeft, AlertTriangle,
} from 'lucide-react'

const AIGenerator   = lazy(() => import('./AIGenerator'))
const AITutor       = lazy(() => import('./AITutor'))
const PodcastStudio = lazy(() => import('./PodcastStudio'))
const ChatInterface = lazy(() => import('./ChatInterface'))
const MediaStudio   = lazy(() => import('./MediaStudio'))
const Flashcards    = lazy(() => import('./Flashcards'))
const MockTest      = lazy(() => import('./MockTest'))

// ─── Tool registry ────────────────────────────────────────────────────────────
// `group` splits the strip into "create with AI" and "study what you made".
export const AI_TOOLS = [
  { key: 'quiz',       group: 'create', label: 'Quiz',        Icon: ListChecks,    blurb: 'Multiple-choice and fill-in questions from this solution.' },
  { key: 'flashcards', group: 'create', label: 'Flashcards',  Icon: Layers,        blurb: 'Turn this solution into front/back study cards.' },
  { key: 'tutor',      group: 'create', label: 'Tutor',       Icon: GraduationCap, blurb: 'Get a simple explanation plus check-yourself questions.' },
  { key: 'podcast',    group: 'create', label: 'Podcast',     Icon: Mic,           blurb: 'A two-host conversation about this topic you can listen to.' },
  { key: 'chat',       group: 'create', label: 'Chat',        Icon: MessagesSquare, blurb: 'Ask follow-up questions about this solution.' },
  { key: 'media',      group: 'create', label: 'Image & Video', Icon: Clapperboard, blurb: 'Generate an image or a short video. Uses credits.' },
  { key: 'decks',      group: 'study',  label: 'My decks',    Icon: Library,       blurb: 'Review your flashcard decks with spaced repetition.' },
  { key: 'tests',      group: 'study',  label: 'Mock tests',  Icon: Timer,         blurb: 'Take timed practice tests you have saved.' },
]

const TOOL_BY_KEY = Object.fromEntries(AI_TOOLS.map((t) => [t.key, t]))
const STUDY_TOOLS = new Set(['decks', 'tests'])

// The AI backend chunks text at ~1500 chars and bills per chunk, so the
// prefills below are capped to keep a single click from fanning out into
// many paid requests. Students can always paste or upload more themselves.
const QUIZ_SEED_CAP = 4500
const TUTOR_SEED_CAP = 1100
const PODCAST_SEED_CAP = 1000

/**
 * Turns the rendered solution (HTML from marked) into clean plain text
 * suitable for feeding to the generators.
 */
export function solutionToPlainText(html) {
  if (!html || typeof html !== 'string') return ''
  try {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    doc.querySelectorAll('script,style').forEach((n) => n.remove())
    return (doc.body.textContent || '').replace(/\u00a0/g, ' ').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()
  } catch {
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  }
}

// ─── Error boundary ───────────────────────────────────────────────────────────

class ToolBoundary extends React.Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error, info) {
    // Surfaces in the console / any error-reporting hook the app installs.
    console.error(`[SolutionAITools] "${this.props.name}" crashed`, error, info?.componentStack)
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <div className="sf-ai__fallback" role="alert">
        <AlertTriangle size={20} />
        <p>This tool ran into a problem and was stopped. Your solution is safe.</p>
        <button type="button" className="sf-pill-btn" onClick={() => this.setState({ failed: false })}>
          Try again
        </button>
      </div>
    )
  }
}

const ToolLoading = () => (
  <div className="sf-ai__loading" aria-busy="true">
    {[80, 60, 90, 45].map((w, i) => (
      <div key={i} className="sf-skeleton" style={{ width: `${w}%`, height: 13, borderRadius: 6 }} />
    ))}
  </div>
)

// ─── Panel ────────────────────────────────────────────────────────────────────

/**
 * @param {{
 *   activeTool: string|null,        // key from AI_TOOLS, or null when hidden
 *   onSelectTool: (key: string) => void,
 *   onClose: () => void,            // back to the solution
 *   sourceText: string,             // plain text of the solution on screen
 *   courseName: string,
 * }} props
 */
export default function SolutionAIPanel({ activeTool, onSelectTool, onClose, sourceText, courseName }) {
  // Which paid/keep-alive tools have been opened at least once.
  const [opened, setOpened] = useState(() => new Set())

  useEffect(() => {
    if (activeTool && !STUDY_TOOLS.has(activeTool)) {
      setOpened((prev) => (prev.has(activeTool) ? prev : new Set(prev).add(activeTool)))
    }
  }, [activeTool])

  const seeds = useMemo(() => {
    const text = (sourceText || '').trim()
    const course = (courseName || '').trim()
    const truncated = text.length > QUIZ_SEED_CAP
    return {
      quizText: text.slice(0, QUIZ_SEED_CAP),
      quizLabel: course
        ? `${course}${truncated ? ` (first ${QUIZ_SEED_CAP.toLocaleString()} characters)` : ''}`
        : '',
      tutorText: text ? `${course ? `“${course}” — ` : ''}${text.slice(0, TUTOR_SEED_CAP)}` : '',
      podcastTopic: text ? `${course ? `${course}: ` : ''}${text.slice(0, PODCAST_SEED_CAP)}` : '',
      chatContext: `${course ? `${course}. ` : ''}${text}`,
      mediaPrompt: course ? `Educational illustration for the topic: ${course}` : '',
    }
  }, [sourceText, courseName])

  const goTo = (target) => {
    // AIGenerator's "Open →" buttons speak in Hub route names.
    const map = { mocktest: 'tests', flashcards: 'decks' }
    if (map[target]) onSelectTool(map[target])
  }

  const renderTool = (key) => {
    switch (key) {
      case 'quiz':
        return <AIGenerator mode="quiz" embedded initialText={seeds.quizText} initialSourceLabel={seeds.quizLabel} onNavigate={goTo} />
      case 'flashcards':
        return <AIGenerator mode="flashcards" embedded initialText={seeds.quizText} initialSourceLabel={seeds.quizLabel} onNavigate={goTo} />
      case 'tutor':
        return <AITutor initialText={seeds.tutorText} />
      case 'podcast':
        return <PodcastStudio initialTopic={seeds.podcastTopic} />
      case 'chat':
        return <ChatInterface context={seeds.chatContext} saveTitle={`Chat: ${(courseName || 'solution').slice(0, 60)}`} />
      case 'media':
        return <MediaStudio compact initialPrompt={seeds.mediaPrompt} />
      case 'decks':
        return <Flashcards />
      case 'tests':
        return <MockTest />
      default:
        return null
    }
  }

  const toMount = new Set(opened)
  if (activeTool) toMount.add(activeTool)

  const meta = activeTool ? TOOL_BY_KEY[activeTool] : null
  const needsText = activeTool && ['quiz', 'flashcards', 'tutor', 'podcast'].includes(activeTool)

  return (
    <div className="sf-ai" hidden={!activeTool}>
      {meta && (
        <div className="sf-ai__head">
          <button type="button" className="sf-pill-btn" onClick={onClose} title="Back to the solution">
            <ArrowLeft size={13} /> Solution
          </button>
          <div className="sf-ai__head-text">
            <span className="sf-ai__title"><meta.Icon size={15} /> {meta.label}</span>
            <span className="sf-ai__blurb">{meta.blurb}</span>
          </div>
        </div>
      )}

      {needsText && !seeds.quizText && (
        <div className="sf-ai__notice">
          No solution text is loaded yet — paste your own material below, or generate a solution first.
        </div>
      )}

      <div className="sf-ai__body">
        {[...toMount].map((key) => (
          <div key={key} className="sf-ai__pane" hidden={key !== activeTool}>
            <ToolBoundary name={key}>
              <Suspense fallback={<ToolLoading />}>{renderTool(key)}</Suspense>
            </ToolBoundary>
          </div>
        ))}
      </div>
    </div>
  )
}
