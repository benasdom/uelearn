import { Zap, Timer, Puzzle, ToggleRight, Rocket } from 'lucide-react'
import GalacticDefense from './GalacticDefense'
import QuizBlaster from './QuizBlaster'
import SpeedRound from './SpeedRound'
import MatchPairs from './MatchPairs'
import TrueFalseBlitz from './TrueFalseBlitz'

// Every game receives { questions, active, sfx, onComplete } and finishes by
// calling onComplete({ won, score, correct, total, missed, review?, bestStreak? }). `questions` is a
// round already shuffled and cut to `roundSize` by McqGame.
export const GAMES = [
  {
    key: 'galactic',
    name: 'Galactic Defense',
    Icon: Rocket,
    blurb: 'Arcade shooter: blast the drone carrying the right answer before it reaches your ship.',
    tags: ['Arcade', 'Lifelines', 'Up to 10'],
    minQuestions: 3,
    roundSize: 10,
    Component: GalacticDefense,
  },
  {
    key: 'blaster',
    name: 'Quiz Blaster',
    Icon: Zap,
    blurb: 'Three lives. Chain correct answers for streak bonuses.',
    tags: ['3 lives', 'Streaks'],
    minQuestions: 3,
    roundSize: 0, // 0 = every question
    Component: QuizBlaster,
  },
  {
    key: 'speed',
    name: 'Speed Round',
    Icon: Timer,
    blurb: '15 seconds a question. The faster you answer, the more you score.',
    tags: ['Timed', 'Up to 10'],
    minQuestions: 3,
    roundSize: 10,
    Component: SpeedRound,
  },
  {
    key: 'match',
    name: 'Match Pairs',
    Icon: Puzzle,
    blurb: 'Connect each question with its correct answer.',
    tags: ['No timer', 'Up to 6'],
    minQuestions: 4,
    roundSize: 6,
    Component: MatchPairs,
  },
  {
    key: 'tf',
    name: 'True or False Blitz',
    Icon: ToggleRight,
    blurb: '45 seconds. Is the answer shown right or wrong?',
    tags: ['45s clock', 'Endless'],
    minQuestions: 3,
    roundSize: 0,
    Component: TrueFalseBlitz,
  },
]

export const GAME_BY_KEY = Object.fromEntries(GAMES.map((g) => [g.key, g]))
