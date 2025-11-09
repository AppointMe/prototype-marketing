#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

// Path to router file
const routerPath = path.resolve(process.cwd(), 'src/router/index.js')
const publicDir = path.resolve(process.cwd(), 'public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')
const SITE_BASE = 'https://marketing.appointme.today'

function extractCanonicals(source) {
  const urls = new Set()
  // Regex: meta: { canonical: 'https://...' }
  const regex = /meta:\s*{[^}]*canonical:\s*'([^'\n]+)'/g
  let match
  while ((match = regex.exec(source)) !== null) {
    urls.add(match[1].trim())
  }
  return Array.from(urls)
}

function buildSitemap(urls) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ]
  for (const loc of urls) {
    // Basic validation: ensure starts with site base
    if (!loc.startsWith(SITE_BASE)) continue
    lines.push('  <url>')
    lines.push(`    <loc>${loc}</loc>`) // optional: add <lastmod>
    lines.push('  </url>')
  }
  lines.push('</urlset>')
  return lines.join('\n') + '\n'
}

function main() {
  if (!fs.existsSync(routerPath)) {
    console.error('Router file not found at', routerPath)
    process.exit(1)
  }
  const source = fs.readFileSync(routerPath, 'utf8')
  const canonicals = extractCanonicals(source)
  if (canonicals.length === 0) {
    console.warn('No canonical URLs found. Falling back to root redirect target if any.')
  }
  // Write sitemap
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  const xml = buildSitemap(canonicals)
  fs.writeFileSync(sitemapPath, xml, 'utf8')
  console.log(`Sitemap written: ${sitemapPath}`)
  console.log(xml)
}

main()
