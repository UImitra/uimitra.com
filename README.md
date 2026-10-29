# UImitra website

Marketing site for UImitra, a brand and design studio in Bengaluru. UI meets trust, UX meets Mitra.

Built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis.

AI assistants: read [CLAUDE.md](./CLAUDE.md) for the full project context.

## Run it

```bash
npm install
npm run dev
```

`npm run build` writes the production site to `dist/`. Netlify serves it as a single-page app through `public/_redirects`.

### Environment

| Variable | Used by |
| --- | --- |
| `VITE_APPS_SCRIPT_URL` | Contact brief and newsletter. Posts to the Google Apps Script in `appscript/contact.gs`, which writes each submission to a Google Sheet. |

## Where things live

```
src/
  config/site.ts        contact details, booking link, socials, nav
  data/work.ts          every portfolio project (copy, colours, type, campaign lines)
  data/services.ts      the seven services, plus old URLs that redirect to them
  data/legal.ts         privacy, terms and cookie text
  components/
    brand/              brand kits built from real logos: logo sheets, product screens,
                        device frames, films, business cards, posts, posters, app icons
    home/               home page sections (hero, work stack, logo wall, film reel, services)
    layout/             nav, footer, smooth scroll, page transitions, SEO
    ui/                 buttons and motion helpers (reveals, split text, magnetic, marquee)
  pages/                one file per route
```

## Adding a project

1. Put the real files in `public/work/<slug>/`: logo in colour and white, webp screenshots, and optionally a film (full cut, silent loop, poster).
2. Copy an entry in `src/data/work.ts`, give it a new `slug` and set `logo`, `shots`, `phones` and `film` as needed. A project without a `logo` is shown by name only.
3. Fill in the copy, palette, type and three campaign lines. The case study page, the work grid, the home page stack, the logo wall, the film reel and the brand-kit explorer all pick it up.
4. Add the URL to `public/sitemap.xml`.

Entries marked `review: true` were written from limited information and should be checked with the client.

## Routes

`/`, `/work`, `/work/:slug`, `/services`, `/services/:slug`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/cookie-policy`.

Old URLs from the previous site (`/services/logo-design`, `/services/seo`, `/success-stories`, `/lets-connect` and others) redirect to their new pages in `src/App.tsx`.

## Motion and accessibility

Animations respect `prefers-reduced-motion`: smooth scrolling, scroll-linked effects, autoplaying film loops and the page curtain switch off, and the pinned services rail becomes a normal horizontal scroller.
