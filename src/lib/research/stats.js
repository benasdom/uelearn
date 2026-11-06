// Dependency-free statistics for the Stats Lab. Every test returns an APA-style line,
// an interpretation, assumption checks and a "why this test" explanation — it teaches
// rather than just printing a number.

// ── special functions ──
const lgamma = (x) => {
  const c = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5]
  let y = x, t = x + 5.5
  t -= (x + 0.5) * Math.log(t)
  let s = 1.000000000190015
  for (const ci of c) s += ci / ++y
  return -t + Math.log((2.5066282746310005 * s) / x)
}
const betacf = (a, b, x) => {
  const qab = a + b, qap = a + 1, qam = a - 1
  let c = 1, d = 1 - (qab * x) / qap
  if (Math.abs(d) < 1e-30) d = 1e-30
  d = 1 / d
  let h = d
  for (let m = 1; m <= 300; m++) {
    const m2 = 2 * m
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2))
    d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30
    c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30
    d = 1 / d; h *= d * c
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2))
    d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30
    c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30
    d = 1 / d
    const del = d * c; h *= del
    if (Math.abs(del - 1) < 1e-12) break
  }
  return h
}
const ibeta = (a, b, x) => {
  if (x <= 0) return 0
  if (x >= 1) return 1
  const bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x))
  return x < (a + 1) / (a + b + 2) ? (bt * betacf(a, b, x)) / a : 1 - (bt * betacf(b, a, 1 - x)) / b
}
const gammp = (a, x) => {
  if (x <= 0) return 0
  const pre = Math.exp(-x + a * Math.log(x) - lgamma(a))
  if (x < a + 1) {
    let ap = a, sum = 1 / a, del = sum
    for (let n = 0; n < 300; n++) { ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-12) break }
    return sum * pre
  }
  let b = x + 1 - a, c = 1e30, d = 1 / b, h = d
  for (let i = 1; i < 300; i++) {
    const an = -i * (i - a); b += 2
    d = an * d + b; if (Math.abs(d) < 1e-30) d = 1e-30
    c = b + an / c; if (Math.abs(c) < 1e-30) c = 1e-30
    d = 1 / d
    const del = d * c; h *= del
    if (Math.abs(del - 1) < 1e-12) break
  }
  return 1 - pre * h
}
export const pT = (t, df) => ibeta(df / 2, 0.5, df / (df + t * t))            // two-tailed
export const pF = (F, d1, d2) => ibeta(d2 / 2, d1 / 2, d2 / (d2 + d1 * F))
export const pChi = (x, df) => 1 - gammp(df / 2, x / 2)

// ── formatting ──
const nz = (v, d = 2) => v.toFixed(d).replace(/^(-?)0\./, '$1.')
export const fmtP = (p) => (p < 0.001 ? '*p* < .001' : `*p* = ${nz(p, 3)}`)
const sig = (p) => (p < 0.05 ? 'statistically significant' : 'not statistically significant')

// ── descriptives ──
export const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length
export const variance = (a) => { const m = mean(a); return a.reduce((s, v) => s + (v - m) ** 2, 0) / (a.length - 1) }
export const sd = (a) => Math.sqrt(variance(a))
export function describe(a) {
  const s = [...a].sort((x, y) => x - y), n = a.length, m = mean(a), q = sd(a)
  const skew = n > 2 && q ? a.reduce((t, v) => t + ((v - m) / q) ** 3, 0) * (n / ((n - 1) * (n - 2))) : 0
  const mid = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2
  const outliers = q ? a.filter((v) => Math.abs((v - m) / q) > 3).length : 0
  return { n, mean: m, sd: q, median: mid, min: s[0], max: s[n - 1], skew, outliers }
}

// ── data ──
export function parseTable(text) {
  const first = text.split(/\r?\n/, 1)[0] || ''
  const delim = [',', '\t', ';'].sort((a, b) => first.split(b).length - first.split(a).length)[0]
  const rows = []
  let row = [], cell = '', q = false
  const flush = () => { row.push(cell.trim()); cell = '' }
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) { if (c === '"' && text[i + 1] === '"') { cell += '"'; i++ } else if (c === '"') q = false; else cell += c }
    else if (c === '"') q = true
    else if (c === delim) flush()
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; flush(); if (row.some(Boolean)) rows.push(row); row = [] }
    else cell += c
  }
  flush(); if (row.some(Boolean)) rows.push(row)
  const [head, ...body] = rows
  if (!head || body.length < 3) throw new Error('Need a header row and at least 3 data rows.')
  const cols = head.map((h, i) => {
    const raw = body.map((r) => r[i] ?? '')
    const filled = raw.filter((v) => v !== '' && !/^(na|n\/a|nan|null|-)$/i.test(v))
    const nums = filled.map(Number)
    const numeric = filled.length > 0 && nums.every((v) => Number.isFinite(v)) || (filled.length > 0 && nums.filter(Number.isFinite).length / filled.length >= 0.9)
    return { name: h || `col${i + 1}`, type: numeric ? 'numeric' : 'categorical', raw, missing: raw.length - filled.length, levels: [...new Set(filled)].length }
  })
  return { cols, n: body.length }
}
const numVals = (c) => c.raw.map((v) => (v === '' ? NaN : Number(v)))
const pairs = (x, y) => { const ax = [], ay = []; x.forEach((v, i) => { if (Number.isFinite(v) && Number.isFinite(y[i])) { ax.push(v); ay.push(y[i]) } }); return [ax, ay] }

const normalityNote = (a, label) => {
  const d = describe(a)
  return { ok: Math.abs(d.skew) < 1 || a.length > 100, text: `${label}: skewness ${nz(d.skew)}${Math.abs(d.skew) < 1 ? ' — roughly symmetric' : ' — noticeably skewed; consider a non-parametric alternative'}${d.outliers ? `; ${d.outliers} value(s) beyond ±3 SD` : ''}.` }
}

// ── tests ──
export function pearson(cx, cy) {
  const [x, y] = pairs(numVals(cx), numVals(cy)), n = x.length
  if (n < 4) throw new Error('Need at least 4 complete pairs.')
  const mx = mean(x), my = mean(y)
  const r = x.reduce((s, v, i) => s + (v - mx) * (y[i] - my), 0) / Math.sqrt(x.reduce((s, v) => s + (v - mx) ** 2, 0) * y.reduce((s, v) => s + (v - my) ** 2, 0))
  const df = n - 2, t = (r * Math.sqrt(df)) / Math.sqrt(1 - r * r), p = pT(t, df)
  const z = Math.atanh(r), se = 1 / Math.sqrt(n - 3), lo = Math.tanh(z - 1.96 * se), hi = Math.tanh(z + 1.96 * se)
  const size = Math.abs(r) < 0.1 ? 'negligible' : Math.abs(r) < 0.3 ? 'small' : Math.abs(r) < 0.5 ? 'moderate' : 'strong'
  return {
    name: 'Pearson correlation', kind: 'scatter', x, y, line: slr(x, y),
    apa: `*r*(${df}) = ${nz(r)}, ${fmtP(p)}, 95% CI [${nz(lo)}, ${nz(hi)}]`,
    interpretation: `There was a ${size} ${r >= 0 ? 'positive' : 'negative'} relationship between ${cx.name} and ${cy.name}, which was ${sig(p)}. r² = ${nz(r * r)} — about ${(r * r * 100).toFixed(1)}% of the variance is shared. Correlation does not show that one variable causes the other.`,
    assumptions: [normalityNote(x, cx.name), normalityNote(y, cy.name), { ok: true, text: 'Check the scatterplot: the pattern should be roughly a straight line, with no extreme outlier driving r.' }],
    why: 'Both variables are continuous and you are asking whether they move together — that is the textbook case for Pearson’s r. If either is badly skewed or ordinal, use Spearman’s rho instead.',
  }
}
function slr(x, y) {
  const mx = mean(x), my = mean(y)
  const b = x.reduce((s, v, i) => s + (v - mx) * (y[i] - my), 0) / x.reduce((s, v) => s + (v - mx) ** 2, 0)
  return { b, a: my - b * mx }
}
export function regression(cx, cy) {
  const [x, y] = pairs(numVals(cx), numVals(cy)), n = x.length
  if (n < 5) throw new Error('Need at least 5 complete pairs.')
  const { a, b } = slr(x, y), res = y.map((v, i) => v - (a + b * x[i]))
  const ssr = res.reduce((s, v) => s + v * v, 0), sst = y.reduce((s, v) => s + (v - mean(y)) ** 2, 0)
  const r2 = 1 - ssr / sst, df = n - 2, F = (r2 / (1 - r2)) * df, p = pF(F, 1, df)
  const seB = Math.sqrt(ssr / df / x.reduce((s, v) => s + (v - mean(x)) ** 2, 0)), t = b / seB
  const beta = b * (sd(x) / sd(y))
  return {
    name: 'Simple linear regression', kind: 'scatter', x, y, line: { a, b },
    apa: `*F*(1, ${df}) = ${nz(F)}, ${fmtP(p)}, *R*² = ${nz(r2)}; *B* = ${nz(b)}, *SE* = ${nz(seB)}, *β* = ${nz(beta)}, *t*(${df}) = ${nz(t)}`,
    interpretation: `${cx.name} ${sig(p) === 'statistically significant' ? 'significantly predicted' : 'did not significantly predict'} ${cy.name}. Each one-unit increase in ${cx.name} was associated with a ${nz(Math.abs(b))}-unit ${b >= 0 ? 'increase' : 'decrease'} in ${cy.name}, and the model explained ${(r2 * 100).toFixed(1)}% of its variance.`,
    assumptions: [normalityNote(res, 'Residuals'), { ok: true, text: 'Homoscedasticity: the scatter around the line should have similar spread along x. Look at the plot for a funnel shape.' }, { ok: n >= 20, text: `Sample size n = ${n}${n >= 20 ? '' : ' is small — treat results as exploratory'}.` }],
    why: 'You want to predict an outcome from one predictor and quantify the effect size, not just detect association. Add more predictors only after checking multicollinearity.',
  }
}
export function welch(cNum, cGrp) {
  const g = cGrp.raw, levels = [...new Set(g.filter(Boolean))]
  if (levels.length !== 2) throw new Error(`${cGrp.name} must have exactly 2 groups (found ${levels.length}). Use ANOVA for 3+.`)
  const v = numVals(cNum), [A, B] = levels.map((l) => v.filter((x, i) => g[i] === l && Number.isFinite(x)))
  if (A.length < 2 || B.length < 2) throw new Error('Each group needs at least 2 values.')
  const [m1, m2, v1, v2] = [mean(A), mean(B), variance(A), variance(B)], se = Math.sqrt(v1 / A.length + v2 / B.length)
  const t = (m1 - m2) / se, df = (v1 / A.length + v2 / B.length) ** 2 / ((v1 / A.length) ** 2 / (A.length - 1) + (v2 / B.length) ** 2 / (B.length - 1))
  const p = pT(t, df), sp = Math.sqrt(((A.length - 1) * v1 + (B.length - 1) * v2) / (A.length + B.length - 2)), d = (m1 - m2) / sp
  const size = Math.abs(d) < 0.2 ? 'negligible' : Math.abs(d) < 0.5 ? 'small' : Math.abs(d) < 0.8 ? 'medium' : 'large'
  return {
    name: 'Independent-samples t-test (Welch)', kind: 'groups', groups: [{ label: levels[0], d: describe(A) }, { label: levels[1], d: describe(B) }],
    apa: `*t*(${df.toFixed(1)}) = ${nz(t)}, ${fmtP(p)}, Cohen’s *d* = ${nz(d)}; ${levels[0]} (*M* = ${nz(m1)}, *SD* = ${nz(Math.sqrt(v1))}) vs ${levels[1]} (*M* = ${nz(m2)}, *SD* = ${nz(Math.sqrt(v2))})`,
    interpretation: `${levels[0]} and ${levels[1]} ${p < 0.05 ? 'differed significantly' : 'did not differ significantly'} on ${cNum.name}. The effect was ${size} (d = ${nz(d)}).`,
    assumptions: [normalityNote(A, levels[0]), normalityNote(B, levels[1]), { ok: Math.max(v1, v2) / Math.min(v1, v2) < 4, text: `Variance ratio ${(Math.max(v1, v2) / Math.min(v1, v2)).toFixed(1)} — Welch’s version is used, so unequal variances are fine.` }],
    why: 'One continuous outcome, two independent groups. Welch’s t-test is the safe default because it does not require equal variances. For paired measurements use a paired t-test instead.',
  }
}
export function anova(cNum, cGrp) {
  const g = cGrp.raw, levels = [...new Set(g.filter(Boolean))]
  if (levels.length < 3) throw new Error(`${cGrp.name} needs 3+ groups for ANOVA (found ${levels.length}). Use the t-test for 2.`)
  const v = numVals(cNum), groups = levels.map((l) => v.filter((x, i) => g[i] === l && Number.isFinite(x))).filter((a) => a.length)
  const all = groups.flat(), gm = mean(all), N = all.length, k = groups.length
  const ssb = groups.reduce((s, a) => s + a.length * (mean(a) - gm) ** 2, 0), ssw = groups.reduce((s, a) => s + a.reduce((t, x) => t + (x - mean(a)) ** 2, 0), 0)
  const d1 = k - 1, d2 = N - k, F = ssb / d1 / (ssw / d2), p = pF(F, d1, d2), eta = ssb / (ssb + ssw)
  return {
    name: 'One-way ANOVA', kind: 'groups', groups: levels.map((l, i) => ({ label: l, d: describe(groups[i]) })),
    apa: `*F*(${d1}, ${d2}) = ${nz(F)}, ${fmtP(p)}, η² = ${nz(eta)}`,
    interpretation: `Mean ${cNum.name} ${p < 0.05 ? 'differed significantly' : 'did not differ significantly'} across ${cGrp.name} groups; ${(eta * 100).toFixed(1)}% of variance is explained by group. ${p < 0.05 ? 'ANOVA says some groups differ, not which — follow up with post-hoc tests (e.g. Tukey).' : ''}`,
    assumptions: groups.map((a, i) => normalityNote(a, levels[i])).concat([{ ok: true, text: 'Homogeneity of variance: compare group SDs in the table — the largest should be under ~2× the smallest.' }]),
    why: 'One continuous outcome and three or more independent groups. Running many t-tests instead would inflate the false-positive rate; ANOVA tests them together.',
  }
}
export function chiSquare(c1, c2) {
  const rows = [...new Set(c1.raw.filter(Boolean))], cols = [...new Set(c2.raw.filter(Boolean))]
  if (rows.length < 2 || cols.length < 2) throw new Error('Both variables need at least 2 categories.')
  const obs = rows.map((r) => cols.map((c) => c1.raw.filter((v, i) => v === r && c2.raw[i] === c).length))
  const N = obs.flat().reduce((s, v) => s + v, 0), rt = obs.map((r) => r.reduce((s, v) => s + v, 0)), ct = cols.map((_, j) => obs.reduce((s, r) => s + r[j], 0))
  let chi = 0, small = 0
  obs.forEach((r, i) => r.forEach((o, j) => { const e = (rt[i] * ct[j]) / N; chi += (o - e) ** 2 / e; if (e < 5) small++ }))
  const df = (rows.length - 1) * (cols.length - 1), p = pChi(chi, df), V = Math.sqrt(chi / (N * Math.min(rows.length - 1, cols.length - 1)))
  return {
    name: 'Chi-square test of independence', kind: 'table', rows, cols, obs,
    apa: `χ²(${df}, *N* = ${N}) = ${nz(chi)}, ${fmtP(p)}, Cramér’s *V* = ${nz(V)}`,
    interpretation: `The association between ${c1.name} and ${c2.name} was ${sig(p)} (Cramér’s V = ${nz(V)}, ${V < 0.1 ? 'negligible' : V < 0.3 ? 'small-to-moderate' : 'strong'}).`,
    assumptions: [{ ok: small === 0, text: small ? `${small} cell(s) have an expected count under 5 — merge categories or use Fisher’s exact test.` : 'All expected cell counts are 5 or more.' }, { ok: true, text: 'Each participant must appear in exactly one cell (observations independent).' }],
    why: 'Both variables are categorical and you are asking whether they are associated. For continuous outcomes use t-test, ANOVA or correlation instead.',
  }
}
export function cronbach(cols) {
  const m = cols.map(numVals), n = m[0].length, ok = [...Array(n).keys()].filter((i) => m.every((c) => Number.isFinite(c[i])))
  if (cols.length < 2 || ok.length < 5) throw new Error('Select at least 2 numeric item columns with 5+ complete rows.')
  const items = m.map((c) => ok.map((i) => c[i])), totals = ok.map((_, r) => items.reduce((s, c) => s + c[r], 0))
  const k = items.length, a = (k / (k - 1)) * (1 - items.reduce((s, c) => s + variance(c), 0) / variance(totals))
  const label = a >= 0.9 ? 'excellent' : a >= 0.8 ? 'good' : a >= 0.7 ? 'acceptable' : a >= 0.6 ? 'questionable' : 'poor'
  return {
    name: 'Reliability (Cronbach’s α)', kind: 'text',
    apa: `Cronbach’s *α* = ${nz(a)} (${k} items, *N* = ${ok.length})`,
    interpretation: `Internal consistency was ${label}. ${a < 0.7 ? 'Check for reverse-scored items or items that do not belong to the construct.' : ''}`,
    assumptions: [{ ok: true, text: 'Items should measure one construct and be scored in the same direction (reverse-code first).' }],
    why: 'Before analysing a questionnaire scale you must show it is reliable in your sample. α ≥ .70 is the usual minimum.',
  }
}

/** Decision helper — turns a few answers into a test recommendation with reasoning. */
export function adviseTest({ goal, outcome, predictor, groups = 2, paired = false }) {
  if (goal === 'reliability') return { test: 'Cronbach’s alpha', why: 'You are checking whether scale items hang together.' }
  if (goal === 'relationship' && outcome === 'continuous' && predictor === 'continuous') return { test: 'Pearson correlation', why: 'Two continuous variables, asking if they move together. Use Spearman if skewed/ordinal.' }
  if (goal === 'prediction' && outcome === 'continuous') return { test: 'Linear regression', why: 'Predicting a continuous outcome from one or more predictors gives you an effect size and a model.' }
  if (goal === 'prediction' && outcome === 'categorical') return { test: 'Logistic regression (run in SPSS/R/jamovi)', why: 'A categorical outcome needs a logistic model — not covered by this Lab yet.' }
  if (outcome === 'categorical' && predictor === 'categorical') return { test: 'Chi-square test of independence', why: 'Both variables are categories; you are testing association between them.' }
  if (outcome === 'continuous' && predictor === 'categorical') {
    if (paired) return { test: 'Paired-samples t-test (or repeated-measures ANOVA for 3+)', why: 'The same people were measured twice; pairing removes between-person noise.' }
    return groups === 2 ? { test: 'Welch t-test', why: 'One continuous outcome, two independent groups.' } : { test: 'One-way ANOVA', why: 'One continuous outcome, three or more independent groups.' }
  }
  return { test: 'Descriptive statistics first', why: 'Your combination is unusual — describe the data, then revisit with your supervisor.' }
}
export const columnNumbers = numVals
