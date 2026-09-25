// Aggregated local activity counters. Individual features (Flashcards,
// MockTest) bump these; gamification.js and the Hub summary read them.
import { loadState, saveState } from './localStore'

const KEY = 'activity'

function read() {
  return loadState(KEY, { cardsReviewed: 0, mockTestsTaken: 0, generations: 0 })
}

export function getActivity() {
  return read()
}

export function bumpCardsReviewed(by = 1) {
  const state = read()
  const updated = { ...state, cardsReviewed: state.cardsReviewed + by }
  saveState(KEY, updated)
  return updated
}

export function bumpMockTestsTaken(by = 1) {
  const state = read()
  const updated = { ...state, mockTestsTaken: state.mockTestsTaken + by }
  saveState(KEY, updated)
  return updated
}

// Bumped whenever a Learning Hub feature (Quiz Generator, AI Tutor, Podcast
// script, AI Chat) successfully produces AI content — feeds the "AI
// Apprentice" / "Prolific Creator" achievements.
export function bumpGenerations(by = 1) {
  const state = read()
  const updated = { ...state, generations: (state.generations || 0) + by }
  saveState(KEY, updated)
  return updated
}