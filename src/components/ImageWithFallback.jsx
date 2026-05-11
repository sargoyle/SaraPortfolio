import { useState } from 'react';

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackClassName = 'image-placeholder',
  fallbackLabel = 'Image unavailable',
  children,
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={fallbackClassName} role="img" aria-label={fallbackLabel}>
        {children || <span>{fallbackLabel}</span>}
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />;
}
