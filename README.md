# UImitra website

Marketing site for UImitra, a brand and design studio in Bengaluru. UI meets trust, UX meets Mitra.

Built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis.

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
    brand/              code-drawn brand kits: logo marks, product UI mockups,
                        device frames, business cards, posts, posters, app icons
    home/               home page sections
    layout/             nav, footer, smooth scroll, cursor, page transitions, SEO
    ui/                 buttons and motion helpers (reveals, split text, magnetic, marquee)
  pages/                one file per route
```

## Adding a project

1. Copy an entry in `src/data/work.ts` and give it a new `slug`.
2. Pick an existing `mark` and `ui`, or add a new mark in `components/brand/Marks.tsx` and a new screen in `components/brand/ProductUI.tsx`.
3. Fill in the copy, palette, type and three campaign lines. The case study page, the work grid, the home page stack, the brand-kit explorer and the footer all pick it up.
4. Add the URL to `public/sitemap.xml`.

Entries marked `review: true` were written from limited information and should be checked with the client.

## Routes

`/`, `/work`, `/work/:slug`, `/services`, `/services/:slug`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/cookie-policy`.

Old URLs from the previous site (`/services/logo-design`, `/services/seo`, `/success-stories`, `/lets-connect` and others) redirect to their new pages in `src/App.tsx`.

## Motion and accessibility

Animations respect `prefers-reduced-motion`: smooth scrolling, the custom cursor, scroll-linked effects and the page curtain switch off, and the pinned services rail becomes a normal horizontal scroller.
