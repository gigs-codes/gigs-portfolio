import { skills } from '../data/content'
import './Skills.css'

function chunk(arr, n) {
  const out = []
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n))
  return out
}

export default function Skills() {
  const rows = chunk(skills, Math.ceil(skills.length / 3))

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">Tools of the trade</h2>
      </div>

      <div className="skills-stack">
        {rows.map((row, i) => (
          <div className="marquee-wrap" key={i}>
            <div className={`marquee-track ${i % 2 === 1 ? 'marquee-reverse' : ''}`}>
              {[...row, ...row].map((s, j) => (
                <span className="skill-chip" key={`${s}-${j}`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
