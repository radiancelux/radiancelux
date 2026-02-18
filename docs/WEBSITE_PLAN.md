# Radiance Lux Technologies LLC — Website Plan

**Domain:** radiancelux.tech  
**Stack:** Vue frontend + Laravel backend (monorepo)  
**Purpose:** Professional technology consulting site showcasing skills, experience, and leadership.

---

## 1. Research Summary

### From GitHub ([radiancelux](https://github.com/radiancelux))
- **Brett Humphreys** — 5 public repos: Parler-Share-Button (PHP), namer_app (Flutter), flutter_ble_peripheral, go-server (Go), radiancelux (company).
- Breadth: PHP, Flutter/Kotlin, Go; recent contribution to external project (e.g. shai-hulud-scanner).

### From LinkedIn ([humphreysbrett](https://www.linkedin.com/in/humphreysbrett/))
- **Current:** Senior Software Engineer at Parler — leads UI and frontend architecture; Vue/TypeScript, event-based APIs, UX/UI collaboration, performance and quality.
- **Board:** Homeland Security Foundation of America (HSFA).
- **Background:** Retired Army Major; 20+ years military + civilian; San Antonio, TX.
- **Army highlights:** CBRNE Deputy (Army North, FEMA/DSCA); CBRN Test Officer (ATEC, $600K–$6M programs); Division CBRNE Deputy (2nd ID/ROK-US, Korea); Company Commander (89 soldiers, 600+ civilians, $40M property); CBRN/Operations roles; Combat Medic (101st Airborne, Iraq deployment; USAMRIID; Brooke Army Medical Center).
- **Skills:** Vue.js, Ionic, TypeScript, PHP, product management, content strategy, compliance/policy, military leadership, UI/UX, project management, strategic planning, cross-functional and interagency coordination.
- **Education:** B.S.H.S. Healthcare Management, Cum Laude (Trident University).
- **Honors:** Meritorious Service Medals, Army Commendation Awards, Combat Medic Badge, Air Assault Badge, Operation Iraqi Freedom.

---

## 2. Goals & Audience

| Goal | Audience |
|------|----------|
| Position Radiance Lux as a consulting/contracting option for serious engineering and product work | CTOs, engineering leads, product leaders, government/defense-adjacent orgs |
| Demonstrate technical depth (frontend, full-stack, architecture) and delivery | Technical hiring managers, procurement |
| Differentiate via leadership, high-stakes experience, and reliability | Decision-makers who value leadership + technical credibility |
| Support lead generation (contact, engagements) | Potential clients and partners |

---

## 3. Positioning & Messaging

**One-line:** Technical excellence and leadership honed in the Army and in production—frontend architecture, product sense, and delivery you can count on.

**Themes to weave in (without sounding like a military resume):**
- **Mission-focused delivery:** “Clear intent, on time, to standard” — echoes commander’s intent and your CBRNE/test/command roles.
- **High-stakes systems:** Compliance, policy, content moderation, DSCA-style coordination — positions you for regulated or critical systems.
- **Leadership + hands-on:** Led soldiers and civilians, ran test programs and product roadmaps; still ships code and owns frontend architecture.
- **Cross-functional and interagency:** Teams, vendors, federal/international partners — translates to stakeholder-heavy consulting.

**Army leadership as differentiator (subtle):**
- Short “Leadership” or “Why work with us” section: discipline, accountability, strategic planning, mentoring.
- Optional “Background” or “About” narrative: Army → product/engineering, without listing every billet.
- Trust signals: reliability, clarity, no drama — implied by background rather than overstated.

---

## 4. Information Architecture (Proposed)

| Section | Purpose |
|--------|--------|
| **Home** | Hero + value prop; 2–3 proof points (e.g. “Frontend architecture”, “Product & policy”, “Leadership & delivery”); clear CTA (Contact / Start a conversation). |
| **Services** | What you offer: e.g. Frontend architecture & Vue/SPA development; Product strategy & roadmap; Technical leadership & team guidance; Compliance-aware design (policy, content, security). Optional: “Ideal for” (startups, agencies, government-adjacent). |
| **Experience** | Concise timeline or highlights: Parler (frontend leadership), Army (leadership, CBRNE/test/command), HSFA board. Link to LinkedIn for full history. |
| **Skills & stack** | Vue, TypeScript, Ionic, PHP, Laravel; frontend architecture; APIs, performance, testing. Optional: “Also comfortable with” (Flutter, Go) from GitHub. |
| **Leadership / Why Radiance Lux** | Short narrative: mission-focused delivery, high-stakes experience, leadership + technical depth. Optional: selected honors or principles (e.g. “Clear communication”, “No surprise delivery”). |
| **Contact** | Simple form or mailto; optional Calendly or “Book a call”; location (San Antonio / remote). |
| **Footer** | LinkedIn, GitHub, radiancelux.tech; company name and optional tagline. |

Optional later: **Blog / Insights** (technical or leadership short posts), **Case studies** (if you can share sanitized examples).

---

## 5. Tech Stack (Monorepo)

- **Backend:** Laravel (API, optional contact form handling, future auth if needed).
- **Frontend:** Vue 3 (Composition API), TypeScript, Vite.
- **Monorepo layout (suggested):**
  - `backend/` — Laravel app (API routes, maybe contact form submission, mail).
  - `frontend/` — Vue 3 + Vite app consuming backend API.
  - Root: `README`, `docs/`, shared tooling (PHP/Composer in backend, Node/pnpm in frontend).

- **Content:** Start with content in Vue (or Laravel-bladed pages if you prefer). Move to CMS or Markdown later if you add blog.
- **Deploy:** Single domain (radiancelux.tech); Laravel serves API and optionally static build (e.g. serve `frontend/dist` from Laravel or separate static host). SSL via host (e.g. Cloudflare, Vercel, or Laravel Forge).

---

## 6. Phased Build Plan

### Phase 1 — Foundation (Week 1–2)
- [ ] Monorepo: Laravel in `backend/`, Vue 3 + Vite + TypeScript in `frontend/`.
- [ ] Laravel: health/API route; contact form endpoint (validate, store, send email).
- [ ] Vue: routing (Home, Services, Experience, Skills, Leadership, Contact); layout (header, footer); basic styling (Tailwind or similar).
- [ ] Copy: hero, value prop, services list, short experience and skills, leadership blurb, contact CTA.
- [ ] Deploy to radiancelux.tech (staging first if desired).

### Phase 2 — Content & Polish (Week 2–3)
- [ ] Finalize all copy; add LinkedIn/GitHub links.
- [ ] Responsive and a11y pass (contrast, focus, headings).
- [ ] Optional: simple “Experience” timeline or cards.
- [ ] SEO: meta titles/descriptions, Open Graph; optional sitemap.

### Phase 3 — Enhancements (as needed)
- [ ] Blog or “Insights” (Markdown + Laravel or Vue content).
- [ ] Case studies or project highlights (where allowed).
- [ ] Analytics (privacy-conscious); optional Calendly/booking.

---

## 7. Open Questions for You

1. **Tone:** Prefer strictly professional (minimal personality) or a bit of voice (e.g. “mission-driven”, “no-nonsense”)?
2. **Army detail:** How much Army do you want on the site? (e.g. one “Leadership” subsection vs. a short “About / Background” narrative with a few roles.)
3. **Contact:** Contact form only, or also Calendly / “Book a call” / direct email?
4. **Parler / current employer:** Should the site say “Senior Software Engineer at Parler” or keep it generic (“Senior Software Engineer”, “leading frontend at a social platform”) to avoid brand emphasis?
5. **Content ownership:** Will you write all copy, or do you want placeholders and a style guide so someone else can draft?
6. **Design:** Any reference sites or preferences (minimal, bold, dark/light)? Any brand colors or logo for Radiance Lux?
7. **Hosting:** Any constraint (e.g. Laravel Forge, Vercel, shared host)? Affects how we serve Laravel + Vue.
8. **Timeline:** Target launch date (even rough) so we can adjust phase lengths?

---

## 8. Next Steps

1. You answer the questions in §7 (even briefly).
2. Create monorepo structure and Laravel + Vue scaffolding.
3. Implement Phase 1 pages and contact flow; iterate on copy and design.
4. Deploy to radiancelux.tech and run Phase 2 polish.

Once you confirm direction and answers to the open questions, we can start with repo structure and first implementation steps.
