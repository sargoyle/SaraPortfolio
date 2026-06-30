# Sara's Portfolio

Sara's Portfolio is a static React/Vite personal portfolio site for Sara's creative work across Crafter Dark cross-stitch projects, photography, Sara's Lab concepts, and AI proof-of-concepts.

The site is intentionally simple to maintain: content lives in `src/data`, reusable UI lives in `src/components`, and public images live in `public/images`.

## Tech Stack

- React
- Vite
- Standard global CSS
- Static JavaScript data files
- Public image assets under `public/images`

## Setup

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

If you use npm instead of pnpm, the equivalent commands are:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/   Reusable UI such as navigation, cards, image fallbacks, and modals
  data/         Portfolio content records
  pages/        Main site sections
  styles/       Global CSS
public/
  images/       Public portfolio assets referenced by /images/... paths
docs/           Product, implementation, design, flow, rules, tasks, and changelog docs
functions/      Persistent function-level documentation for pages and shared UI patterns
```

## Editing Content

Routine content updates should happen in the data files:

- Crafter Dark projects: `src/data/crafterProjects.js`
- Photography: `src/data/photos.js`
- Sara's Lab: `src/data/games.js`
- AI POCs: `src/data/aiPocs.js`

Keep IDs unique within each file. Filter categories must match the visible filter labels exactly.

## Image Paths

Images should be placed under `public/images` and referenced from data files with root-relative paths.

Examples:

```js
'/images/about/profile.jpg'
'/images/crafter-dark/Own/CooperEyes.PNG'
'/images/crafter-dark/pop/AdamAntLogo.PNG'
'/images/photography/Abstract Macro 1.JPG'
```

Do not include `public` in the path stored in data files. The app includes graceful image fallbacks, so missing images should show placeholders rather than breaking the layout.

## Photography Metadata

Photography metadata lives in `src/data/photos.js`.

If new photos are added to `public/images/photography`, the metadata bootstrap script can help sync entries:

```bash
pnpm run sync:photos
```

Review generated metadata after syncing so titles, categories, and alt text stay intentional.

## Documentation

Before changing a feature, read:

- `docs/masterplan.md`
- `docs/tasks.md`
- the relevant `functions/*.md` file

Update `docs/tasks.md` and `docs/changelog.md` after completing a task or related group of tasks.

## Current Known Gaps

- Some referenced assets are still intentionally missing and documented in `docs/asset-inventory.md`.
- Deployment target is not selected yet.
- Production metadata and social preview assets are still pending.
