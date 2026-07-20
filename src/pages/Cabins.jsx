import { useState } from 'react'
import PageHero from '../components/PageHero'
import './Cabins.css'

const cabins = [
  {
    id: 1,
    name: 'Herencia',
    icon: '🌙',
    gradient: 'linear-gradient(135deg, #2d5016 0%, #4a7c20 100%)',
    capacity: '5',
    beds: '2 dormitorios: cama doble plaza + 3 camas individuales',
    description: 'Ideal para grupos o familias. Cuenta con dos dormitorios: uno con cama doble plaza y otro con 3 camas individuales.',
    features: [],
  },
  {
    id: 2,
    name: 'Escudo',
    icon: '🌲',
    gradient: 'linear-gradient(135deg, #1a3d08 0%, #2d6b15 100%)',
    capacity: '2 a 3',
    beds: '1 dormitorio con cama doble plaza + sillón futon en living',
    description: 'Perfecta para parejas o una persona más. Dormitorio con cama doble plaza y sillón futon en el living para una persona adicional.',
    features: [],
  },
  {
    id: 3,
    name: 'Refugio',
    icon: '💧',
    gradient: 'linear-gradient(135deg, #0d3d3d 0%, #1a6b5c 100%)',
    capacity: '6 a 7',
    beds: '2 dormitorios + futon de dos plazas en living',
    description: 'Amplia cabaña para familias o grupos. Dos dormitorios (cama doble plaza + 3 camas) y un sillón futon de dos plazas en el living.',
    features: [],
  },
  {
    id: 4,
    name: 'Fortaleza',
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #5c3010 0%, #9c6830 100%)',
    capacity: '7 a 8',
    beds: '2 dormitorios + futon de dos plazas en living comedor',
    description: 'Nuestra cabaña más espaciosa. Dos dormitorios (cama doble plaza + 3 camas) y un sillón futon de dos plazas en el living comedor.',
    features: [],
  },
  {
    id: 5,
    name: 'Roca Fuerte',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #1a4040 0%, #2e7070 100%)',
    capacity: '4',
    beds: '1 dormitorio con cama doble plaza + futon de dos plazas en living',
    description: 'Cómoda y acogedora para grupos de hasta 4 personas. Un dormitorio con cama doble plaza y sillón futon de dos plazas en el living.',
    features: [],
  },
]

const commonAmenities = [
  'WiFi de alta velocidad',
  'Aire acondicionado frío/calor',
  'Cocina completa con horno y microondas independiente',
  'Heladera con freezer',
  'Vajilla completa',
  'Televisión',
  'Parrilla privada de uso exclusivo',
  'Cochera cubierta individual',
  'Ropa de cama incluida',
]

export default function Cabins() {
  const [modalOpen, setModalOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  function closeModal() {
    setClosing(true)
    setTimeout(() => {
      setModalOpen(false)
      setClosing(false)
    }, 250)
  }

  return (
    <>
      <PageHero
        tag="Alojamiento"
        title="Nuestras Cabañas"
        description="Cinco espacios únicos diseñados para que te desconectes del mundo y disfrutes de la naturaleza cordobesa con todo el confort."
      />
      <section className="cabins">
        <div className="section-container">
          <div className="cabins-intro">
            <button className="btn-general" onClick={() => setModalOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              Descripción general
            </button>
          </div>

          <div className="cabins-grid">
            {cabins.map(cabin => (
              <article key={cabin.id} className="cabin-card">
                <div className="cabin-header" style={{ background: cabin.gradient }}>
                  <span className="cabin-number">N.º {cabin.id}</span>
                  <span className="cabin-icon" role="img" aria-label={`Cabaña ${cabin.id}`}>{cabin.icon}</span>
                  <h3 className="cabin-name">{cabin.name}</h3>
                </div>
                <div className="cabin-body">
                  <p className="cabin-desc">{cabin.description}</p>
                  <div className="cabin-meta">
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      {cabin.capacity} personas
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
        </div>
      </section>

      {modalOpen && (
        <div className={`modal-overlay${closing ? ' modal-overlay--closing' : ''}`} onClick={closeModal}>
          <div className={`modal${closing ? ' modal--closing' : ''}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Cerrar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <h2 className="modal-title">Comodidades de todas las cabañas</h2>
            <p className="modal-intro">
              Cada cabaña está equipada con todo lo que necesitás para una estadía cómoda y sin preocupaciones. Sin importar cuál elijas, vas a encontrar el mismo nivel de confort:
            </p>
            <ul className="modal-amenities">
              {commonAmenities.map(item => (
                <li key={item}>
                  <span className="feature-check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="modal-footer-note">
              Algunas cabañas cuentan además con características propias según su capacidad. Consultanos por cualquier duda.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
