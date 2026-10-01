# Spandaman — Krisumi lead site

Marketing site for **Spandaman**, a Gurugram real estate brokerage, focused on generating phone / WhatsApp / form leads for **Krisumi** in Sector 36A.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Local lead capture via `POST /api/leads` (writes JSON under `data/leads/`)

## Run locally

```bash
npm install
npm run dev
```

Dev server defaults to **http://127.0.0.1:43127**.

Production build:

```bash
npm run build
npm run start
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — Spandaman + Krisumi hero, highlights, form, FAQ |
| `/projects/krisumi` | Dedicated Krisumi project page + enquiry |
| `/projects/krisumi/waterfall-residences` | Krisumi Waterfall Residences project page |
| `/projects/krsumi` | Permanent redirect → `/projects/krisumi` |
| `/contact` | Contact / enquire |
| `/thank-you` | Post-submit success |

## Lead form → CRM later

v1 stores each lead as:

- `data/leads/<uuid>.json`
- append-only `data/leads/leads.ndjson`
- console log `[lead]`

To wire a CRM / WhatsApp Business / Google Sheet later, edit `src/app/api/leads/route.ts` and forward the same payload to your webhook after validation. Update phone / WhatsApp / email in `src/lib/site.ts`.

## Notes

- Pricing uses **Price on request** — no fabricated RERA / rate claims.
- Demo contact numbers live in `src/lib/site.ts`; replace before production.
- Images are high-quality Unsplash placeholders for residential atmosphere.
