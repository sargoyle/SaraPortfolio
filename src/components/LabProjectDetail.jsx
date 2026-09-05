import { useEffect, useState } from 'react';
import ImageWithFallback from './ImageWithFallback.jsx';
import PinterestSaveButton from './PinterestSaveButton.jsx';
import { getLabProjectUrl } from '../utils/labRoutes.js';

function LabDetailPlaceholder({ title }) {
  return (
    <span className="lab-project-detail-placeholder">
      <span>{title}</span>
    </span>
  );
}

function getGalleryPinterestDescription(projectTitle, image) {
  if (image.caption) return `${image.caption} ${projectTitle} by Sara Gillard.`;
  if (image.title) return `${image.title} from ${projectTitle} by Sara Gillard.`;
  return `${projectTitle} project image by Sara Gillard.`;
}

function LabProjectGallery({ project, projectTitle, section }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const galleryImages = section.images || [];
  const activeImage = galleryImages[activeImageIndex];
  const hasGallery = galleryImages.length > 1;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [section.title]);

  if (!activeImage) return null;

  return (
    <section className="lab-project-gallery-section">
      <h3>{section.title}</h3>
      <ImageWithFallback
        src={activeImage.src}
        alt={activeImage.alt || `${projectTitle} ${section.title} image`}
        className="lab-project-detail-image"
        fallbackClassName="lab-project-detail-placeholder"
        fallbackLabel={`${projectTitle} ${section.title} image unavailable`}
      >
        <LabDetailPlaceholder title={projectTitle} />
      </ImageWithFallback>

      {(activeImage.title || activeImage.caption) ? (
        <div className="lab-project-gallery-caption" aria-live="polite">
          {activeImage.title ? <p className="lab-project-gallery-caption-title">{activeImage.title}</p> : null}
          {activeImage.caption ? <p className="lab-project-gallery-caption-text">{activeImage.caption}</p> : null}
        </div>
      ) : null}

      <PinterestSaveButton
        imageUrl={activeImage.src}
        destinationUrl={getLabProjectUrl(project)}
        description={getGalleryPinterestDescription(projectTitle, activeImage)}
        className="lab-project-pinterest-save"
        ariaLabel={`Save ${activeImage.title || `${projectTitle} ${section.title} image`} to Pinterest`}
      />

      {hasGallery ? (
        <div className="lab-project-gallery-thumbnails" role="list" aria-label={`${projectTitle} ${section.title} image gallery`}>
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className="lab-project-gallery-thumb"
              onClick={() => setActiveImageIndex(index)}
              aria-label={`Show ${section.title} image ${index + 1}: ${image.title || projectTitle}`}
              aria-pressed={index === activeImageIndex}
            >
              <ImageWithFallback
                src={image.src}
                alt=""
                className="lab-project-gallery-thumb-image"
                fallbackClassName="lab-project-gallery-thumb-fallback"
                fallbackLabel={`${image.title || projectTitle} thumbnail unavailable`}
              >
                <span>{index + 1}</span>
              </ImageWithFallback>
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function slugifyId(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function LabProjectVideos({ projectTitle, videos = [] }) {
  const visibleVideos = videos.filter((video) => video.embedUrl || video.title || video.description || video.status);

  if (!visibleVideos.length) return null;

  const headingId = `${slugifyId(projectTitle)}-videos`;

  return (
    <section className="lab-project-video-section" aria-labelledby={headingId}>
      <h3 id={headingId}>Videos</h3>
      <div className="lab-project-videos">
        {visibleVideos.map((video) => (
          <article className="lab-project-video" key={video.embedUrl || video.url || video.title}>
            {video.title ? <p className="lab-project-video-title">{video.title}</p> : null}
            {video.description ? <p className="lab-project-video-description">{video.description}</p> : null}
            {video.embedUrl ? (
              <div className="lab-project-video-frame">
                <iframe
                  src={video.embedUrl}
                  title={video.iframeTitle || video.title || `${projectTitle} video`}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : (
              <div className="lab-project-video-placeholder" aria-label={`${video.title || projectTitle} video coming soon`}>
                <span>{video.status || 'Coming soon'}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
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
  const hasGallerySections = project.gallerySections?.some((section) => section.images?.length);
  const isImageLedDetail = project.id === 'commonwealth-after-dark';
  const detailLinks = Array.isArray(project.detailLinks) ? project.detailLinks : [];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project.id]);

  return (
    <section className={`lab-project-detail${hasGallerySections ? ' lab-project-detail-sectioned' : ''}${isImageLedDetail ? ' lab-project-detail-image-led' : ''}`}>
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
          {!project.link && !project.download && (project.actionLabel || detailLinks.length > 0) ? (
            <div className="lab-project-detail-actions">
              {project.actionLabel ? (
                <span className="lab-project-link lab-project-link-static" aria-disabled="true">
                  {project.actionLabel}
                </span>
              ) : null}
              {detailLinks.map((detailLink) => (
                <a
                  key={detailLink.href}
                  href={detailLink.href}
                  target={detailLink.href.startsWith('/') ? undefined : '_blank'}
                  rel={detailLink.href.startsWith('/') ? undefined : 'noopener noreferrer'}
                  className="lab-project-link"
                >
                  {detailLink.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className={`lab-project-detail-media${hasGallery || hasGallerySections ? ' lab-project-detail-media-gallery' : ''}`} style={mediaStyle}>
        {hasGallerySections ? (
          <>
            {project.gallerySections.map((section) => (
              <LabProjectGallery key={section.title} project={project} projectTitle={project.title} section={section} />
            ))}
            <LabProjectVideos projectTitle={project.title} videos={project.videos} />
          </>
        ) : activeImage ? (
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
