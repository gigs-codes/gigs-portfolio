const STROKE = { fill: 'none', stroke: 'var(--ink)', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }

function BrainIcon() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <g {...STROKE}>
        <circle cx="30" cy="34" r="9" />
        <circle cx="60" cy="22" r="9" />
        <circle cx="90" cy="34" r="9" />
        <circle cx="24" cy="66" r="9" />
        <circle cx="60" cy="60" r="10" />
        <circle cx="96" cy="66" r="9" />
        <circle cx="45" cy="94" r="9" />
        <circle cx="75" cy="94" r="9" />
        <line x1="30" y1="43" x2="55" y2="56" />
        <line x1="60" y1="31" x2="60" y2="50" />
        <line x1="90" y1="43" x2="65" y2="56" />
        <line x1="24" y1="66" x2="50" y2="63" />
        <line x1="96" y1="66" x2="70" y2="63" />
        <line x1="55" y1="68" x2="45" y2="86" />
        <line x1="65" y1="68" x2="75" y2="86" />
      </g>
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <g {...STROKE}>
        <path d="M8 60 C 26 30, 94 30, 112 60 C 94 90, 26 90, 8 60 Z" />
        <circle cx="60" cy="60" r="18" />
        <circle cx="60" cy="60" r="5" fill="var(--ink)" />
      </g>
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <g {...STROKE}>
        <path d="M14 24 H98 a8 8 0 0 1 8 8 v40 a8 8 0 0 1 -8 8 H46 L20 100 V80 H14 a8 8 0 0 1 -8 -8 V32 a8 8 0 0 1 8 -8 Z" />
        <circle cx="38" cy="52" r="4.5" fill="var(--ink)" stroke="none" />
        <circle cx="60" cy="52" r="4.5" fill="var(--ink)" stroke="none" />
        <circle cx="82" cy="52" r="4.5" fill="var(--ink)" stroke="none" />
      </g>
    </svg>
  )
}

function GradIcon() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <g {...STROKE}>
        <path d="M8 46 L60 22 L112 46 L60 70 Z" />
        <path d="M34 58 V84 C34 92, 86 92, 86 84 V58" />
        <line x1="112" y1="46" x2="112" y2="82" />
      </g>
    </svg>
  )
}

export const HERO_ICONS = {
  brain: BrainIcon,
  eye: EyeIcon,
  chat: ChatIcon,
  grad: GradIcon,
}
