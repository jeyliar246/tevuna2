# Tevuna – Tech Solutions Agency

Tevuna embodies deep understanding and strategic thinking. We craft intelligent, insight-driven experiences that solve complex challenges and drive meaningful results.

**Live site:** [https://www.tevuna.co.uk](https://www.tevuna.co.uk)

---

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Lottie:** lottie-react

---

## Implemented

### Pages & Features
- **Home** – Hero, About, Projects, Services, Technologies, Gallery, Contact
- **Tevuna Academy** (`/academy`) – Countdown timer, course list, “Know Your Tech” quiz, FAQ accordion, blog-style posts, waitlist/registration form
- **Responsive layout** – Mobile-first with breakpoints for tablet and desktop
- **Light theme** – Slate palette, readable text and borders
- **WhatsApp float** – Quick contact link
- **Netlify deployment** – Build and deploy config in `netlify.toml`

### SEO (On-Site)
- **Sitemap** – `/sitemap.xml` for Home, Academy, Privacy, Cookies
- **robots.txt** – `/robots.txt`, allows crawling, links to sitemap
- **Meta tags** – Title, description, keywords, Open Graph, Twitter Card
- **Canonical URLs** – Home and Academy
- **JSON-LD** – Organization, WebSite (home), EducationalOrganization (academy)
- **Locale** – en-GB for UK
- **Image SEO** – Alt text, `aria-label`, `title` on key images

### UK GDPR Compliance
- **Privacy Policy** (`/privacy`) – Full policy aligned with UK GDPR and Data Protection Act 2018: data controller identity, what data we collect (contact form, academy waitlist, technical/cookies), legal basis (consent, legitimate interests, legal obligation), retention, your rights (access, rectification, erasure, restrict, portability, object, withdraw consent, complain to ICO), sharing and international transfers, security, contact details.
- **Cookie Policy** (`/cookies`) – Explains what cookies are, PECR/UK GDPR context, strictly necessary cookie (consent preference), optional/non-essential cookies, user choice (Accept all / Reject non-essential), third-party cookies, link to Privacy Policy.
- **Cookie consent banner** – Shown on first visit; options “Accept all” and “Reject non-essential”; stores choice in `localStorage` (key `cookie_consent`); links to Cookie Policy and Privacy Policy; no non-essential cookies set before consent.
- **Form consent** – Contact form and Academy waitlist form each have a required checkbox: “I have read the Privacy Policy and agree to my data being used…” with link to `/privacy`; consent is explicit and tied to the purpose (respond to enquiry / manage waitlist and contact about Academy).
- **Footer legal links** – “Legal” section with Privacy Policy and Cookie Policy; repeat links in copyright bar (Privacy, Cookies).
- **Transparency** – Privacy Policy states who we are, what we collect, why, how long we keep it, and how to exercise rights; Cookie Policy lists cookie name, purpose, and duration.
- **Sitemap** – `/privacy` and `/cookies` included in sitemap for discovery.

### Content & Assets
- Logo in header and footer
- Lottie animation on Academy page
- Tech stack icons and categories
- Gallery and project cards with images

---

## What's Next

### Search Console & Webmaster Tools
- Add and verify site in [Google Search Console](https://search.google.com/search-console)
- Add and verify site in [Bing Webmaster Tools](https://www.bing.com/webmasters)
- Submit sitemap URL: `https://www.tevuna.co.uk/sitemap.xml`
- Request indexing for key URLs

### Forms & Backend
- Connect Academy waitlist/registration form to an API or service (e.g. Netlify Forms, Formspree, Airtable)
- Connect Contact form to email or CRM

### Analytics & Tracking
- Add Google Analytics 4 (GA4)
- Add Bing UET if using Bing Ads
- Track conversions (e.g. form submissions, Academy signups)

### Content & Marketing
- Add real blog posts or course content to Academy
- Implement newsletter signup
- Add case studies or testimonials on Projects/About

### Performance & UX
- Add a dedicated OG image (1200×630) for social sharing
- Add favicon variants (e.g. 32×32, 180×180)
- Consider lazy loading for below-the-fold images
- Add structured breadcrumbs for Academy (JSON-LD)

### Future Pages
- Dedicated About page
- Services detail pages
- Blog or resources section
- Terms of use (optional, for forms)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, metadata, JSON-LD
│   ├── page.tsx         # Homepage
│   ├── sitemap.ts       # Sitemap generation
│   ├── robots.ts        # robots.txt generation
│   └── academy/         # Tevuna Academy page
│       ├── layout.tsx   # Academy metadata, JSON-LD
│       └── page.tsx
├── components/          # UI components
├── lib/
│   └── seo.ts           # SEO config and snippets
└── public/
    └── assets/          # Images, Lottie, logo
```

---

## Further Steps: Google Search Console

### 1. Add Your Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Choose **URL prefix** and enter: `https://www.tevuna.co.uk`

### 2. Verify Ownership

Pick one method:

**DNS (recommended)**

- Add a TXT record at your domain host:
  - Host: `@` or `www`
  - Value: `google-site-verification=XXXXXXXXXX`

**HTML file**

- Download the verification file (e.g. `googleXXXXXXXX.html`)
- Put it in `public/` (e.g. `public/googleXXXXXXXX.html`)
- Ensure it’s reachable at `https://www.tevuna.co.uk/googleXXXXXXXX.html`

**HTML meta tag**

- Add a `<meta name="google-site-verification" content="XXXX" />` in `app/layout.tsx` in the metadata `other` field

### 3. Submit Sitemap

1. In Search Console, open **Sitemaps**
2. Add: `https://www.tevuna.co.uk/sitemap.xml`
3. Click **Submit**

### 4. Request Indexing (Optional)

1. Go to **URL Inspection**
2. Enter `https://www.tevuna.co.uk` or `https://www.tevuna.co.uk/academy`
3. Click **Request indexing** for new or updated pages

### 5. Add a Second Property (Optional)

- Also add `https://tevuna.co.uk` (without `www`) if users can reach the site that way
- Set a 301 redirect from one to the other

---

## Further Steps: Bing Webmaster Tools

### 1. Add Your Site

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with a Microsoft account
3. Click **Add a site**
4. Enter: `https://www.tevuna.co.uk`

### 2. Verify Ownership

**Import from Google Search Console**

- If the site is already in GSC, choose **Import from Google Search Console**
- Connect with Google and select the property

**Or use manual verification**

**XML file**

- Download `BingSiteAuth.xml` from Bing
- Put it in `public/BingSiteAuth.xml`
- Ensure it’s reachable at `https://www.tevuna.co.uk/BingSiteAuth.xml`

**Meta tag**

- Add `<meta name="msvalidate.01" content="XXXXXXXXXX" />` to your site’s `<head>`

**CNAME**

- Add a CNAME record:
  - Name: value given by Bing
  - Value: the Bing verification host

### 3. Submit Sitemap

1. Open **Sitemaps**
2. Submit: `https://www.tevuna.co.uk/sitemap.xml`

### 4. URL Submission API (Optional)

- Use Bing’s URL Submission API for faster indexing of new or updated pages

---

## SEO Checklist Summary

| Task | Google Search Console | Bing Webmaster Tools |
|------|------------------------|----------------------|
| Add property | ✅ | ✅ |
| Verify ownership | ✅ | ✅ |
| Submit sitemap | ✅ | ✅ |
| Check indexing | ✅ | ✅ |
| Monitor coverage | ✅ | ✅ |
| Review mobile usability | ✅ | ✅ |

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Site base URL (optional) | `https://www.tevuna.co.uk` |

Default is `https://www.tevuna.co.uk` in `lib/seo.ts`.

---

## Deployment

Configured for Netlify (`netlify.toml` present). Build command and publish directory are set in that file.

---

## License

Private – © Tevuna. All rights reserved.
