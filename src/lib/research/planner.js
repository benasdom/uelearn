// Deadline engine + project health. Works backwards from the final submission date and
// re-plans around whatever is already done.
export const PHASES = [
  { key: 'proposal', name: 'Proposal', w: 8 }, { key: 'lit', name: 'Literature review', w: 22 },
  { key: 'method', name: 'Methodology', w: 10 }, { key: 'ethics', name: 'Ethics approval', w: 5 },
  { key: 'data', name: 'Data collection', w: 18 }, { key: 'analysis', name: 'Analysis', w: 12 },
  { key: 'writing', name: 'Discussion & writing', w: 15 }, { key: 'review', name: 'Supervisor review', w: 6 },
  { key: 'final', name: 'Final editing & submission', w: 4 },
]
const DAY = 864e5
export const fmtDate = (t) => new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })

export function buildPlan(deadline, done = [], now = Date.now()) {
  if (!deadline) return null
  const end = new Date(`${deadline}T23:59:59`).getTime()
  if (!Number.isFinite(end)) return null
  const daysLeft = Math.ceil((end - now) / DAY)
  const usable = Math.max(1, daysLeft - Math.max(3, Math.round(daysLeft * 0.05))) // keep a safety buffer
  const pending = PHASES.filter((p) => !done.includes(p.key)), totalW = pending.reduce((s, p) => s + p.w, 0) || 1
  let cursor = now
  const plan = PHASES.map((p) => {
    if (done.includes(p.key)) return { ...p, done: true }
    const days = Math.max(1, Math.round((usable * p.w) / totalW)), start = cursor
    cursor += days * DAY
    return { ...p, days, start, due: cursor, overdue: daysLeft > 0 && cursor < now }
  })
  return { plan, daysLeft, onTrack: daysLeft >= pending.length * 2, past: daysLeft < 0 }
}

const chapterW = { todo: 0, draft: 0.4, review: 0.75, done: 1 }
export function health(p, now = Date.now()) {
  const n = p.papers.length, analysed = p.papers.filter((x) => x.status === 'analysed').length
  const lit = n ? analysed / n : 0
  const writing = p.chapters.reduce((s, c) => s + chapterW[c.status], 0) / p.chapters.length
  const fb = p.feedback.length ? p.feedback.filter((f) => f.resolved).length / p.feedback.length : 1
  const supported = p.claims.length ? p.claims.filter((c) => c.evidence.some((e) => e.stance === 'supports')).length / p.claims.length : 0
  const setup = [p.rq.length, p.objectives.length, p.design, p.sampleSize, p.deadline].filter((v) => (Array.isArray(v) ? v.length : v)).length / 5
  const overall = Math.round((setup * 0.1 + lit * 0.25 + supported * 0.15 + writing * 0.35 + fb * 0.1 + (p.phasesDone.length / PHASES.length) * 0.05) * 100)
  const idle = Math.floor((now - p.touchedAt) / DAY)
  const plan = buildPlan(p.deadline, p.phasesDone, now)
  const overdue = plan?.plan.filter((x) => x.overdue).length || 0
  const open = p.feedback.filter((f) => !f.resolved).length
  const risk = (idle >= 21 ? 2 : idle >= 10 ? 1 : 0) + (overdue ? 1 : 0) + (plan && !plan.onTrack ? 2 : 0) + (open > 5 ? 1 : 0)
  return { overall, lit, writing, fb, supported, setup, idle, overdue, open, plan, rag: risk >= 3 ? 'red' : risk >= 1 ? 'amber' : 'green' }
}

/** The single most useful thing to do next, chosen from the project's actual state. */
export function nextActions(p, h) {
  const a = []
  if (!p.rq.length) a.push({ text: 'Write your research question(s) — everything else hangs on them.', tab: 'overview' })
  if (!p.deadline) a.push({ text: 'Set your submission date so the deadline engine can plan backwards.', tab: 'overview' })
  if (p.papers.length < 10) a.push({ text: `Collect more literature (${p.papers.length} papers so far).`, tab: 'discover' })
  const toRead = p.papers.filter((x) => x.status !== 'analysed' && x.relevance >= 4)
  if (toRead.length) a.push({ text: `Analyse ${toRead.length} high-relevance paper${toRead.length > 1 ? 's' : ''} in the matrix.`, tab: 'matrix' })
  if (h.open) a.push({ text: `Resolve ${h.open} open supervisor comment${h.open > 1 ? 's' : ''}.`, tab: 'supervisor' })
  const bare = p.claims.filter((c) => !c.evidence.length).length
  if (bare) a.push({ text: `${bare} claim${bare > 1 ? 's' : ''} have no evidence attached.`, tab: 'evidence' })
  if (p.papers.some((x) => x.retracted)) a.push({ text: 'A retracted paper is in your library — remove it or flag it.', tab: 'matrix' })
  if (h.overdue) a.push({ text: `${h.overdue} planned phase${h.overdue > 1 ? 's are' : ' is'} overdue — mark done or re-plan.`, tab: 'overview' })
  const next = p.chapters.find((c) => c.status === 'todo' || c.status === 'draft')
  if (next) a.push({ text: `Keep writing: ${next.name} is ${next.status === 'todo' ? 'not started' : 'in draft'}.`, tab: 'write' })
  return a.slice(0, 4)
}
