import { useEffect, useState } from 'react'
import { profile, specialty } from '../data/content'
import './FixedChrome.css'

const LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#work', label: 'Work', id: 'work' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export default function FixedChrome() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="chrome-brand">
        <span className="chrome-script">Hey, I'm</span>
        <a href="#top" className="chrome-name">
          {profile.first} <span>{profile.last}</span>
        </a>
        <span className="chrome-status-wrap" tabIndex={0}>
          <span className="chrome-status">
            {profile.availability} <i />
          </span>
          <div className="chrome-status-pop">
            <strong>{specialty.title}</strong>
            <div className="chrome-status-pop-tags">
              {specialty.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </span>
      </div>

      <div className="chrome-monogram">
        <span className="chrome-monogram-mark">GS.</span>
        <span className="chrome-monogram-tag">Portfolio</span>
      </div>

      <nav className={`chrome-nav ${open ? 'chrome-nav-open' : ''}`}>
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={l.href}
            className={active === l.id ? 'chrome-nav-active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <button className="chrome-burger" aria-label="Toggle navigation" onClick={() => setOpen((o) => !o)}>
        <span />
        <span />
      </button>

      <div className="chrome-social">
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M3 6h18v12H3z"/><path fill="none" stroke="currentColor" strokeWidth="1.8" d="m3 7 9 6 9-6"/></svg>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M4 4h16v16H4z"/><path fill="currentColor" stroke="none" d="M8 10h2v7H8zM9 7.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM13 10h1.9v1c.5-.7 1.3-1.2 2.3-1.2 1.8 0 2.8 1.2 2.8 3.2V17h-2v-3.6c0-1-.4-1.6-1.3-1.6-.9 0-1.6.6-1.6 1.7V17h-2z"/></svg>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.61-.2.61-.43v-1.68c-2.5.55-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.98 2.61.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.44 0-.98.35-1.79.92-2.42-.09-.23-.4-1.15.09-2.4 0 0 .75-.24 2.45.92a8.4 8.4 0 0 1 4.46 0c1.7-1.16 2.45-.92 2.45-.92.49 1.25.18 2.17.09 2.4.57.63.92 1.44.92 2.42 0 3.45-2.1 4.21-4.11 4.43.32.28.6.83.6 1.68v2.48c0 .24.16.51.62.43A9 9 0 0 0 12 3Z"/></svg>
        </a>
      </div>
    </>
  )
}
