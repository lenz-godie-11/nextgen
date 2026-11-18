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
        <div className="section-head">
          <p className="eyebrow">Our values</p>
          <h2 id="values-title" className="h2">
            The personality behind NEXT GEN INNOVATORS
          </h2>
        </div>

        <div className="values-list">
          {values.map((value, index) => (
            <article className="value-row" key={value.title}>
              <span className="value-row__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="value-row__title">{value.title}</h3>
              <p className="value-row__desc">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}