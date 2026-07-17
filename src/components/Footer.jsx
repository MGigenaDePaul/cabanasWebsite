import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="footer-star">★</span>
          Cabañas Estrellas
        </div>
        <nav className="footer-links" aria-label="Navegación del pie">
          <a href="#inicio">Inicio</a>
          <a href="#cabanas">Cabañas</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className="footer-copy">
          © {year} Cabañas Estrellas · Sierras de Córdoba, Argentina
        </p>
      </div>
    </footer>
  )
}
