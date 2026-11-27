#!/usr/bin/env node
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Run after 'npm run build' to catch SEO regressions in the published static export.
const root = join(process.cwd(), "out");
const origin = "https://ferdinandproductconsultancy.com";
const routes = [
  "/",
  "/services/interim-product-leadership/",
  "/services/product-strategy-consultancy/",
  "/experience/",
];
let failures = 0;

function check(name, fn) {
  try {
    fn();
    console.log("PASS", name);
  } catch (error) {
    failures++;
    console.error("FAIL", name, error.message);
  }
}
function required(path) {
  assert.ok(existsSync(path), "Missing: " + path);
  return readFileSync(path, "utf8");
}
function page(route) {
  const slug = route.replace(/^\/|\/$/g, "");
  const alternatives = route === "/" ? ["index.html"] : [slug + ".html", slug + "/index.html"];
  const file = alternatives.find((path) => existsSync(join(root, path)));
  assert.ok(file, "No exported HTML for " + route);
  return required(join(root, file));
}
function tags(html, element) {
  return html.match(new RegExp("<" + element + "\\b[^>]*>", "gi")) || [];
}
function hasAttributes(tag, attributes) {
  return Object.entries(attributes).every(([key, value]) =>
    tag.includes(key + '="' + value + '"') || tag.includes(key + "='" + value + "'"));
}

check("static export", () => assert.ok(existsSync(root), "Run npm run build first"));
check("robots.txt", () => {
  const robots = required(join(root, "robots.txt"));
  assert.match(robots, /User-agent:\s*\*/i);
  assert.match(robots, /Allow:\s*\//i);
  assert.doesNotMatch(robots, /Disallow:\s*\//i);
  assert.ok(robots.includes(origin + "/sitemap.xml"), "Missing sitemap link");
});
check("XML sitemap", () => {
  const sitemap = required(join(root, "sitemap.xml"));
  for (const route of routes) {
    assert.ok(sitemap.includes("<loc>" + origin + route + "</loc>"), "Missing " + route);
  }
});
for (const route of routes) {
  check("indexability and canonical: " + route, () => {
    const html = page(route);
    const robotTags = tags(html, "meta").filter((tag) => /name=["']robots["']/i.test(tag));
    assert.ok(robotTags.every((tag) => !/noindex|nofollow/i.test(tag)), "Robots noindex/nofollow present");
    assert.ok(tags(html, "link").some((tag) => hasAttributes(tag, {
      rel: "canonical",
      href: origin + route
    })), "Canonical missing or incorrect");
    assert.match(html, /<title>[^<]+<\/title>/i, "Missing title");
    assert.ok(tags(html, "meta").some((tag) => /name=["']description["']/i.test(tag)), "Missing description");
  });
}
check("privacy page excluded from indexing", () => {
  const html = page("/privacy/");
  assert.ok(tags(html, "meta").some((tag) => /name=["']robots["']/i.test(tag) && /noindex/i.test(tag)));
});
check("structured data", () => {
  const html = page("/");
  assert.match(html, /application\/ld\+json/i);
  assert.ok(html.includes("Ferdinand Product Consultancy"));
});
if (failures) {
  console.error(failures + " SEO check(s) failed.");
  process.exitCode = 1;
} else {
  console.log("All SEO checks passed.");
}
