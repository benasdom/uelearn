import { useState } from 'react'
import AIGenerator from './AIGenerator'
import AITutor from './AITutor'
import PodcastStudio from './PodcastStudio'
import ChatInterface from './ChatInterface'
import MediaStudio from './MediaStudio'

const TABS = [
  { key: 'quiz', label: 'Quiz Generator' },
  { key: 'tutor', label: 'AI Tutor' },
  { key: 'podcast', label: 'Create Podcast' },
  { key: 'chat', label: 'AI Chat' },
  { key: 'video', label: 'Video Generation' },
]

export default function GeneratorStudio({ initialText = '', initialSourceLabel = '', onNavigate }) {
  const [tab, setTab] = useState('quiz')

  return (
    <div className="gs-wrap">
      <div className="gs-tabbar-outer">
        <p className="hub-eyebrow">GENERATOR STUDIO</p>
        <h2 className="hub-title" style={{ marginBottom: 12 }}>Create with AI</h2>
        <div className="hub-tabs">
          {TABS.map((t) => (
            <button key={t.key} className={`hub-tab ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gs-tabpanel">
        {tab === 'quiz' && (
          <AIGenerator initialText={initialText} initialSourceLabel={initialSourceLabel} onNavigate={onNavigate} />
        )}
        {tab === 'tutor' && <AITutor initialText={initialSourceLabel ? '' : initialText} />}
        {tab === 'podcast' && <PodcastStudio />}
        {tab === 'chat' && <ChatInterface />}
        {tab === 'video' && <MediaStudio />}
      </div>
    </div>
  )
}
