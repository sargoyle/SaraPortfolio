import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const productionUrl = 'https://saragillard.com'
const oldDomain = 'sara-portfolio-tawny.vercel.app'
const expectedTitle = 'Sara’s Portfolio | Artist, Pattern Maker & Creative Technologist'
const expectedDescription =
  'Explore Sara Gillard’s cross-stitch designs, photography, games and creative digital projects.'
const tuckedAwayTitle = 'Tucked Away | Organise videos stored on your Android device'
const tuckedAwayDescription =
  'Tucked Away is a private Android app for organising, searching, rating and revisiting videos stored on your phone or SD card.'
const socialImagePath = '/images/social/saras-portfolio-og.png'
const tuckedAwaySocialImagePath = '/images/tucked-away/tucked-away-social-card.png'
const prohibitedPositioning = [
  ['Product', 'Manager'].join(' '),
  ['product', 'management'].join(' '),
  ['product', 'strategy'].join(' '),
  ['professional', 'portfolio'].join(' '),
  ['Microsoft', 'Power', 'Platform'].join(' '),
]

const failures = []
let passed = 0

function check(condition, message) {
  if (condition) {
    passed += 1
    return
  }

  failures.push(message)
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath))
}

function walkFiles(start, extensions) {
  const startPath = path.join(root, start)
  if (!fs.existsSync(startPath)) return []

  return fs.readdirSync(startPath, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(startPath, entry.name)
    const relativePath = path.relative(root, fullPath)

    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.git', '.cache'].includes(entry.name)) return []
      return walkFiles(relativePath, extensions)
    }

    if (!extensions.includes(path.extname(entry.name))) return []
    return [relativePath]
  })
}

function getPngSize(relativePath) {
  const buffer = fs.readFileSync(path.join(root, relativePath))
  const hasPngSignature =
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47

  if (!hasPngSignature) return null

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  }
}

const indexHtml = read('index.html')
const tuckedAwayHtml = read('tucked-away.html')
const robotsTxt = read('public/robots.txt')
const sitemapXml = read('public/sitemap.xml')
const manifest = read('public/site.webmanifest')

check(indexHtml.includes(`<title>${expectedTitle}</title>`), 'Homepage title metadata is missing or incorrect.')
check(indexHtml.includes(`content="${expectedDescription}"`), 'Homepage meta description is missing or incorrect.')
check(indexHtml.includes(`<link rel="canonical" href="${productionUrl}/" />`), 'Canonical URL must point to the production apex domain.')
check(indexHtml.includes(`property="og:url" content="${productionUrl}/"`), 'Open Graph URL must point to the production apex domain.')
check(indexHtml.includes('property="og:site_name" content="Sara’s Portfolio"'), 'Open Graph site name is missing or incorrect.')
check(indexHtml.includes(`property="og:title" content="${expectedTitle}"`), 'Open Graph title is missing or incorrect.')
check(indexHtml.includes(`property="og:description"`), 'Open Graph description metadata is missing.')
check(indexHtml.includes(`property="og:image" content="${productionUrl}${socialImagePath}"`), 'Open Graph image must use the production domain.')
check(indexHtml.includes(`name="twitter:card" content="summary_large_image"`), 'Twitter card metadata must use summary_large_image.')
check(indexHtml.includes(`name="twitter:title" content="${expectedTitle}"`), 'Twitter title is missing or incorrect.')
check(indexHtml.includes(`name="twitter:image" content="${productionUrl}${socialImagePath}"`), 'Twitter image must use the production domain.')

check(tuckedAwayHtml.includes(`<title>${tuckedAwayTitle}</title>`), 'Tucked Away page title metadata is missing or incorrect.')
check(tuckedAwayHtml.includes(`content="${tuckedAwayDescription}"`), 'Tucked Away meta description is missing or incorrect.')
check(tuckedAwayHtml.includes(`<link rel="canonical" href="${productionUrl}/tucked-away" />`), 'Tucked Away canonical URL must point to the production route.')
check(tuckedAwayHtml.includes(`property="og:url" content="${productionUrl}/tucked-away"`), 'Tucked Away Open Graph URL must point to the production route.')
check(tuckedAwayHtml.includes('property="og:title" content="Tucked Away"'), 'Tucked Away Open Graph title is missing or incorrect.')
check(tuckedAwayHtml.includes(`property="og:image" content="${productionUrl}${tuckedAwaySocialImagePath}"`), 'Tucked Away Open Graph image placeholder path is missing or incorrect.')
check(tuckedAwayHtml.includes(`name="twitter:title" content="Tucked Away"`), 'Tucked Away Twitter title is missing or incorrect.')
check(!tuckedAwayHtml.includes('Product Manager'), 'Tucked Away metadata must not include old Product Manager positioning.')

check(robotsTxt.includes('User-agent: *'), 'robots.txt must declare a user agent.')
check(robotsTxt.includes('Allow: /'), 'robots.txt must allow crawling.')
check(robotsTxt.includes(`Sitemap: ${productionUrl}/sitemap.xml`), 'robots.txt must point to the production sitemap.')

const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
check(sitemapUrls.length === 2, 'Sitemap should include the portfolio root and Tucked Away routes.')
check(sitemapUrls.includes(`${productionUrl}/`), 'Sitemap root route must use the production apex domain.')
check(sitemapUrls.includes(`${productionUrl}/tucked-away`), 'Sitemap must include the Tucked Away route.')

check(manifest.includes(productionUrl), 'Web app manifest should reference the production domain.')
check(exists('public/favicon.svg'), 'SVG favicon is missing from public.')
check(exists('public/favicon-32x32.png'), 'PNG favicon is missing from public.')
check(exists('public/apple-touch-icon.png'), 'Apple touch icon is missing from public.')

const socialPreview = getPngSize(`public${socialImagePath}`)
check(Boolean(socialPreview), 'Social preview image must exist and be a PNG.')
check(
  socialPreview?.width === 1200 && socialPreview?.height === 630,
  'Social preview image should be 1200 x 630 px.',
)

const projectFiles = [
  'index.html',
  'tucked-away.html',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
  ...walkFiles('src', ['.js', '.jsx']),
  ...walkFiles('src/styles', ['.css']),
  ...walkFiles('functions', ['.md']),
  ...walkFiles('docs', ['.md']),
]

const combinedProjectText = projectFiles.map((file) => read(file)).join('\n')
const styleText = read('src/styles/global.css')
check(!combinedProjectText.includes(oldDomain), `Old Vercel domain reference remains: ${oldDomain}`)
prohibitedPositioning.forEach((term) => {
  check(!combinedProjectText.includes(term), `Old professional positioning remains: ${term}`)
})

const srcFiles = walkFiles('src', ['.js', '.jsx'])
const combinedSource = srcFiles.map((file) => read(file)).join('\n')

check(!combinedSource.includes('dangerouslySetInnerHTML'), 'Active source should not use dangerouslySetInnerHTML.')
check(!/mailto:|tel:|instagram\.com|facebook\.com|twitter\.com|x\.com/i.test(combinedSource), 'LinkedIn should remain the only public contact/social route.')
check(combinedSource.includes("window.location.pathname === '/tucked-away'"), 'Client routing should support direct /tucked-away visits.')
check(combinedSource.includes("id=\"privacy\""), 'Tucked Away page should expose a privacy anchor.')
check(combinedSource.includes('Privacy policy'), 'Tucked Away privacy policy heading should render.')
privacyIntroChecks()
check(!combinedSource.includes('privacy-contact'), 'Tucked Away privacy policy should not render a Contact subsection.')
check(!combinedSource.includes('Support email:'), 'Tucked Away privacy policy should not render a support email placeholder.')
check(combinedSource.includes('Last updated: 28 July 2026'), 'Tucked Away privacy policy should show the fixed publication date.')
check(!combinedSource.includes('[ADD PUBLICATION DATE]'), 'Tucked Away privacy policy should not show a publication date placeholder.')
check(combinedSource.includes('href="#how-it-works"'), 'Tucked Away hero should link to the how-it-works anchor.')
check(combinedSource.includes('href="#privacy"'), 'Tucked Away page should link to the privacy anchor.')
check(combinedSource.includes('Coming to Android'), 'Tucked Away release status should be visible.')
check(!combinedSource.includes('play.google.com'), 'Tucked Away should not include a fake Google Play link before release.')
check(combinedSource.includes('tucked-image-placeholder'), 'Missing Tucked Away images should render intentional placeholders.')
check(combinedSource.includes('tuckedAwayImages'), 'Tucked Away image paths should be managed through a central image mapping.')
check(combinedSource.includes('/images/tucked-away/tucked-away-logo-transparent.png'), 'Tucked Away should use the transparent logo asset.')
check(combinedSource.includes('/images/tucked-away/tucked-away-catalogue.jpg'), 'Tucked Away should use the supplied catalogue screenshot.')
check(combinedSource.includes('/images/tucked-away/tucked-away-active-filter.jpg'), 'Tucked Away should use the supplied active-filter screenshot.')
check(combinedSource.includes('/images/tucked-away/tucked-away-history.jpg'), 'Tucked Away should use the supplied history screenshot.')
check(!combinedSource.includes('<br'), 'Tucked Away hero heading should not be manually split with hard-coded line breaks.')
check(combinedSource.includes('selectedScreenshotIndex'), 'Tucked Away should use a keyboard-accessible screenshot selector state.')
check(combinedSource.includes('role="tablist"'), 'Tucked Away process and screenshot selectors should expose tablist semantics.')
check(combinedSource.includes('aria-selected'), 'Tucked Away selectors should expose selected state.')
check(combinedSource.includes('href="#why-tucked-away"'), 'Tucked Away hero should include a Why Tucked Away action.')
check(combinedSource.includes('Turn a phone full of videos into a library you can actually use.'), 'Tucked Away hero should use the approved phone-focused heading.')
check(!combinedSource.includes('Turn a folder full of videos into a library you can actually use.'), 'Tucked Away old folder-focused hero heading should be absent.')
check(!combinedSource.includes('Built around the way you use your videos'), 'Tucked Away old oversized feature heading should be absent.')
check(!combinedSource.includes('tucked-before-after'), 'Tucked Away should not render the old Before and After panel.')
check(!combinedSource.includes('tucked-walkthrough-visual'), 'Tucked Away should not render the old large How it works screenshot.')
check(combinedSource.includes('tucked-work-screen'), 'Tucked Away How it works and feature content should share the work-screen layout.')
check(combinedSource.includes('tucked-feature-showcase'), 'Tucked Away Features and Screenshots should share one showcase layout.')
check(!combinedSource.includes('tucked-use-case-visual'), 'Tucked Away should not retain the redundant full-width use-case screenshot panel.')
check(styleText.includes('--ta-green-900'), 'Tucked Away CSS should use a central green palette.')
check(styleText.includes('--ta-gap-section: 50px'), 'Tucked Away CSS should use the restored deliberate spacing scale.')
check(styleText.includes('.tucked-page h1'), 'Tucked Away h1 sizing should remain page-scoped.')
check(styleText.includes('font-size: 52px;'), 'Tucked Away desktop h1 should use the fixed 52px heading size.')
check(styleText.includes('font-size: 38px;'), 'Tucked Away desktop h2 should use the fixed 38px section heading size.')
check(styleText.includes('@media (max-width: 1199px) and (min-width: 768px)'), 'Tucked Away tablet heading sizing should use a fixed media query.')
check(styleText.includes('font-size: 46px;'), 'Tucked Away tablet h1 should use the fixed 46px heading size.')
check(styleText.includes('font-size: 34px;'), 'Tucked Away tablet h2 should use the fixed 34px section heading size.')
check(styleText.includes('font-size: 30px;'), 'Tucked Away mobile h2 should use the fixed 30px section heading size.')
check(!styleText.includes('font-size: clamp(2.75rem, 4vw, 4.25rem);'), 'Tucked Away h1 should no longer use the previous clamp rule.')
check(!styleText.includes('font-size: clamp(2rem, 3vw, 3.1rem);'), 'Tucked Away h2 should no longer use the previous clamp rule.')
check(styleText.includes('font-size: clamp(1.35rem, 1.6vw, 1.65rem);'), 'Tucked Away h3 sizing should remain unchanged.')
check(styleText.includes('grid-template-columns: repeat(3, minmax(0, 1fr))'), 'Tucked Away process steps should use a three-column desktop row.')
check(styleText.includes('grid-template-columns: minmax(0, 0.42fr) minmax(420px, 0.58fr)'), 'Tucked Away feature section should use the requested feature-list-plus-gallery layout.')
check(!styleText.includes('tucked-screenshot-grid'), 'Tucked Away should not use the old six-image screenshot grid.')
check(!styleText.includes('tucked-feature-grid'), 'Tucked Away should not use the old feature card grid.')
check(!styleText.includes('tucked-steps'), 'Tucked Away should not use the old three screenshot-card process grid.')
check(!/\.tucked-[^{]+position:\s*absolute/s.test(styleText), 'Tucked Away core layout should not use absolute positioning.')
check(!styleText.includes('grid-template-rows: auto auto auto 360px'), 'Tucked Away process cards should not use the old oversized fixed row height.')
check(!styleText.includes('grid-template-rows: auto 440px'), 'Tucked Away screenshot cards should not use the old oversized gallery row height.')
check(!/\.tucked-section\s*\{[^}]*100vh/s.test(styleText), 'Tucked Away sections should not use viewport-height layout.')
check(!/\.tucked-card\s*\{[^}]*min-height:\s*[4-9]\d\dpx/s.test(styleText), 'Tucked Away content cards should not use large fixed min-heights.')
check(styleText.includes('overflow-x: hidden'), 'Tucked Away page should guard against horizontal overflow.')
tuckedAwayContentChecks()

function privacyIntroChecks() {
  const requiredParagraphs = [
    'Tucked Away helps you organise videos stored on your phone or SD card. It does not upload, copy or change the original video files. When you tap Play, the video opens in a video player installed on your phone.',
    'The details you add, such as titles, ratings, notes, tags and watched history, are saved on your device for Tucked Away to access. If you uninstall the app or clear its data, this information may be removed, but your videos are not touched.',
    'You can create a backup of your library details and history and save it anywhere you choose. The backup does not include the videos themselves.',
    'You do not need an account to use Tucked Away, and your library information stays on your device.',
  ]

  requiredParagraphs.forEach((paragraph) => {
    check(combinedSource.includes(paragraph), `Tucked Away privacy intro is missing exact paragraph: ${paragraph}`)
  })
}

function tuckedAwayContentChecks() {
  const requiredText = [
    'Turn a phone full of videos into a library you can actually use.',
    'A folder full of videos is not a library.',
    'Know what each video is',
    'Find the right video quickly',
    'Remember what is worth revisiting',
    'Choose a folder',
    'Organise your library',
    'Find and revisit',
    'Personal and family videos',
    'Exercise videos',
    'Craft and creative tutorials',
    'Learning videos',
    'Cooking videos',
    'Music practice',
    'Blank library',
    'Custom fields',
    'Search, Filters and Sort',
    'Ratings',
    'Watched history',
    'Custom wording',
    'Card layout',
    'Themes',
    'Backup and restore',
    'Catalogue',
    'History',
    'Filters',
    'Video details',
    'Sorting',
    'Setup',
    'Private by design',
    'Find the videos worth coming back to.',
  ]

  requiredText.forEach((text) => {
    check(combinedSource.includes(text), `Tucked Away approved text is missing: ${text}`)
  })
}

for (const file of srcFiles) {
  const contents = read(file)
  const imgTags = contents.match(/<img\b[^>]*>/g) ?? []
  imgTags.forEach((tag) => {
    check(/\balt=/.test(tag), `${file} contains an image without alt text: ${tag}`)
  })

  const blankLinks = contents.match(/<a\b[\s\S]*?target=["']_blank["'][\s\S]*?>/g) ?? []
  blankLinks.forEach((tag) => {
    check(/\brel=["'][^"']*(noopener|noreferrer)[^"']*["']/.test(tag), `${file} has a target="_blank" link without noopener/noreferrer.`)
  })
}

const dataFiles = walkFiles('src/data', ['.js'])
const assetReferences = []
const assetPattern = /['"`](\/(?:images|files)\/[^'"`]+)['"`]/g

for (const file of ['index.html', 'public/site.webmanifest', ...dataFiles]) {
  const contents = read(file)
  let match
  while ((match = assetPattern.exec(contents))) {
    assetReferences.push({ file, assetPath: match[1] })
  }
}

assetReferences.forEach(({ file, assetPath }) => {
  const localPath = decodeURIComponent(assetPath.replace(/^\//, 'public/'))
  check(exists(localPath), `${file} references a missing public asset: ${assetPath}`)
})

check(combinedSource.includes('Go to Home'), 'Home navigation should have an accessible label.')
check(combinedSource.includes('aria-current'), 'Navigation should expose the active section with aria-current.')
check(combinedSource.includes('aria-pressed'), 'Filter controls should expose active state with aria-pressed.')
check(combinedSource.includes('role="dialog"'), 'Modal views should expose dialog semantics.')
check(/Close/.test(combinedSource), 'Modal close controls should have clear accessible labels.')

if (failures.length > 0) {
  console.error(`Site validation failed: ${failures.length} issue(s).`)
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log(`Site validation passed: ${passed} checks.`)
