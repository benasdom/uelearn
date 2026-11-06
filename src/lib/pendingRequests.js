// Tracks AI requests that are still in flight, by key, outside any component.
//
// A student can ask the tutor a question and leave the page before the answer
// comes back. The request carries on regardless (it's already been paid for),
// so when they return we want to pick it up — not show an idle form that would
// ask, and charge for, the same thing twice.

const pending = new Map()

/** Registers `promise` under `key` until it settles. Returns the same promise. */
export function trackPending(key, promise) {
  pending.set(key, promise)
  const clear = () => { if (pending.get(key) === promise) pending.delete(key) }
  promise.then(clear, clear) // handled here; callers still see the rejection on `promise`
  return promise
}

/** The in-flight request for `key`, or null. */
export function getPending(key) {
  return pending.get(key) || null
}
