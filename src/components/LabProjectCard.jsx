import ImageWithFallback from './ImageWithFallback.jsx';

function LabPlaceholder({ title }) {
  return (
    <span className="lab-project-placeholder">
      <span>{title}</span>
    </span>
  );
}

export default function LabProjectCard({ project, onOpen }) {
  return (
    <article className="lab-project-card">
      <button
        type="button"
        className="lab-project-card-button"
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.title}`}
      >
        <span className="lab-project-card-media">
          {project.image ? (
            <ImageWithFallback
              src={project.image}
              alt={`${project.title} preview`}
              className="lab-project-card-image"
              fallbackClassName="lab-project-card-placeholder"
              fallbackLabel={`${project.title} preview unavailable`}
            >
              <LabPlaceholder title={project.title} />
            </ImageWithFallback>
          ) : (
            <span className="lab-project-placeholder" aria-label={`${project.title} placeholder visual`} role="img">
              <span>{project.title}</span>
            </span>
          )}
        </span>
        <span className="lab-project-card-content">
          <span className="lab-project-card-type">{project.type}</span>
          <span className="lab-project-card-title">{project.title}</span>
          <span className="lab-project-card-status">{project.status}</span>
          <span className="lab-project-card-description">{project.cardDescription}</span>
          <span className="lab-project-card-action">{project.link ? 'Open project' : 'View details'}</span>
        </span>
      </button>
    </article>
  );
}
