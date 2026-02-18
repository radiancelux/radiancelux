# Plan vs Built — Radiance Lux site

Review of [WEBSITE_PLAN.md](./WEBSITE_PLAN.md) against the current codebase. Used to confirm scope before hosting.

---

## Information architecture

| Plan section | Built | Notes |
|-------------|--------|------|
| **Home** | Yes | Hero (“We build cool shit”), hook, value prop, Edison quote, CTAs. Veteran/TS/SCI. |
| **Services** | Yes | Web, Mobile, Backend, Product strategy, Technical leadership, Compliance. “Ideal for” + Get in touch. |
| **Experience** | **Our Team** | Renamed; team cards (Brett, Mateus) with bios, credentials, LinkedIn/GitHub. |
| **Skills & stack** | Yes | Web, Mobile, Backend, Product, Workflows, Toolbox. Bullets and “tell us what you need.” |
| **Leadership** | **How we work** | Philosophy page: 10 principles, Winters attribution at end. |
| **Contact** | Yes | Form (POST /api/contact), direct email link, San Antonio/remote. |
| **Footer** | Yes | LinkedIn, GitHub, email, veteran/TS/SCI. |

---

## Tech & stack (plan §5)

- **Backend:** Laravel — API (contact), health at `/up`, SPA fallback serves Vue build from `backend/public`.
- **Frontend:** Vue 3, TypeScript, Vite, Vue Router, Tailwind. Dark theme, responsive.
- **Monorepo:** `backend/`, `frontend/`, root `package.json` (build, build:copy), `docs/`.
- **Deploy:** Single domain; Laravel serves API + SPA from `backend/public`. Aligned with plan.

---

## Phase 1 (plan §6)

- [x] Monorepo: Laravel in `backend/`, Vue 3 + Vite + TypeScript in `frontend/`.
- [x] Laravel: health `/up`; contact endpoint (validate, email via `MAIL_FROM_ADDRESS`).
- [x] Vue: routing (Home, Services, Team, Skills, Philosophy, Contact); header, footer; Tailwind.
- [x] Copy: hero, value prop, services, team, skills, philosophy, contact.
- [ ] Deploy to radiancelux.tech — ready once hosting checklist is done.

---

## Phase 2 (partial)

- [x] Copy finalized; LinkedIn/GitHub in footer and team cards.
- [x] Responsive layout; basic a11y (labels, focus, headings).
- [x] “Experience” as Our Team (cards).
- [x] Meta: default description and title in `index.html`; per-page titles in router.
- [ ] Optional: Open Graph tags, sitemap (can add post-launch).

---

## Gaps / optional later

- **Blog / Insights** (Phase 3).
- **Case studies** (Phase 3).
- **Calendly / booking** (optional; plan open question).
- **Analytics** (privacy-conscious; Phase 3).

---

## Conclusion

Scope matches the plan: all Phase 1 pages and flows are in place; Phase 2 copy and structure are done. Ready for production build and hosting using the README deployment steps and hosting checklist.
