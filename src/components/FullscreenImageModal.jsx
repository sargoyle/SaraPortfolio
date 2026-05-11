import ImageWithFallback from './ImageWithFallback.jsx';
import ModalShell from './ModalShell.jsx';

export default function FullscreenImageModal({ photo, onClose, onPrevious, onNext }) {
  if (!photo) return null;

  return (
    <ModalShell
      title={photo.title}
      variant="photo"
      onClose={onClose}
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <ImageWithFallback
        src={photo.src}
        alt={photo.alt || photo.title}
        className="fullscreen-image"
        fallbackClassName="fullscreen-image-placeholder"
        fallbackLabel={`${photo.title} image unavailable`}
      />
      <div className="fullscreen-info">
        <h2>{photo.title}</h2>
      </div>
    </ModalShell>
  );
}
