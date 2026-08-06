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
const tuckedAwaySource = read('src/pages/TuckedAway.jsx')
const labProjectsSource = read('src/data/labProjects.js')

check(!combinedSource.includes('dangerouslySetInnerHTML'), 'Active source should not use dangerouslySetInnerHTML.')
check(!/mailto:|tel:|instagram\.com|facebook\.com|twitter\.com|x\.com/i.test(combinedSource), 'LinkedIn should remain the only public contact/social route.')
check(combinedSource.includes("window.location.pathname === '/tucked-away'"), 'Client routing should support direct /tucked-away visits.')
check(labProjectsSource.includes("id: 'meeting-bingo'"), 'Meeting Bingo project should be registered in Sara\'s Lab data.')
check(labProjectsSource.includes("title: 'Meeting Bingo'"), 'Meeting Bingo title should be present in Sara\'s Lab data.')
check(labProjectsSource.includes("type: 'WEB APP'"), 'Meeting Bingo category should be WEB APP.')
check(labProjectsSource.includes("status: 'Work in Progress'"), 'Meeting Bingo status should be Work in Progress.')
check(labProjectsSource.includes("link: 'https://meeting-bingo-rg4n.vercel.app/'"), 'Meeting Bingo project URL should be present.')
check(labProjectsSource.includes("linkLabel: 'Play Meeting Bingo'"), 'Meeting Bingo detail action should use Play Meeting Bingo.')
check(labProjectsSource.includes("actionLabel: 'Play Meeting Bingo'"), 'Meeting Bingo card action should use Play Meeting Bingo.')
check(labProjectsSource.includes("image: '/images/lab/meeting-bingo.png'"), 'Meeting Bingo should use the supplied Lab image asset.')
check(labProjectsSource.includes("imageAlt: 'Meeting Bingo web app interface'"), 'Meeting Bingo should use the supplied image alt text.')
check(labProjectsSource.includes("order: 6"), 'Meeting Bingo should keep its manual Sara\'s Lab order.')
check(
  labProjectsSource.indexOf("id: 'tucked-away'") < labProjectsSource.indexOf("id: 'meeting-bingo'"),
  'Meeting Bingo should appear after Tucked Away in Sara\'s Lab order.',
)
check(labProjectsSource.includes("id: 'commonwealth-after-dark'"), 'Commonwealth After Dark project should be registered in Sara\'s Lab data.')
check(labProjectsSource.includes("title: 'Commonwealth After Dark'"), 'Commonwealth After Dark title should be present in Sara\'s Lab data.')
check(labProjectsSource.includes("type: 'FALLOUT 4 MODDING'"), 'Commonwealth After Dark category should be FALLOUT 4 MODDING.')
check(labProjectsSource.includes("status: 'Passion Project'"), 'Commonwealth After Dark status should be Passion Project.')
check(labProjectsSource.includes("actionLabel: 'Passion Project'"), 'Commonwealth After Dark should use a non-navigating Passion Project action label.')
check(labProjectsSource.includes("image: '/images/lab/commonwealth-after-dark-1.jpg'"), 'Commonwealth After Dark should use the first supplied image as the card image.')
check(labProjectsSource.includes("src: '/images/lab/commonwealth-after-dark-1.jpg'"), 'Commonwealth After Dark gallery should include the first supplied image.')
check(labProjectsSource.includes("src: '/images/lab/commonwealth-after-dark-2.jpg'"), 'Commonwealth After Dark gallery should include the second supplied image.')
check(labProjectsSource.includes("src: '/images/lab/commonwealth-after-dark-3.jpg'"), 'Commonwealth After Dark gallery should include the third supplied image.')
check(labProjectsSource.includes("title: 'The club taking shape'"), 'Commonwealth After Dark first gallery caption title should be present.')
check(labProjectsSource.includes("title: 'Building the atmosphere'"), 'Commonwealth After Dark second gallery caption title should be present.')
check(labProjectsSource.includes("title: 'Custom assets in progress'"), 'Commonwealth After Dark third gallery caption title should be present.')
check(labProjectsSource.includes("order: 7"), 'Commonwealth After Dark should be the final Sara\'s Lab project.')
check(
  labProjectsSource.indexOf("id: 'meeting-bingo'") < labProjectsSource.indexOf("id: 'commonwealth-after-dark'"),
  'Commonwealth After Dark should appear after Meeting Bingo in Sara\'s Lab order.',
)
check(
  combinedSource.includes('galleryImages') && combinedSource.includes('lab-project-gallery-thumbnails'),
  'Lab project detail view should support optional multi-image galleries.',
)
check(
  combinedSource.includes('aria-pressed={index === activeImageIndex}'),
  'Lab gallery thumbnails should expose selected state with aria-pressed.',
)
check(
  combinedSource.includes('lab-project-link-static') && combinedSource.includes('aria-disabled="true"'),
  'Lab project detail view should support non-interactive action labels.',
)
check(
  labProjectsSource.includes('Tick off clichés, awkward moments and predictable workplace habits as they happen'),
  'Meeting Bingo detail description should use the approved wording.',
)
check(
  !labProjectsSource.includes('The meeting was scheduled for an hour. You knew what was coming. At least now there’s bingo.'),
  'Meeting Bingo should not include removed draft copy.',
)
check(
  combinedSource.includes("rel={project.link.startsWith('/') ? undefined : 'noopener noreferrer'}"),
  'External Lab project links should use noopener noreferrer.',
)
check(
  combinedSource.includes('project.imageAlt || `${project.title} preview`'),
  'Lab project media should support custom image alt text.',
)
check(combinedSource.includes('tuckedAwaySections'), 'Tucked Away sections should be managed from one source of truth.')
check(combinedSource.includes("id: 'privacy'"), 'Tucked Away page should expose a privacy section.')
check(combinedSource.includes('Privacy policy'), 'Tucked Away privacy policy heading should render.')
privacyIntroChecks()
check(combinedSource.includes('tucked-policy-intro'), 'Tucked Away privacy intro should use the compact policy intro block.')
check(!combinedSource.includes('tucked-privacy-intro'), 'Tucked Away privacy intro should not use the old dark panel class.')
check(!combinedSource.includes('privacy-contact'), 'Tucked Away privacy policy should not render a Contact subsection.')
check(!combinedSource.includes('Support email:'), 'Tucked Away privacy policy should not render a support email placeholder.')
check(combinedSource.includes('Last updated: 28 July 2026'), 'Tucked Away privacy policy should show the fixed publication date.')
check(!combinedSource.includes('[ADD PUBLICATION DATE]'), 'Tucked Away privacy policy should not show a publication date placeholder.')
check(combinedSource.includes('getSectionFromHash'), 'Tucked Away should derive the active panel from the URL hash.')
check(combinedSource.includes('window.history.pushState'), 'Tucked Away section selection should update the URL without a full reload.')
check(combinedSource.includes('window.history.replaceState'), 'Tucked Away invalid or missing hashes should fall back safely to Overview.')
check(combinedSource.includes('hashchange'), 'Tucked Away should respond to hash navigation changes.')
check(combinedSource.includes('popstate'), 'Tucked Away should support browser Back and Forward navigation.')
check(!combinedSource.includes('play.google.com'), 'Tucked Away should not include a fake Google Play link before release.')
check(combinedSource.includes('tucked-image-placeholder'), 'Missing Tucked Away images should render intentional placeholders.')
check(combinedSource.includes('tuckedAwayImages'), 'Tucked Away image paths should be managed through a central image mapping.')
check(combinedSource.includes('tuckedAwayContent'), 'Tucked Away page copy should be managed through one central content source.')
check(combinedSource.includes('tucked-hero-logo'), 'Tucked Away Overview hero should render the logo inside the hero content.')
check(combinedSource.includes('tucked-overview-privacy'), 'Tucked Away Overview should contain the single Private by design summary.')
check(combinedSource.includes("onClick={() => onSelect('privacy')}"), 'Tucked Away Overview Private by design summary should link to the full Privacy panel.')
check(combinedSource.includes('tucked-nav-status'), 'Tucked Away Coming to Android status should render in the cabinet navigation.')
check(!combinedSource.includes('OverviewActions'), 'Tucked Away Overview should not render a hero action/pill component.')
check(!combinedSource.includes('tucked-action-static'), 'Tucked Away Overview should not render the old Coming to Android action pill.')
check(combinedSource.includes('tucked-why-heading'), 'Tucked Away Why panel should render a full-width heading row.')
check(combinedSource.includes('tucked-why-copy'), 'Tucked Away Why panel should separate body copy from the heading row.')
check(combinedSource.includes("variant={isOverview ? 'hero' : 'phone'}"), 'Tucked Away Overview screenshot should use the cleaner hero image treatment.')
check(combinedSource.includes("{ id: 'use-cases', label: 'Use cases' }"), 'Tucked Away nav should include Use cases after Why Tucked Away.')
check(!combinedSource.includes("{ id: 'how', label: 'How it works' }"), 'Tucked Away nav should not include How it works as a standalone panel.')
check(combinedSource.indexOf("{ id: 'why', label: 'Why Tucked Away' }") < combinedSource.indexOf("{ id: 'use-cases', label: 'Use cases' }"), 'Tucked Away nav should place Use cases after Why Tucked Away.')
check(combinedSource.indexOf("{ id: 'use-cases', label: 'Use cases' }") < combinedSource.indexOf("{ id: 'features', label: 'Features' }"), 'Tucked Away nav should place Use cases before Features.')
check(combinedSource.includes('/images/tucked-away/tucked-away-logo-transparent.png'), 'Tucked Away should use the transparent logo asset.')
check(combinedSource.includes('/images/tucked-away/tucked-away-catalogue.jpg'), 'Tucked Away should use the supplied catalogue screenshot.')
check(combinedSource.includes('/images/tucked-away/tucked-away-active-filter.jpg'), 'Tucked Away should use the supplied active-filter screenshot.')
check(combinedSource.includes('/images/tucked-away/tucked-away-history.jpg'), 'Tucked Away should use the supplied history screenshot.')
check(combinedSource.includes('/images/tucked-away/tucked-away-setup-step-2.jpg'), 'Tucked Away should keep the supplied setup screenshot in the central image mapping.')
check(!combinedSource.includes('<br'), 'Tucked Away hero heading should not be manually split with hard-coded line breaks.')
check(combinedSource.includes('role="tablist"'), 'Tucked Away section navigation should expose tablist semantics.')
check(combinedSource.includes('role="tabpanel"'), 'Tucked Away active content should expose tabpanel semantics.')
check(combinedSource.includes('aria-selected'), 'Tucked Away selectors should expose selected state.')
check(combinedSource.includes('ArrowRight'), 'Tucked Away tabs should support arrow-key navigation.')
check(combinedSource.includes('Home: 0'), 'Tucked Away tabs should support Home key navigation.')
check(combinedSource.includes('End: lastIndex'), 'Tucked Away tabs should support End key navigation.')
check(combinedSource.includes('Turn a phone full of videos into a library you can actually use.'), 'Tucked Away overview should use the approved restored heading.')
check(!combinedSource.includes('Built around the way you use your videos'), 'Tucked Away old oversized feature heading should be absent.')
check(!combinedSource.includes('tucked-before-after'), 'Tucked Away should not render the old Before and After panel.')
check(!combinedSource.includes('tucked-walkthrough-visual'), 'Tucked Away should not render the old large How it works screenshot.')
check(!combinedSource.includes('tucked-work-screen'), 'Tucked Away should no longer render the old long How it works section.')
check(!combinedSource.includes('tucked-feature-showcase'), 'Tucked Away should no longer render the old long Features and Screenshots section.')
check(!combinedSource.includes('tucked-use-case-visual'), 'Tucked Away should not retain the redundant full-width use-case screenshot panel.')
check(styleText.includes('--ta-green-900'), 'Tucked Away CSS should use a central green palette.')
check(styleText.includes('--ta-screenshot-shadow: 0 16px 34px rgba(25, 53, 31, 0.16);'), 'Tucked Away should define the shared screenshot shadow token.')
check(styleText.includes('.tucked-page h1'), 'Tucked Away h1 sizing should remain page-scoped.')
check(styleText.includes('font-size: 42px;'), 'Tucked Away desktop h1 should use compact cabinet typography.')
check(styleText.includes('font-size: 34px;'), 'Tucked Away desktop h2 should use compact cabinet typography.')
check(styleText.includes('@media (min-width: 769px) and (max-width: 1199px)'), 'Tucked Away tablet layout should use a dedicated horizontal-tab media query.')
check(styleText.includes('font-size: 46px;'), 'Tucked Away tablet h1 should use the fixed 46px heading size.')
check(styleText.includes('font-size: 34px;'), 'Tucked Away tablet h2 should use the fixed 34px section heading size.')
check(styleText.includes('font-size: 30px;'), 'Tucked Away mobile h2 should use the fixed 30px section heading size.')
check(!styleText.includes('font-size: clamp(2.75rem, 4vw, 4.25rem);'), 'Tucked Away h1 should no longer use the previous clamp rule.')
check(!styleText.includes('font-size: clamp(2rem, 3vw, 3.1rem);'), 'Tucked Away h2 should no longer use the previous clamp rule.')
check(styleText.includes('font-size: clamp(1.35rem, 1.6vw, 1.65rem);'), 'Tucked Away h3 sizing should remain unchanged.')
check(styleText.includes('grid-template-columns: 218px minmax(0, 1fr)'), 'Tucked Away desktop layout should use a left navigation cabinet.')
check(styleText.includes('grid-template-areas:'), 'Tucked Away active panels should use a deliberate composed layout.')
check(styleText.includes('"heading heading"'), 'Tucked Away Why panel heading should span the full content row.')
check(styleText.includes('"copy copy"'), 'Tucked Away Features heading should span the content row before cards and screenshots.')
check(styleText.includes('"details media"'), 'Tucked Away Features cards and screenshot gallery should align in the same desktop row.')
check(combinedSource.includes('numberedHeadings'), 'Tucked Away list rendering should support numbered headings for process cards.')
check(combinedSource.includes("numberedHeadings ? `${index + 1}. ${title}` : title"), 'Tucked Away How it works numbers should render inside card headings.')
check(!styleText.includes('.tucked-process-row article::before'), 'Tucked Away How it works cards should not render separate number badges.')
check(styleText.includes('background: linear-gradient(145deg, var(--ta-green-900), #102719);'), 'Tucked Away How it works cards should use a dark green filled treatment.')
check(styleText.includes('overflow-x: auto'), 'Tucked Away tabs should be horizontally scrollable at smaller widths.')
check(!styleText.includes('tucked-screenshot-grid'), 'Tucked Away should not use the old six-image screenshot grid.')
check(styleText.includes('.tucked-image-slot-thumb'), 'Tucked Away screenshot selectors should use lightweight thumbnail previews.')
check(styleText.includes('grid-template-columns: minmax(0, 1fr) minmax(84px, 108px)'), 'Tucked Away screenshot gallery should place thumbnail selectors beside the main image on desktop.')
const tuckedAwayFeaturesBlock = tuckedAwaySource.slice(
  tuckedAwaySource.indexOf('features: {'),
  tuckedAwaySource.indexOf('privacy: {'),
)
check(!tuckedAwayFeaturesBlock.includes("label: 'Setup'"), 'Tucked Away Features screenshot selector should not include Setup.')
;['Catalogue', 'History', 'Filters', 'Video details', 'Sorting'].forEach((label) => {
  check(tuckedAwayFeaturesBlock.includes(`label: '${label}'`), `Tucked Away Features selector should include ${label}.`)
})
check(combinedSource.includes('setupImage: tuckedAwayImages.setupStep2'), 'Tucked Away Use cases should own the Setup screenshot placement.')
check(combinedSource.includes('className="tucked-use-case-screenshot"'), 'Tucked Away Use cases should render the Setup screenshot as a direct image.')
check(styleText.includes('.tucked-use-case-screenshot'), 'Tucked Away Use cases setup screenshot should have a dedicated direct-image style.')
check(/\.tucked-use-case-screenshot\s*\{[^}]*object-fit:\s*contain/s.test(styleText), 'Tucked Away Use cases setup screenshot should use object-fit: contain.')
check(/\.tucked-use-case-screenshot\s*\{[^}]*width:\s*auto/s.test(styleText), 'Tucked Away Use cases setup screenshot should preserve the phone screenshot aspect ratio.')
check(/\.tucked-use-case-screenshot\s*\{[^}]*max-width:\s*min\(100%,\s*380px\)/s.test(styleText), 'Tucked Away Use cases setup screenshot should keep the larger desktop width cap.')
check(/\.tucked-use-case-screenshot\s*\{[^}]*height:\s*min\(58vh,\s*520px\)/s.test(styleText), 'Tucked Away Use cases setup screenshot should size from height without stretching into a wide panel.')
check(/\.tucked-use-case-screenshot\s*\{[^}]*box-shadow:\s*var\(--ta-screenshot-shadow\)/s.test(styleText), 'Tucked Away Use cases setup screenshot should use the shared screenshot shadow.')
check(/\.tucked-use-case-screenshot\s*\{[^}]*border-radius:\s*18px/s.test(styleText), 'Tucked Away Use cases setup screenshot should use the same rounded image treatment as the Overview screenshot.')
check(/\.tucked-use-case-screenshot\s*\{[^}]*padding:\s*0/s.test(styleText), 'Tucked Away Use cases setup screenshot should not have wrapper-like padding.')
check(!/\.tucked-use-case-screenshot\s*\{[^}]*border:\s*1px/s.test(styleText), 'Tucked Away Use cases setup screenshot should not add a framed border.')
check(!styleText.includes('.tucked-privacy-intro'), 'Tucked Away CSS should not keep the old dark privacy intro selector.')
check(/\.tucked-policy-intro\s*\{[^}]*border-left:\s*3px solid/s.test(styleText), 'Tucked Away privacy intro should use a subtle left accent rather than a dark panel.')
check(!/\.tucked-policy-intro\s*\{[^}]*background:/s.test(styleText), 'Tucked Away privacy intro should not have a dark background panel.')
check(!/\.tucked-policy-intro p\s*\{[^}]*rgba\(247,\s*244,\s*235/s.test(styleText), 'Tucked Away privacy intro should not use reversed cream text.')
check(/\.tucked-policy-sections\s*\{[^}]*column-count:\s*2/s.test(styleText), 'Tucked Away privacy subsections should use two columns on desktop.')
check(/@media \(max-width:\s*768px\)[\s\S]*?\.tucked-policy-sections\s*\{[^}]*column-count:\s*1/s.test(styleText), 'Tucked Away privacy subsections should use one column on mobile.')
check(/\.tucked-policy-sections section\s*\{[^}]*padding-block:\s*0\.85rem/s.test(styleText), 'Tucked Away privacy subsections should use compact divider spacing.')
check(!/\.tucked-policy-sections section\s*\{[^}]*border-radius:/s.test(styleText), 'Tucked Away privacy subsections should not use card border radii.')
check(!/\.tucked-policy-sections section\s*\{[^}]*background:/s.test(styleText), 'Tucked Away privacy subsections should not use card backgrounds.')
check(!/\.tucked-policy-sections section\s*\{[^}]*min-height:/s.test(styleText), 'Tucked Away privacy subsections should not use fixed or minimum heights.')
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
    'Overview',
    'Why Tucked Away',
    'Use cases',
    'How it works',
    'Features',
    'Privacy',
    'OVERVIEW',
    'WHY TUCKED AWAY',
    'USE CASES',
    'FEATURES',
    'PRIVACY',
    'Turn a phone full of videos into a library you can actually use.',
    'Tucked Away is a private Android app that helps you organise, search and revisit videos stored on your phone or SD card.',
    'Add the information that matters to you, find useful videos without opening every file, and remember which ones are worth coming back to.',
    'Coming to Android',
    'A folder full of videos is not a library.',
    'Over time, personal videos, tutorials, workouts and saved clips can build up into one large folder.',
    'The files may have similar names, little useful information and no clear way to tell them apart. Even when you remember that a useful video is in there somewhere, finding it can mean opening files one by one.',
    'When hundreds of videos build up in one folder, the problem is no longer storing them. It is knowing what they contain and which ones are worth watching again.',
    'Tucked Away adds structure around the videos without moving or changing the original files. You can give them meaningful titles, add ratings and notes, organise them with your own fields, and quickly find the ones worth returning to.',
    'Know what each video is',
    'Add meaningful titles, ratings, notes, tags and details that matter to your collection.',
    'Find the right video quickly',
    'Search, filter and sort without opening every file to work out what it contains.',
    'Remember what is worth revisiting',
    'Use ratings, including Don’t rewatch, and keep a record of videos you have watched, completed, made or practised.',
    'Choose a folder',
    'Select the folder containing the videos you want Tucked Away to catalogue.',
    'Organise your library',
    'Choose a starter template or begin with a blank library, then add the fields and details that matter to you.',
    'Find and revisit',
    'Use Search, Filters and Sort to find the right video, then record when you watch or use it.',
    'One app, different kinds of video libraries',
    'Tucked Away includes starter templates to help you begin, but every library can be customised.',
    'Personal and family videos',
    'Organise videos by people, event, location, year or occasion, and make favourite memories easier to find again.',
    'Exercise videos',
    'Organise workouts by body area, equipment, exercise type or effort, then record them as Completed.',
    'Craft and creative tutorials',
    'Organise tutorials by project type, materials, technique or difficulty, and remember which ones you want to try again.',
    'Learning videos',
    'Group lessons by subject, topic or level, add notes, and quickly find the right lesson.',
    'Cooking videos',
    'Organise recipes by meal type, cuisine, ingredients or difficulty, then record them as Made.',
    'Music practice',
    'Catalogue lessons and demonstrations by instrument, technique or skill level, then record them as Practised.',
    'Blank library',
    'Start with no predefined structure and create the fields, filters and wording that suit your own collection.',
    'Tucked Away focuses on useful information and clear actions rather than large thumbnails.',
    'Custom fields',
    'Create text, number, date, select and multi-select fields to describe the videos in your library.',
    'Search, Filters and Sort',
    'Search video titles and details, combine filters, and sort the current view using useful library fields.',
    'Ratings',
    'Rate videos from Don’t rewatch through to 5 stars, so worthwhile content does not get lost among everything else.',
    'Watched history',
    'Record when you watch or use a video and review your activity by week.',
    'Custom wording',
    'Choose wording that fits your library, such as Watched, Completed, Made or Practised.',
    'Card layout',
    'Choose which details appear on Catalogue cards and place them in the order that works for you.',
    'Themes',
    'Choose from several colour themes while keeping the same compact, readable layout.',
    'Backup and restore',
    'Export your library settings, metadata and history as a backup file. Your videos are not included.',
    'Catalogue',
    'History',
    'Filters',
    'Video details',
    'Sorting',
    'Setup',
    'Private by design',
    'Your videos stay where they are. Tucked Away does not upload, copy or change them, and you do not need an account.',
    'Your library details are stored on your device, and backups are only created when you choose to export one.',
    'Information Tucked Away accesses',
    'Information stored by the app',
    'Information not collected',
    'Backups',
    'External video players',
    'Data removal',
    'Changes to this policy',
    'Last updated: 28 July 2026',
  ]

  requiredText.forEach((text) => {
    check(combinedSource.includes(text), `Tucked Away approved text is missing: ${text}`)
  })

  const absentText = [
    'Your exercise collection, properly tucked away.',
    'Tucked Away helps you find, play and track exercise videos already stored on your phone or SD card.',
    'Private local video library',
    'Personal tool / Android app',
    'Personal project',
    'In development',
    'What it does',
    'Browse the videos you already have.',
    'Library controls',
    'See the information that makes a video useful.',
    'Example fields',
    'Remember what you actually used.',
    'Sample interface values',
    '3 sessions',
    '84 minutes',
    '173 estimated calories',
    'Privacy basics',
    'Privacy and your data',
    "{ label: 'Why Tucked Away', sectionId: 'why' }",
    "{ label: 'How it works', sectionId: 'how' }",
    "{ id: 'how', label: 'How it works' }",
    "how: {",
    'Support email:',
    'Contact',
  ]

  absentText.forEach((text) => {
    check(!tuckedAwaySource.toLowerCase().includes(text.toLowerCase()), `Tucked Away unapproved text remains: ${text}`)
  })

  const privacyIntroOccurrences = tuckedAwaySource.match(/Tucked Away helps you organise videos stored on your phone or SD card\./g) ?? []
  check(privacyIntroOccurrences.length === 1, 'Tucked Away privacy introduction should appear exactly once in active source.')
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
