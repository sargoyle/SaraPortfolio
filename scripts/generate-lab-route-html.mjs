import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  getLabProjectDescription,
  getLabProjectPath,
  getLabProjectTitle,
  getLabProjectUrl,
  getOrderedLabProjects,
  SITE_ORIGIN,
} from '../src/utils/labRoutes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteName = 'Sara’s Portfolio';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function getImageUrl(project) {
  if (!project.image) return `${SITE_ORIGIN}/images/social/saras-portfolio-og.png`;
  return `${SITE_ORIGIN}${project.image}`;
}

function getImageAlt(project) {
  return project.imageAlt || `${project.title} preview by Sara Gillard.`;
}

function renderLabRouteHtml(project) {
  const title = getLabProjectTitle(project);
  const description = getLabProjectDescription(project);
  const url = getLabProjectUrl(project);
  const image = getImageUrl(project);
  const imageAlt = getImageAlt(project);

  return `<!doctype html>
<html lang="en-AU">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#050308" />
    <meta name="color-scheme" content="dark" />
    <meta name="application-name" content="${siteName}" />
    <meta name="p:domain_verify" content="4a265e664f943991976c9eaf9c4f7d56" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="author" content="Sara Gillard" />
    <meta name="robots" content="index, follow" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:secure_url" content="${image}" />
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
}

getOrderedLabProjects().forEach((project) => {
  const routePath = getLabProjectPath(project).replace(/^\//, '');
  const outputDirectory = path.join(root, routePath);
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, 'index.html'), renderLabRouteHtml(project));
});
