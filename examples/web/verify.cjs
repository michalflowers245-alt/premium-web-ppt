/* Reproduce original webpage screenshots and observable interaction checks.
 * Requires Playwright and a browser. Set BROWSER_CHANNEL=chrome for installed Chrome.
 */
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '../..');
const assets = path.join(root, 'docs/assets');
const cases = ['architecture', 'art', 'speaker'];
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.md': 'text/plain; charset=utf-8' };

async function main() {
  fs.mkdirSync(assets, { recursive: true });
  const server = http.createServer((req, res) => {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const launchOptions = { headless: true };
  if (process.env.BROWSER_CHANNEL) launchOptions.channel = process.env.BROWSER_CHANNEL;
  let browser;
  const reports = [];
  try {
    browser = await chromium.launch(launchOptions);
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const name of cases) {
      const report = { case: name, viewports: [], screenshots: [], checks: [] };
      for (const viewport of [{ width: 1600, height: 1000 }, { width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 320, height: 844 }]) {
        const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        const response = await page.goto(`${base}/examples/web/${name}/`, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200);
        await page.evaluate(() => document.fonts.ready);
        const state = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth,
          images: [...document.images].map(img => ({ loaded: img.complete && img.naturalWidth > 0, alt: Boolean(img.alt.trim()) })),
          anchorsValid: [...document.querySelectorAll('a[href^="#"]')].every(a => document.getElementById(a.hash.slice(1))),
          h1Count: document.querySelectorAll('h1').length,
          conceptLabel: document.body.innerText.includes('原创概念演示'),
        }));
        assert.equal(state.overflow, false, `${name}: horizontal overflow at ${viewport.width}px`);
        assert(state.images.every(img => img.loaded && img.alt), `${name}: broken image or missing alternative text`);
        assert.equal(state.anchorsValid, true, `${name}: invalid in-page anchor`);
        assert.equal(state.h1Count, 1);
        assert.equal(state.conceptLabel, true);
        assert.deepEqual(errors, []);
        const shotName = viewport.width === 1600 ? `web-${name}.png` : viewport.width === 390 ? `web-${name}-mobile.png` : null;
        if (shotName) {
          await page.screenshot({ path: path.join(assets, shotName), fullPage: false, animations: 'disabled' });
          report.screenshots.push(`docs/assets/${shotName}`);
        }
        if (viewport.width === 390) {
          const menu = page.locator('.menu-toggle');
          await menu.click();
          assert.equal(await menu.getAttribute('aria-expanded'), 'true');
          await page.keyboard.press('Escape');
          assert.equal(await menu.getAttribute('aria-expanded'), 'false');
          await menu.click();
          await page.locator('nav a').first().click();
          assert.equal(await menu.getAttribute('aria-expanded'), 'false');
          const target = await page.locator('nav a').first().getAttribute('href');
          assert.equal(new URL(page.url()).hash, target);
          report.checks.push('Mobile menu opens, closes with Escape and anchor navigation');
        }
        const details = page.locator('details');
        if (await details.count()) {
          const first = details.first();
          await first.locator('summary').click();
          assert.equal(await first.getAttribute('open'), '');
          assert.equal(await first.locator('p').isVisible(), true);
        }
        report.viewports.push(viewport);
        await context.close();
      }
      report.checks.push('Images loaded with alt text; no horizontal overflow; anchors resolve; single h1; no page JavaScript errors');
      if (name !== 'architecture') report.checks.push('Native details disclosure opens and reveals explanation');
      reports.push(report);
    }
    fs.writeFileSync(path.join(__dirname, 'verification.json'), JSON.stringify({ date: '2026-10-31', browser: await browser.version(), method: 'Actual local browser rendering and observable interaction checks', reports }, null, 2) + '\n');
    console.log('PASS: 3 pages × 4 viewports; 6 screenshots; mobile menus, anchors, images and disclosures checked.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
