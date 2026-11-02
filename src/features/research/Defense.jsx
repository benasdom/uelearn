import { useEffect, useMemo, useRef, useState } from 'react'
import { vivaQuestions, coachAnswer, ethicsDraft } from '../../lib/research/critic'
import { loadState, saveState, makeId } from '../../lib/localStore'
import { initialCardState } from '../../lib/spacedRepetition'
import { download } from '../../lib/research/store'
import { copy } from './ui'

const SR = typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null

export default function Defense({ project: p, update, toast }) {
  const qs = useMemo(() => vivaQuestions(p), [p])
  const [i, setI] = useState(0)
  const [ans, setAns] = useState('')
  const [coach, setCoach] = useState(null)
  const [secs, setSecs] = useState(0)
  const [rec, setRec] = useState(false)
  const recog = useRef(null)
  const [eth, setEth] = useState({ participants: '', age: '', n: '', recruit: '', minors: false, sensitive: '', deidentified: true, anon: true, storage: '', retention: '', benefit: '', compensation: '', coi: '' })
  const [ethOut, setEthOut] = useState('')
  const q = qs[i % qs.length]

  useEffect(() => { const id = setInterval(() => setSecs((s) => s + 1), 1000); return () => clearInterval(id) }, [i])
  useEffect(() => () => recog.current?.stop?.(), [])
  const go = (n) => { setI(n); setAns(''); setCoach(null); setSecs(0) }
  const dictate = () => {
    if (rec) { recog.current?.stop(); return }
    const r = new SR(); r.continuous = true; r.interimResults = false
    r.onresult = (e) => setAns((a) => `${a} ${[...e.results].slice(e.resultIndex).map((x) => x[0].transcript).join(' ')}`.trim())
    r.onend = () => setRec(false); r.onerror = () => setRec(false)
    recog.current = r; r.start(); setRec(true)
  }
  const flash = () => {
    saveState('flashcard-decks', [{ id: makeId(), name: `${p.title} — viva prep`, cards: qs.map((x) => ({ id: makeId(), front: x.q, back: `[${x.cat}] Prepare your answer — then write it here.`, srs: initialCardState() })) }, ...loadState('flashcard-decks', [])])
    toast(`Created a ${qs.length}-card viva deck`)
  }

  return (
    <>
      <div className="rs-grid">
        <div className="rs-card rs-stack"><div className="rs-row sb"><h3>Viva simulator</h3><span className="rs-chip">{(i % qs.length) + 1} / {qs.length}</span></div>
          <div className="rs-item"><span className="rs-chip info">{q.cat}</span> <b>{q.q}</b></div>
          <div className="rs-mute">⏱ {Math.floor(secs / 60)}:{String(secs % 60).padStart(2, '0')} — aim for 60–90 seconds</div>
          <textarea className="hub-textarea" rows={5} placeholder="Answer as you would out loud (type, or dictate)…" value={ans} onChange={(e) => setAns(e.target.value)} />
          <div className="rs-row">
            {SR && <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={dictate}>{rec ? '⏹ Stop' : '🎙 Dictate'}</button>}
            <button className="hub-btn rs-btn-sm" disabled={!ans.trim()} onClick={() => { setCoach(coachAnswer(ans, p)); update((x) => x, { xp: 2 }) }}>Coach my answer</button>
            <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => go(i + 1)}>Next question →</button>
            <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => go(Math.floor(Math.random() * qs.length))}>🎲 Random</button>
          </div>
          {coach && <div className="rs-list"><b>Answer strength {coach.score}%</b>{coach.notes.map((n, k) => <div key={k} className="rs-item">{n.ok ? '✓' : '⚠'} {n.t}</div>)}</div>}
          <p className="rs-mute">Questions come from your own project — hypotheses, design, sample, contradicting evidence, and your literature’s blind spots.</p>
        </div>

        <div className="rs-card rs-stack"><h3>Prep tools</h3>
          <button className="hub-btn hub-btn-ghost" onClick={flash}>→ Turn all {qs.length} questions into flashcards</button>
          <button className="hub-btn hub-btn-ghost" onClick={() => download(`${p.title}-viva-questions.md`, qs.map((x, k) => `${k + 1}. [${x.cat}] ${x.q}`).join('\n'))}>Download question list</button>
          <div className="rs-item"><b>Defence checklist</b>
            {['One-sentence answer to “so what?”', 'Can you defend every design choice? (see Decision log)', 'Know your three biggest limitations', 'Know your strongest contradicting study', 'Rehearse out loud, timed'].map((c) => <label key={c} style={{ display: 'block', marginTop: 4 }}><input type="checkbox" /> {c}</label>)}</div>
        </div>
      </div>

      <div className="rs-card rs-stack"><h3>Ethics application assistant</h3>
        <p className="rs-mute">Answer a few questions and get a structured draft. Your institution’s ethics committee template and rules always take precedence.</p>
        <div className="rs-grid" style={{ marginBottom: 0 }}>
          {[['participants', 'Who are the participants?'], ['age', 'Age group'], ['n', 'Approx. number'], ['recruit', 'How will you recruit?'], ['sensitive', 'Sensitive topics (leave blank if none)'], ['storage', 'Where will data be stored?'], ['retention', 'Retention period'], ['benefit', 'Benefits to participants/society'], ['compensation', 'Compensation'], ['coi', 'Conflicts of interest']].map(([k, l]) => (
            <label key={k} className="rs-field">{l}<input className="hub-input" value={eth[k]} onChange={(e) => setEth({ ...eth, [k]: e.target.value })} /></label>))}
        </div>
        <div className="rs-row">{[['minors', 'Participants under 18'], ['anon', 'Responses are anonymous'], ['deidentified', 'Data can be de-identified']].map(([k, l]) => <label key={k} className="rs-row"><input type="checkbox" checked={eth[k]} onChange={(e) => setEth({ ...eth, [k]: e.target.checked })} /> {l}</label>)}
          <button className="hub-btn" onClick={() => setEthOut(ethicsDraft({ ...eth, title: p.title }))}>Generate draft</button></div>
        {ethOut && <><div className="rs-pre">{ethOut}</div><button className="hub-btn hub-btn-ghost rs-btn-sm" style={{ justifySelf: 'start' }} onClick={async () => toast((await copy(ethOut)) ? 'Draft copied' : 'Copy failed')}>Copy</button></>}
      </div>
    </>
  )
}
