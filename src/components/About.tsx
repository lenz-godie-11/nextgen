import { brand } from '../data'

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About us</p>
          <h2 id="about-title" className="h2">
            A problem-solving startup built for <span className="highlight">meaningful impact</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__body">
            <div className="about__index" aria-hidden="true">
              01
            </div>
            <p className="about__statement">{brand.description}</p>
            <p className="muted">
              We exist to observe the challenges around us, understand where opportunity lives inside
              those challenges, and use technology to build solutions that are practical, useful, and
              scalable. Our work is guided by curiosity, creativity, and a commitment to creating
              measurable value.
            </p>
            <p className="muted">{brand.belief}</p>
          </div>

          <aside className="about__side">
            <h3>Why we exist</h3>
            <p>
              NEXT GEN INNOVATORS transforms real-world challenges into practical technology
              solutions. We see difficult problems not as dead ends, but as opportunities for
              innovation, progress, and impact.
            </p>
            <ul className="about__list">
              <li>Identify meaningful real-world problems.</li>
              <li>Discover opportunities through ideas and technology.</li>
              <li>Build solutions people, businesses, and communities can use.</li>
              <li>Create value that can be measured and improved over time.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}