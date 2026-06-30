import SquareImageFrame from './SquareImageFrame.jsx';

export default function CrafterDarkCard({ project, onOpen }) {
  const imageSrc = project.image1 || project.image;

  return (
    <button type="button" className="project-item card-button" onClick={() => onOpen(project)}>
      {imageSrc ? (
        <SquareImageFrame
          src={imageSrc}
          alt={`${project.title} preview`}
          fallbackLabel={`${project.title} image unavailable`}
          fallbackIcon="✶"
        />
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
