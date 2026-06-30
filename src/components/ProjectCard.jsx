import ImageWithFallback from './ImageWithFallback.jsx';

export default function ProjectCard({ project, onOpen, fallbackIcon = '✦', cardImageVariant = 'default' }) {
  const imageSrc = project.image1 || project.image;
  const imageAlt = `${project.title} preview`;
  const isCrafterCard = cardImageVariant === 'crafter';

  return (
    <button type="button" className="project-item card-button" onClick={() => onOpen(project)}>
      {imageSrc && isCrafterCard ? (
        <div className="crafter-card-image-frame">
          <div className="crafter-card-image-inner">
            <ImageWithFallback
              src={imageSrc}
              alt={imageAlt}
              className="crafter-card-image"
              fallbackClassName="crafter-card-image-placeholder"
              fallbackLabel={`${project.title} image unavailable`}
            >
              <span className="project-image-placeholder-icon" aria-hidden="true">{fallbackIcon}</span>
            </ImageWithFallback>
          </div>
        </div>
      ) : imageSrc ? (
        <div className="project-card-image-container">
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            className="project-card-image"
            fallbackClassName="project-image-placeholder"
            fallbackLabel={`${project.title} image unavailable`}
          >
            <span className="project-image-placeholder-icon" aria-hidden="true">{fallbackIcon}</span>
          </ImageWithFallback>
        </div>
      ) : null}
      <span className="project-card-copy">
        <span className="project-card-title">{project.title}</span>
        {project.category || project.size ? (
          <span className="project-meta">
            {[project.category, project.size].filter(Boolean).join(' • ')}
          </span>
        ) : null}
        <span className="project-description-preview">{project.summary || project.description}</span>
      </span>
    </button>
  );
}
