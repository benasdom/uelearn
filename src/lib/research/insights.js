// Evidence-base analytics: research gaps, blind spots, and "why do results differ?".
// Everything is computed from the user's own matrix and returns the papers used,
// so every claim the system makes can be audited.
const designOf = (t = '') => {
  const s = t.toLowerCase()
  if (!s.trim()) return null
  if (/review|meta/.test(s)) return 'Review / meta-analysis'
  if (/longitud|cohort|panel/.test(s)) return 'Longitudinal'
  if (/experiment|rct|trial|quasi/.test(s)) return 'Experimental'
  if (/qualitat|interview|focus|thematic|case/.test(s)) return 'Qualitative'
  if (/mixed/.test(s)) return 'Mixed methods'
  if (/cross|survey|correlat|questionnaire/.test(s)) return 'Cross-sectional / survey'
  return 'Other'
}
const confidence = (n) => (n >= 30 ? 'High' : n >= 10 ? 'Moderate' : 'Low')
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0)

export function dist(papers, fn) {
  const m = {}
  papers.forEach((p) => { const k = fn(p); if (k) (m[k] ||= []).push(p) })
  return Object.entries(m).map(([label, list]) => ({ label, n: list.length, papers: list })).sort((a, b) => b.n - a.n)
}

export function blindSpots(papers, target = 'Africa') {
  const N = papers.length, out = []
  if (N < 5) return { N, spots: [], regions: dist(papers, (p) => p.region), designs: [] , note: 'Add at least 5 papers to see blind spots.' }
  const regions = dist(papers, (p) => p.region || 'Unknown'), designs = dist(papers, (p) => designOf(p.design))
  const t = papers.filter((p) => p.region === target)
  if (pct(t.length, N) < 20) out.push({ title: `Only ${t.length} of ${N} studies (${pct(t.length, N)}%) come from ${target}`, why: `Region is inferred from author affiliations (edit it per paper). Findings from other contexts may not transfer to ${target}.`, confidence: confidence(N), papers: t })
  const d = designs.reduce((s, x) => s + x.n, 0)
  if (d >= 5 && designs[0] && pct(designs[0].n, d) >= 60) out.push({ title: `${pct(designs[0].n, d)}% of designs are ${designs[0].label}`, why: 'A literature dominated by one design inherits its limits (e.g. cross-sectional evidence cannot show causation).', confidence: confidence(d), papers: designs[0].papers })
  const old = papers.filter((p) => p.year && new Date().getFullYear() - p.year > 10)
  if (pct(old.length, N) >= 40) out.push({ title: `${pct(old.length, N)}% of your sources are over 10 years old`, why: 'The field may have moved on; look for recent reviews and replications.', confidence: confidence(N), papers: old })
  const oa = papers.filter((p) => !p.oa?.isOa)
  if (pct(oa.length, N) >= 60) out.push({ title: `${pct(oa.length, N)}% of sources are paywalled`, why: 'Open-access evidence is easier for examiners and readers to verify — check repositories for legitimate free versions.', confidence: 'Low', papers: oa })
  const lowRel = papers.filter((p) => p.status === 'analysed' && p.relevance <= 2)
  if (lowRel.length >= 3) out.push({ title: `${lowRel.length} analysed papers are rated low-relevance`, why: 'Consider pruning — breadth is not the same as depth.', confidence: 'Low', papers: lowRel })
  return { N, spots: out, regions, designs }
}

export function whyDiffer(support, contra) {
  const diffs = []
  const cmp = (label, fn) => {
    const a = new Set(support.map(fn).filter(Boolean)), b = new Set(contra.map(fn).filter(Boolean))
    if (a.size && b.size && ![...a].some((x) => b.has(x))) diffs.push(`${label}: supporting studies — ${[...a].join(', ')}; contradicting — ${[...b].join(', ')}`)
  }
  cmp('Region', (p) => p.region !== 'Unknown' && p.region)
  cmp('Design', (p) => designOf(p.design))
  cmp('Country', (p) => p.country)
  cmp('Method', (p) => p.method)
  const med = (l) => { const n = l.map((p) => parseInt(String(p.sample).replace(/[, ]/g, ''), 10)).filter(Number.isFinite).sort((x, y) => x - y); return n.length ? n[Math.floor(n.length / 2)] : null }
  const [ma, mb] = [med(support), med(contra)]
  if (ma && mb && Math.max(ma, mb) / Math.min(ma, mb) >= 2) diffs.push(`Sample size: median n = ${ma} (supporting) vs ${mb} (contradicting)`)
  return diffs
}

/** Suggested trust label for a claim from its attached evidence. The user can override it. */
export function claimLabel(c) {
  const s = c.evidence.filter((e) => e.stance === 'supports').length, x = c.evidence.filter((e) => e.stance === 'contradicts').length, q = c.evidence.filter((e) => e.stance === 'qualifies').length
  if (s && x) return 'Conflict'
  if (s >= 2 && !q) return 'Verified'
  if (s || q) return 'Contextual'
  return 'Unverified'
}
