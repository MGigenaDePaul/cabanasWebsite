import PageHero from '../components/PageHero'
import './Cabins.css'

const cabins = [
  {
    id: 1,
    icon: '🌙',
    gradient: 'linear-gradient(135deg, #2d5016 0%, #4a7c20 100%)',
    capacity: '5',
    beds: '2 dormitorios: cama doble plaza + 3 camas individuales',
    description: 'Ideal para grupos o familias. Cuenta con dos dormitorios: uno con cama doble plaza y otro con 3 camas individuales.',
    features: ['WiFi incluido', 'Aire acondicionado', 'Calefacción', 'Cocina equipada', 'Smart TV', 'Ropa de cama'],
  },
  {
    id: 2,
    icon: '🌲',
    gradient: 'linear-gradient(135deg, #1a3d08 0%, #2d6b15 100%)',
    capacity: '2 a 3',
    beds: '1 dormitorio con cama doble plaza + sillón futon en living',
    description: 'Perfecta para parejas o una persona más. Dormitorio con cama doble plaza y sillón futon en el living para una persona adicional.',
    features: ['WiFi incluido', 'Aire acondicionado', 'Calefacción', 'Cocina equipada', 'Smart TV', 'Parrilla privada'],
  },
  {
    id: 3,
    icon: '💧',
    gradient: 'linear-gradient(135deg, #0d3d3d 0%, #1a6b5c 100%)',
    capacity: '6 a 7',
    beds: '2 dormitorios + futon de dos plazas en living',
    description: 'Amplia cabaña para familias o grupos. Dos dormitorios (cama doble plaza + 3 camas) y un sillón futon de dos plazas en el living.',
    features: ['WiFi incluido', 'Aire acondicionado', 'Calefacción', 'Cocina equipada', 'Smart TV', 'Terraza privada'],
  },
  {
    id: 4,
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #5c3010 0%, #9c6830 100%)',
    capacity: '7 a 8',
    beds: '2 dormitorios + futon de dos plazas en living comedor',
    description: 'Nuestra cabaña más espaciosa. Dos dormitorios (cama doble plaza + 3 camas) y un sillón futon de dos plazas en el living comedor.',
    features: ['WiFi incluido', 'Aire acondicionado', 'Calefacción', 'Cocina equipada', 'Smart TV', 'Parrilla privada', 'Sala de estar'],
  },
  {
    id: 5,
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #1a4040 0%, #2e7070 100%)',
    capacity: '4',
    beds: '1 dormitorio con cama doble plaza + futon de dos plazas en living',
    description: 'Cómoda y acogedora para grupos de hasta 4 personas. Un dormitorio con cama doble plaza y sillón futon de dos plazas en el living.',
    features: ['WiFi incluido', 'Aire acondicionado', 'Calefacción', 'Cocina equipada', 'Smart TV', 'Ropa de cama'],
  },
]

export default function Cabins() {
  return (
    <>
      <PageHero
        tag="Alojamiento"
        title="Nuestras Cabañas"
        description="Cinco espacios únicos diseñados para que te desconectes del mundo y disfrutes de la naturaleza cordobesa con todo el confort."
      />
      <section className="cabins">
      <div className="section-container">
        <div className="cabins-grid">
          {cabins.map(cabin => (
            <article key={cabin.id} className="cabin-card">
              <div className="cabin-header" style={{ background: cabin.gradient }}>
                <span className="cabin-icon" role="img" aria-label={`Cabaña ${cabin.id}`}>{cabin.icon}</span>
              </div>
              <div className="cabin-body">
                <h3 className="cabin-name">Cabaña {cabin.id}</h3>
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
                <ul className="cabin-features">
                  {cabin.features.map(f => (
                    <li key={f}>
                      <span className="feature-check" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}
