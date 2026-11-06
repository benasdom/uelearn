import { useId } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Animated section glyphs for the model picker. Each one is a small scene that
// acts out what the section does, on a loop:
//
//   text  – a page that gets typed: four lines write themselves out, a caret
//           runs along each one and snaps back to the margin, then the page
//           wipes clean and starts again.
//   image – a picture being painted: frame draws, mountains trace, a colour
//           wash sweeps across, the sun rises behind the ridge with turning
//           rays, and a sparkle lands in the corner.
//   video – a film strip being played: sprocket holes scroll past, the play
//           mark pulses with an expanding ring, a playhead scrubs the timeline.
//
// All motion is CSS (no SMIL) so `prefers-reduced-motion` can switch it off
// and leave each glyph as a clean static drawing.
// ─────────────────────────────────────────────────────────────────────────────

// Text: line i is drawn between `start` and `start + 12` percent of the loop.
const TEXT_LINES = [
  { y: 17, x2: 36, start: 0 },
  { y: 24, x2: 32, start: 15 },
  { y: 31, x2: 37, start: 30 },
  { y: 38, x2: 26, start: 45 },
]

const textKeyframes = () => {
  const lines = TEXT_LINES.map((l, i) => `
    @keyframes msec-write-${i} {
      0%, ${l.start}% { stroke-dashoffset: 1; }
      ${l.start + 12}%, 82% { stroke-dashoffset: 0; }
      92%, 100% { stroke-dashoffset: -1; }
    }`).join('')

  // caret: follows each line while it is being written, snaps back to the margin
  const stops = TEXT_LINES.map((l) =>
    `${l.start}% { transform: translate(13px, ${l.y}px); }
     ${l.start + 12}% { transform: translate(${l.x2}px, ${l.y}px); }`
  ).join('\n')
  return `${lines}
    @keyframes msec-caret {
      ${stops}
      60% { opacity: 1; }
      68%, 100% { transform: translate(${TEXT_LINES[3].x2}px, ${TEXT_LINES[3].y}px); opacity: 0; }
      0% { opacity: 1; }
    }`
}

const STYLES = `
  .msec-glyph { overflow: visible; }
  .msec-glyph * { transform-box: fill-box; }

  /* ── text ── */
  .msec-page { stroke-dasharray: 1; animation: msec-page 6s ease-in-out infinite; }
  @keyframes msec-page {
    0% { stroke-dashoffset: 1; } 10%, 92% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 0; }
  }
  .msec-line { stroke-dasharray: 1 1; stroke-dashoffset: 1; }
  ${TEXT_LINES.map((_, i) => `.msec-line--${i} { animation: msec-write-${i} 6s linear infinite; }`).join('\n')}
  ${textKeyframes()}
  .msec-caret { animation: msec-caret 6s linear infinite; }
  .msec-caret rect { animation: msec-blink .55s steps(1) infinite; }
  @keyframes msec-blink { 50% { opacity: .15; } }

  /* ── image ── */
  .msec-frame { stroke-dasharray: 1; stroke-dashoffset: 1; animation: msec-frame 7s ease-in-out infinite; }
  @keyframes msec-frame { 0% { stroke-dashoffset: 1; } 12%, 100% { stroke-dashoffset: 0; } }
  .msec-ridge { stroke-dasharray: 1; stroke-dashoffset: 1; animation: msec-ridge 7s ease-in-out infinite; }
  @keyframes msec-ridge {
    0%, 10% { stroke-dashoffset: 1; } 30%, 100% { stroke-dashoffset: 0; }
  }
  .msec-wash { transform-origin: 0 50%; transform: scaleX(0); animation: msec-wash 7s cubic-bezier(.6,.05,.2,1) infinite; }
  @keyframes msec-wash {
    0%, 26% { transform: scaleX(0); } 52%, 88% { transform: scaleX(1); } 96%, 100% { transform: scaleX(1); opacity: 0; }
  }
  .msec-sun { animation: msec-sun 7s cubic-bezier(.3,.7,.2,1) infinite; }
  @keyframes msec-sun {
    0%, 30% { transform: translateY(9px); opacity: 0; } 55%, 90% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(0); opacity: 0; }
  }
  .msec-rays { transform-origin: 50% 50%; animation: msec-spin 9s linear infinite; }
  @keyframes msec-spin { to { transform: rotate(360deg); } }
  .msec-spark { transform-origin: 50% 50%; animation: msec-spark 7s ease-in-out infinite; }
  @keyframes msec-spark {
    0%, 56% { transform: scale(0) rotate(0deg); opacity: 0; }
    66% { transform: scale(1.25) rotate(45deg); opacity: 1; }
    76% { transform: scale(.8) rotate(90deg); opacity: .9; }
    86% { transform: scale(1.1) rotate(135deg); opacity: 1; }
    96%, 100% { transform: scale(0) rotate(180deg); opacity: 0; }
  }
  .msec-scan { animation: msec-scan 7s ease-in-out infinite; }
  @keyframes msec-scan {
    0%, 26% { transform: translateX(0); opacity: 0; } 30% { opacity: .9; }
    52% { transform: translateX(31px); opacity: .9; } 56%, 100% { transform: translateX(31px); opacity: 0; }
  }

  /* ── video ── */
  .msec-holes { animation: msec-film 1.1s linear infinite; }
  @keyframes msec-film { to { transform: translateX(-7px); } }
  .msec-ring { transform-origin: 50% 50%; animation: msec-ring 2.2s ease-out infinite; }
  @keyframes msec-ring {
    0% { transform: scale(.5); opacity: .8; } 100% { transform: scale(1.7); opacity: 0; }
  }
  .msec-play { transform-origin: 40% 50%; animation: msec-play 2.2s ease-in-out infinite; }
  @keyframes msec-play {
    0%, 100% { transform: scale(1); } 18% { transform: scale(1.22); } 36% { transform: scale(.96); }
  }
  .msec-progress { transform-origin: 0 50%; animation: msec-progress 5s linear infinite; }
  @keyframes msec-progress { 0% { transform: scaleX(0); } 92%, 100% { transform: scaleX(1); } }
  .msec-head { animation: msec-head 5s linear infinite; }
  @keyframes msec-head { 0% { transform: translateX(0); } 92%, 100% { transform: translateX(30px); } }

  @media (prefers-reduced-motion: reduce) {
    .msec-glyph *, .msec-glyph { animation: none !important; }
    .msec-line, .msec-frame, .msec-ridge, .msec-page { stroke-dashoffset: 0 !important; }
    .msec-wash { transform: scaleX(1) !important; }
    .msec-sun, .msec-spark { transform: none !important; opacity: 1 !important; }
    .msec-ring, .msec-scan, .msec-caret { opacity: 0 !important; }
    .msec-progress { transform: scaleX(.45) !important; }
    .msec-head { transform: translateX(14px) !important; }
  }

  /* ── section header chrome ── */
  .msec-head-row {
    position: sticky; top: -6px; z-index: 2;
    display: flex; align-items: center; gap: 10px;
    padding: 10px 8px 8px; margin: 0 -6px;
    background: #17171d;
    border-bottom: 1px solid #23232f;
  }
  .msec-glyph-wrap {
    flex-shrink: 0; display: grid; place-items: center;
    width: 44px; height: 44px; border-radius: 12px;
    background: var(--msec-tint); border: 1px solid var(--msec-edge);
  }
  .msec-title { font-size: 13px; font-weight: 700; color: #ececf3; line-height: 1.15; }
  .msec-note { font-size: 11px; color: #7d7d90; margin-top: 2px; }
  .msec-count {
    margin-left: auto; font-size: 11px; font-weight: 700; color: var(--msec-ink);
    background: var(--msec-tint); border: 1px solid var(--msec-edge);
    border-radius: 999px; padding: 2px 9px;
  }
  .msec-head-row--text { --msec-ink: #a5b4fc; --msec-tint: rgba(99,102,241,.16); --msec-edge: rgba(129,140,248,.45); }
  .msec-head-row--image { --msec-ink: #fbbf24; --msec-tint: rgba(251,191,36,.10); --msec-edge: rgba(251,191,36,.30); }
  .msec-head-row--video { --msec-ink: #67e8f9; --msec-tint: rgba(34,211,238,.10); --msec-edge: rgba(34,211,238,.30); }
  /* Text is the primary section: bigger title, accent rail, glowing tile. */
  .msec-head-row--text { padding-top: 12px; border-bottom-color: rgba(129,140,248,.4); box-shadow: inset 3px 0 0 #6366f1; }
  .msec-head-row--text .msec-title { font-size: 15px; }
  .msec-head-row--text .msec-glyph-wrap { box-shadow: 0 0 18px rgba(99,102,241,.35); }
  .msec-head-row--image .msec-glyph-wrap, .msec-head-row--video .msec-glyph-wrap { width: 38px; height: 38px; }
  .msec-head-row--image .msec-title, .msec-head-row--video .msec-title { color: #b4b4c4; font-weight: 600; }
`

// ── glyphs ───────────────────────────────────────────────────────────────────

const TextGlyph = ({ size }) => (
  <svg className="msec-glyph" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path className="msec-page" pathLength="1" d="M13 6h16l8 8v26a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      stroke="#818cf8" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M29 6v6a2 2 0 0 0 2 2h6" stroke="#818cf8" strokeWidth="1.4" strokeLinejoin="round" opacity=".55" />
    {TEXT_LINES.map((l, i) => (
      <path key={i} className={`msec-line msec-line--${i}`} pathLength="1"
        d={`M13 ${l.y}H${l.x2}`} stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" />
    ))}
    <g className="msec-caret"><rect x="0" y="-4" width="2" height="8" rx="1" fill="#fbbf24" /></g>
  </svg>
)

const ImageGlyph = ({ size }) => {
  const uid = useId().replace(/:/g, '')
  return (
    <svg className="msec-glyph" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <clipPath id={`${uid}-in`}><rect x="9" y="11" width="30" height="26" rx="3" /></clipPath>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f59e0b" stopOpacity=".55" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity=".35" />
        </linearGradient>
        <linearGradient id={`${uid}-hill`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbbf24" stopOpacity=".5" />
          <stop offset="1" stopColor="#f97316" stopOpacity=".25" />
        </linearGradient>
      </defs>

      <g clipPath={`url(#${uid}-in)`}>
        <rect className="msec-wash" x="9" y="11" width="30" height="26" fill={`url(#${uid}-sky)`} />
        <g className="msec-sun">
          <g className="msec-rays" style={{ transformOrigin: '30px 21px' }}>
            {Array.from({ length: 8 }, (_, i) => (
              <line key={i} x1="30" y1="14.6" x2="30" y2="16.6" stroke="#fde68a" strokeWidth="1.2" strokeLinecap="round"
                transform={`rotate(${i * 45} 30 21)`} />
            ))}
          </g>
          <circle cx="30" cy="21" r="3.6" fill="#fbbf24" />
        </g>
        <path className="msec-wash" d="M9 37V30l8-8 7 7 5-4 10 9v3Z" fill={`url(#${uid}-hill)`} />
        <rect className="msec-scan" x="9" y="11" width="3" height="26" fill="#fff" opacity="0" />
      </g>

      <rect className="msec-frame" pathLength="1" x="9" y="11" width="30" height="26" rx="3" stroke="#fbbf24" strokeWidth="1.6" />
      <path className="msec-ridge" pathLength="1" d="M9 30l8-8 7 7 5-4 10 9" stroke="#fde68a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      <path className="msec-spark" d="M39 4l1.3 3.2L43.5 8.5l-3.2 1.3L39 13l-1.3-3.2L34.5 8.5l3.2-1.3Z" fill="#fde68a" />
    </svg>
  )
}

const VideoGlyph = ({ size }) => {
  const uid = useId().replace(/:/g, '')
  return (
    <svg className="msec-glyph" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <clipPath id={`${uid}-strip`}><rect x="5" y="9" width="38" height="30" rx="4" /></clipPath>
      </defs>
      <rect x="5" y="9" width="38" height="30" rx="4" stroke="#67e8f9" strokeWidth="1.6" />

      <g clipPath={`url(#${uid}-strip)`}>
        {/* scrolling sprocket holes, top and bottom */}
        <g className="msec-holes">
          {Array.from({ length: 8 }, (_, i) => (
            <g key={i}>
              <rect x={5 + i * 7} y="11" width="3.4" height="3" rx=".8" fill="#22d3ee" opacity=".55" />
              <rect x={5 + i * 7} y="30" width="3.4" height="3" rx=".8" fill="#22d3ee" opacity=".55" />
            </g>
          ))}
        </g>
        <rect x="5" y="16" width="38" height="12" fill="#0e7490" opacity=".22" />
      </g>

      {/* pulsing play mark with ripple */}
      <circle className="msec-ring" cx="24" cy="22" r="6" stroke="#67e8f9" strokeWidth="1.2" />
      <path className="msec-play" d="M21.4 18.2v7.6a.7.7 0 0 0 1.05.6l6.3-3.8a.7.7 0 0 0 0-1.2l-6.3-3.8a.7.7 0 0 0-1.05.6Z" fill="#a5f3fc" />

      {/* timeline scrub */}
      <line x1="9" y1="36" x2="39" y2="36" stroke="#22d3ee" strokeWidth="1.4" strokeLinecap="round" opacity=".25" />
      <line className="msec-progress" x1="9" y1="36" x2="39" y2="36" stroke="#67e8f9" strokeWidth="1.8" strokeLinecap="round" />
      <circle className="msec-head" cx="9" cy="36" r="2" fill="#ecfeff" />
    </svg>
  )
}

const GLYPHS = { text: TextGlyph, image: ImageGlyph, video: VideoGlyph }

export function ModelSectionStyles() {
  return <style>{STYLES}</style>
}

export default function ModelSectionTitle({ kind, title, note, count }) {
  const Glyph = GLYPHS[kind] ?? TextGlyph
  const size = kind === 'text' ? 38 : 32
  return (
    <div className={`msec-head-row msec-head-row--${kind}`} role="presentation">
      <span className="msec-glyph-wrap"><Glyph size={size} /></span>
      <span>
        <div className="msec-title">{title}</div>
        <div className="msec-note">{note}</div>
      </span>
      <span className="msec-count">{count}</span>
    </div>
  )
}
