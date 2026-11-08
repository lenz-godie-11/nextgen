import { brand } from '../data'

export function VisionMission() {
  return (
    <section className="section" id="vision-mission" aria-labelledby="vm-title">
      <div className="container">
        <div className="section__heading">
          <p className="section__eyebrow">Vision &amp; Mission</p>
          <h2 id="vm-title">Guided by purpose, progress, and practical innovation</h2>
        </div>
        <div className="vm-grid">
          <article className="card vm-card">
            <span className="vm-card__label vm-card__label--vision">Vision</span>
            <p className="lead">{brand.vision}</p>
          </article>
          <article className="card vm-card">
            <span className="vm-card__label vm-card__label--mission">Mission</span>
            <p className="lead">{brand.mission}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
