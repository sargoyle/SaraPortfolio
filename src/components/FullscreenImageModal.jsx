import ImageWithFallback from './ImageWithFallback.jsx';
import ModalShell from './ModalShell.jsx';
import PinterestSaveButton from './PinterestSaveButton.jsx';

const PHOTOGRAPHY_URL = 'https://saragillard.com/#photography';

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
      <div className="fullscreen-image-stage">
        <ImageWithFallback
          src={photo.src}
          alt={photo.alt || photo.title}
          className="fullscreen-image"
          fallbackClassName="fullscreen-image-placeholder"
          fallbackLabel={`${photo.title} image unavailable`}
        />
        <PinterestSaveButton
          imageUrl={photo.src}
          destinationUrl={PHOTOGRAPHY_URL}
          description={`${photo.alt || photo.title} photography by Sara Gillard.`}
          className="fullscreen-pinterest-save"
          ariaLabel={`Save ${photo.alt || photo.title} to Pinterest`}
        />
      </div>
    </ModalShell>
  );
}
