const steps = [
  {
    title: 'Problem',
    text: 'Observe real challenges and understand what people need.',
  },
  {
    title: 'Idea',
    text: 'Explore possibilities with curiosity and creative thinking.',
  },
  {
    title: 'Technology',
    text: 'Apply the right tools, systems, and technical knowledge.',
  },
  {
    title: 'Solution',
    text: 'Build practical, usable, and scalable solutions.',
  },
  {
    title: 'Impact',
    text: 'Create measurable value for people and society.',
  },
]

export function WhatWeDo() {
  return (
    <section className="section section--ink" id="what-we-do" aria-labelledby="whatwedo-title">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="whatwedo-title" className="h2">
              From real-world problems to real, working technology
            </h2>
          </div>
          <div>
            <p className="lead">
              Our approach isn&apos;t limited to one technology, language, or industry. We choose the
              methods and tools that best fit the problem, the users, and the impact we want to
              create.
            </p>
          </div>
        </div>

        <div className="flow">
          {steps.map((step, index) => (
            <article className="flow__step" key={step.title}>
              <span className="flow__num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="flow__title">{step.title}</h3>
              <p className="flow__text">{step.text}</p>
              {index < steps.length - 1 ? (
                <span className="flow__connector" aria-hidden="true">
                  →
                </span>
              ) : null}
            </article>
          ))}
        </div>

        <div className="flow__bar" aria-label="Innovation formula">
          <span>Problem</span> <b>+</b> <span>Idea</span> <b>+</b> <span>Technology</span>{' '}
          <b>=</b> <span>Solution</span> <b>→</b> <span>Impact</span>
        </div>
      </div>
    </section>
  )
}