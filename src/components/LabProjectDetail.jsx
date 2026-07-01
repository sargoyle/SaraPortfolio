import ImageWithFallback from './ImageWithFallback.jsx';

function LabDetailPlaceholder({ title }) {
  return (
    <span className="lab-project-detail-placeholder">
      <span>{title}</span>
    </span>
  );
}

export default function LabProjectDetail({ project }) {
  return (
    <section className="lab-project-detail">
      <header className="lab-project-detail-header">
        <p className="lab-project-detail-type">{project.type}</p>
        <h2>{project.title}</h2>
        <p className="lab-project-detail-status">{project.status}</p>
        <p className="lab-project-detail-subtitle">{project.subtitle}</p>
      </header>

      <div className="lab-project-detail-media">
        {project.image ? (
          <ImageWithFallback
            src={project.image}
            alt={`${project.title} preview`}
            className="lab-project-detail-image"
            fallbackClassName="lab-project-detail-placeholder"
            fallbackLabel={`${project.title} preview unavailable`}
          >
            <LabDetailPlaceholder title={project.title} />
          </ImageWithFallback>
        ) : (
          <span className="lab-project-detail-placeholder" aria-label={`${project.title} placeholder visual`} role="img">
            <span>{project.title}</span>
          </span>
        )}
      </div>

      <div className="lab-project-detail-body">
        <p>{project.blurb}</p>
        {project.focus?.length > 0 && (
          <>
            <h3>Focus</h3>
            <ul className="lab-project-focus-list">
              {project.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="lab-project-link">
            Open project
          </a>
        ) : null}
      </div>
    </section>
  );
}
