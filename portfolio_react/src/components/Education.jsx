import Reveal from './Reveal'
import { education } from '../data/content'
import './Sections.css'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2 className="section-title">Where it all started</h2>

        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100} className="edu-card">
              <div className="edu-num">0{i + 1}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-period">{e.period}</div>
              <p className="edu-desc">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
