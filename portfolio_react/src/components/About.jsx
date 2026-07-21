import Reveal from './Reveal'
import { about, aboutGreeting, aboutQuote, aboutTagline, profile, stats } from '../data/content'
import './Sections.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="eyebrow">About</p>
        <h2 className="section-title">
          A mind that thinks in <span className="highlight">models &amp; metaphors</span>
        </h2>

        <div className="about-grid">
          <Reveal className="about-text">
            <h3 className="about-greeting">{aboutGreeting}</h3>
            <p className="about-tagline">{aboutTagline}</p>
            <blockquote className="about-quote">“{aboutQuote}”</blockquote>
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="about-side">
            <div className="stat-grid">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80} className="stat-card">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320} className="about-socials">
              <span className="about-doodle about-doodle-star" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"
                    fill="none"
                    stroke="var(--gold-deep)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="about-doodle about-doodle-squiggle" aria-hidden="true">
                <svg viewBox="0 0 60 20" width="46" height="16">
                  <path
                    d="M2 14c4-10 8-10 12 0s8 10 12 0 8-10 12 0 8 10 12 0"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span className="about-socials-label">Follow along</span>
              <div className="about-socials-links">
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="social-pill social-pill-instagram"
                >
                  <span className="social-icon-badge social-badge-instagram">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#fff" strokeWidth="1.8" />
                      <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="1.8" />
                      <circle cx="17.3" cy="6.7" r="1.1" fill="#fff" />
                    </svg>
                  </span>
                  Instagram
                </a>
                <a
                  href={profile.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="social-pill social-pill-youtube"
                >
                  <span className="social-icon-badge social-badge-youtube">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
                      <path d="M10 9l6 3-6 3V9z" fill="#fff" />
                    </svg>
                  </span>
                  YouTube
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
