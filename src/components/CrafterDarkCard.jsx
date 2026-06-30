import SquareImageFrame from './SquareImageFrame.jsx';

export default function CrafterDarkCard({ project, onOpen }) {
  const imageSrc = project.image1 || project.image;

  return (
    <button type="button" className="crafter-dark-card card-button" onClick={() => onOpen(project)}>
      {imageSrc ? (
        <SquareImageFrame
          src={imageSrc}
          alt={`${project.title} preview`}
        />
      ) : null}
      <span className="crafter-dark-card-content">
        <span className="crafter-dark-card-title">{project.title}</span>
        {project.category || project.size ? (
          <span className="crafter-dark-card-meta">
            {[project.category, project.size].filter(Boolean).join(' • ')}
          </span>
        ) : null}
        <span className="crafter-dark-card-description">{project.summary || project.description}</span>
      </span>
    </button>
  );
}
