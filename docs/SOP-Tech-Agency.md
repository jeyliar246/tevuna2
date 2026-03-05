# Standard Operating Procedure (SOP)  
## Tech Agency – Websites, Mobile Apps & Technical Deliverables

**Document version:** 1.0  
**Last updated:** March 2025  
**Scope:** Tevuna and any tech agency building websites, mobile applications, or other technical client work.

---

## 1. Purpose & Scope

### 1.1 Purpose
This SOP defines how the agency delivers technical work so that every project is consistent, legally compliant, discoverable, and maintainable. It reflects practices implemented on the Tevuna website and extends them to all client projects.

### 1.2 Scope
- **Websites** (marketing sites, landing pages, multi-page sites, SPAs)
- **Web applications** (dashboards, portals, SaaS)
- **Mobile applications** (iOS, Android, cross-platform)
- **Technical consulting** (architecture, audits, integrations)
- **Other technical deliverables** (APIs, tooling, automation)

---

## 2. Pre-Project & Discovery

### 2.1 Requirements
- [ ] Client brief: goals, audience, must-have features, timeline, budget
- [ ] Brand: logo, colours, tone of voice, existing guidelines
- [ ] Content: copy, images, legal text (Privacy, Cookies, Terms if applicable)
- [ ] Technical: hosting preference, domain, third-party services (analytics, forms, CRM)
- [ ] Legal & compliance: target region (e.g. UK/EU for GDPR), cookie/consent needs

### 2.2 Deliverables agreed
- [ ] Scope document or statement of work
- [ ] Sitemap / information architecture (for websites)
- [ ] Wireframes or key screens (as agreed)
- [ ] Tech stack and hosting decision
- [ ] Timeline and milestones

---

## 3. Tech Stack Standards

### 3.1 Websites (current reference: Tevuna site)
- **Framework:** Next.js 14+ (React), or equivalent modern stack
- **Styling:** Tailwind CSS with design tokens (primary, accent, typography)
- **Animation:** Framer Motion (or agreed alternative) for transitions and micro-interactions
- **Icons:** Lucide React (or consistent icon set)
- **Optional:** Lottie for complex animations where appropriate
- **Language:** TypeScript for type safety and maintainability
- **Node:** LTS (e.g. Node 18+); specify in project and deployment config

### 3.2 Mobile apps
- **Cross-platform:** React Native or Flutter (or native where specified)
- **State:** Agreed state management (e.g. Zustand, Redux, Provider)
- **API:** Consistent error handling, auth, and environment config
- **Build:** CI/CD and store submission process documented

### 3.3 Backend / APIs
- **API design:** REST or GraphQL; versioning and error format documented
- **Auth:** Secure (e.g. JWT, OAuth) and compliant with data protection
- **Environment:** Separate dev/staging/production; secrets never in repo

---

## 4. Project Structure (Web)

### 4.1 Recommended layout (Next.js App Router)
```
├── app/
│   ├── layout.tsx          # Root layout, metadata, global scripts (e.g. JSON-LD)
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # robots.txt
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── cookies/page.tsx    # Cookie Policy
│   └── [other routes]/
├── components/             # Reusable UI (Navbar, Footer, Hero, forms, etc.)
├── lib/                    # Utilities, SEO config, constants
├── public/                 # Static assets (images, favicon, verification files)
├── netlify.toml / vercel.json  # Deployment config
└── package.json
```

### 4.2 Naming & organisation
- **Components:** PascalCase; one main component per file
- **Routes:** kebab-case URLs; folder names match routes
- **Assets:** Descriptive names; use subfolders (e.g. `assets/images`, `assets/lottie`)
- **Config:** Centralise site URL, brand name, and SEO copy in `lib/` (e.g. `lib/seo.ts`)

---

## 5. Development Standards

### 5.1 Responsive design
- Mobile-first; breakpoints for tablet (`md`) and desktop (`lg` and up)
- Touch targets ≥ 44px where possible
- No horizontal scroll on viewport; test on real devices or emulators

### 5.2 Accessibility (a11y)
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, headings in order
- Images: meaningful `alt` text; decorative images use `alt=""` or `role="presentation"` where appropriate
- Interactive elements: focus states, `aria-label` where needed, keyboard navigable
- Forms: `<label>` linked to inputs; errors and required fields announced
- Cookie/consent UI: `role="dialog"` and `aria-label` where applicable

### 5.3 Performance
- Lazy-load below-the-fold images where appropriate
- Minimise layout shift (e.g. dimensions on images)
- Fonts: `display: 'swap'` (or similar) to avoid invisible text
- Avoid blocking scripts above the fold unless necessary

### 5.4 Code quality
- **Lint:** Run project linter (e.g. `npm run lint`) before commit; fix errors
- **TypeScript:** No `any` unless justified; strict mode where possible
- **React:** Prefer function components and hooks; keep components focused

---

## 6. SEO (On-Site)

Every public website must implement the following.

### 6.1 Sitemap
- **URL:** `/sitemap.xml` (or equivalent)
- **Contents:** All indexable pages (home, main sections, privacy, cookies, key landing pages)
- **Fields:** `url`, `lastModified`, `changeFrequency`, `priority`
- **Update:** Regenerate when new public pages are added

### 6.2 robots.txt
- **URL:** `/robots.txt`
- **Rules:** Allow crawlers for public pages; disallow `/api/` or other non-public paths
- **Sitemap:** Include full URL to sitemap (e.g. `https://www.example.com/sitemap.xml`)
- **Host:** Specify canonical host if applicable

### 6.3 Meta tags (per page or template)
- **Title:** Unique, descriptive; template e.g. `%s | Brand Name`
- **Description:** 150–160 characters; no duplicate descriptions across key pages
- **Keywords:** Optional; comma-separated, relevant terms
- **Canonical:** One canonical URL per page to avoid duplicate content
- **Robots:** `index, follow` for public content; `noindex` only where intended (e.g. thank-you pages)

### 6.4 Open Graph & Twitter
- **OG:** `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`
- **Twitter:** `twitter:card` (e.g. summary_large_image), title, description, image
- **Image:** Prefer 1200×630 for social; provide fallback if no dedicated OG image

### 6.5 Structured data (JSON-LD)
- **Organization:** Name, URL, logo, description, contact point (phone, email)
- **WebSite:** For homepage (name, url, publisher)
- **Other types:** Per page (e.g. EducationalOrganization for academy/courses, LocalBusiness if applicable)
- **Validation:** Test with Google Rich Results Test / Schema.org validator

### 6.6 Locale & geo
- **html:** `lang` attribute (e.g. `en-GB`)
- **Meta:** `locale` in OG; `geo.region` if relevant (e.g. GB)
- **Metadata:** Use same locale in meta and structured data

### 6.7 Image SEO
- Alt text on all meaningful images
- `title` or `aria-label` on key images where it adds context
- Filenames and paths descriptive where possible

### 6.8 Post-launch
- Submit sitemap in Google Search Console and Bing Webmaster Tools
- Verify ownership (DNS, meta tag, or file)
- Request indexing for key URLs if needed
- Monitor coverage and mobile usability

---

## 7. UK GDPR & Legal Compliance (Web)

For sites serving UK/EU users or collecting personal data.

### 7.1 Privacy Policy
- **Page:** Dedicated route (e.g. `/privacy`); linked from footer and anywhere data is collected
- **Contents:**
  - Data controller identity and contact
  - What data is collected (forms, cookies, technical)
  - Legal basis (consent, legitimate interests, legal obligation)
  - Purposes and retention periods
  - User rights (access, rectification, erasure, restrict, portability, object, withdraw consent, complain to ICO)
  - Sharing and international transfers
  - Security measures
  - Last updated date
- **Sitemap:** Include in sitemap for discovery

### 7.2 Cookie Policy
- **Page:** Dedicated route (e.g. `/cookies`); linked from footer and consent banner
- **Contents:**
  - What cookies are and PECR/UK GDPR context
  - Strictly necessary cookies (e.g. consent preference) – name, purpose, duration
  - Optional/non-essential cookies – same detail; state they are only set with consent
  - How to change or withdraw consent
  - Link to Privacy Policy
- **Sitemap:** Include in sitemap

### 7.3 Cookie consent banner
- **When:** Shown on first visit (or when no consent stored)
- **Storage:** Consent choice in `localStorage` (or equivalent) with a clear key (e.g. `cookie_consent`)
- **Options:** “Accept all” and “Reject non-essential” (or equivalent)
- **Behaviour:** Do not set non-essential cookies until user accepts
- **Links:** Cookie Policy and Privacy Policy in the banner
- **Persistence:** Honour stored choice on return visits; allow re-opening to change preference if required

### 7.4 Form consent
- **Contact / enquiry forms:** Required checkbox: “I have read the Privacy Policy and agree to my data being used to respond to my enquiry” with link to `/privacy`
- **Newsletter / waitlist / registration:** Required checkbox with clear purpose (e.g. “to add you to the waitlist and contact you about the Academy”) and link to Privacy Policy
- **No pre-ticked consent:** User must actively opt in
- **Records:** Where possible, log consent (e.g. timestamp, form name) for accountability

### 7.5 Footer & legal links
- **Footer:** “Legal” or equivalent section with links to Privacy Policy and Cookie Policy
- **Copyright bar:** Repeat Privacy and Cookies links where space allows
- **Consistency:** Same URLs site-wide

---

## 8. Content & UX Conventions

### 8.1 Global layout
- **Header/Navbar:** Fixed or sticky; logo, main nav, CTA if needed; mobile hamburger with accessible menu
- **Footer:** Quick links, legal links, contact, social (if any), copyright
- **Consistency:** Same header/footer across main pages unless otherwise specified

### 8.2 Key sections (marketing sites)
- **Hero:** Clear value proposition; primary CTA; optional pill/badge for positioning (e.g. “Deep Understanding • Strategic Thinking”)
- **About:** Who you are, mission, differentiators
- **Services/Products:** Clear offering and benefits
- **Social proof:** Projects, case studies, testimonials where available
- **Contact:** Form and/or email, phone, WhatsApp (or equivalent); form must include privacy consent
- **Optional:** Blog, resources, FAQ, academy/courses – each with own SEO and structure

### 8.3 Contact & conversion
- **Contact form:** Name, email, subject, message; required privacy consent checkbox
- **WhatsApp/float:** Optional floating CTA for quick contact; opens in new tab with pre-filled message where appropriate
- **Form behaviour:** Loading state, success message, error handling; no submit until consent given

---

## 9. Deployment & Hosting

### 9.1 Build
- **Command:** Document in README (e.g. `npm run build`)
- **Env:** Use environment variables for site URL, API URLs, keys; never commit secrets
- **Node version:** Pin in `.nvmrc` or `engines` in `package.json`; match in hosting (e.g. `NODE_VERSION=18` in Netlify)

### 9.2 Hosting (example: Netlify)
- **Config file:** e.g. `netlify.toml` with build command, publish directory, plugins (e.g. `@netlify/plugin-nextjs` for Next.js)
- **Branch:** Deploy from `main` (or agreed branch); preview deploys for PRs if available
- **Domains:** Connect custom domain; HTTPS; redirect www ↔ non-www as decided (one canonical)

### 9.3 Post-deploy checks
- [ ] Homepage and key routes load
- [ ] Sitemap and robots.txt reachable
- [ ] Privacy and Cookie pages load; links work
- [ ] Cookie banner appears on first visit; consent persists
- [ ] Forms submit (or show intended behaviour)
- [ ] No mixed content; HTTPS everywhere

---

## 10. Quality Assurance Checklist

### 10.1 Before handover
- [ ] All agreed pages and features implemented
- [ ] Responsive on mobile, tablet, desktop
- [ ] Links (internal and external) work; no 404s
- [ ] Forms validate and show success/error states; consent required
- [ ] Cookie banner and consent flow work; legal pages linked
- [ ] SEO: meta, canonical, sitemap, robots, JSON-LD
- [ ] Lint passes; build succeeds
- [ ] Env and secrets documented for client (where handover includes hosting)

### 10.2 Client acceptance
- [ ] Demo/walkthrough completed
- [ ] Access (hosting, repo, analytics) handed over as agreed
- [ ] README or runbook: how to run, build, deploy, env vars
- [ ] Contact for support/maintenance agreed

---

## 11. Mobile Apps & Other Technical Work

### 11.1 Mobile apps
- **Privacy:** In-app privacy policy (and/or link to web); consent for tracking/permissions per platform rules (e.g. App Store, Play, GDPR)
- **Data:** Document what is collected, where stored, retention; align with Privacy Policy
- **Releases:** Versioning, release notes, store listing copy and screenshots
- **Analytics:** If used, disclose in privacy policy; consent where required

### 11.2 APIs & integrations
- **Documentation:** Endpoints, auth, errors, rate limits
- **Security:** HTTPS, no secrets in client code; use env and secure backends
- **Compliance:** If processing personal data, document in Privacy Policy and DPA if needed

### 11.3 General
- **Scope doc:** Clear deliverables and out-of-scope
- **Repo:** Readme, env example, lint/format; branch strategy if team size warrants
- **Support:** Define post-launch support window and process

---

## 12. Reference: Implemented on Tevuna Site

The following are implemented on the Tevuna website and serve as the reference for this SOP.

| Area | Implementation |
|------|----------------|
| **Stack** | Next.js 14, Tailwind, Framer Motion, Lucide, Lottie, TypeScript |
| **SEO** | Sitemap (home, academy, privacy, cookies), robots.txt, meta title/description/keywords, OG/Twitter, canonical, JSON-LD (Organization, WebSite, EducationalOrganization), locale en-GB, image alt/title |
| **Legal** | Privacy Policy (UK GDPR), Cookie Policy (PECR/cookies), cookie consent banner (Accept all / Reject non-essential, localStorage), form consent checkboxes (contact + academy), footer legal links |
| **Structure** | app/, components/, lib/seo.ts, public/assets |
| **Deploy** | Netlify (netlify.toml, Next.js plugin, NODE_VERSION 18) |
| **Content** | Hero with pill badge, About, Projects, Services, Technologies, Gallery, Contact (form + consent), Footer (Quick, Legal, Services, Contact), WhatsApp float, Academy (countdown, courses, quiz, FAQ, waitlist with consent) |

---

## 13. Document Control

- **Owner:** Tech / Operations
- **Review:** Annually or when stack/compliance requirements change
- **Changes:** Version and date at top; summarise changes in a changelog if needed

---

## Appendix A: Website launch checklist (copy-paste)

```
[ ] Sitemap: all public pages, correct URLs, lastModified
[ ] robots.txt: allow public paths, disallow /api/, sitemap URL
[ ] Meta: unique title & description per key page; canonical set
[ ] OG/Twitter: title, description, image (1200×630 preferred)
[ ] JSON-LD: Organization; WebSite on home; page-specific types
[ ] Privacy Policy page: controller, data, basis, rights, retention, contact
[ ] Cookie Policy page: list cookies, purpose, duration, consent
[ ] Cookie consent banner: first visit, Accept / Reject, localStorage, no non-essential before consent
[ ] Forms: required privacy consent checkbox + link to /privacy
[ ] Footer: Legal section with Privacy + Cookies links
[ ] Responsive: mobile, tablet, desktop; no horizontal scroll
[ ] Links: internal and external working; focus states
[ ] Lint and build: no errors
[ ] Env: SITE_URL / API URLs in env; secrets not in repo
[ ] Search Console & Bing: verify, submit sitemap
```

---

## Appendix B: New project setup checklist

```
[ ] Repo created; .gitignore (node_modules, .env*, .next)
[ ] Package.json: name, scripts (dev, build, start, lint)
[ ] TypeScript + ESLint configured
[ ] Tailwind (or agreed CSS) + design tokens
[ ] lib/config: SITE_URL, brand name, default meta
[ ] app/layout: metadata, fonts, JSON-LD, CookieConsent if needed
[ ] app/sitemap.ts and app/robots.ts
[ ] Navbar + Footer components; legal links
[ ] Privacy + Cookie pages (templates)
[ ] Cookie consent component if site uses non-essential cookies
[ ] README: install, run, build, deploy, env vars
[ ] Deployment config (e.g. netlify.toml) and Node version
```

---

*This SOP is the standard for building websites, mobile apps, and other technical deliverables. Exceptions must be documented and agreed with the project owner.*
