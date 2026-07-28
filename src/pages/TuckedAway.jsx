import { useEffect, useState } from 'react';
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

const navItems = [
  ['overview', 'Overview'],
  ['why-tucked-away', 'Why Tucked Away'],
  ['how-it-works', 'How it works'],
  ['use-cases', 'Use cases'],
  ['features', 'Features'],
  ['privacy', 'Privacy'],
];

const benefits = [
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
];

const steps = [
  {
    title: 'Choose a folder',
    text: 'Select the folder containing the videos you want Tucked Away to catalogue.',
    src: tuckedAwayImages.setupStep1,
    label: 'Tucked Away folder setup screenshot',
  },
  {
    title: 'Organise your library',
    text: 'Choose a starter template or begin with a blank library, then add the fields and details that matter to you.',
    src: tuckedAwayImages.setupStep2,
    label: 'Tucked Away library setup screenshot',
  },
  {
    title: 'Find and revisit',
    text: 'Use Search, Filters and Sort to find the right video, then record when you watch or use it.',
    src: tuckedAwayImages.activeFilter,
    label: 'Tucked Away Search and Filters screenshot',
  },
];

const useCases = [
  ['Personal and family videos', 'Organise videos by people, event, location, year or occasion, and make favourite memories easier to find again.'],
  ['Exercise videos', 'Organise workouts by body area, equipment, exercise type or effort, then record them as Completed.'],
  ['Craft and creative tutorials', 'Organise tutorials by project type, materials, technique or difficulty, and remember which ones you want to try again.'],
  ['Learning videos', 'Group lessons by subject, topic or level, add notes, and quickly find the right lesson.'],
  ['Cooking videos', 'Organise recipes by meal type, cuisine, ingredients or difficulty, then record them as Made.'],
  ['Music practice', 'Catalogue lessons and demonstrations by instrument, technique or skill level, then record them as Practised.'],
  ['Blank library', 'Start with no predefined structure and create the fields, filters and wording that suit your own collection.'],
];

const features = [
  ['Custom fields', 'Create text, number, date, select and multi-select fields to describe the videos in your library.'],
  ['Search, Filters and Sort', 'Search video titles and details, combine filters, and sort the current view using useful library fields.'],
  ['Ratings', 'Rate videos from Don’t rewatch through to 5 stars, so worthwhile content does not get lost among everything else.'],
  ['Watched history', 'Record when you watch or use a video and review your activity by week.'],
  ['Custom wording', 'Choose wording that fits your library, such as Watched, Completed, Made or Practised.'],
  ['Card layout', 'Choose which details appear on Catalogue cards and place them in the order that works for you.'],
  ['Themes', 'Choose from several colour themes while keeping the same compact, readable layout.'],
  ['Backup and restore', 'Export your library settings, metadata and history as a backup file. Your videos are not included.'],
];

const screenshots = [
  ['Catalogue', tuckedAwayImages.catalogue],
  ['History', tuckedAwayImages.history],
  ['Filters', tuckedAwayImages.activeFilter],
  ['Video details', tuckedAwayImages.metadata],
  ['Sorting', tuckedAwayImages.sort],
  ['Setup', tuckedAwayImages.setupStep1],
];

const privacyIntro = [
  'Tucked Away helps you organise videos stored on your phone or SD card. It does not upload, copy or change the original video files. When you tap Play, the video opens in a video player installed on your phone.',
  'The details you add, such as titles, ratings, notes, tags and watched history, are saved on your device for Tucked Away to access. If you uninstall the app or clear its data, this information may be removed, but your videos are not touched.',
  'You can create a backup of your library details and history and save it anywhere you choose. The backup does not include the videos themselves.',
  'You do not need an account to use Tucked Away, and your library information stays on your device.',
];

const privacySections = [
  ['Information Tucked Away accesses', 'Tucked Away accesses the video folder you choose and the app information needed to organise that library.'],
  ['Information stored by the app', 'Tucked Away may store library settings, custom fields and options, titles, ratings, notes, tags, watched history, filter settings, card-layout settings and appearance settings.'],
  ['Information not collected', 'Tucked Away does not require an account and does not upload your video files or library information to the developer.'],
  [
    'Backups',
    'Backups contain your Tucked Away settings, metadata and history. They do not contain copies of your videos.\n\nYou choose where an exported backup is saved. If you restore a backup later, you may need to select the video folder again.',
  ],
  ['External video players', 'When you tap Play, Android opens the video using a compatible player installed on your device. That player may have its own privacy policy and playback settings.'],
  [
    'Data removal',
    'You can remove Tucked Away’s locally stored information by clearing the app’s data or uninstalling the app. This does not delete the original videos from your selected folder.\n\nAny backup files you exported must be deleted separately from the location where you saved them.',
  ],
  ['Changes to this policy', 'This privacy policy may be updated if Tucked Away’s features or data-handling practices change. The latest version will remain available on this page.'],
];

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function TuckedAwayImageSlot({ src, label, className = '', lazy = true, variant = 'phone', id }) {
  return (
    <figure id={id} className={`tucked-image-slot tucked-image-slot-${variant} ${className}`}>
      {/* Replace this path with the final Tucked Away screenshot when the production asset is ready. */}
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

export default function TuckedAway({ onBackToLab }) {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);
  const selectedScreenshot = screenshots[selectedScreenshotIndex];

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
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start' });
    });
  }, []);

  return (
    <main className="tucked-page" id="overview">
      <header className="tucked-header">
        <BackToLabLink onBackToLab={onBackToLab} className="tucked-back-link" />
        <nav className="tucked-section-nav" aria-label="Tucked Away page sections">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="tucked-hero section-anchor" aria-labelledby="tucked-title">
        <div className="tucked-hero-copy">
          <div className="tucked-brand-row">
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
          <h1 id="tucked-title">Turn a phone full of videos into a library you can actually use.</h1>
          <p className="tucked-lede">
            Tucked Away is a private Android app that helps you organise, search and revisit videos stored on your phone or SD card.
          </p>
          <p>
            Add the information that matters to you, find useful videos without opening every file, and remember which ones are worth coming back to.
          </p>
          <div className="tucked-actions" aria-label="Tucked Away actions">
            {/* Future release link: TUCKED_AWAY_GOOGLE_PLAY_URL */}
            <span className="tucked-status-button" aria-disabled="true">Coming to Android</span>
            <a href="#why-tucked-away">Why Tucked Away</a>
            <a href="#how-it-works">See how it works</a>
            <a href="#privacy">Privacy and your data</a>
          </div>
        </div>
        <TuckedAwayImageSlot
          src={tuckedAwayImages.catalogue}
          label="Tucked Away Catalogue screenshot"
          className="tucked-hero-media"
          lazy={false}
        />
      </section>

      <section id="why-tucked-away" className="tucked-section tucked-why-screen section-anchor" aria-labelledby="why-title">
        <div className="tucked-why-layout">
          <div className="tucked-why-copy">
            <p className="tucked-kicker">Why Tucked Away</p>
            <h2 id="why-title">A folder full of videos is not a library.</h2>
            <div className="tucked-text-stack">
              <p>Over time, personal videos, tutorials, workouts and saved clips can build up into one large folder.</p>
              <p>The files may have similar names, little useful information and no clear way to tell them apart. Even when you remember that a useful video is in there somewhere, finding it can mean opening files one by one.</p>
              <p>When hundreds of videos build up in one folder, the problem is no longer storing them. It is knowing what they contain and which ones are worth watching again.</p>
              <p>Tucked Away adds structure around the videos without moving or changing the original files. You can give them meaningful titles, add ratings and notes, organise them with your own fields, and quickly find the ones worth returning to.</p>
            </div>
          </div>
          <div className="tucked-benefits" aria-label="Three main Tucked Away benefits">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="tucked-card tucked-benefit-card">
                <h2>{benefit.title}</h2>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>

        <section id="use-cases" className="tucked-use-cases section-anchor" aria-labelledby="use-title">
          <div className="tucked-section-heading">
            <p className="tucked-kicker">Use cases</p>
            <h2 id="use-title">One app, different kinds of video libraries</h2>
            <p>Tucked Away includes starter templates to help you begin, but every library can be customised.</p>
          </div>
          <div className="tucked-card-grid tucked-use-case-grid">
            {useCases.map(([title, text]) => (
              <article key={title} className="tucked-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section id="how-it-works" className="tucked-section tucked-work-screen section-anchor" aria-labelledby="how-title">
        <div className="tucked-section-heading">
          <p className="tucked-kicker">Process</p>
          <h2 id="how-title">How it works</h2>
        </div>
        <div className="tucked-step-list" aria-label="Tucked Away process steps">
          {steps.map((step, index) => (
            <article key={step.title} className="tucked-step-option">
              <span className="tucked-step-number" aria-hidden="true">{index + 1}</span>
              <span>
                <span className="tucked-step-option-title">{step.title}</span>
                <span className="tucked-step-option-text">{step.text}</span>
              </span>
            </article>
          ))}
        </div>

        <section id="features" className="tucked-feature-showcase section-anchor" aria-labelledby="features-title">
        <div className="tucked-feature-list">
          <div className="tucked-section-heading">
            <p className="tucked-kicker">Features</p>
            <h2 id="features-title" className="tucked-feature-heading">Tucked Away focuses on useful information and clear actions rather than large thumbnails.</h2>
          </div>
          <div className="tucked-feature-items">
            {features.map(([title, text]) => (
              <article key={title} className="tucked-feature-item">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="tucked-screenshot-showcase" aria-labelledby="screens-title">
          <p className="tucked-kicker" id="screens-title">Screenshots</p>
          <TuckedAwayImageSlot
            src={selectedScreenshot[1]}
            label={`Tucked Away ${selectedScreenshot[0]} screenshot`}
            className="tucked-gallery-main"
            id="tucked-gallery-image"
            lazy={false}
          />
          <div className="tucked-screenshot-selector" role="tablist" aria-label="Tucked Away screenshot views">
            {screenshots.map(([label, src], index) => (
              <button
                key={label}
                type="button"
                className={`tucked-screenshot-option${selectedScreenshotIndex === index ? ' is-selected' : ''}`}
                role="tab"
                aria-selected={selectedScreenshotIndex === index}
                aria-controls="tucked-gallery-image"
                onClick={() => setSelectedScreenshotIndex(index)}
              >
                <TuckedAwayImageSlot src={src} label={`Tucked Away ${label} screenshot`} variant="thumb" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
        </section>
      </section>

      <section className="tucked-privacy-summary" aria-labelledby="privacy-summary-title">
        <div>
          <p className="tucked-kicker">Privacy</p>
          <h2 id="privacy-summary-title">Private by design</h2>
          <p>Your videos stay where they are. Tucked Away does not upload, copy or change them, and you do not need an account.</p>
          <p>Your library details are stored on your device, and backups are only created when you choose to export one.</p>
        </div>
        <a href="#privacy">Read the full privacy policy</a>
      </section>

      <section id="privacy" className="tucked-section tucked-policy section-anchor" aria-labelledby="privacy-title">
        <div className="tucked-policy-intro">
          <p className="tucked-kicker">Tucked Away</p>
          <h2 id="privacy-title">Privacy policy</h2>
          {privacyIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="tucked-policy-sections">
          {privacySections.map(([title, text]) => (
            <section key={title} aria-labelledby={`privacy-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
              <h3 id={`privacy-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{title}</h3>
              {text.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section aria-labelledby="privacy-updated">
            <h3 id="privacy-updated">Last updated</h3>
            <p>Last updated: 28 July 2026</p>
          </section>
        </div>
      </section>

      <section className="tucked-closing" aria-labelledby="closing-title">
        <h2 id="closing-title">Find the videos worth coming back to.</h2>
        <p>Tucked Away turns a crowded folder into a useful, searchable library while leaving every original video exactly where it is.</p>
        {/* Future badge path: /public/images/tucked-away/google-play-badge.png */}
        <span className="tucked-status-button" aria-disabled="true">Coming to Android</span>
      </section>

      <footer className="tucked-footer">
        <span>Tucked Away</span>
        <a href="/tucked-away#privacy">Privacy policy</a>
        <BackToLabLink onBackToLab={onBackToLab} />
        <span>© Sara Gillard 2026</span>
      </footer>
    </main>
  );
}
