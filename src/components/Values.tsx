const values = [
  {
    title: 'Innovative',
    description: 'We think differently and look for new ways to solve problems.',
  },
  {
    title: 'Bold',
    description: 'We are willing to explore difficult challenges.',
  },
  {
    title: 'Curious',
    description: 'We ask questions, learn, and experiment.',
  },
  {
    title: 'Practical',
    description: 'We turn ideas into things people can actually use.',
  },
  {
    title: 'Future-focused',
    description: 'We build with tomorrow in mind.',
  },
  {
    title: 'Impact-driven',
    description: 'We measure our success by the value our solutions create.',
  },
]

export function Values() {
  return (
    <section className="section" id="values" aria-labelledby="values-title">
      <div className="container">
        <div className="section__heading">
          <p className="section__eyebrow">Our Values</p>
          <h2 id="values-title">The personality behind NEXT GEN INNOVATORS</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="card value-card">
              <div className="value-card__marker" aria-hidden="true" />
              <h3>{value.title}</h3>
              <p className="muted" style={{ marginTop: '0.45rem' }}>
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
