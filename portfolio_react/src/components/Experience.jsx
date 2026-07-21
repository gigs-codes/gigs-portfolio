import Reveal from './Reveal'
import { experience } from '../data/content'
import './Sections.css'

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">
          Where I've built and <span className="highlight">explored</span>
        </h2>

        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 90} className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-role">{item.role}</div>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-desc">{item.desc}</p>
              <div className="tag-row">
                {item.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
