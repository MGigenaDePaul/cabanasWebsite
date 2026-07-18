import { Link } from 'react-router-dom'
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
        <nav className="footer-links" aria-label="Navegación del pie">
          <Link to="/">Inicio</Link>
          <Link to="/cabanas">Cabañas</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <p className="footer-copy">
          © {year} Cabañas 5 Estrellas · Sierras de Córdoba, Argentina
        </p>
      </div>
    </footer>
  )
}
