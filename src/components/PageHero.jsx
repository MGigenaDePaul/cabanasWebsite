import './PageHero.css'

export default function PageHero({ tag, title, description }) {
  return (
    <div className="page-hero">
      <div className="page-hero-inner">
        {tag && <span className="page-hero-tag">{tag}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}
      </div>
    </div>
  )
}
