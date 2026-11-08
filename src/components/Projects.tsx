const placeholders = [
  {
    title: 'Innovation Project Placeholder',
    status: 'Coming Soon',
    summary:
      'Space reserved for a future NEXT GEN INNOVATORS project. Add the problem, approach, technology used, and measurable outcome when available.',
    meta: 'Details to be added by the team.',
  },
  {
    title: 'Research & Prototype Placeholder',
    status: 'In Development',
    summary:
      'A dedicated slot for prototypes, experiments, or solution concepts currently being explored through the innovation cycle.',
    meta: 'Replace with verified project information.',
  },
  {
    title: 'Community Solution Placeholder',
    status: 'Planned',
    summary:
      'A flexible project card for future initiatives focused on people, businesses, communities, or society. Expand this section as new work is confirmed.',
    meta: 'No completed project claims shown.',
  },
]

export function Projects() {
  return (
    <section className="section section--alt" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section__heading">
          <p className="section__eyebrow">Projects / Innovations</p>
          <h2 id="projects-title">A growing space for current and future innovations</h2>
          <p className="lead" style={{ marginTop: '0.85rem' }}>
            This section is designed to expand as NEXT GEN INNOVATORS develops and confirms new
            solutions. Project entries below are clearly identified placeholders.
          </p>
        </div>

        <div className="projects-grid">
          {placeholders.map((project) => (
            <article key={project.title} className="card project-card">
              <span className="project-card__badge">{project.status}</span>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="muted">{project.summary}</p>
              <p className="project-card__meta">{project.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
