import { Link } from 'react-router-dom'
import heroImg from '../assets/cabinQuality.jpg'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import './Home.css'

const perks = [
  {
    label: 'Pileta al aire libre',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M2 12h20M2 16c2-2 4 2 6 0s4-2 6 0 4 2 6 0M7 12V7a5 5 0 0 1 10 0v5" />
      </svg>
    ),
  },
  {
    label: 'Parrilla privada',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M4 6h16M4 10h16M12 6v10M8 20h8M12 16v4" />
        <path d="M6 2c0 2-2 3-2 5h4c0-2-2-3-2-5ZM18 2c0 2-2 3-2 5h4c0-2-2-3-2-5Z" />
      </svg>
    ),
  },
  {
    label: 'WiFi incluido',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Aire acondicionado',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="3" width="20" height="8" rx="2" />
        <path d="M7 11v3m0 0-2 2m2-2 2 2M12 11v3m0 0-2 2m2-2 2 2M17 11v3m0 0-2 2m2-2 2 2" />
      </svg>
    ),
  },
  {
    label: 'Televisión',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: 'Cochera individual',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M3 9l2-5h14l2 5" />
        <rect x="2" y="9" width="20" height="10" rx="1" />
        <path d="M8 19v2M16 19v2M2 13h20" />
      </svg>
    ),
  },
  {
    label: 'Vista a las sierras',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
]

const previewCabins = [
  {
    id: 1,
    icon: '🌙',
    gradient: 'linear-gradient(135deg, #2d5016 0%, #4a7c20 100%)',
    capacity: 2,
    beds: '1 cama matrimonial',
    description: 'Ideal para parejas. Acogedora y romántica con vista a las sierras y todo lo que necesitás para descansar.',
  },
  {
    id: 4,
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #5c3010 0%, #9c6830 100%)',
    capacity: 6,
    beds: '3 habitaciones',
    description: 'Nuestra cabaña premium. El espacio ideal para grupos o familias que buscan el máximo confort.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-pre">Las Sierras de Córdoba</p>
          <h1 className="hero-title">Cabañas<br />5 Estrellas</h1>
          <div className="hero-stars" aria-label="5 estrellas">★★★★★</div>
          <p className="hero-subtitle">
            Tu refugio en la montaña, donde la naturaleza y el confort se encuentran
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/5493516205470"
              className="hero-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar por WhatsApp
            </a>
            <Link to="/cabanas" className="hero-cta-alt">Ver Cabañas</Link>
          </div>
        </div>

        <a href="#perks" className="hero-scroll" aria-label="Ver más">
          <span>Ver más</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </section>

      <div className="home-perks" id="perks">
        <div className="section-container">
          <div className="home-perks-grid">
            {perks.map(p => (
              <div key={p.label} className="home-perk">
                <span className="home-perk-icon">{p.icon}</span>
                <span className="home-perk-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="home-cabins">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Alojamiento</span>
            <h2 className="section-title">Nuestras Cabañas</h2>
            <p className="section-desc">
              Cuatro opciones únicas para cada tipo de viajero, todas con WiFi, AC y cocina equipada.
            </p>
          </div>
          <div className="home-cabins-grid">
            {previewCabins.map(cabin => (
              <article key={cabin.id} className="home-cabin-card">
                <div className="home-cabin-header" style={{ background: cabin.gradient }}>
                  <span className="home-cabin-icon" role="img" aria-label={`Cabaña ${cabin.id}`}>{cabin.icon}</span>
                </div>
                <div className="home-cabin-body">
                  <h3 className="home-cabin-name">Cabaña {cabin.id}</h3>
                  <p className="home-cabin-desc">{cabin.description}</p>
                  <div className="home-cabin-meta">
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      Hasta {cabin.capacity} personas
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="M2 11h20"/><path d="M2 13v8h20v-8"/><path d="M10 13v8"/></svg>
                      {cabin.beds}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-section-cta">
            <Link to="/cabanas" className="home-btn">Ver todas las cabañas →</Link>
          </div>
        </div>
      </section>

      <section className="home-gallery">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag light">Instalaciones</span>
            <h2 className="section-title light">Un entorno único</h2>
            <p className="section-desc light">
              Pileta, quincho, jardín y las sierras como horizonte.
            </p>
          </div>
          <div className="home-gallery-grid">
            <div className="home-gallery-main">
              <img src={image1} alt="Quincho y área de parrilla cubierta" loading="lazy" />
            </div>
            <div className="home-gallery-side">
              <div className="home-gallery-side-img">
                <img src={image2} alt="Pileta con gazebo y vistas a las sierras" loading="lazy" />
              </div>
              <div className="home-gallery-side-img">
                <img src={image3} alt="Pileta principal del complejo" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="home-section-cta">
            <Link to="/galeria" className="home-btn home-btn--light">Ver galería completa →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
