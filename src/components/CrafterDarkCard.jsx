import SquareImageFrame from './SquareImageFrame.jsx';

function getMetadataRows(project) {
  return [
    project.category,
    project.sizeFor18Count ? `18 count: ${project.sizeFor18Count}` : null,
    project.chartSize ? `Chart: ${project.chartSize}` : null,
    project.numberOfColours ? `Colours: ${project.numberOfColours}` : null,
  ].filter(Boolean);
}

export default function CrafterDarkCard({ project, onOpen }) {
  const imageSrc = project.image1 || project.image;
  const metadataRows = getMetadataRows(project);

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
        {metadataRows.length > 0 ? (
          <span className="crafter-dark-card-meta-list">
            {metadataRows.map((row) => (
              <span key={row} className="crafter-dark-card-meta">{row}</span>
            ))}
          </span>
        ) : null}
        <span className="crafter-dark-card-description">{project.summary || project.description}</span>
      </span>
    </button>
  );
}
