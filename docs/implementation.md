# Sara's Portfolio Implementation PRD

## Technical Overview

Sara's Portfolio is a Vite React single-page application. It is intentionally static and content-driven. The app does not require a backend, database, authentication, or server-rendered routes.

Current stack:

- React
- Vite
- Standard global CSS
- Static data files in `src/data`
- Public image assets under `public/images`

Primary project folder:

```text
Sara's Portfolio/
  docs/
  public/
    images/
  src/
    components/
    data/
    pages/
    styles/
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Architecture

### Entry Points

`src/main.jsx`

- Imports React, ReactDOM, `App.jsx`, and global CSS.
- Mounts the app into `#root`.

`src/App.jsx`

- Owns the current page state.
- Renders `ParticleBackground`.
- Renders fixed `Navigation`.
- Maps the active page key to the correct page component.
- Updates `document.title` based on current section.

### Components

`Navigation.jsx`

- Fixed top navigation.
- Uses button-based navigation because the current app is a client-side single-page state machine, not URL-routed.
- Shows active state with `aria-current="page"`.

`ParticleBackground.jsx`

- Renders the animated canvas particle background.
- Handles resize and animation cleanup.
- Decorative only, with `aria-hidden="true"`.

`FilterBar.jsx`

- Reusable filter button group.
- Accepts filters, selected filter, item counts, and change handler.
- Uses `aria-pressed` for active filter buttons.

`PhotoCard.jsx`

- Reusable square image card for Photography.
- Opens fullscreen photo modal on activation.

`ImageWithFallback.jsx`

- Shared image wrapper.
- Shows fallback UI if the image fails to load or if no image path exists.
- Used for profile, cards, project detail images, photo modals, and game images.

`ModalShell.jsx`

- Shared fullscreen modal wrapper.
- Handles:
  - Escape close
  - ArrowLeft previous
  - ArrowRight next
  - click outside to close
  - focus restoration
  - `role="dialog"`
  - `aria-modal="true"`

`FullscreenImageModal.jsx`

- Fullscreen modal for Photography images.
- Displays a single large image while keeping the photo title available as accessible text rather than visible modal copy.

`ProjectDetailModal.jsx`

- Fullscreen detail modal for Crafter Dark projects and archived project-style content.
- Supports one or multiple images.
- Supports optional external links.
- Preserves multiline descriptions.

### Pages

`Home.jsx`

- Sara's name and positioning.
- Profile image path.
- LinkedIn link.
- Short intro copy.
- About Sara section.

`CrafterDark.jsx`

- Loads `crafterProjects`.
- Supports filters:
  - All
  - When Stitches Kaleid
  - Pop Culture Inspired
- Opens project detail modal.
- Supports previous/next navigation within the filtered result set.

`Photography.jsx`

- Loads `photos`.
- Supports filters:
  - All
  - Abstract Macro
  - When visions kaleid
- Opens fullscreen image modal.
- Supports previous/next navigation within the filtered result set.

`Games.jsx`

- Loads `labProjects`.
- Displays Sara's Lab projects, including creative tools, type experiments, games, and prototypes.
- The file name remains `Games.jsx` for now, but the user-facing section is Sara's Lab.

Archived AI POCs

- Retained in `archive/ai-pocs` as archived content.
- Not registered in active navigation or the current page registry.
- Do not delete AI POC files or data unless explicitly requested.

## Data Models

There is no database in the current version. Data models are JavaScript objects exported from files in `src/data`.

### Crafter Project

File: `src/data/crafterProjects.js`

```js
{
  id: string,
  title: string,
  category: 'When Stitches Kaleid' | 'Pop Culture Inspired' | 'Science',
  sizeFor18Count: string,
  chartSize: string,
  numberOfColours: string,
  description: string,
  image1: string,
  image2?: string,
  images?: string[]
}
```

Requirements:

- `id` must be unique within the file.
- `title` should be human-readable and used in card/modal headings.
- `category` must match one of the supported filter labels.
- `sizeFor18Count`, `chartSize`, and `numberOfColours` are shown on cards and detail modals when present.
- `description` can be long-form.
- Image paths should use the flat `/images/crafter-dark/<filename>` convention.

### Photo

File: `src/data/photos.js`

```js
{
  id: number,
  category: 'Abstract Macro' | 'When visions kaleid',
  title: string,
  src: string
}
```

Requirements:

- `id` must be unique.
- `category` must match one of the supported filter labels.
- `title` is used as display text and alt text.
- `src` should point to an image under `/images/photography`.

### Sara's Lab Project

File: `src/data/labProjects.js`

```js
{
  id: string,
  title: string,
  type: string,
  status: string,
  subtitle: string,
  cardDescription: string,
  blurb: string,
  image: string,
  mediaFit: 'cover' | 'contain',
  mediaPosition: string,
  detailMediaFit: 'cover' | 'contain',
  detailMediaPosition: string,
  link: string,
  download?: string,
  downloadLabel?: string,
  order: number
}
```

Requirements:

- `id` must be unique.
- Manual `order` controls display order.
- `link` is used for external live projects.
- `download` is used for downloadable assets such as the completed Batcave Font.
- Empty image values must render polished placeholders.
- Images should point to `/images/lab`.

### Archived AI POC

File: `archive/ai-pocs/aiPocs.js`

```js
{
  id: number,
  title: string,
  links: Array<{ label: string, url: string }>,
  image: string,
  images?: string[],
  description: string
}
```

Requirements:

- `id` must be unique.
- `links` should be an empty array when no links exist.
- `image` is the primary preview image.
- `images` is optional and should be used when the detail modal needs multiple images.
- External links must include descriptive labels.

## Image Asset Requirements

All referenced image paths should resolve from:

```text
public/images
```

Example:

```text
public/images/about/profile.jpg
public/images/crafter-dark/CooperEyes.png
public/images/crafter-dark/AdamAntLogo.png
public/images/lab/alphabet-stitch.png
public/images/photography/1994-1.jpg
```

The app must continue to render gracefully if images are missing.

## Core Feature Requirements

### Navigation

- Show fixed top navigation on every page.
- Support these sections:
  - Home
  - Crafter Dark
  - Photography
  - Sara's Lab
- Display active section visually and with `aria-current`.
- Use horizontal scrolling nav on small screens.
- Desktop navigation is right-aligned.

### Home

- Display the title `Sara's Portfolio`.
- Display subtitle `Creative Technologist, Artist & Pattern Maker`.
- Display profile image with fallback.
- Display LinkedIn link as the only public connect/contact route.
- Display short description and About Sara content.
- Do not add email, phone, contact forms, or additional social links unless Sara explicitly changes that decision.

### Crafter Dark

- Render all cross-stitch projects.
- Filter by required categories.
- Show item counts in filters.
- Each card must show image, title, size/chart/colour metadata, and description preview.
- Category is not shown on list cards; it appears as a subtle tag at the bottom of the detail view.
- Clicking or keyboard-activating a card opens a fullscreen project modal.
- Modal must show title, category/size, images, and description.

### Photography

- Render all photos.
- Filter by required categories.
- Show item counts in filters.
- Clicking or keyboard-activating a photo opens fullscreen image viewer.
- Viewer must support previous/next via buttons and arrow keys.

### Sara's Lab

- Render Sara's Lab projects from `src/data/labProjects.js`.
- Display selected creative tools, type experiments, games, and prototypes.
- Support project detail views and optional external/download links.

### AI POCs

- Archived repository content only in the current active site.
- Keep `archive/ai-pocs` available for possible future reintroduction.
- Do not render an AI POCs nav item or active page unless explicitly requested.

### Modal Behavior

All fullscreen modals must:

- Use `role="dialog"`.
- Use `aria-modal="true"`.
- Close on Escape.
- Close on click outside modal content.
- Provide a labelled close button.
- Provide labelled previous/next controls when navigation is available.
- Restore focus to the previously focused element when closed.

## Phased Implementation Plan

### Phase 1: Static Portfolio Foundation

Status: Implemented.

Deliverables:

- Vite React project.
- Componentized structure.
- Global CSS.
- Static data files.
- Core pages.
- Particle background.
- Modals and filters.
- Image fallbacks.

Acceptance criteria:

- `npm run build` passes.
- All required sections render.
- Primary interactions work on desktop and mobile.

### Phase 2: Asset Completion

Status: Pending image assets.

Deliverables:

- Add all referenced image files under `public/images`.
- Confirm file casing matches data paths exactly.
- Verify no 404s for intended image assets.
- Confirm image crops look good in cards and modals.

Acceptance criteria:

- Browser console has no missing image 404s for expected assets.
- Profile image loads.
- All active Crafter Dark, Photography, and Sara's Lab images load or intentional placeholders are documented.

### Phase 3: Content Review

Status: Recommended.

Deliverables:

- Review all copy for spelling and punctuation.
- AI POC descriptions are not launch-blocking while the page is hidden from the active site.
- Confirm project categories and names.
- Confirm LinkedIn URL.

Acceptance criteria:

- Sara approves portfolio copy.
- All external links open correctly.
- Content hierarchy feels consistent across sections.

### Phase 4: Production Readiness

Status: Recommended before public release.

Deliverables:

- Add `.gitignore`.
- Add README with setup instructions.
- Add basic automated tests, smoke test script, or documented manual QA checklist.
- Add metadata and social preview image.
- Deploy to chosen static hosting provider.

Acceptance criteria:

- Fresh checkout can run with documented commands.
- Production deploy works.
- Public URL loads quickly and without console errors.

### Phase 5: Future Enhancements

Potential deliverables:

- React Router or equivalent for shareable URLs.
- Project-level deep links.
- CMS integration.
- Analytics.
- Additional filters/tags.
- Search.
- Contact section.

## Developer Notes

- Keep routine content updates in `src/data`.
- Keep reusable interaction behavior in components.
- Do not introduce a database until there is a clear editing or publishing requirement.
- Do not redesign away from the dark purple creative aesthetic.
- Preserve existing path conventions unless there is a migration plan.
