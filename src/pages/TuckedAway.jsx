import { useEffect, useMemo, useRef, useState } from 'react';
import ImageWithFallback from '../components/ImageWithFallback.jsx';

const pageTitle = 'Tucked Away | Organise videos stored on your Android device';
const pageDescription =
  'Tucked Away is a private Android app for organising, searching, rating and revisiting videos stored on your phone or SD card.';
const socialDescription = 'Turn a folder full of videos into a private, searchable library organised your way.';

const tuckedAwayImages = {
  logo: '/images/tucked-away/tucked-away-logo-transparent.png',
  catalogue: '/images/tucked-away/tucked-away-catalogue.jpg',
  history: '/images/tucked-away/tucked-away-history.jpg',
  metadata: '/images/tucked-away/tucked-away-metadata.jpg',
  activeFilter: '/images/tucked-away/tucked-away-active-filter.jpg',
  sort: '/images/tucked-away/tucked-away-sort.jpg',
  setupStep1: '/images/tucked-away/tucked-away-setup-step-1.jpg',
  setupStep2: '/images/tucked-away/tucked-away-setup-step-2.jpg',
};

const tuckedAwayContent = {
  nav: [
    { id: 'overview', label: 'Overview' },
    { id: 'why', label: 'Why Tucked Away' },
    { id: 'use-cases', label: 'Use cases' },
    { id: 'features', label: 'Features' },
    { id: 'privacy', label: 'Privacy' },
  ],
  overview: {
    label: 'OVERVIEW',
    title: 'Turn a phone full of videos into a library you can actually use.',
    paragraphs: [
      'Tucked Away is a private Android app that helps you organise, search and revisit videos stored on your phone or SD card.',
      'Add the information that matters to you, find useful videos without opening every file, and remember which ones are worth coming back to.',
    ],
    status: 'Coming to Android',
    privacyTitle: 'Private by design',
    privacyParagraphs: [
      'Your videos stay where they are. Tucked Away does not upload, copy or change them, and you do not need an account.',
      'Your library details are stored on your device, and backups are only created when you choose to export one.',
    ],
    image: tuckedAwayImages.catalogue,
    imageLabel: 'Tucked Away catalogue screenshot',
  },
  why: {
    label: 'WHY TUCKED AWAY',
    title: 'A folder full of videos is not a library.',
    paragraphs: [
      'Over time, personal videos, tutorials, workouts and saved clips can build up into one large folder.',
      'The files may have similar names, little useful information and no clear way to tell them apart. Even when you remember that a useful video is in there somewhere, finding it can mean opening files one by one.',
      'When hundreds of videos build up in one folder, the problem is no longer storing them. It is knowing what they contain and which ones are worth watching again.',
      'Tucked Away adds structure around the videos without moving or changing the original files. You can give them meaningful titles, add ratings and notes, organise them with your own fields, and quickly find the ones worth returning to.',
    ],
    benefits: [
      {
        title: 'Know what each video is',
        text: 'Add meaningful titles, ratings, notes, tags and details that matter to your collection.',
      },
      {
        title: 'Find the right video quickly',
        text: 'Search, filter and sort without opening every file to work out what it contains.',
      },
      {
        title: 'Remember what is worth revisiting',
        text: 'Use ratings, including Don’t rewatch, and keep a record of videos you have watched, completed, made or practised.',
      },
    ],
    howTitle: 'How it works',
    steps: [
      ['Choose a folder', 'Select the folder containing the videos you want Tucked Away to catalogue.'],
      [
        'Organise your library',
        'Choose a starter template or begin with a blank library, then add the fields and details that matter to you.',
      ],
      [
        'Find and revisit',
        'Use Search, Filters and Sort to find the right video, then record when you watch or use it.',
      ],
    ],
  },
  'use-cases': {
    label: 'USE CASES',
    title: 'One app, different kinds of video libraries',
    paragraphs: [
      'Tucked Away includes starter templates to help you begin, but every library can be customised.',
    ],
    setupImage: tuckedAwayImages.setupStep2,
    setupImageLabel: 'Tucked Away Setup screenshot',
    useCases: [
      ['Personal and family videos', 'Organise videos by people, event, location, year or occasion, and make favourite memories easier to find again.'],
      ['Exercise videos', 'Organise workouts by body area, equipment, exercise type or effort, then record them as Completed.'],
      ['Craft and creative tutorials', 'Organise tutorials by project type, materials, technique or difficulty, and remember which ones you want to try again.'],
      ['Learning videos', 'Group lessons by subject, topic or level, add notes, and quickly find the right lesson.'],
      ['Cooking videos', 'Organise recipes by meal type, cuisine, ingredients or difficulty, then record them as Made.'],
      ['Music practice', 'Catalogue lessons and demonstrations by instrument, technique or skill level, then record them as Practised.'],
      ['Blank library', 'Start with no predefined structure and create the fields, filters and wording that suit your own collection.'],
    ],
  },
  features: {
    label: 'FEATURES',
    title: 'Tucked Away focuses on useful information and clear actions rather than large thumbnails.',
    features: [
      [
        'Custom fields',
        'Create text, number, date, select and multi-select fields to describe the videos in your library.',
      ],
      [
        'Search, Filters and Sort',
        'Search video titles and details, combine filters, and sort the current view using useful library fields.',
      ],
      [
        'Ratings',
        'Rate videos from Don’t rewatch through to 5 stars, so worthwhile content does not get lost among everything else.',
      ],
      ['Watched history', 'Record when you watch or use a video and review your activity by week.'],
      [
        'Custom wording',
        'Choose wording that fits your library, such as Watched, Completed, Made or Practised.',
      ],
      [
        'Card layout',
        'Choose which details appear on Catalogue cards and place them in the order that works for you.',
      ],
      ['Themes', 'Choose from several colour themes while keeping the same compact, readable layout.'],
      [
        'Backup and restore',
        'Export your library settings, metadata and history as a backup file. Your videos are not included.',
      ],
    ],
    screenshots: [
      { label: 'Catalogue', image: tuckedAwayImages.catalogue, alt: 'Tucked Away catalogue screenshot' },
      { label: 'History', image: tuckedAwayImages.history, alt: 'Tucked Away history screenshot' },
      { label: 'Filters', image: tuckedAwayImages.activeFilter, alt: 'Tucked Away filters screenshot' },
      { label: 'Video details', image: tuckedAwayImages.metadata, alt: 'Tucked Away video details screenshot' },
      { label: 'Sorting', image: tuckedAwayImages.sort, alt: 'Tucked Away sorting screenshot' },
    ],
  },
  privacy: {
    label: 'PRIVACY',
    policyTitle: 'Privacy policy',
    policyIntro: [
      'Tucked Away helps you organise videos stored on your phone or SD card. It does not upload, copy or change the original video files. When you tap Play, the video opens in a video player installed on your phone.',
      'The details you add, such as titles, ratings, notes, tags and watched history, are saved on your device for Tucked Away to access. If you uninstall the app or clear its data, this information may be removed, but your videos are not touched.',
      'You can create a backup of your library details and history and save it anywhere you choose. The backup does not include the videos themselves.',
      'You do not need an account to use Tucked Away, and your library information stays on your device.',
    ],
    policySections: [
      [
        'Information Tucked Away accesses',
        'Tucked Away accesses the video folder you choose and the app information needed to organise that library.',
      ],
      [
        'Information stored by the app',
        'Tucked Away may store library settings, custom fields and options, titles, ratings, notes, tags, watched history, filter settings, card-layout settings and appearance settings.',
      ],
      [
        'Information not collected',
        'Tucked Away does not require an account and does not upload your video files or library information to the developer.',
      ],
      [
        'Backups',
        'Backups contain your Tucked Away settings, metadata and history. They do not contain copies of your videos.\n\nYou choose where an exported backup is saved. If you restore a backup later, you may need to select the video folder again.',
      ],
      [
        'External video players',
        'When you tap Play, Android opens the video using a compatible player installed on your device. That player may have its own privacy policy and playback settings.',
      ],
      [
        'Data removal',
        'You can remove Tucked Away’s locally stored information by clearing the app’s data or uninstalling the app. This does not delete the original videos from your selected folder.\n\nAny backup files you exported must be deleted separately from the location where you saved them.',
      ],
      [
        'Changes to this policy',
        'This privacy policy may be updated if Tucked Away’s features or data-handling practices change. The latest version will remain available on this page.',
      ],
      ['Last updated', 'Last updated: 28 July 2026'],
    ],
  },
};

const tuckedAwaySections = tuckedAwayContent.nav.map((item) => ({
  ...item,
  ...tuckedAwayContent[item.id],
  navLabel: item.label,
}));

const validSectionIds = tuckedAwaySections.map((section) => section.id);

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function getSectionFromHash() {
  const section = window.location.hash.replace('#', '');
  return validSectionIds.includes(section) ? section : 'overview';
}

function TuckedAwayImageSlot({ src, label, className = '', lazy = true, variant = 'phone', id }) {
  return (
    <figure id={id} className={`tucked-image-slot tucked-image-slot-${variant} ${className}`}>
      <ImageWithFallback
        src={src}
        alt={label}
        className="tucked-image"
        fallbackClassName="tucked-image-placeholder"
        fallbackLabel={label}
        loading={lazy ? 'lazy' : undefined}
      >
        <span className="tucked-phone-shape" aria-hidden="true">
          <span />
        </span>
        <span>{label}</span>
      </ImageWithFallback>
    </figure>
  );
}

function BackToLabLink({ onBackToLab, className = '' }) {
  return (
    <a href="/#saras-lab" className={className} onClick={onBackToLab}>
      Back to Sara’s Lab
    </a>
  );
}

function TuckedAwayNavigation({ activeSection, onSelect, tabRefs }) {
  const handleKeyDown = (event, currentIndex) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    const lastIndex = tuckedAwaySections.length - 1;
    const nextIndex = {
      ArrowDown: currentIndex === lastIndex ? 0 : currentIndex + 1,
      ArrowRight: currentIndex === lastIndex ? 0 : currentIndex + 1,
      ArrowUp: currentIndex === 0 ? lastIndex : currentIndex - 1,
      ArrowLeft: currentIndex === 0 ? lastIndex : currentIndex - 1,
      Home: 0,
      End: lastIndex,
    }[event.key];

    const nextSection = tuckedAwaySections[nextIndex];
    onSelect(nextSection.id, false);
    tabRefs.current[nextSection.id]?.focus();
  };

  return (
    <nav className="tucked-cabinet-nav" aria-label="Tucked Away sections">
      <div className="tucked-tab-list" role="tablist">
        {tuckedAwaySections.map((section, index) => {
          const isActive = section.id === activeSection;
          return (
            <button
              key={section.id}
              ref={(node) => {
                tabRefs.current[section.id] = node;
              }}
              type="button"
              id={`tucked-tab-${section.id}`}
              className={`tucked-tab${isActive ? ' is-active' : ''}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tucked-panel-${section.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(section.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="tucked-tab-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{section.navLabel}</span>
            </button>
          );
        })}
      </div>
      <div className="tucked-nav-status" aria-label="Tucked Away release status">
        <span>{tuckedAwayContent.overview.status}</span>
      </div>
    </nav>
  );
}

function TuckedAwayList({ items, className = '', numberedHeadings = false }) {
  return (
    <div className={`tucked-content-grid ${className}`}>
      {items.map(([title, text], index) => (
        <article key={title}>
          <h3>{numberedHeadings ? `${index + 1}. ${title}` : title}</h3>
          {text.split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      ))}
    </div>
  );
}

function FeatureShowcase({ section }) {
  const [selectedScreenshot, setSelectedScreenshot] = useState(section.screenshots[0]);
  const activeScreenshot = section.screenshots.some((screenshot) => screenshot.label === selectedScreenshot?.label)
    ? selectedScreenshot
    : section.screenshots[0];

  useEffect(() => {
    setSelectedScreenshot(section.screenshots[0]);
  }, [section.screenshots]);

  return (
    <>
      <div className="tucked-feature-list">
        <TuckedAwayList items={section.features} className="tucked-feature-items" />
      </div>
      <div className="tucked-selected-screenshot-panel" aria-label="Tucked Away screenshot gallery">
        <TuckedAwayImageSlot
          src={activeScreenshot.image}
          label={activeScreenshot.alt}
          lazy={false}
          variant="wide"
        />
        <div className="tucked-screenshot-selectors" role="tablist" aria-label="Tucked Away screenshot views">
          {section.screenshots.map((screenshot) => {
            const isSelected = screenshot.label === activeScreenshot.label;
            return (
              <button
                key={screenshot.label}
                type="button"
                className={isSelected ? 'is-active' : ''}
                aria-selected={isSelected}
                role="tab"
                onClick={() => setSelectedScreenshot(screenshot)}
              >
                <TuckedAwayImageSlot src={screenshot.image} label={screenshot.alt} variant="thumb" />
                {screenshot.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function PrivacyPolicy({ section }) {
  return (
    <div className="tucked-privacy-details">
      <h2>{section.policyTitle}</h2>
      <div className="tucked-policy-intro">
        {section.policyIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="tucked-policy-sections">
        {section.policySections.map(([title, text]) => (
          <section key={title} aria-labelledby={`privacy-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            <h3 id={`privacy-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{title}</h3>
            {text.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function TuckedAwayPanel({ section, panelRef, onSelect }) {
  const isOverview = section.id === 'overview';
  const isPrivacy = section.id === 'privacy';
  const isUseCases = section.id === 'use-cases';
  const isWhy = section.id === 'why';
  const showStandardImage = ['overview'].includes(section.id);

  return (
    <section
      key={section.id}
      id={section.id}
      ref={panelRef}
      className={`tucked-panel tucked-panel-${section.id}`}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby={`tucked-tab-${section.id}`}
    >
      {isWhy ? (
        <div className="tucked-why-heading">
          <p className="tucked-kicker">{section.label}</p>
          <h2>{section.title}</h2>
        </div>
      ) : null}

      {isWhy ? (
        <div className="tucked-why-copy">
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="tucked-panel-summary">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {!isPrivacy && !isWhy ? (
        <div className="tucked-panel-copy">
        {isOverview ? (
          <ImageWithFallback
            src={tuckedAwayImages.logo}
            alt="Tucked Away logo"
            className="tucked-hero-logo"
            fallbackClassName="tucked-logo-placeholder"
            fallbackLabel="Tucked Away"
            loading={undefined}
          >
            <span>Tucked Away</span>
          </ImageWithFallback>
        ) : null}
        <p className="tucked-kicker">{section.label}</p>
        {isOverview ? <h1>{section.title}</h1> : <h2>{section.title}</h2>}
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph} className="tucked-panel-summary">
            {paragraph}
          </p>
        ))}
        {isUseCases ? (
          <ImageWithFallback
            src={section.setupImage}
            alt={section.setupImageLabel}
            className="tucked-use-case-screenshot"
            fallbackClassName="tucked-use-case-screenshot-placeholder"
            fallbackLabel={section.setupImageLabel}
          >
            <span>{section.setupImageLabel}</span>
          </ImageWithFallback>
        ) : null}
        {section.id === 'privacy' ? (
          <button type="button" className="tucked-inline-action" onClick={() => panelRef.current?.querySelector('.tucked-privacy-details')?.scrollIntoView({ block: 'start' })}>
            Read the full privacy policy
          </button>
        ) : null}
        </div>
      ) : null}

      {showStandardImage ? (
        <div className="tucked-panel-media">
          <TuckedAwayImageSlot
            src={section.image}
            label={section.imageLabel}
            lazy={!isOverview}
            variant={isOverview ? 'hero' : 'phone'}
          />
        </div>
      ) : null}

      {isOverview ? (
        <div className="tucked-overview-privacy">
          <h2>{section.privacyTitle}</h2>
          {section.privacyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <button type="button" className="tucked-inline-action" onClick={() => onSelect('privacy')}>
            Read the full privacy policy
          </button>
        </div>
      ) : null}

      {isWhy ? (
        <div className="tucked-panel-details tucked-why-details">
          <TuckedAwayList items={section.benefits.map(({ title, text }) => [title, text])} className="tucked-benefits tucked-benefits-stacked" />
        </div>
      ) : null}

      {isWhy ? (
        <div className="tucked-how-inline">
          <h2>{section.howTitle}</h2>
          <TuckedAwayList items={section.steps} className="tucked-process-row" numberedHeadings />
        </div>
      ) : null}

      {isUseCases ? (
        <div className="tucked-panel-details tucked-use-case-details">
          <TuckedAwayList items={section.useCases} className="tucked-use-case-grid" />
        </div>
      ) : null}

      {section.id === 'features' ? <FeatureShowcase section={section} /> : null}
      {section.id === 'privacy' ? <PrivacyPolicy section={section} /> : null}
    </section>
  );
}

export default function TuckedAway({ onBackToLab }) {
  const [activeSection, setActiveSection] = useState('overview');
  const panelRef = useRef(null);
  const tabRefs = useRef({});
  const section = useMemo(
    () => tuckedAwaySections.find((item) => item.id === activeSection) || tuckedAwaySections[0],
    [activeSection],
  );

  useEffect(() => {
    const originalTitle = document.title;

    document.title = pageTitle;
    setMeta('meta[name="description"]', 'content', pageDescription);
    setMeta('link[rel="canonical"]', 'href', 'https://saragillard.com/tucked-away');
    setMeta('meta[property="og:url"]', 'content', 'https://saragillard.com/tucked-away');
    setMeta('meta[property="og:title"]', 'content', 'Tucked Away');
    setMeta('meta[property="og:description"]', 'content', socialDescription);
    setMeta('meta[property="og:image"]', 'content', 'https://saragillard.com/images/tucked-away/tucked-away-social-card.png');
    setMeta('meta[name="twitter:title"]', 'content', 'Tucked Away');
    setMeta('meta[name="twitter:description"]', 'content', socialDescription);
    setMeta('meta[name="twitter:image"]', 'content', 'https://saragillard.com/images/tucked-away/tucked-away-social-card.png');

    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const rawSection = window.location.hash.replace('#', '');
      const nextSection = getSectionFromHash();
      setActiveSection(nextSection);
      if (rawSection !== nextSection) {
        window.history.replaceState({ tuckedAwaySection: nextSection }, '', `#${nextSection}`);
      }
    };

    const initialSection = getSectionFromHash();
    setActiveSection(initialSection);
    if (window.location.hash.replace('#', '') !== initialSection) {
      window.history.replaceState({ tuckedAwaySection: initialSection }, '', `#${initialSection}`);
    }

    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, []);

  const selectSection = (sectionId, focusPanel = true) => {
    if (!validSectionIds.includes(sectionId)) return;
    setActiveSection(sectionId);
    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState({ tuckedAwaySection: sectionId }, '', `#${sectionId}`);
    }
    if (focusPanel) {
      window.requestAnimationFrame(() => {
        panelRef.current?.focus({ preventScroll: true });
      });
    }
  };

  return (
    <main className="tucked-page">
      <header className="tucked-header">
        <div className="tucked-header-brand">
          <ImageWithFallback
            src={tuckedAwayImages.logo}
            alt="Tucked Away logo"
            className="tucked-logo"
            fallbackClassName="tucked-logo-placeholder"
            fallbackLabel="Tucked Away"
            loading={undefined}
          >
            <span>Tucked Away</span>
          </ImageWithFallback>
        </div>
        <BackToLabLink onBackToLab={onBackToLab} className="tucked-back-link" />
      </header>

      <div className="tucked-cabinet" aria-label="Tucked Away app showcase">
        <TuckedAwayNavigation activeSection={activeSection} onSelect={selectSection} tabRefs={tabRefs} />
        <div className="tucked-panel-shell">
          <TuckedAwayPanel section={section} panelRef={panelRef} onSelect={selectSection} />
        </div>
      </div>

      <footer className="tucked-footer">
        <span>Tucked Away</span>
        <button type="button" onClick={() => selectSection('privacy')}>
          Privacy policy
        </button>
        <BackToLabLink onBackToLab={onBackToLab} />
        <span>© Sara Gillard 2026</span>
      </footer>
    </main>
  );
}
