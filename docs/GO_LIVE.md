# Go live: radiancelux.tech on Cloudflare Pages

Checklist after [PR #3](https://github.com/radiancelux/radiancelux/pull/3) merged. Production preview: `https://radiancelux.pages.dev`.

## 1. Cloudflare Pages project

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Production branch:** `main` (Git integration auto-deploys)

## 2. Environment variables (Cloudflare dashboard)

Set these under **Workers & Pages → radiancelux → Settings → Environment variables → Production**.

| Variable | Example | Notes |
|----------|---------|--------|
| `RESEND_API_KEY` | `re_…` | From [Resend API keys](https://resend.com/api-keys) |
| `CONTACT_TO` | `radiancelux@gmail.com` | Inbox for contact form submissions |
| `RESEND_FROM` | `Radiance Lux <contact@radiancelux.tech>` | Must use a **verified** domain in Resend |

**Important:** GitHub **Environment** secrets/variables do **not** reach Cloudflare Pages Functions. Only variables in the Cloudflare Pages project apply to `/api/contact`.

When pasting `RESEND_FROM`, use the value only — not `RESEND_FROM: …` as the whole string. The contact function strips a mistaken prefix if present.

`onboarding@resend.dev` only delivers to the Resend account owner; verify **radiancelux.tech** in Resend before go-live.

## 3. Resend domain (radiancelux.tech)

1. Resend → **Domains** → add `radiancelux.tech`.
2. Prefer **Auto configure** (Cloudflare) if the zone is on Cloudflare; otherwise add the shown SPF/DKIM/MX records at your DNS host.
3. Wait until the domain shows **Verified**.
4. Use a `@radiancelux.tech` sender in `RESEND_FROM`.

## 4. Custom domains on Pages

In **Workers & Pages → radiancelux → Custom domains**:

| Host | Typical setup |
|------|----------------|
| `radiancelux.tech` | CNAME to `radiancelux.pages.dev` (Cloudflare shows the exact target) |
| `www.radiancelux.tech` | CNAME to `radiancelux.pages.dev` |

If the zone is on Cloudflare, activation is usually automatic after DNS propagates (up to 24–48 hours).

### Moving from GoDaddy

1. Export/copy existing **MX**, **TXT** (SPF, verification), and any other records you still need.
2. Point nameservers to Cloudflare (or keep GoDaddy DNS and add only the records Pages/Resend require).
3. Add custom domains in Pages and complete Resend DNS before cutting over email.

## 5. Verify before shutting down the old host

- [ ] `https://radiancelux.tech/` and `https://www.radiancelux.tech/` load the SPA
- [ ] Deep links work (`/work`, `/projects`, `/contact`, résumé PDF)
- [ ] `GET /api/health` → `{"status":"ok"}`
- [ ] Contact form returns success and mail arrives at `CONTACT_TO`
- [ ] Old hosting provider can be decommissioned

## 6. Local test with production-like env

```bash
cp .dev.vars.example .dev.vars   # fill secrets
npm run pages:dev
```

Then POST to `/api/contact` from the Contact page.
