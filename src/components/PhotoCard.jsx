import ImageWithFallback from './ImageWithFallback.jsx';

export default function PhotoCard({ photo, onOpen }) {
  return (
    <button type="button" className="photo-card card-button" onClick={() => onOpen(photo)}>
      <ImageWithFallback
        src={photo.src}
        alt={photo.alt || photo.title}
        className="photo-image"
        fallbackClassName="photo-placeholder"
        fallbackLabel={`${photo.title} image unavailable`}
      >
        <span className="photo-icon" aria-hidden="true">◌</span>
      </ImageWithFallback>
      <span className="photo-info">
        <span>{photo.title}</span>
      </span>
    </button>
  );
}
