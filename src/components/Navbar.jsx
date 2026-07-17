import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-star">★</span>
          Cabañas Estrellas
        </a>

        <button
          className={`navbar-toggle${menuOpen ? ' navbar-toggle--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-nav${menuOpen ? ' navbar-nav--open' : ''}`}>
          <a href="#cabanas" onClick={closeMenu}>Cabañas</a>
          <a href="#galeria" onClick={closeMenu}>Galería</a>
          <a href="#contacto" onClick={closeMenu} className="navbar-nav-cta">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
