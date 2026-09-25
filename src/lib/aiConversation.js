// NOTE ON HOW THIS WORKS
// ───────────────────────
// The backend only exposes one content-generation endpoint today
// (`/api/v1/solutions/extension`, wrapped by generateExercisesFromText in
// aiGenerator.js), and it always answers with a list of mcq/fillIn/
// flashcard exercises — there's no dedicated "chat" or "explain this"
// endpoint yet. Rather than fake a response, AI Tutor / AI Chat / the
// Podcast script all send a purpose-built prompt to that same endpoint and
// read the *explanations* it comes back with as the answer. It's a real
// network round-trip against real infrastructure, just repurposed — swap
// in a dedicated completion endpoint here first, if/when one exists.

import { generateExercisesFromText } from './aiGenerator'

function extractQA(exercises) {
  return exercises
    .map((ex) => {
      if (ex.kind === 'mcq') {
        return { q: ex.q, a: ex.explanation || `Correct answer: ${ex.options[ex.correct]}` }
      }
      if (ex.kind === 'fillIn') {
        return { q: ex.q, a: ex.explanation || `Answer: ${ex.correctAnswer}` }
      }
      if (ex.kind === 'flashcard') {
        return { q: ex.front, a: ex.explanation || ex.back }
      }
      return null
    })
    .filter(Boolean)
}

/** AI Tutor: explain a topic, broken into a short list of Q&A cards. */
export async function askTutor(topic, opts = {}) {
  const prompt = `Explain the following clearly and simply for a student, then include a couple of check-yourself questions with answers so they can test understanding. Topic: ${topic}`
  const { exercises, remainingCredits, partialErrors } = await generateExercisesFromText(prompt, opts)
  const qa = extractQA(exercises)
  if (qa.length === 0) throw new Error(partialErrors[0] || "Couldn't get an explanation — try rephrasing.")
  return { qa, remainingCredits }
}

/** AI Chat: one more turn in an ongoing conversation. */
export async function askChat(history, opts = {}) {
  const transcript = history
    .slice(-8) // keep the prompt small — recent context is what matters
    .map((m) => `${m.role === 'user' ? 'Student' : 'Tutor'}: ${m.content}`)
    .join('\n')
  const prompt = `You are a helpful study tutor continuing this conversation. Respond directly and naturally to the student's latest message.\n\n${transcript}`
  const { exercises, partialErrors } = await generateExercisesFromText(prompt, opts)
  const qa = extractQA(exercises)
  if (qa.length === 0) throw new Error(partialErrors[0] || "Didn't get a reply — try asking differently.")
  return qa.map((x) => x.a).join('\n\n')
}

/** Podcast Conversation: a two-host dialogue script on a topic. */
export async function generatePodcastScript(topic, opts = {}) {
  const prompt = `Create a friendly two-host podcast-style discussion (Host A and Host B taking turns) explaining this topic to a student audience, with Host B occasionally asking clarifying questions: ${topic}`
  const { exercises, partialErrors } = await generateExercisesFromText(prompt, opts)
  const qa = extractQA(exercises)
  if (qa.length === 0) throw new Error(partialErrors[0] || "Couldn't script this — try a different topic.")
  const lines = []
  qa.forEach(({ q, a }, i) => {
    lines.push({ speaker: i % 2 === 0 ? 'Host A' : 'Host B', text: q })
    lines.push({ speaker: i % 2 === 0 ? 'Host B' : 'Host A', text: a })
  })
  return lines
}
