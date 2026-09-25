import { useState } from 'react'
import { saveGenerationToSolutions } from '../lib/solutionsApi'

const SaveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 3.5h11.5L21 8v12.5A1.5 1.5 0 0 1 19.5 22h-15A1.5 1.5 0 0 1 3 20.5v-15A1.5 1.5 0 0 1 5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7.5 3.5V9h9V3.5M7.5 22v-7h9v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 13 4.5 4.5L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * @param {{ title: string, content: string, modelName?: string, disabled?: boolean }} props
 */
export default function SaveToSolutions({ title, content, modelName, disabled }) {
  const [state, setState] = useState('idle') // idle | saving | saved | error
  const [msg, setMsg] = useState('')

  const canSave = !disabled && (content || '').trim().length > 0

  const handleSave = async () => {
    if (!canSave || state === 'saving') return
    setState('saving')
    setMsg('')
    try {
      await saveGenerationToSolutions({ courseName: title, solution: content, modelName })
      setState('saved')
      setTimeout(() => setState('idle'), 2500)
    } catch (err) {
      setState('error')
      setMsg(err?.message || 'Could not save — try again.')
      setTimeout(() => setState('idle'), 3000)
    }
  }

  return (
    <button
      type="button"
      className={`hub-save-btn ${state === 'saved' ? 'is-saved' : ''} ${state === 'error' ? 'is-error' : ''}`}
      onClick={handleSave}
      disabled={!canSave || state === 'saving'}
      title={state === 'error' ? msg : 'Save this to your Solutions'}
    >
      {state === 'saved' ? <CheckIcon /> : <SaveIcon />}
      {state === 'saving' ? 'Saving…' : state === 'saved' ? 'Saved to Solutions' : state === 'error' ? (msg || 'Try again') : 'Save to Solutions'}
    </button>
  )
}
