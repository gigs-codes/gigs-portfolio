import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Crafted with ☕ &amp; curiosity by Garima Swami · Berlin, Germany · {new Date().getFullYear()}
      </p>
      <a href="#top" className="footer-top" aria-label="Back to top">
        ↑
      </a>
    </footer>
  )
}
