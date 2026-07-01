import { useEffect, useRef } from 'react';

export default function ModalShell({
  title,
  children,
  onClose,
  onPrevious,
  onNext,
  showNavigation = true,
  variant = 'default',
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && onPrevious) onPrevious();
      if (event.key === 'ArrowRight' && onNext) onNext();
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('portfolio:navigate', onClose);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('portfolio:navigate', onClose);
      previousActiveElement?.focus?.();
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="fullscreen-overlay" onMouseDown={onClose}>
      <section
        ref={dialogRef}
        className={`fullscreen-content fullscreen-content-${variant}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="fullscreen-close" onClick={onClose} aria-label="Close fullscreen view">
          <svg className="fullscreen-close-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        {showNavigation && onPrevious && (
          <button type="button" className="fullscreen-nav prev" onClick={onPrevious} aria-label="Previous item">
            <svg className="fullscreen-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18 9 12l6-6" />
            </svg>
          </button>
        )}
        {showNavigation && onNext && (
          <button type="button" className="fullscreen-nav next" onClick={onNext} aria-label="Next item">
            <svg className="fullscreen-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        )}
        {children}
      </section>
    </div>
  );
}
