import Reveal from './Reveal'
import { lifestyle } from '../data/content'
import coffee1 from '../assets/img/coffee1.jpg'
import coffee2 from '../assets/img/coffee2.jpg'
import work from '../assets/img/work.jpg'
import './Sections.css'

const IMAGES = { coffee1, coffee2, work }

export default function Life() {
  return (
    <section id="life" className="section-alt">
      <div className="container">
        <p className="eyebrow">Life</p>
        <h2 className="section-title">
          Building ideas between <span className="highlight">sips and sunsets</span>
        </h2>
        <p className="life-sub">I love coffee — most of my ideas start with it.</p>

        <div className="life-grid">
          {lifestyle.map((item, i) => (
            <Reveal
              key={item.img}
              delay={i * 100}
              className={`life-card ${i % 2 === 1 ? 'life-card-offset' : ''}`}
            >
              <img src={IMAGES[item.img]} alt={item.caption} />
              <div className="life-overlay">
                <p className="life-caption">{item.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
