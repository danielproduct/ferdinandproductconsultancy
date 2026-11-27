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


const pages = [
  { route: "services/interim-product-leadership", heading: "interim", key: "interim-product-leadership" },
  { route: "services/product-strategy-consultancy", heading: "Product strategy", key: "product-strategy-consultancy" },
  { route: "experience", heading: "Product experience", key: "experience" },
];
for (const { route, heading, key } of pages) {
  const exportPath = existsSync(join(root, route + ".html")) ? route + ".html" : route + "/index.html";
  const html = file(exportPath);
  assert.ok(html.includes(heading), `Missing page content at ${route}`);
  assert.match(html, /<link[^>]*rel="canonical"[^>]*href="https:\/\/ferdinandproductconsultancy\.com\//i, `Canonical missing for ${route}`);
  assert.ok(sitemap.includes("https://ferdinandproductconsultancy.com/" + key + "/") || sitemap.includes("https://ferdinandproductconsultancy.com/" + route + "/"), `Sitemap missing ${route}`);
  assert.doesNotMatch(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i, `${route} should be indexed`);
}
assert.match(homepage, /application\/ld\+json/i, "Structured business data missing");
assert.ok(homepage.includes("Ferdinand Product Consultancy"), "Brand name missing");
assert.ok(homepage.includes("/services/interim-product-leadership/"), "Interim leadership internal link missing");
assert.ok(homepage.includes("/services/product-strategy-consultancy/"), "Consultancy internal link missing");
console.log("PASS: Service pages, career experience, sitemap entries and business structured data");
