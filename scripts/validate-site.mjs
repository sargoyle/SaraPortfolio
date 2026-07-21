import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const productionUrl = 'https://saragillard.com'
const oldDomain = 'sara-portfolio-tawny.vercel.app'
const expectedTitle = 'Sara’s Portfolio | Artist, Pattern Maker & Creative Technologist'
const expectedDescription =
  'Explore Sara Gillard’s cross-stitch designs, photography, games and creative digital projects.'
const socialImagePath = '/images/social/saras-portfolio-og.png'
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

check(robotsTxt.includes('User-agent: *'), 'robots.txt must declare a user agent.')
check(robotsTxt.includes('Allow: /'), 'robots.txt must allow crawling.')
check(robotsTxt.includes(`Sitemap: ${productionUrl}/sitemap.xml`), 'robots.txt must point to the production sitemap.')

const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
check(sitemapUrls.length === 1, 'Sitemap should include only the current single public route.')
check(sitemapUrls[0] === `${productionUrl}/`, 'Sitemap route must use the production apex domain.')

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
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
  ...walkFiles('src', ['.js', '.jsx']),
  ...walkFiles('functions', ['.md']),
  ...walkFiles('docs', ['.md']),
]

const combinedProjectText = projectFiles.map((file) => read(file)).join('\n')
check(!combinedProjectText.includes(oldDomain), `Old Vercel domain reference remains: ${oldDomain}`)
prohibitedPositioning.forEach((term) => {
  check(!combinedProjectText.includes(term), `Old professional positioning remains: ${term}`)
})

const srcFiles = walkFiles('src', ['.js', '.jsx'])
const combinedSource = srcFiles.map((file) => read(file)).join('\n')

check(!combinedSource.includes('dangerouslySetInnerHTML'), 'Active source should not use dangerouslySetInnerHTML.')
check(!/mailto:|tel:|instagram\.com|facebook\.com|twitter\.com|x\.com/i.test(combinedSource), 'LinkedIn should remain the only public contact/social route.')

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
