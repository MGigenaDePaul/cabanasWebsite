import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import PageHero from '../components/PageHero'
import './Gallery.css'

const photos = [
  { src: image1, alt: 'Quincho y área de parrilla cubierta' },
  { src: image2, alt: 'Pileta con gazebo y vistas a las sierras' },
  { src: image3, alt: 'Pileta principal del complejo' },
]

export default function Gallery() {
  return (
    <>
      <PageHero
        tag="Instalaciones"
        title="Galería"
        description="Conocé nuestras instalaciones y dejate conquistar por la belleza del entorno serrano cordobés."
      />
      <section className="gallery">
        <div className="section-container">
          <div className="gallery-grid">
            {photos.map((photo, i) => (
              <div key={i} className="gallery-item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
