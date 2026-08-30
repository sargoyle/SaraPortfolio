import { useEffect, useState } from 'react';
import ImageWithFallback from './ImageWithFallback.jsx';
import PinterestSaveButton from './PinterestSaveButton.jsx';

const CRAFTS_URL = 'https://saragillard.com/#crafts';

function getInitialImageIndex(craft) {
  const heroIndex = craft.images.findIndex((image) => image.id === craft.heroImageId);
  return heroIndex >= 0 ? heroIndex : 0;
}

function getPinterestDescription(craft, image) {
  if (image?.caption) return `${image.caption} Craft by Sara Gillard.`;
  return `${craft.type} craft by Sara Gillard. ${craft.description}`;
}

export default function CraftDetail({ craft }) {
  const [activeImageIndex, setActiveImageIndex] = useState(getInitialImageIndex(craft));
  const activeImage = craft.images[activeImageIndex];
  const hasGallery = craft.images.length > 1;

  useEffect(() => {
    setActiveImageIndex(getInitialImageIndex(craft));
  }, [craft]);

  return (
    <section className="craft-detail">
      <div className="craft-detail-copy">
        <p className="craft-detail-type">{craft.type}</p>
        <p className="craft-detail-description">{craft.description}</p>
      </div>

      <div className={`craft-detail-gallery${hasGallery ? ' craft-detail-gallery-multi' : ''}`}>
        <figure className="craft-detail-figure">
          <ImageWithFallback
            src={activeImage?.src}
            alt={activeImage?.alt || `${craft.type.toLowerCase()} craft`}
            className="craft-detail-image"
            fallbackClassName="craft-detail-placeholder"
            fallbackLabel={`${craft.type} image unavailable`}
          />
        </figure>

        <PinterestSaveButton
          imageUrl={activeImage?.src}
          destinationUrl={CRAFTS_URL}
          description={getPinterestDescription(craft, activeImage)}
          className="craft-pinterest-save"
          ariaLabel={`Save ${craft.type.toLowerCase()} craft image ${activeImageIndex + 1} to Pinterest`}
        />

        {hasGallery ? (
          <div className="craft-detail-thumbnails" role="list" aria-label={`${craft.type} craft image gallery`}>
            {craft.images.map((image, index) => (
              <button
                type="button"
                key={image.id}
                className="craft-detail-thumbnail"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Show craft image ${index + 1}`}
                aria-pressed={index === activeImageIndex}
              >
                <ImageWithFallback
                  src={image.src}
                  alt=""
                  className="craft-detail-thumbnail-image"
                  fallbackClassName="craft-detail-thumbnail-placeholder"
                  fallbackLabel={`Craft thumbnail ${index + 1} unavailable`}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
