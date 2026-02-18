# Radiance Lux Technologies LLC

Professional technology consulting site — Vue 3 frontend, Laravel API backend (monorepo). Dark mode, minimal, responsive.

**Domain:** [radiancelux.tech](https://radiancelux.tech)

---

## Stack

- **Frontend:** Vue 3, TypeScript, Vite, Vue Router, Tailwind CSS
- **Backend:** Laravel (API: contact form, health check)

---

## Local development

### Prerequisites

- PHP 8.2+
- Composer
- Node 18+
- npm or pnpm

### 1. Backend

```bash
cd backend
cp .env.example .env
php artisan key:generate
php artisan serve
```

Runs at **http://localhost:8000**. Contact form emails use `MAIL_MAILER=log` by default (see `storage/logs/laravel.log`). Set `MAIL_FROM_ADDRESS` in `.env` for real mail.

### 2. Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Runs at **http://localhost:5173**. Vite proxies `/api` to the Laravel backend, so the contact form works without CORS.

### 3. Open the site

Visit **http://localhost:5173**. Use the frontend dev server; it talks to the API on port 8000.

---

## Production build (single server)

To serve the Vue app and Laravel API from one deployment:

1. Build the frontend:

   ```bash
   cd frontend
   npm run build
   ```

2. Copy the build into Laravel’s public directory (from repo root):

   ```bash
   npm run build:copy
   ```

   Or manually:  
   **Windows (PowerShell):** `Copy-Item -Path frontend\dist\* -Destination backend\public\ -Recurse -Force`  
   **macOS/Linux:** `cp -R frontend/dist/* backend/public/`

3. Deploy the `backend` folder (e.g. to shared hosting or a VPS). Point the web root at `backend/public`. Ensure `index.php` is the entry point; Laravel will serve the SPA for all non-API routes.

4. Configure `.env` in production (see **Hosting checklist** below).

---

## Hosting checklist

Before going live:

1. **Build and copy**
   - From repo root: `npm run build` then `npm run build:copy` (or run `build` from `frontend/`, then copy `frontend/dist/*` into `backend/public/`).
   - Confirm `backend/public/` contains `index.html`, `assets/`, and `favicon.svg`.

2. **Production `.env`** (in `backend/`)
   - `APP_ENV=production`
   - `APP_DEBUG=false`
   - `APP_URL=https://radiancelux.tech` (or your domain)
   - `APP_KEY=` (run `php artisan key:generate` if empty)
   - **Mail (contact form):** `MAIL_FROM_ADDRESS` = inbox that receives form submissions (e.g. `radiancelux@gmail.com`). For real delivery set `MAIL_MAILER=smtp` and your SMTP host/port/username/password. With `MAIL_MAILER=log`, submissions are only logged.

3. **Web server**
   - Document root must be `backend/public`. All requests go through `index.php`; Laravel serves `/api/*` and `/up`, and the SPA for other routes.
   - Apache: use the existing `backend/public/.htaccess`. Nginx: point root to `backend/public` and use a standard Laravel config (try_files, then index.php).

4. **Health**
   - `GET https://your-domain/up` should return 200 (Laravel default health route). Use for uptime checks.

5. **Post-deploy**
   - Visit the site; submit the contact form once and confirm mail is received or appears in logs.

---

## Project layout

```
radiancelux/
├── backend/          # Laravel app (API, serves SPA in production)
├── frontend/         # Vue 3 + Vite + Tailwind
├── docs/             # WEBSITE_PLAN.md, PLAN_VS_BUILT.md
└── README.md
```

---

## Contact form

- **API:** `POST /api/contact` (JSON: `name`, `email`, `message`)
- Emails go to `MAIL_FROM_ADDRESS` in `.env`. Configure `MAIL_MAILER` (e.g. `smtp`) and related env vars for real delivery.

---

© Radiance Lux Technologies LLC
