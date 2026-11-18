import { brand } from '../data'

export function VisionMission() {
  return (
    <section className="section" id="vision-mission" aria-labelledby="vm-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Vision &amp; mission</p>
          <h2 id="vm-title" className="h2">
            Guided by purpose, progress, and practical innovation
          </h2>
        </div>

        <div className="vm">
          <article className="vm__panel vm__panel--vision">
            <span className="vm__label">Vision</span>
            <p className="vm__text">{brand.vision}</p>
            <span className="vm__ghost" aria-hidden="true">
              V
            </span>
          </article>

          <article className="vm__panel vm__panel--mission">
            <span className="vm__label">Mission</span>
            <p className="vm__text">{brand.mission}</p>
            <span className="vm__ghost" aria-hidden="true">
              M
            </span>
          </article>
        </div>
      </div>
    </section>
  )
}