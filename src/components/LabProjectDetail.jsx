import { useEffect, useState } from 'react';
import ImageWithFallback from './ImageWithFallback.jsx';

function LabDetailPlaceholder({ title }) {
  return (
    <span className="lab-project-detail-placeholder">
      <span>{title}</span>
    </span>
  );
}

export default function LabProjectDetail({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mediaStyle = {
    '--lab-detail-media-fit': project.detailMediaFit || project.mediaFit || 'contain',
    '--lab-detail-media-position': project.detailMediaPosition || project.mediaPosition || 'center',
  };
  const blurbParagraphs = project.blurb.split('\n\n');
  const galleryImages = project.gallery?.length
    ? project.gallery
    : project.image
      ? [{ src: project.image, alt: project.imageAlt || `${project.title} preview` }]
      : [];
  const activeImage = galleryImages[activeImageIndex];
  const hasGallery = galleryImages.length > 1;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project.id]);

  return (
    <section className="lab-project-detail">
      <div className="lab-project-detail-copy">
        <header className="lab-project-detail-header">
          <p className="lab-project-detail-type">{project.type}</p>
          <h2>{project.title}</h2>
          <p className="lab-project-detail-status">{project.status}</p>
          <p className="lab-project-detail-subtitle">{project.subtitle}</p>
        </header>

        <div className="lab-project-detail-body">
          {blurbParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {project.link ? (
            <div className="lab-project-detail-actions">
              <a
                href={project.link}
                target={project.link.startsWith('/') ? undefined : '_blank'}
                rel={project.link.startsWith('/') ? undefined : 'noopener noreferrer'}
                className="lab-project-link"
              >
                {project.linkLabel || 'Open project'}
              </a>
            </div>
          ) : null}
          {project.download ? (
            <div className="lab-project-detail-actions">
              <a href={project.download} download className="lab-project-link">
                {project.downloadLabel || 'Download'}
              </a>
            </div>
          ) : null}
          {!project.link && !project.download && project.actionLabel ? (
            <div className="lab-project-detail-actions">
              <span className="lab-project-link lab-project-link-static" aria-disabled="true">
                {project.actionLabel}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <div className={`lab-project-detail-media${hasGallery ? ' lab-project-detail-media-gallery' : ''}`} style={mediaStyle}>
        {activeImage ? (
          <>
            <ImageWithFallback
              src={activeImage.src}
              alt={activeImage.alt || project.imageAlt || `${project.title} preview`}
              className="lab-project-detail-image"
              fallbackClassName="lab-project-detail-placeholder"
              fallbackLabel={`${project.title} preview unavailable`}
            >
              <LabDetailPlaceholder title={project.title} />
            </ImageWithFallback>

            {hasGallery ? (
              <>
                {(activeImage.title || activeImage.caption) ? (
                  <div className="lab-project-gallery-caption" aria-live="polite">
                    {activeImage.title ? <p className="lab-project-gallery-caption-title">{activeImage.title}</p> : null}
                    {activeImage.caption ? <p className="lab-project-gallery-caption-text">{activeImage.caption}</p> : null}
                  </div>
                ) : null}

                <div className="lab-project-gallery-thumbnails" role="list" aria-label={`${project.title} image gallery`}>
                  {galleryImages.map((image, index) => (
                    <button
                      type="button"
                      key={image.src}
                      className="lab-project-gallery-thumb"
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Show image ${index + 1}: ${image.title || project.title}`}
                      aria-pressed={index === activeImageIndex}
                    >
                      <ImageWithFallback
                        src={image.src}
                        alt=""
                        className="lab-project-gallery-thumb-image"
                        fallbackClassName="lab-project-gallery-thumb-fallback"
                        fallbackLabel={`${image.title || project.title} thumbnail unavailable`}
                      >
                        <span>{index + 1}</span>
                      </ImageWithFallback>
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </>
        ) : (
          <span className="lab-project-detail-placeholder" aria-label={`${project.title} placeholder visual`} role="img">
            <span>{project.title}</span>
          </span>
        )}
      </div>
    </section>
  );
}
