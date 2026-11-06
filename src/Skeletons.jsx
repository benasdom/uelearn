// Skeleton rows for the dashboard's past-question lists. They reuse the real
// row's `.filtered` shell, so the list doesn't jump when results arrive.
// Line widths vary row to row so it reads as content, not a barcode.
const LINE_WIDTHS = [
  ['62%', '38%'], ['48%', '52%'], ['70%', '34%'], ['55%', '44%'],
  ['66%', '40%'], ['44%', '56%'],
]

export function ResultSkeletons({ count = 5, label = 'Loading results' }) {
  return (
    <div role="status" aria-live="polite" aria-label={label} className="sk-list">
      {Array.from({ length: count }, (_, i) => {
        const [a, b] = LINE_WIDTHS[i % LINE_WIDTHS.length]
        return (
          <div className="filtered sk-row" key={i} style={{ '--sk-i': i }} aria-hidden="true">
            <span className="sk sk-thumb" />
            <div className="pinfo sk-info">
              <span className="sk sk-line sk-line--title" style={{ width: a }} />
              <span className="sk sk-line sk-line--sub" style={{ width: b }} />
            </div>
            <span className="sk sk-pill" />
          </div>
        )
      })}
      <span className="sk-sr">{label}…</span>
    </div>
  )
}

export default ResultSkeletons
