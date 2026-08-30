import ImageWithFallback from './ImageWithFallback.jsx';
import ModalShell from './ModalShell.jsx';
import PinterestSaveButton from './PinterestSaveButton.jsx';

const CROSS_STITCH_URL = 'https://saragillard.com/#crafter';

function getProjectImages(project) {
  if (Array.isArray(project.images) && project.images.length > 0) return project.images;
  return [project.image1, project.image2, project.image].filter(Boolean);
}

function getStructuredMetadata(project) {
  return [
    project.sizeFor18Count ? ['Size for 18 count', project.sizeFor18Count] : null,
    project.chartSize ? ['Chart size', project.chartSize] : null,
    project.numberOfColours ? ['Colours', project.numberOfColours] : null,
  ].filter(Boolean);
}

function getPinterestDescription(project, imageIndex) {
  const imageType = imageIndex === 1 ? 'finished cross-stitch artwork' : 'cross-stitch pattern';
  return `${project.title} ${imageType} by Sara Gillard.`;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onPrevious,
  onNext,
  fallbackIcon = '✦',
}) {
  if (!project) return null;

  const images = getProjectImages(project);
  const structuredMetadata = getStructuredMetadata(project);

  return (
    <ModalShell title={project.title} onClose={onClose} onPrevious={onPrevious} onNext={onNext}>
      <article className="fullscreen-project">
        <h2>{project.title}</h2>
        {structuredMetadata.length > 0 ? (
          <dl className="project-metadata">
            {structuredMetadata.map(([label, value]) => (
              <div key={label} className="project-metadata-row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        ) : (project.category || project.size || project.subtitle) && (
          <p className="project-size">
            {[project.category, project.size || project.subtitle].filter(Boolean).join(' • ')}
          </p>
        )}
        {project.links?.length > 0 && (
          <div className="poc-links" aria-label={`${project.title} links`}>
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="poc-url">
                {link.label} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        )}
        {images.length > 0 && (
          <div className={images.length > 1 ? 'project-images' : 'poc-image-container'}>
            {images.map((image, index) => (
              <div key={`${image}-${index}`} className="project-image-with-action">
                <div className="project-image-container">
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    className={images.length > 1 ? 'project-image' : 'poc-image'}
                    fallbackClassName="project-image-placeholder"
                    fallbackLabel={`${project.title} image ${index + 1} unavailable`}
                  >
                    <span className="project-image-placeholder-icon" aria-hidden="true">{fallbackIcon}</span>
                    <span className="project-image-placeholder-text">Image {index + 1}</span>
                  </ImageWithFallback>
                </div>
                <PinterestSaveButton
                  imageUrl={image}
                  destinationUrl={CROSS_STITCH_URL}
                  description={getPinterestDescription(project, index)}
                  className="project-pinterest-save"
                  ariaLabel={`Save ${project.title} image ${index + 1} to Pinterest`}
                />
              </div>
            ))}
          </div>
        )}
        <p className="project-description">{project.description}</p>
        {project.category ? (
          <div className="project-tags" aria-label="Project category">
            <span className="project-tag">{project.category}</span>
          </div>
        ) : null}
      </article>
    </ModalShell>
  );
}
