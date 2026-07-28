import { useState } from 'react';

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackClassName = 'image-placeholder',
  fallbackLabel = 'Image unavailable',
  loading,
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

  return <img src={src} alt={alt} className={className} loading={loading} onError={() => setHasError(true)} />;
}
