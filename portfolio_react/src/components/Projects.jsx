import Reveal from './Reveal'
import TiltCard from './TiltCard'
import CyclingHighlight from './CyclingHighlight'
import { projects, workHighlights } from '../data/content'
import './Projects.css'

export default function Projects() {
  return (
    <section id="work">
      <div className="work-decor" aria-hidden="true">
        <span className="work-diamond work-diamond-1" />
        <span className="work-diamond work-diamond-2" />
        <span className="work-diamond work-diamond-3" />
      </div>

      <div className="container">
        <p className="eyebrow">Work</p>
        <h2 className="section-title work-title">
          Deep understanding &amp; comprehensive experience in{' '}
          <CyclingHighlight items={workHighlights} />
        </h2>
        <p className="section-sub">
          From real-time computer vision to intelligent RAG pipelines — a breadth of systems built
          with curiosity and shipped with care.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} className="project-reveal">
              <TiltCard className="project-card">
                <div className="project-icon">{p.icon}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-footer">
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                    View ↗
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
