// Tiny pub/sub so AI features that learn the user's remaining credit balance
// from a backend response (quiz generator, tutor, image/video studio, ...)
// can tell any interested surface — e.g. the credits pill in the solution
// viewer — without threading a callback through every component.

const listeners = new Set()

/** Announce a fresh credit balance. Ignores anything that isn't a finite number. */
export function emitCredits(value) {
  const n = Number(value)
  if (value == null || !Number.isFinite(n)) return
  listeners.forEach((fn) => {
    try { fn(n) } catch { /* a bad subscriber must never break generation */ }
  })
}

/** Subscribe to balance updates. Returns an unsubscribe function. */
export function onCredits(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
