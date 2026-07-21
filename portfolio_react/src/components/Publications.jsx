import Reveal from './Reveal'
import { publications } from '../data/content'
import './Projects.css'

export default function Publications() {
  return (
    <section id="publications" className="section-alt">
      <div className="container">
        <p className="eyebrow">Research</p>
        <h2 className="section-title">
          Research &amp; <span className="highlight">Publications</span>
        </h2>
        <p className="section-sub">
          Peer-reviewed work at the intersection of healthcare AI, signal processing, and applied
          machine learning.
        </p>

        <div className="pub-grid">
          {publications.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="pub-card">
              <div className="pub-venue">
                {p.venue}
                <span className="pub-year">{p.year}</span>
              </div>
              <div className="pub-title">{p.title}</div>
              <p className="pub-desc">{p.desc}</p>
              <div className="tag-row" style={{ marginBottom: '1rem' }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                Read Paper ↗
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
