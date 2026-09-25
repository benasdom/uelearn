// GitHub-style milestone badges, computed entirely from data the app
// already tracks: the backend streak score, and the local activity/
// generation counters in activity.js. Nothing here needs a new endpoint.

export const ACHIEVEMENTS = [
  {
    key: 'first-step',
    name: 'First Step',
    tier: 'bronze',
    description: 'Open the Learning Hub for the first time',
    metric: () => 1,
    goal: 1,
  },
  {
    key: 'streak-3',
    name: 'Warming Up',
    tier: 'bronze',
    description: 'Reach a 3-day streak',
    metric: ({ highestStreak }) => highestStreak,
    goal: 3,
  },
  {
    key: 'streak-15',
    name: 'Dedicated',
    tier: 'silver',
    description: 'Reach a 15-day streak',
    metric: ({ highestStreak }) => highestStreak,
    goal: 15,
  },
  {
    key: 'streak-60',
    name: 'Legend',
    tier: 'gold',
    description: 'Reach a 60-day streak',
    metric: ({ highestStreak }) => highestStreak,
    goal: 60,
  },
  {
    key: 'cards-50',
    name: 'Card Shark',
    tier: 'silver',
    description: 'Review 50 flashcards',
    metric: ({ cardsReviewed }) => cardsReviewed,
    goal: 50,
  },
  {
    key: 'cards-250',
    name: 'Flashcard Fanatic',
    tier: 'gold',
    description: 'Review 250 flashcards',
    metric: ({ cardsReviewed }) => cardsReviewed,
    goal: 250,
  },
  {
    key: 'tests-5',
    name: 'Test Taker',
    tier: 'silver',
    description: 'Complete 5 mock tests',
    metric: ({ mockTestsTaken }) => mockTestsTaken,
    goal: 5,
  },
  {
    key: 'tests-20',
    name: 'Exam Slayer',
    tier: 'gold',
    description: 'Complete 20 mock tests',
    metric: ({ mockTestsTaken }) => mockTestsTaken,
    goal: 20,
  },
  {
    key: 'gen-1',
    name: 'AI Apprentice',
    tier: 'bronze',
    description: 'Generate your first AI study set',
    metric: ({ generations }) => generations,
    goal: 1,
  },
  {
    key: 'gen-25',
    name: 'Prolific Creator',
    tier: 'gold',
    description: 'Generate 25 AI study sets',
    metric: ({ generations }) => generations,
    goal: 25,
  },
]

/**
 * @param {{ highestStreak: number, cardsReviewed: number, mockTestsTaken: number, generations: number }} stats
 */
export function computeAchievements(stats) {
  return ACHIEVEMENTS.map((a) => {
    const progress = Math.max(0, a.metric(stats) || 0)
    const unlocked = progress >= a.goal
    return {
      ...a,
      progress: Math.min(progress, a.goal),
      pct: Math.min(100, Math.round((progress / a.goal) * 100)),
      unlocked,
    }
  })
}
