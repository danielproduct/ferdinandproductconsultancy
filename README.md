# Ferdinand Product Consultancy — Website Rebuild

Independent Next.js 16 / React 19 website for Ferdinand Product Consultancy, prepared for Cloudflare Pages static hosting via GitHub.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Cloudflare Pages deployment preparation

The site uses a static Next.js export (`next.config.ts`), producing a deployable `out/` directory from `npm run build`. The two local `next/image` assets are unoptimised to support static hosting.

Create a Cloudflare Pages project using GitHub repository `danielproduct/ferdinandproductconsultancy` and configure:

- Framework preset: **Next.js (Static HTML Export)**
- Production branch: **main**
- Build command: **`npm run build`**
- Build output directory: **`out`**

First verify the `*.pages.dev` preview. Next, connect `ferdinandproductconsultancy.com` and `www.ferdinandproductconsultancy.com` in Cloudflare Pages. The apex domain generally requires moving authoritative nameservers to Cloudflare; **copy and verify every existing DNS record before that operation**, especially MX, SPF, DKIM, DMARC, and other email/service records. Do not change DNS until the current zone is fully reviewed and Dan explicitly approves cutover.

The website currently sends mail through a `mailto:` link and WhatsApp through a `wa.me` link; there are no server-side contact routes to migrate. The `noindex` setting stays on for pre-launch previews.

## Before launch

- Confirm that the public email, telephone number and WhatsApp destination work as expected.
- Review the supplied founder portrait and brand logo at desktop and mobile sizes.
- Confirm claims, public case studies, portfolio rights, availability and working geography.
- Review the privacy and cookie position before enabling analytics.
- Remove the `noindex` robots setting in `app/layout.tsx` only after approval.
- Verify the Cloudflare Pages preview and rendered site before any publication or DNS/domain change.

The live website and DNS are intentionally untouched.
