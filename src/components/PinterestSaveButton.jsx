const SITE_ORIGIN = 'https://saragillard.com';
const PINTEREST_SAVE_URL = 'https://www.pinterest.com/pin/create/button/';
const PINTEREST_ICON_URL = '/images/social/pinterest-logo.svg';

export function toAbsolutePublicUrl(value) {
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) return value;

  return `${SITE_ORIGIN}${value.startsWith('/') ? value : `/${value}`}`;
}

export function buildPinterestSaveUrl({ imageUrl, destinationUrl, description }) {
  const params = new URLSearchParams({
    url: toAbsolutePublicUrl(destinationUrl || SITE_ORIGIN),
    media: toAbsolutePublicUrl(imageUrl),
    description: description || 'Creative work by Sara Gillard.',
  });

  return `${PINTEREST_SAVE_URL}?${params.toString()}`;
}

export function isPinnableImage(imageUrl) {
  const imagePath = String(imageUrl || '').toLowerCase();

  if (!imagePath) return false;

  return !imagePath.endsWith('.svg')
    && !imagePath.includes('placeholder')
    && !imagePath.includes('in-progress')
    && !imagePath.includes('/about/')
    && !imagePath.includes('/social/')
    && !imagePath.includes('favicon');
}

export default function PinterestSaveButton({
  imageUrl,
  destinationUrl,
  description,
  label = 'Save',
  ariaLabel,
  className = '',
}) {
  if (!isPinnableImage(imageUrl)) return null;

  const saveUrl = buildPinterestSaveUrl({ imageUrl, destinationUrl, description });
  const accessibleLabel = ariaLabel || `Save to Pinterest${description ? `: ${description}` : ''}`;

  return (
    <a
      className={`pinterest-save-button ${className}`.trim()}
      href={saveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleLabel}
    >
      <img className="pinterest-save-button__icon" src={PINTEREST_ICON_URL} alt="" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
