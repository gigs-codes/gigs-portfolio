import { useEffect, useRef, useState } from 'react'
import './ThemeToggle.css'

const STORAGE_KEY = 'gs-theme'

function resolveTheme(mode) {
  if (mode === 'dark' || mode === 'light') return mode
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(mode) {
  const resolved = resolveTheme(mode)
  if (resolved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1.5" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22.5" y2="12" />
        <line x1="4.5" y1="4.5" x2="6.2" y2="6.2" />
        <line x1="17.8" y1="17.8" x2="19.5" y2="19.5" />
        <line x1="4.5" y1="19.5" x2="6.2" y2="17.8" />
        <line x1="17.8" y1="6.2" x2="19.5" y2="4.5" />
      </g>
    </svg>
  )
}

function SystemIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" fill="currentColor" />
    </svg>
  )
}

const MODES = [
  { key: 'light', label: 'Light theme', Icon: SunIcon },
  { key: 'system', label: 'System theme', Icon: SystemIcon },
  { key: 'dark', label: 'Dark theme', Icon: MoonIcon },
]

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'system'
    return localStorage.getItem(STORAGE_KEY) || 'system'
  })
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => {
    applyTheme(mode)
    localStorage.setItem(STORAGE_KEY, mode)

    if (mode === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => applyTheme('system')
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
  }, [mode])

  useEffect(() => {
    function onDocClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  function handleMove(e) {
    const el = rootRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateX(${(-py * 16).toFixed(2)}deg) rotateY(${(px * 16).toFixed(2)}deg) scale(1.04)`
  }

  function handleLeave() {
    const el = rootRef.current
    if (!el) return
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  const active = MODES.find((m) => m.key === mode) || MODES[1]

  return (
    <div
      className="theme-toggle"
      ref={wrapRef}
      role="group"
      aria-label="Theme"
    >
      <div
        className="theme-toggle-tilt"
        ref={rootRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <button
          className="theme-btn theme-btn-active theme-btn-trigger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle theme options"
          aria-expanded={open}
          title="Theme"
        >
          <active.Icon />
        </button>

        <div className={`theme-options ${open ? 'theme-options-open' : ''}`}>
          {MODES.filter((m) => m.key !== mode).map(({ key, label, Icon }) => (
            <button
              key={key}
              className="theme-btn"
              onClick={() => {
                setMode(key)
                setOpen(false)
              }}
              aria-label={label}
              title={label}
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
