# Villa Sfiora — Jumeirah Park

Landing page for **Villa Sfiora**, a fully reconstructed 4-bedroom villa in Jumeirah Park, Dubai, presented by BlackOak Real Estate.

Built with **Next.js 16** (App Router) + **Tailwind CSS 4**, deployed on **Vercel**.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build && npm run start
```

---

## Editing content

All copy lives in **`src/lib/constants.ts`** — villa name, taglines, property highlights,
specification lists, location data, agent contact, DLD permit number, disclaimer. Change it
there; nothing is hard-coded inside components.

---

## Adding the villa photos  ← (the one remaining step)

Photos are wired through a single file: **`src/data/image-map.json`**.

1. Raw photos live in **`/Images`** (e.g. `A-1.jpg`, `A-42.jpg`, `B-3.jpg`).
2. Open `src/data/image-map.json` and fill in the source filenames **without extension**, in display order:

   ```jsonc
   {
     "hero":    { "source": "A-1", "alt": "…" },
     "living":  { "name": "Living & Reception", "alt": "…",
                  "sources": ["A-2", "A-5", "A-8", "A-11"] },
     "kitchen": { "…", "sources": ["A-40", "A-41", "A-42"] },
     "dining":  { "…", "sources": [] },
     "bedrooms":{ "…", "sources": [] },
     "master":  { "…", "sources": [] },
     "outdoor": { "…", "sources": [] }
   }
   ```

3. Generate optimised WebP into `public/images`:

   ```bash
   npm run process-images
   ```

   This reads the same JSON, resizes to ≤2400px, and writes
   `public/images/<section>/<section>-<n>.webp` (hero → `hero/cover.webp`).

Sections with empty `sources` render a tasteful "photo to come" placeholder, so the site is
fully functional before every photo is mapped.

> **Section sizing guide:** hero ×1 · living ~6 · kitchen ~3 · dining ~4 · bedrooms ~8 ·
> master ~6 · outdoor ~8.

---

## Lead capture / CRM

The contact form posts to **`/api/lead`** (a server route — `src/app/api/lead/route.ts`),
which validates the payload and forwards it to your CRM.

Set these in Vercel **Environment Variables** (and locally in `.env`, see `.env.example`):

| Variable | Purpose |
|---|---|
| `CRM_LEAD_ENDPOINT` | Full URL the CRM exposes for inbound leads. The route POSTs JSON to it. |
| `CRM_LEAD_TOKEN` | *(optional)* Sent as `Authorization: Bearer <token>`. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (sitemap / OpenGraph). |

Until `CRM_LEAD_ENDPOINT` is set, leads are accepted and logged server-side (`forwarded:false`)
so the form is testable. The forwarded JSON shape is defined in `route.ts` — adjust field
names there once the CRM contract is known.

---

## Deploy to Vercel

1. Push this repo to GitHub (already connected to `snidhesh/JPJ4J2`).
2. Import the project in Vercel — it auto-detects Next.js, no config needed.
3. Add the environment variables above.
4. Deploy. The `/api/lead` route runs as a serverless function automatically.

---

## Design

Modeled on the **Sotheby's International Realty** aesthetic: clean white / off-white (`#fafafa`)
backgrounds, the iconic **Sotheby's navy `#002349`** for accents, buttons, and dark sections,
charcoal text, generous whitespace, and serif headlines over letter-spaced sans nav.

All colors are design tokens in `src/app/globals.css` (`@theme` block) — retune the whole site
from there.

**Fonts** (loaded via `next/font` in `src/app/layout.tsx`):
- **Fraunces** (serif headlines) — a free, near-identical stand-in for Sotheby's *FreightBig Pro*.
- **Libre Franklin** (body / nav / UI) — a free stand-in for Sotheby's *BentonSans*.

> Sotheby's actual fonts (BentonSans, FreightBig Pro) are licensed/commercial. To go
> pixel-exact, license them, drop the `.woff2` files in `public/fonts/`, add `@font-face`
> rules, and point `--font-serif` / `--font-sans` in `globals.css` at them.

## Structure

```
src/
  app/            layout, page, globals.css, JsonLd, sitemap, robots, api/lead, privacy-policy
  components/
    sections/     Hero, Introduction, Video, Gallery, Statement, Outdoor, Specification, Location, Contact
    layout/       Header, MobileMenu, Footer
    forms/        ContactForm, PhoneInput, ConsentCheckbox
    ui/           Container, SectionHeading, Button, RoomGallery, FormInput, FormTextarea, Reveal, WhatsAppButton
  lib/            constants.ts (content), images.ts, validation.ts, utils.ts
  data/           image-map.json  ← photo lineup
scripts/          process-images.mjs
```
