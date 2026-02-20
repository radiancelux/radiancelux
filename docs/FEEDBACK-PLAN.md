# Radiance Lux Site — Feedback Alignment Plan

This document maps reviewer feedback to the current site and defines concrete actions. Items are ordered by priority (Critical → Quick Wins → This Month → Ongoing).

---

## Current state summary

| Area | What exists today |
|------|-------------------|
| **Hero** | "We build cool shit" + "Tell us what you need. We'll ship it." + Veteran-owned · TS/SCI in small text |
| **Value prop** | Generic; no industry or problem-specific headline |
| **Services** | 6 service blocks (web, mobile, backend, product strategy, tech leadership, compliance); no engagement models or stack summary |
| **Social proof** | None — no case studies, testimonials, client logos, or certs |
| **SEO** | Single meta description and title in `app.blade.php`; no per-page meta, no blog |
| **Contact** | Contact form + email; no Calendly, no strong CTA like "Schedule discovery call" |
| **Veteran narrative** | Mentioned in hero, team, services, footer; no dedicated About / story page |
| **Design** | Dark theme, text-only hero, "We build cool shit" in footer; minimal imagery |
| **Business context** | Team size implied on Team page; geographic "San Antonio · Remote"; no "lean team" or "newly launched" framing |

---

## Critical issues (high priority)

### 1. No clear value proposition

**Feedback:** Headline too generic; missing why Veteran-owned matters and what problem you solve.

**Current:** Hero says "We build cool shit" and "Tell us what you need. We'll ship it." Veteran-owned is one line of small text.

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Add a clear, specific headline | `HomeView.vue` hero | e.g. "Veteran-Led Software Development for B2B & Government" or "Custom Software for Teams That Need to Ship" — pick one direction (B2B, gov, or broad). |
| Add a subheadline that states your edge | Same | e.g. "Senior-only team. TS/SCI cleared. No junior devs, no legacy baggage—just delivery." |
| Elevate "Veteran-owned" in hero | Same | Move out of fine print into the main value block; optionally add one line: "Why it matters: mission discipline, reliability, and clearance when you need it." |
| Optionally A/B copy | — | Keep "We build cool shit" as a secondary line if you want to keep the tone for dev-savvy visitors. |

---

### 2. Missing services/expertise section (structure)

**Feedback:** No single place for tech stack, service types, and engagement models.

**Current:** Services page has 6 service blocks. Skills page has stack. No engagement models (project-based, retainer, staff aug) anywhere.

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Add a "Tech stack" summary at top of Services or as a short section | `ServicesView.vue` | 2–3 lines: "We work in Vue, React, Flutter, Go, Laravel, Python; AWS, Docker, PostgreSQL, Redis. We fit your stack when it makes sense." Link to /skills for detail. |
| Add "How we engage" section to Services | `ServicesView.vue` | Bullets or short paragraphs: Project-based · Hourly consulting · Monthly retainer · Staff augmentation / embedded. One line each. |
| Keep Skills as the deep-dive | `SkillsView.vue` | No structural change; ensure nav and Services copy point to it as "Our stack in detail." |

---

### 3. Zero social proof

**Feedback:** No portfolio, testimonials, client logos, or certifications.

**Current:** None of these exist.

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Add **/work** (or /portfolio) page | New route + view | "Case studies" or "Work": 2–3 items. Format: Problem → What we did → Outcome (even if anonymized: "Fortune 500 retailer," "Series B SaaS," or real projects). Can start with 1 real + 1–2 "representative" if needed. |
| Add **Testimonials** section | HomeView or new section on About | 2–3 short quotes + name/role (or "Former client, defense sector"). Even 1–2 from military/contract colleagues helps. |
| Add **Trusted by** (client logos) | HomeView or About | "Trusted by" + logos or "Fortune 500 retailer · Series B SaaS · DoD contractor" if names are NDA. |
| Call out **SDVOSB** (if applicable) | Footer + About + meta | If you pursue SDVOSB: badge/line in footer, paragraph on About, and mention in meta/descriptions for "veteran owned software" type searches. |
| Add **certifications / clearance** line | Hero or About | TS/SCI already mentioned; add SDVOSB when you have it; optional: other certs (e.g. security, cloud). |

---

## Digital marketing gaps

### 4. SEO fundamentals

**Feedback:** Weak meta description; generic title; no content strategy.

**Current:** One `<title>` and one `<meta name="description">` in `app.blade.php`; router sets `document.title` per route but server-rendered meta is not per-route.

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Improve default meta description | `app.blade.php` | Include keywords: e.g. "Veteran-owned software development in San Antonio. Custom web & mobile apps, TS/SCI cleared. B2B & government." |
| Improve default title | `app.blade.php` | e.g. "Radiance Lux | Veteran-Owned Software Development · San Antonio" |
| Add per-route meta (optional but recommended) | Vue app + backend | Option A: Use vue-meta or @vueuse/head so each route sets title + description. Option B: Laravel returns different meta per route (e.g. first load from server with route-based meta). Start with improving the single default; add per-route later. |
| Target keywords in copy | Site-wide | Use in headlines/copy where natural: "Veteran owned software company," "software development San Antonio," "TS/SCI cleared development." |
| Blog / resources (medium-term) | New section | 3 posts as suggested: Veteran-led teams, Tech stack 2026, One case study. Enables organic discovery; can be static markdown or Laravel-driven. |

---

### 5. Broken customer journey

**Feedback:** Weak CTA; no contact form prominence; no calendar.

**Current:** Contact page has form + email. Primary CTA on home is "Start a conversation" → /contact. Footer is email + LinkedIn + GitHub.

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Replace or supplement passive email CTA with action CTA | Contact + Footer + Hero | e.g. "Schedule a 15‑min discovery call" or "Get a project estimate" as primary; keep "Or email us" as secondary. |
| Add Calendly/Cal.com link | ContactView + optional CTA button in header/footer | Button: "Schedule discovery call" → external Calendly/Cal.com. Reduces friction for first contact. |
| Make contact form the primary on Contact | ContactView | Form first; "Prefer email? radiancelux@gmail.com" below. Already have form; just ensure hierarchy and CTAs point to "Send message" or "Schedule call." |

---

### 6. Underutilizing "Veteran-owned" narrative

**Feedback:** Biggest differentiator; needs About page and prominence.

**Current:** Veteran-owned and TS/SCI appear in hero (small), team, services, footer. No dedicated story or About page.

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Add **/about** page | New route + `AboutView.vue` | Story: military background → tech → why Radiance Lux. Mission-critical reliability, discipline, leadership. Optional: team photos (business casual). |
| Highlight "Veteran-owned" in hero and nav | HomeView, AppHeader | Already in hero; make it more visible (subhead or badge). Consider "About" in nav. |
| Use veteran-owned in LinkedIn/GitHub bios | External | "Veteran-owned" and "Radiance Lux" in profile bios (manual). |
| Target keyword in copy and meta | Site-wide + meta | "Veteran owned software company" in About, Services, and meta description. |

---

## Brand perception

### 7. Design too minimalist for B2B

**Feedback:** "We build cool shit" can alienate enterprise; add trust (imagery, color, CTA).

**Current:** Dark theme; hero is text only; footer tagline is "We build cool shit."

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Soften or relocate "We build cool shit" | AppFooter, optional HomeView | Footer: e.g. "Custom software. Clear delivery. Veteran-led." Or keep "cool shit" only on Home as a secondary line. |
| Add hero visual | HomeView | Subtle background image, gradient, or abstract tech visual; or a single "team at work" or product screenshot. |
| Consider trust/accent color for primary CTA | main.css / Tailwind | Accent is already amber; ensure primary CTA button is clearly "action" (current accent works). Optional: add a calmer blue/green for "Learn more" if you add a second CTA. |
| Professional photography (when available) | About + Team | Team photos (business casual); optional office/workspace. Place in About and reuse on Team. |

---

### 8. Missing business context

**Feedback:** Team size, geography, and "newly launched" positioning.

**Current:** Team page says "veteran-owned small shop" and "more developers join on contract." Footer: "San Antonio, TX · Remote-friendly."

**Actions:**

| Action | Where | Notes |
|--------|--------|------|
| Frame team size positively | TeamView, About | e.g. "Lean, senior-level team—no junior devs, no overhead. We scale with contract talent when the engagement needs it." |
| Clarify geographic focus | Footer, About, Contact | e.g. "San Antonio, TX · Remote across the US · Government and DoD welcome." If you target federal: say so. |
| Position "newly launched" as strength | About or Home | e.g. "Newly launched—modern stack, no legacy baggage, fresh perspective." |

---

## Quick wins (this week)

| # | Action | Owner / notes |
|---|--------|----------------|
| 1 | Create **/about** page (story, military → tech, why Radiance Lux) | New route + AboutView.vue |
| 2 | Tighten hero: specific headline + subheadline + elevate Veteran-owned | HomeView.vue |
| 3 | Add "Schedule discovery call" CTA + Calendly/Cal.com link | ContactView.vue, optional header/footer |
| 4 | Improve default `<title>` and `<meta name="description">` in blade | app.blade.php |
| 5 | Add "How we engage" (project / retainer / staff aug) to Services | ServicesView.vue |
| 6 | Change footer tagline from "We build cool shit" to B2B-friendly line | AppFooter.vue |
| 7 | Add "About" to main nav | AppHeader.vue |

---

## This month

| # | Action | Owner / notes |
|---|--------|----------------|
| 1 | Build **/work** (portfolio) page — 2–3 case studies (problem/solution/result) | New route + WorkView.vue; content can be anonymized or GitHub repos framed as case studies |
| 2 | Add testimonials section (2–3 quotes) to Home or About | HomeView or AboutView |
| 3 | Add "Trusted by" or "Clients" (logos or anonymized) | HomeView or AboutView |
| 4 | Research and start **SDVOSB** if applicable | External; then add badge + copy on site |
| 5 | Optional: lead magnet (e.g. "Veteran CTO's Guide to Technical Debt") + email capture | New page or modal; integrate with form/CRM |
| 6 | Optional: live chat (Crisp/Tidio free tier) | Script in app.blade.php |

---

## Ongoing / content

| # | Action | Notes |
|---|--------|--------|
| 1 | Publish 3 blog posts (Veteran-led teams, Tech stack 2026, One case study) | Requires blog or resources section; can be static or Laravel |
| 2 | Google Business Profile in San Antonio | External; free, helps local SEO |
| 3 | LinkedIn profiles: Radiance Lux + "Veteran-owned" in bios, professional headshots | External |
| 4 | Regular content (e.g. monthly) targeting "veteran tech services" / "government software contractor" | Blog or resources |

---

## Implementation order (recommended)

1. **Phase 1 — Copy and structure (no new pages)**  
   - Hero and value prop (HomeView).  
   - Footer tagline (AppFooter).  
   - Default SEO title and description (app.blade.php).  
   - "How we engage" on Services (ServicesView).  
   - "Schedule discovery call" + Calendly link (ContactView).

2. **Phase 2 — New pages**  
   - /about (AboutView + route).  
   - /work (WorkView + route); start with 1–2 items.

3. **Phase 3 — Social proof and trust**  
   - Testimonials block (Home or About).  
   - "Trusted by" (logos or anonymized).  
   - SDVOSB when available.

4. **Phase 4 — Content and marketing**  
   - Blog or resources + 3 posts.  
   - Per-route meta if desired.  
   - Google Business, LinkedIn, lead magnet, live chat as you go.

---

## File checklist (for implementation)

| File / area | Changes |
|-------------|--------|
| `resources/views/app.blade.php` | Meta description, title |
| `resources/js/views/HomeView.vue` | Hero headline, subhead, Veteran-owned, optional testimonials + Trusted by |
| `resources/js/views/ServicesView.vue` | Stack summary, "How we engage" section |
| `resources/js/views/ContactView.vue` | Primary CTA "Schedule discovery call," Calendly/Cal.com link, form hierarchy |
| `resources/js/components/AppFooter.vue` | Tagline, optional SDVOSB later |
| `resources/js/components/AppHeader.vue` | Add About (and later Work) to nav |
| `resources/js/router/index.ts` | Routes: `/about`, `/work` |
| New: `resources/js/views/AboutView.vue` | About page |
| New: `resources/js/views/WorkView.vue` | Portfolio / case studies |

This plan keeps the current site as the single source of truth and aligns it with the feedback so the site works as a client acquisition tool, not just a digital business card.
