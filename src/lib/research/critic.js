// Rule-based academic critic — free, instant, private and explainable (every flag says WHY).
// It never rewrites your text; it teaches you what an examiner would notice.
const ABSOLUTE = /\b(always|never|proves?|proven|undeniabl[ey]|obviously|everyone|nobody|all students|no one|completely|definitely|without doubt|clearly shows?)\b/i
const CAUSAL = /\b(causes?|caused|leads? to|led to|results? in|resulted in|due to|impact(?:s|ed)? on|effect of|effects of|determines?|produces?)\b/i
const CLAIMY = /\b(studies show|research (?:shows|indicates|suggests)|it is (?:well )?known|evidence (?:shows|suggests)|experts? (?:agree|say)|scholars? (?:argue|agree))\b|\d+(?:\.\d+)?\s?%/i
const CITED = /\([^()]*?(?:19|20)\d{2}[a-z]?[^()]*?\)|\[\d+(?:[,–-]\s*\d+)*\]|\b[A-Z][a-z]+(?: et al\.)?\s*\((?:19|20)\d{2}\)/
const INFORMAL = /\b(a lot|lots of|really|very|stuff|things|get|got|kind of|sort of|basically|huge|big deal|nowadays)\b/i
const SYNTH = /\b(however|whereas|in contrast|conversely|similarly|taken together|by comparison|although|nevertheless|on the other hand|in line with|consistent with|contradict|diverg)\w*/gi
const HEDGE = /\b(may|might|suggests?|appears?|likely|tends? to|possibly|could|indicates?)\b/gi

const sentences = (t) => (t.replace(/\s+/g, ' ').match(/[^.!?]+(?:[.!?]+(?=\s|$)|$)/g) || []).map((s) => s.trim()).filter((s) => s.split(' ').length > 3)

export function critique(text, { design = '' } = {}) {
  const issues = [], sents = sentences(text)
  const crossSectional = /cross|correlat|survey/i.test(design)
  sents.forEach((s, i) => {
    const add = (type, severity, why, tip) => issues.push({ i, s, type, severity, why, tip })
    if (ABSOLUTE.test(s)) add('Overgeneralisation', 'high', `“${s.match(ABSOLUTE)[0]}” claims more certainty than most research can support.`, 'Soften to what the evidence shows: “suggests”, “in this sample”, “most of the studies reviewed”.')
    if (CAUSAL.test(s) && crossSectional) add('Causal language', 'high', `Your design (${design}) cannot establish cause and effect, but this sentence implies it.`, 'Use “is associated with” or “predicts”, and note the design limitation. Examiners attack this one.')
    if ((CLAIMY.test(s)) && !CITED.test(s)) add('Unsupported claim', 'high', 'This reads like a factual claim or statistic but has no citation.', 'Attach the source, or reword as your own reasoning. Use the Evidence tab to track support.')
    if (s.split(' ').length > 40) add('Long sentence', 'low', `${s.split(' ').length} words — readers lose the thread past ~35.`, 'Split at the conjunction; one idea per sentence.')
    if (INFORMAL.test(s)) add('Informal register', 'low', `“${s.match(INFORMAL)[0]}” is conversational.`, 'Prefer precise academic wording (“many”, “substantially”, “obtain”).')
  })
  const paras = text.split(/\n{2,}/).map((p) => p.trim()).filter((p) => p.split(' ').length > 25)
  paras.forEach((p) => {
    const cites = (p.match(new RegExp(CITED.source, 'g')) || []).length, synth = (p.match(SYNTH) || []).length
    if (cites >= 3 && synth === 0) issues.push({ i: -1, s: p.slice(0, 90) + '…', type: 'Descriptive, not analytical', severity: 'medium', why: `This paragraph lists ${cites} sources but never compares, contrasts or connects them — a “laundry list”.`, tip: 'Group sources by claim, then say where they agree, disagree, and why (different samples? methods?).' })
  })
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const cites = (text.match(new RegExp(CITED.source, 'g')) || []).length
  const synth = (text.match(SYNTH) || []).length, hedges = (text.match(HEDGE) || []).length
  const metrics = {
    words, sentences: sents.length, avgSentence: sents.length ? Math.round(words / sents.length) : 0,
    citations: cites, per1000: words ? Math.round((cites / words) * 1000) : 0, synthesis: synth, hedges,
    depth: Math.max(0, Math.min(100, Math.round(30 + synth * 8 + Math.min(hedges, 8) * 3 - issues.filter((x) => x.severity === 'high').length * 6))),
  }
  return { issues, metrics }
}

/** Examiner mode: questions an examiner could ask, derived from the project itself. */
export function examinerChallenges(p, text = '') {
  const q = [], n = Number(p.sampleSize)
  if (p.design) q.push({ cat: 'Methodology', q: `Why did you choose a ${p.design} design, and what would a different design have shown?` })
  if (/cross/i.test(p.design) && CAUSAL.test(text)) q.push({ cat: 'Critical', q: 'Your study is cross-sectional. Why does your discussion use causal language?' })
  if (n && n < 100) q.push({ cat: 'Validity', q: `Your sample is ${n}. How does this limit statistical power and external validity?` })
  if (!p.sampleSize) q.push({ cat: 'Validity', q: 'How did you justify your sample size?' })
  const af = p.papers.filter((x) => x.region === 'Africa').length
  if (p.papers.length >= 8 && af / p.papers.length < 0.15) q.push({ cat: 'Literature', q: 'Most of your literature comes from outside your study context. How do you justify applying it here?' })
  p.hypotheses.slice(0, 2).forEach((h) => q.push({ cat: 'Hypotheses', q: `What would it mean for your argument if “${h}” were not supported?` }))
  p.claims.filter((c) => c.evidence.some((e) => e.stance === 'contradicts')).slice(0, 2).forEach((c) => q.push({ cat: 'Literature', q: `Some studies contradict “${c.text.slice(0, 80)}”. How do you explain that?` }))
  return q
}

export function vivaQuestions(p) {
  const rq = p.rq[0] || 'your research question', obj = p.objectives[0] || 'your main objective'
  const base = [
    { cat: 'Opening', q: 'In two minutes: what was the purpose of your study and what did you find?' },
    { cat: 'Opening', q: `Why does “${rq}” matter — who benefits from the answer?` },
    { cat: 'Literature', q: 'What is the gap in the literature that your study addresses? How do you know it is a gap?' },
    { cat: 'Literature', q: 'Which theory underpins your study, and why that theory rather than an alternative?' },
    { cat: 'Methodology', q: 'Why did you choose this methodology over the alternatives?' },
    { cat: 'Methodology', q: 'How did you ensure the validity and reliability of your instruments?' },
    { cat: 'Ethics', q: 'What ethical risks did your participants face and how did you manage them?' },
    { cat: 'Results', q: `Which result best answers “${obj}”, and how confident are you in it?` },
    { cat: 'Results', q: 'Were any results surprising? How do you explain them?' },
    { cat: 'Critical', q: 'What alternative explanation could account for your findings?' },
    { cat: 'Critical', q: 'What are the most important limitations, and how do they affect your conclusions?' },
    { cat: 'Closing', q: 'If you could repeat the study, what would you change?' },
    { cat: 'Closing', q: 'What are your recommendations for practice and for future research?' },
  ]
  return [...base, ...examinerChallenges(p, p.chapters.map((c) => c.text).join('\n'))]
}

/** Coaches a practised answer: coverage, certainty, evidence — instantly and privately. */
export function coachAnswer(answer, project) {
  const words = answer.trim().split(/\s+/).filter(Boolean).length, notes = []
  if (words < 25) notes.push({ ok: false, t: 'Very short — an examiner expects a reasoned answer, not a one-liner.' })
  else if (words > 220) notes.push({ ok: false, t: 'Long — aim for 60–150 words (about 45–90 seconds spoken).' })
  else notes.push({ ok: true, t: `Good length (${words} words).` })
  notes.push(/\b(limitation|however|although|but|alternative|caveat|constrain)/i.test(answer) ? { ok: true, t: 'You acknowledged a limitation or alternative.' } : { ok: false, t: 'No caveat or limitation mentioned — examiners reward honest boundaries.' })
  notes.push(CITED.test(answer) || /\b(study|studies|found|evidence|data|results?)\b/i.test(answer) ? { ok: true, t: 'You referred to evidence.' } : { ok: false, t: 'Anchor the answer in evidence: a source, a result, a number.' })
  if (ABSOLUTE.test(answer)) notes.push({ ok: false, t: `Over-certain wording: “${answer.match(ABSOLUTE)[0]}”.` })
  const keys = (project.rq[0] || '').toLowerCase().split(/\W+/).filter((w) => w.length > 5)
  if (keys.length) notes.push(keys.some((k) => answer.toLowerCase().includes(k)) ? { ok: true, t: 'You tied the answer back to your research question.' } : { ok: false, t: 'Connect the answer back to your research question.' })
  return { words, notes, score: Math.round((notes.filter((n) => n.ok).length / notes.length) * 100) }
}

export function ethicsDraft(a) {
  return `ETHICS APPLICATION — DRAFT (adapt to your institution's template; your ethics committee's requirements take precedence)

1. Study title: ${a.title}
2. Participants: ${a.participants || '[describe]'} (age group: ${a.age || '[state]'}; approx. n = ${a.n || '[state]'}).
3. Recruitment: ${a.recruit || '[how will participants be approached?]'}
4. Informed consent: ${a.minors ? 'Parental/guardian consent and participant assent will be obtained. ' : ''}Participants receive an information sheet and sign a consent form before taking part. Participation is voluntary.
5. Right to withdraw: Participants may withdraw at any time without penalty; data already provided will be removed on request${a.deidentified ? ' where it can still be identified' : ''}.
6. Risks and benefits: ${a.sensitive ? 'The study touches sensitive topics (' + a.sensitive + '). Risks: emotional discomfort. Mitigation: participants may skip any question; contact details for counselling/support will be provided.' : 'Minimal risk is anticipated.'} Benefits: ${a.benefit || '[state]'}.
7. Confidentiality and anonymity: ${a.anon ? 'No names or identifying details are collected; responses are anonymous.' : 'Identifiers are replaced with codes; the key is stored separately from the data.'}
8. Data storage and retention: Data are stored on ${a.storage || 'an encrypted, password-protected device'} and kept for ${a.retention || '[X] years'} after publication, then securely destroyed. Only the researcher and supervisor have access.
9. Compensation: ${a.compensation || 'None.'}
10. Conflicts of interest: ${a.coi || 'None declared.'}
`
}
