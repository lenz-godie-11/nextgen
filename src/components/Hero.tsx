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
          <h1 id="hero-title">
            NEXT GEN INNOVATORS
            <br />
            <span className="hero__title-accent">{brand.tagline}</span>
          </h1>
          <p className="lead">{brand.description}</p>
          <p className="muted">
            We identify real-world challenges and transform them into practical, scalable technology
            solutions that create measurable value for people, businesses, communities, and society.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              Explore Our Work
            </a>
            <a className="btn btn--secondary" href="#contact">
              Get in Touch
            </a>
          </div>
          <div className="hero__stats" aria-label="Company highlights">
            <div className="stat">
              <div className="stat__label">Focus</div>
              <div className="stat__value">Real-world problems</div>
            </div>
            <div className="stat">
              <div className="stat__label">Approach</div>
              <div className="stat__value">Technology + ideas</div>
            </div>
            <div className="stat">
              <div className="stat__label">Goal</div>
              <div className="stat__value">Measurable impact</div>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <div className="hero__orb hero__orb--three" />
          <div className="hero__logo-card">
            <img className="hero__logo" src={brand.logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
