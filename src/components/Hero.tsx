import { brand } from '../data'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__kicker">
            <span className="hero__kicker-dot" aria-hidden="true" />
            Technology-driven innovation startup
          </p>

          <h1 id="hero-title" className="hero__title">
            Turning
            <br />
            <span className="hero__title-accent">Impossible</span>
            <br />
            into Possible.
          </h1>

          <p className="lead hero__desc">{brand.description}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              Explore Our Work
              
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero__stats" aria-label="Company highlights">
            <div className="hero__stat">
              <span className="hero__stat-label">Focus</span>
              <span className="hero__stat-value">Real-world problems</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-label">Approach</span>
              <span className="hero__stat-value">Technology + ideas</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-label">Goal</span>
              <span className="hero__stat-value">Measurable impact</span>
            </div>
          </div>
        </div>

        <div className="hero__art">
          <div className="hero__stage">
            <div className="hero__shape hero__shape--blob" aria-hidden="true" />
            <div className="hero__shape hero__shape--ring" aria-hidden="true" />
            <div className="hero__shape hero__shape--square" aria-hidden="true" />
            <div className="hero__shape hero__shape--dot" aria-hidden="true" />
            <div className="hero__shape hero__shape--grid" aria-hidden="true" />

            <div className="hero__logo-card">
              <img className="hero__logo" src={brand.logo} alt="" />
            </div>

            <span className="hero__badge hero__badge--a">
              <span className="hero__kicker-dot" aria-hidden="true" />
              Build
            </span>
            <span className="hero__badge hero__badge--b">Scale → Impact</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Marquee() {
  const items = ['Innovation', 'Technology', 'AI & Software', 'Digital Products', 'Real Impact']
  const loop = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}