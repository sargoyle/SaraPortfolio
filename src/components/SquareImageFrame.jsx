import ImageWithFallback from './ImageWithFallback.jsx';

export default function SquareImageFrame({
  src,
  alt,
  fallbackLabel,
  fallbackIcon = '✦',
}) {
  return (
    <div className="square-image-frame">
      <ImageWithFallback
        src={src}
        alt={alt}
        className="square-image-frame-image"
        fallbackClassName="square-image-frame-placeholder"
        fallbackLabel={fallbackLabel}
      >
        <span className="project-image-placeholder-icon" aria-hidden="true">{fallbackIcon}</span>
      </ImageWithFallback>
    </div>
  );
}
