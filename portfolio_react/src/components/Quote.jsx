import Reveal from './Reveal'
import { pullQuote, profile } from '../data/content'
import work from '../assets/img/work.jpg'
import coffee1 from '../assets/img/coffee1.jpg'
import './Quote.css'

export default function Quote() {
  return (
    <section id="quote">
      <div className="container quote-grid">
        <Reveal className="quote-block">
          <span className="quote-mark">“</span>
          <p className="eyebrow">Philosophy</p>
          <p className="quote-text">{pullQuote}</p>
          <div className="quote-attr">
            <span className="quote-attr-name">{profile.name}</span>
            <span className="quote-attr-role">{profile.role}</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="quote-collage" aria-hidden="true">
          <img src={work} alt="" className="quote-photo quote-photo-1" />
          <img src={coffee1} alt="" className="quote-photo quote-photo-2" />
        </Reveal>
      </div>
    </section>
  )
}
