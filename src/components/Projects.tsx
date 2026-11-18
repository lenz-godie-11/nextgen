const projects = [
  {
    title: 'Innovation Project',
    status: 'Coming Soon',
    summary:
      'Space reserved for a future NEXT GEN INNOVATORS project. Add the problem, approach, technology used, and measurable outcome when available.',
    meta: 'Details to be added by the team.',
    featured: true,
    media: 'a',
  },
  {
    title: 'Research & Prototype',
    status: 'In Development',
    summary:
      'A dedicated slot for prototypes, experiments, or solution concepts currently being explored through the innovation cycle.',
    meta: 'Replace with verified project information.',
    featured: false,
    media: 'b',
  },
  {
    title: 'Community Solution',
    status: 'Planned',
    summary:
      'A flexible project card for future initiatives focused on people, businesses, communities, or society. Expand this section as new work is confirmed.',
    meta: 'No completed project claims shown.',
    featured: false,
    media: 'c',
  },
]

export function Projects() {
  return (
    <section className="section section--ink" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow">Projects / innovations</p>
            <h2 id="projects-title" className="h2">
              A growing space for current and future innovations
            </h2>
          </div>
          <div>
            <p className="lead">
              This section is designed to expand as NEXT GEN INNOVATORS develops and confirms new
              solutions. Project entries below are clearly identified placeholders.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card${project.featured ? ' project-card--featured' : ''}`}
            >
              <div className={`project-card__media project-card__media--${project.media}`}>
                <span className="project-card__media-badge">{project.status}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>
                <p className="project-card__meta">{project.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}