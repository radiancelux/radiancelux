# Radiance Lux site — technical notes

## Stack

- **Frontend:** Vue 3, Vue Router, TypeScript, Tailwind CSS v4, Vite 7
- **Hosting:** Cloudflare Pages (static `dist/` + Functions in `functions/`)
- **Contact API:** `POST /api/contact` → Resend; `GET /api/health` → `{ "status": "ok" }`
- **SPA routing:** `public/_redirects` serves `index.html` for client routes; `/api/*` is handled by Functions

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | Vite entry |
| `resources/js/` | Vue app (views, router, components) |
| `resources/js/data/openSourceProjects.json` | Open-source project metadata (committed; not rewritten by build) |
| `dist/open-source-projects.json` | Star counts fetched at build time (generated) |
| `public/` | Static assets (favicon, whitepapers, `_redirects`, résumé PDF) |
| `functions/api/` | Cloudflare Pages Functions |
| `dist/` | Build output (gitignored) |

## Contact function behavior

Matches the former Laravel contact endpoint:

- Validates `name` (max 255), `email`, `message` (max 5000)
- Returns `422` with `{ errors }`, `500` with `{ message }`, `200` with `{ message }`
- Honeypot field `website` (bots that fill it get a fake success)
- Per-IP rate limit via Cache API (5 requests per minute, per Cloudflare location — soft limit)
- Requires `RESEND_API_KEY`, `CONTACT_TO`, and `RESEND_FROM` (verified domain in Resend; do not rely on `onboarding@resend.dev` in production)

## Open-source star counts

`vite.config.js` reads `resources/js/data/openSourceProjects.json`, fetches GitHub stars, and writes `dist/open-source-projects.json` (and `public/open-source-projects.json` during `npm run dev`, gitignored). The Projects page loads that file at runtime with a static fallback.

## Legacy docs

Older planning files (`WEBSITE_PLAN.md`, `FEEDBACK-PLAN.md`, etc.) describe the pre-migration Laravel site and are kept for history only.

## Production cutover

See **[GO_LIVE.md](GO_LIVE.md)** for custom domain, Resend DNS, and Cloudflare environment variable setup.
