// Lets any text-based Learning Hub feature (Quiz Generator, AI Tutor, AI
// Chat, the Podcast script) save its output into the same "Solutions"
// store the solution viewer already saves into — so it shows up in the
// Solutions browser like anything else. Deliberately NOT used for images,
// audio or video: those aren't backed by this endpoint yet.

import { domain, fetchWithAuth } from '../menu/authfetch'

const SOLUTIONS_ENDPOINT = `${domain}/api/v1/solutions/`

/**
 * @param {{ courseName: string, solution: string, modelName?: string }} input
 */
export async function saveGenerationToSolutions({ courseName, solution, modelName = 'ai-generator' }) {
  const trimmedSolution = (solution || '').trim()
  const trimmedTitle = (courseName || '').trim()
  if (!trimmedSolution) throw new Error('There is nothing to save yet.')
  if (!trimmedTitle) throw new Error('Give this a short title before saving.')

  return fetchWithAuth(SOLUTIONS_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      courseName: trimmedTitle,
      solution: trimmedSolution,
      validated: false,
      modelName,
    }),
  })
}
