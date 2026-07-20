import fs from 'fs';
import path from 'path';

function verifySitemap() {
  console.log('=== STARTING SITEMAP VERIFICATION ===');
  const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ Error: dist/sitemap.xml does not exist! Run npm run build first.');
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  
  // Extract all <loc> tags
  const locRegex = /<loc>(https:\/\/shinewellcleaning\.com[^<]*)<\/loc>/g;
  let match;
  const urls: string[] = [];
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }

  if (urls.length === 0) {
    console.error('❌ Error: No URLs found in sitemap.xml!');
    process.exit(1);
  }

  console.log(`Found ${urls.length} URLs in sitemap.xml. Starting crawl of output files...`);

  const distPath = path.join(process.cwd(), 'dist');
  let errors = 0;

  for (const url of urls) {
    const pathName = url.replace('https://shinewellcleaning.com', '');
    const cleanPath = pathName === '' ? '/' : pathName;

    console.log(`Checking URL: ${url} (Path: ${cleanPath})`);

    // Rule 1: No non-HTML files
    if (cleanPath.endsWith('.txt') || cleanPath.endsWith('.xml') || cleanPath.endsWith('.png') || cleanPath.endsWith('.jpg') || cleanPath.endsWith('.json')) {
      console.error(`  ❌ ERROR: Non-HTML file found in sitemap: ${cleanPath}`);
      errors++;
      continue;
    }

    // Rule 2: Verify corresponding static file on disk
    let staticFile = '';
    if (cleanPath === '/') {
      staticFile = path.join(distPath, 'index.html');
    } else {
      staticFile = path.join(distPath, cleanPath.substring(1), 'index.html');
    }

    if (!fs.existsSync(staticFile)) {
      console.error(`  ❌ ERROR: Pre-rendered HTML file does not exist on disk! Expected at: ${staticFile}`);
      errors++;
    } else {
      console.log(`  ✅ 200 OK (Static file verified: ${staticFile})`);
    }
  }

  if (errors > 0) {
    console.error(`=== SITEMAP VERIFICATION FAILED WITH ${errors} ERRORS ===`);
    process.exit(1);
  } else {
    console.log('=== SITEMAP VERIFICATION SUCCESSFUL! ALL URLS VALID AND PRERENDERED ===');
  }
}

verifySitemap();
