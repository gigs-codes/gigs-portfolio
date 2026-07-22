import { useState } from 'react'
import Reveal from './Reveal'
import { profile } from '../data/content'
import './Contact.css'

const FORM_ENDPOINT = 'https://formspree.io/f/xkoojdvj'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">
          Let's build something <span className="highlight">remarkable together</span>
        </h2>
        <p className="section-sub">
          I'm always open to exciting opportunities, collaborations, or just a good conversation
          about AI, computer vision, or the perfect espresso ratio.
        </p>

        <div className="contact-grid">
          <Reveal className="contact-card">
            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="contact-link">
                <span className="contact-link-label">Email</span>
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-label">LinkedIn</span>
                linkedin.com/in/garimaswami
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-label">GitHub</span>
                github.com/gigs-codes
              </a>
              <a href={`${import.meta.env.BASE_URL}GARIMA_SWAMI_RESUME.pdf`} target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-label">Resume</span>
                Download PDF
              </a>
            </div>
            <div className="contact-loc">📍 {profile.location} · {profile.availability}</div>
          </Reveal>

          <Reveal delay={100} className="contact-form-wrap">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input className="form-input" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity…"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <div className="form-note form-note-ok">Message sent! I'll get back to you soon.</div>
              )}
              {status === 'error' && (
                <div className="form-note form-note-err">Something went wrong — please try again.</div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
