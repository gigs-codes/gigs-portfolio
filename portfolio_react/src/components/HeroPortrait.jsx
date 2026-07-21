import { useRef } from 'react'
import { profile } from '../data/content'
import myphoto from '../assets/img/myphoto.jpg'

export default function HeroPortrait() {
  const innerRef = useRef(null)

  function handleMove(e) {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg)`
  }

  function handleLeave() {
    const el = innerRef.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div className="hero-portrait-zone" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="hero-portrait-inner" ref={innerRef}>
        <span className="hero-portrait-blob" />
        <img className="hero-portrait-media" src={myphoto} alt={profile.name} />
      </div>
    </div>
  )
}
