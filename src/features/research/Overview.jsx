import { useState } from 'react'
import { health, nextActions, PHASES, fmtDate } from '../../lib/research/planner'
import { lookupDoi } from '../../lib/research/scholar'
import { download } from '../../lib/research/store'
import { claimLabel } from '../../lib/research/insights'
import { makeId } from '../../lib/localStore'
import { Field, LinesField, Metric, Ring } from './ui'

const DESIGNS = ['', 'Cross-sectional survey', 'Correlational', 'Longitudinal', 'Experimental / quasi-experimental', 'Qualitative (interviews / thematic)', 'Case study', 'Mixed methods', 'Systematic review']
const classify = (t) => {
  if (/10\.\d{4,9}\/\S+/.test(t)) return 'reference'
  if (/^https?:/i.test(t)) return 'link'
  if (/\?\s*$/.test(t)) return 'question'
  if (/^(todo|need to|must|remember|email|ask|send|book)\b/i.test(t)) return 'task'
  if (/grant|funding|call for|conference|scholarship/i.test(t)) return 'opportunity'
  return 'idea'
}
const KIND = { reference: '📄', link: '🔗', question: '❓', task: '✅', opportunity: '💰', idea: '💡' }

export function statusReport(p) {
  const h = health(p), d = (t) => new Date(t).toLocaleString()
  return `# ${p.title} — research status\n_Generated ${d(Date.now())}_\n\n**Overall progress:** ${h.overall}%  ·  **Health:** ${h.rag}\n**Design:** ${p.design || '—'}  ·  **Sample:** ${p.sampleSize || '—'}  ·  **Deadline:** ${p.deadline || '—'}\n\n## Research questions\n${p.rq.map((x) => `- ${x}`).join('\n') || '—'}\n\n## Objectives\n${p.objectives.map((x) => `- ${x}`).join('\n') || '—'}\n\n## Hypotheses\n${p.hypotheses.map((x) => `- ${x}`).join('\n') || '—'}\n\n## Literature\n${p.papers.length} papers · ${p.papers.filter((x) => x.status === 'analysed').length} analysed · ${p.papers.filter((x) => x.retracted).length} retracted\n\n## Writing\n${p.chapters.map((c) => `- ${c.name}: ${c.status}`).join('\n')}\n\n## Claims & evidence\n${p.claims.map((c) => `- [${c.label || claimLabel(c)}] ${c.text} (${c.evidence.length} sources)`).join('\n') || '—'}\n\n## Open supervisor feedback\n${p.feedback.filter((f) => !f.resolved).map((f) => `- ${f.text}`).join('\n') || 'None'}\n\n## Decisions\n${p.decisions.map((x) => `- ${x.date}: ${x.decision} — ${x.reason}`).join('\n') || '—'}\n`
}
export const aiRecord = (p) => `# AI Research Record — ${p.title}\n\nCourse AI policy: ${Object.entries(p.policy).map(([k, v]) => `${k} ${v ? 'allowed' : 'NOT allowed'}`).join(', ')}\n\n${p.aiLog.map((l) => `- ${new Date(l.at).toLocaleString()} · ${l.tool} · ${l.action} · ${l.status}`).join('\n') || 'No AI assistance used.'}\n`

export default function Overview({ project: p, update, go, toast, store }) {
  const [cap, setCap] = useState('')
  const [busy, setBusy] = useState(false)
  const h = health(p)
  const acts = nextActions(p, h)
  const set = (patch) => update((x) => ({ ...x, ...patch }))

  const capture = async () => {
    const t = cap.trim(); if (!t) return
    setCap('')
    const kind = classify(t)
    update((x) => ({ ...x, ideas: [{ id: makeId(), text: t, kind, at: Date.now() }, ...x.ideas] }), { xp: 1 })
    if (kind === 'reference') {
      setBusy(true)
      try {
        const paper = await lookupDoi(t.match(/10\.\d{4,9}\/\S+/)[0].replace(/[.,;)]+$/, ''))
        update((x) => (x.papers.some((q) => q.doi && q.doi === paper.doi) ? x : { ...x, papers: [paper, ...x.papers] }), { xp: 2 })
        toast(`Added “${paper.title.slice(0, 50)}…” to your matrix`)
      } catch (e) { toast(e.message) } finally { setBusy(false) }
    }
  }
  const delProject = () => { if (window.confirm(`Delete “${p.title}” and everything in it? This cannot be undone.`)) store.remove(p.id) }
  const importFile = async (e) => {
    const f = e.target.files?.[0]; if (!f) return
    try { toast(`Imported ${store.importAll(await f.text())} project(s)`) } catch (err) { toast(err.message) }
    e.target.value = ''
  }

  return (
    <>
      <div className="rs-grid">
        <div className="rs-card">
          <div className="rs-row"><Ring pct={h.overall} />
            <div><div className="rs-row"><span className={`rs-rag ${h.rag}`} /><b>{{ green: 'On track', amber: 'Needs attention', red: 'At risk' }[h.rag]}</b></div>
              <p className="rs-mute">{h.idle === 0 ? 'Active today' : `Last activity ${h.idle} day${h.idle > 1 ? 's' : ''} ago`}{h.plan && !h.plan.past ? ` · ${h.plan.daysLeft} days to submission` : ''}</p>
              <p className="rs-mute">Health is visible only to you — it is derived from your activity, deadlines and open feedback.</p></div></div>
          <Metric label="Literature" pct={h.lit * 100} /><Metric label="Evidence" pct={h.supported * 100} />
          <Metric label="Writing" pct={h.writing * 100} /><Metric label="Feedback resolved" pct={h.fb * 100} />
        </div>

        <div className="rs-card"><h3>Next best actions</h3>
          <div className="rs-list">{acts.length ? acts.map((a) => (
            <button key={a.text} className="rs-item" style={{ textAlign: 'left', cursor: 'pointer', color: 'inherit' }} onClick={() => go(a.tab)}>{a.text} →</button>
          )) : <p className="rs-mute">Nothing urgent. Keep going.</p>}</div>
        </div>

        <div className="rs-card span"><h3>Research inbox</h3>
          <p className="rs-mute">Drop anything — an idea, a DOI, a to-do, a question. DOIs are fetched into your literature matrix automatically.</p>
          <div className="rs-row"><input className="hub-input" style={{ flex: 1 }} placeholder="e.g. Maybe fear of evaluation mediates social media → anxiety?" value={cap}
            onChange={(e) => setCap(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && capture()} />
            <button className="hub-btn" disabled={busy} onClick={capture}>{busy ? 'Fetching…' : 'Capture'}</button></div>
          <div className="rs-list" style={{ marginTop: 10 }}>{p.ideas.slice(0, 8).map((i) => (
            <div key={i.id} className="rs-item rs-row sb"><span>{KIND[i.kind]} {i.text}</span>
              <button className="hub-btn hub-btn-ghost rs-btn-sm" aria-label="Remove" onClick={() => update((x) => ({ ...x, ideas: x.ideas.filter((q) => q.id !== i.id) }))}>✕</button></div>))}</div>
        </div>
      </div>

      <div className="rs-grid">
        <div className="rs-card rs-stack"><h3>Project foundation</h3>
          <Field label="Title"><input className="hub-input" value={p.title} onChange={(e) => set({ title: e.target.value })} /></Field>
          <Field label="Field / discipline"><input className="hub-input" value={p.field} onChange={(e) => set({ field: e.target.value })} placeholder="e.g. Educational psychology" /></Field>
          <div className="rs-row">
            <Field label="Design"><select className="hub-select" value={p.design} onChange={(e) => set({ design: e.target.value })}>{DESIGNS.map((d) => <option key={d}>{d}</option>)}</select></Field>
            <Field label="Sample size"><input className="hub-input" inputMode="numeric" value={p.sampleSize} onChange={(e) => set({ sampleSize: e.target.value })} /></Field>
            <Field label="Submission date"><input className="hub-input" type="date" value={p.deadline} onChange={(e) => set({ deadline: e.target.value })} /></Field>
          </div>
          <LinesField label="Research questions (one per line)" value={p.rq} onChange={(rq) => set({ rq })} />
          <LinesField label="Objectives" value={p.objectives} onChange={(objectives) => set({ objectives })} />
          <LinesField label="Hypotheses" value={p.hypotheses} onChange={(hypotheses) => set({ hypotheses })} />
        </div>

        <div className="rs-card"><h3>Deadline engine</h3>
          {!h.plan ? <p className="rs-mute">Set a submission date and the plan is built backwards from it, re-planning around what you have finished.</p> : (
            <>
              <p>{h.plan.past ? '⚠ Deadline has passed.' : h.plan.onTrack ? `${h.plan.daysLeft} days left — the plan fits.` : `⚠ ${h.plan.daysLeft} days left is tight for the remaining phases. Talk to your supervisor about scope.`}</p>
              <div className="rs-list">{h.plan.plan.map((ph) => (
                <label key={ph.key} className={`rs-item rs-row sb ${ph.done ? 'done' : ''}`}>
                  <span><input type="checkbox" checked={!!ph.done} onChange={() => set({ phasesDone: ph.done ? p.phasesDone.filter((k) => k !== ph.key) : [...p.phasesDone, ph.key] })} /> {ph.name}</span>
                  {!ph.done && <span className={`rs-chip ${ph.overdue ? 'bad' : ''}`}>{fmtDate(ph.start)} → {fmtDate(ph.due)}</span>}
                </label>))}</div>
            </>)}
        </div>

        <div className="rs-card rs-stack"><h3>AI use &amp; policy</h3>
          <p className="rs-mute">Set what your course allows. The Lab warns before an AI action that your policy forbids, and keeps an honest record you can show.</p>
          {[['brainstorm', 'Brainstorming'], ['grammar', 'Grammar & clarity'], ['summarise', 'Summarising sources'], ['draft', 'AI-drafted text']].map(([k, label]) => (
            <label key={k} className="rs-row sb"><span>{label}</span>
              <input type="checkbox" checked={p.policy[k]} onChange={(e) => set({ policy: { ...p.policy, [k]: e.target.checked } })} /></label>))}
          <div className="rs-row">
            <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => download(`${p.title}-ai-record.md`, aiRecord(p))}>Export AI record ({p.aiLog.length})</button>
          </div>
        </div>
      </div>

      <div className="rs-card rs-row">
        <button className="hub-btn" onClick={() => download(`${p.title}-status.md`, statusReport(p))}>Status report (.md)</button>
        <button className="hub-btn hub-btn-ghost" onClick={() => download('research-lab-backup.json', store.exportAll(), 'application/json')}>Backup all (.json)</button>
        <label className="hub-btn hub-btn-ghost" style={{ cursor: 'pointer' }}>Restore backup<input type="file" accept=".json" hidden onChange={importFile} /></label>
        <button className="hub-btn hub-btn-danger" onClick={delProject}>Delete project</button>
        <span className="rs-mute">Stored on this device only — back up before clearing browser data.</span>
      </div>
    </>
  )
}
