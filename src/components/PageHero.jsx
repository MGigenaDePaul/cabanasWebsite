import './PageHero.css'

export default function PageHero({ tag, title, description }) {
  return (
    <div className="page-hero">
      <div className="page-hero-inner">
        {tag && <span className="page-hero-tag">{tag}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}
      </div>
      <div className="page-hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="var(--cream)" />
        </svg>
      </div>
    </div>
  )
}
