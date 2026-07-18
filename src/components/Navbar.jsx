import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-star">★</span>
          Cabañas 5 Estrellas
        </Link>

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
          <NavLink to="/cabanas" onClick={closeMenu}>Cabañas</NavLink>
          <NavLink to="/galeria" onClick={closeMenu}>Galería</NavLink>
          <NavLink to="/contacto" onClick={closeMenu} className="navbar-nav-cta">Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}
