const steps = [
  { title: 'Observe', text: 'Watch the world and notice friction.' },
  { title: 'Identify', text: 'Pinpoint the problem worth solving.' },
  { title: 'Validate', text: 'Test assumptions with real people.' },
  { title: 'Build', text: 'Create a working first version.' },
  { title: 'Test', text: 'Measure, learn, and refine.' },
  { title: 'Improve', text: 'Make it faster, clearer, better.' },
  { title: 'Scale', text: 'Grow the impact that works.' },
]

export function InnovationProcess() {
  return (
    <section className="section section--ink" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our innovation process</p>
          <h2 id="process-title" className="h2">
            A continuous cycle for building better solutions
          </h2>
          <p className="lead">
            We follow a disciplined innovation cycle that keeps us focused on real needs, tested
            ideas, and solutions that can grow with time.
          </p>
        </div>

        <div className="journey" role="list" aria-label="Innovation cycle">
          <span className="journey__line" aria-hidden="true" />
          {steps.map((step, index) => (
            <article className="journey__step" role="listitem" key={step.title}>
              <span className="journey__num" aria-hidden="true">
                {index + 1}
              </span>
              <div className="journey__title">{step.title}</div>
              <p className="journey__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}