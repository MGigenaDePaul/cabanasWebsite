import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="footer-star">★</span>
          Cabañas 5 Estrellas
        </div>
        <p className="footer-copy">© {year} · Sierras de Córdoba, Argentina</p>
      </div>
    </footer>
  )
}
