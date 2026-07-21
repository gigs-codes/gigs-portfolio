import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { heroSlides } from '../data/content'
import { HERO_ICONS } from './HeroIcons'
import HeroPortrait from './HeroPortrait'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const slidesRef = useRef([])

  useEffect(() => {
    const slides = slidesRef.current.filter(Boolean)
    if (!slides.length) return

    gsap.set(slides, { autoAlpha: 0, y: 34 })
    gsap.set(slides[0], { autoAlpha: 1, y: 0 })
    let current = 0

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => '+=' + window.innerHeight * (slides.length - 1) * 0.9,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const idx = Math.min(slides.length - 1, Math.round(self.progress * (slides.length - 1)))
          if (idx !== current) {
            gsap.to(slides[current], { autoAlpha: 0, y: -34, duration: 0.35, overwrite: true })
            gsap.to(slides[idx], { autoAlpha: 1, y: 0, duration: 0.35, overwrite: true })
            current = idx
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero hatch-bg" ref={sectionRef}>
      <div className="hero-decor" aria-hidden="true">
        <span className="hero-ring hero-ring-lg" />
        <span className="hero-ring hero-ring-sm" />
      </div>

      <HeroPortrait />

      <div className="hero-slides">
        {heroSlides.map((s, i) => {
          const Icon = HERO_ICONS[s.icon]
          return (
            <div className="hero-slide" key={s.subject} ref={(el) => (slidesRef.current[i] = el)}>
              <div className="hero-illustration">
                <span className="hero-blob" />
                <span className="hero-card" />
                <span className="hero-triangle" />
                <div className="hero-icon">
                  <Icon />
                </div>
              </div>
              <h1 className="hero-headline">
                <span className="hero-verb">{s.verb}</span>
                <span className="hero-subject">{s.subject}</span>
              </h1>
            </div>
          )
        })}
      </div>

      <div className="hero-cta">
        <a href="#contact" className="btn btn-primary">
          Get in Touch
        </a>
        <a href="#work" className="btn btn-outline">
          View Work
        </a>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  )
}
