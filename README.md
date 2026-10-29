# Radiance Lux Technologies LLC

Portfolio and consulting site for **Brett Humphreys** and **Radiance Lux Technologies LLC** — veteran-owned frontend engineering and leadership. San Antonio metro, remote-friendly.

Static Vue 3 SPA on **Cloudflare Pages**, with contact email via a **Pages Function** (Resend).

## Connect

- [LinkedIn](https://www.linkedin.com/in/humphreysbrett)
- [GitHub](https://github.com/radiancelux)
- [X @radiance_lux](https://x.com/radiance_lux)

## Development

```bash
npm ci
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). API routes (`/api/contact`, `/api/health`) are available when using Wrangler locally (see below).

## Production build

```bash
npm ci
npm run build
```

Output goes to `dist/`. GitHub Actions runs the same on pull requests and pushes to `main`.

## Local preview (static + Functions)

1. Copy `.dev.vars.example` to `.dev.vars` and set `RESEND_API_KEY` and `CONTACT_TO`.
2. Build and run Pages dev:

```bash
npm run pages:dev
```

Or:

```bash
npm run build
npx wrangler pages dev dist
```

## Deploy

Connect the GitHub repo to **Cloudflare Pages** (build command: `npm run build`, output directory: `dist`). Set environment variables in the Cloudflare dashboard:

- `RESEND_API_KEY`
- `CONTACT_TO`
- Optional: `RESEND_FROM` (verified sender domain)

Do not commit secrets.

## Résumé PDF

Place `Brett_Humphreys_Resume.pdf` in `public/` so the home page download link works.

## More detail

See [docs/README.md](docs/README.md) for architecture notes.
