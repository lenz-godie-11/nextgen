import { brand } from '../data'

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section__heading">
          <p className="section__eyebrow">About Us</p>
          <h2 id="about-title">A problem-solving startup built for meaningful impact</h2>
        </div>
        <div className="about__grid">
          <article className="card about__panel">
            <p className="lead">{brand.description}</p>
            <p style={{ marginTop: '1rem' }}>
              We exist to observe the challenges around us, understand where opportunity lives inside
              those challenges, and use technology to build solutions that are practical, useful, and
              scalable. Our work is guided by curiosity, creativity, and a commitment to creating
              measurable value.
            </p>
            <p style={{ marginTop: '1rem' }}>{brand.belief}</p>
          </article>
          <aside className="card about__panel about__panel--accent">
            <h3>Why we exist</h3>
            <p style={{ marginTop: '0.75rem' }}>
              NEXT GEN INNOVATORS identifies real-world challenges and transforms them into practical
              technology solutions. We see difficult problems not as dead ends, but as opportunities
              for innovation, progress, and impact.
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
