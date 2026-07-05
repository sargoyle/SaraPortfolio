import ImageWithFallback from './ImageWithFallback.jsx';

export default function SquareImageFrame({ src, alt }) {
  return (
    <div className="square-image-frame">
      <ImageWithFallback
        src={src}
        alt={alt}
        className="square-image-frame-image"
        fallbackClassName="square-image-frame-placeholder"
        fallbackLabel={`${alt} unavailable`}
      >
        <span className="project-image-placeholder-icon" aria-hidden="true">✦</span>
      </ImageWithFallback>
    </div>
  );
}
