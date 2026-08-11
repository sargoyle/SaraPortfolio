import ImageWithFallback from './ImageWithFallback.jsx';

function getHeroImage(craft) {
  return craft.images.find((image) => image.id === craft.heroImageId) || craft.images[0];
}

export default function CraftCard({ craft, onOpen }) {
  const heroImage = getHeroImage(craft);

  return (
    <article className="craft-card">
      <button
        type="button"
        className="craft-card-button"
        onClick={() => onOpen(craft)}
        aria-label={`View details for ${craft.type.toLowerCase()} craft`}
      >
        <span className="craft-card-media">
          <ImageWithFallback
            src={heroImage?.src}
            alt={heroImage?.alt || `${craft.type.toLowerCase()} craft`}
            className="craft-card-image"
            fallbackClassName="craft-card-placeholder"
            fallbackLabel={`${craft.type} image unavailable`}
          />
        </span>
        <span className="craft-card-content">
          <span className="craft-card-type">{craft.type}</span>
          <span className="craft-card-description">{craft.description}</span>
          <span className="craft-card-action">View Details</span>
        </span>
      </button>
    </article>
  );
}
