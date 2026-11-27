import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "out");
function file(path) {
  const fullPath = join(root, path);
  assert.ok(existsSync(fullPath), `Missing static export: ${path}`);
  return readFileSync(fullPath, "utf8");
}

const homepage = file("index.html");
const robots = file("robots.txt");
const sitemap = file("sitemap.xml");
const privacy = existsSync(join(root, "privacy.html"))
  ? file("privacy.html")
  : file("privacy/index.html");

assert.match(homepage, /<link[^>]*rel="canonical"[^>]*href="https:\/\/ferdinandproductconsultancy\.com\/?"/i, "Homepage canonical missing");
assert.doesNotMatch(homepage, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i, "Homepage must not be noindex");
assert.match(robots, /User-agent:\s*\*/i, "robots.txt lacks user-agent");
assert.match(robots, /Allow:\s*\//i, "robots.txt does not allow crawling");
assert.match(robots, /Sitemap:\s*https:\/\/ferdinandproductconsultancy\.com\/sitemap\.xml/i, "robots.txt sitemap missing");
assert.match(sitemap, /<loc>https:\/\/ferdinandproductconsultancy\.com\/<\/loc>/i, "Homepage missing from sitemap");
assert.doesNotMatch(sitemap, /<loc>[^<]*\/privacy\/?<\/loc>/i, "Privacy page should not be in sitemap");
assert.match(privacy, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i, "Privacy page should remain noindex");
assert.match(privacy, /<link[^>]*rel="canonical"[^>]*href="https:\/\/ferdinandproductconsultancy\.com\/privacy\/?"/i, "Privacy page canonical missing");

console.log("PASS: Homepage indexing, canonical, sitemap, robots and privacy metadata");
