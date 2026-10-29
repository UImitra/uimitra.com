# UImitra web: context for AI assistants

Read this first in every new chat. It holds the whole story of the site, the owner's rules and how to work here. Keep it current: when a change alters anything below, update this file in the same change.

## What this is

Marketing site for **UImitra**, a brand and design studio in Bengaluru ("UI meets trust. UX meets Mitra."). Live domain https://uimitra.com, deployed on Netlify as an SPA (`public/_redirects`).

Stack: React 18, TypeScript, Vite 6, Tailwind 3, Framer Motion 11, Lenis smooth scroll, react-router 6, react-helmet-async. No backend; the contact form and newsletter post to a Google Apps Script (`appscript/contact.gs`, env `VITE_APPS_SCRIPT_URL`).

## The owner's brief (still in force)

- Studio positioning: brand and design company. Apple-like, premium, minimal marketing aimed at retention and conversion.
- **Visual over text.** Keep copy short and human. No "AI symptoms": no buzzwords, no em-dash-heavy filler, no generic "we leverage" lines.
- The portfolio is the hero: brand kits, logo crops, mockups, real screens, films. Creative hover effects.
- **Never mention WebExceller** (the parent company) anywhere on the site.
- Do not name Webxela as a parent/partner on project pages. Webxela appears only as a client project (its own case study).
- Yatri: only **Yatri Cloud** is shown. Yatri Playbook, Yatri School and Yatri Draw were removed on purpose; do not add them back.
- **SSV Classes has no logo on the site** (owner asked to remove it). It is shown by name, with real screens of https://www.siddhivinayakclasses.org/ and its launch film. Do not use the SSV logo even though files exist.
- Recheck and cross-verify every change in a real browser before calling it done.

## Commands

```bash
npm run dev                              # Vite, usually :5173 (falls back to :5174 if taken)
npx tsc -p tsconfig.app.json --noEmit    # type check. `tsc -p .` checks nothing (solution file)
npx eslint src                           # 9 pre-existing warnings are known, errors must be 0
npm run build                            # production build to dist/
```

## Layout

```
src/
  config/site.ts        contact details, booking link, socials, nav
  data/work.ts          every portfolio project; the single source for all work UI
  data/services.ts      seven services + legacy slug redirects
  data/legal.ts         privacy, terms, cookies text
  components/brand/     Marks (logo img), Wordmark, BrandKit (LogoSheet, Palette, TypeSpecimen),
                        Applications (cards, posters, posts, app icons, phone screens),
                        Frames (BrowserFrame, PhoneFrame), ProductUI (+ Shot), Film, fonts
  components/home/      Hero, WorkStack, MarkWall, FilmReel, ServicesRail, ServiceVisual,
                        KitExplorer, Sections (Statement, Process, Engagements, Faq)
  components/layout/    Nav, Footer, chrome (Page, Seo, tone context, smooth scroll)
  components/ui/        Button/Arrow, motion helpers (Reveal, SplitReveal, Parallax, Marquee)
  pages/                one file per route
public/work/<slug>/     real logos, screenshots (.webp) and films (.mp4) per project
public/sitemap.xml      add every new /work/<slug> here
```

Routes: `/`, `/work`, `/work/:slug`, `/services`, `/services/:slug`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/cookie-policy`. Old URLs redirect in `src/App.tsx` and via `legacyServiceMap`.

Home order: Hero, WorkStack, MarkWall, FilmReel, Statement, ServicesRail, KitExplorer, services marquee, then the remaining sections.

## Data model (`src/data/work.ts`)

`Project` drives the case study page, work grid, home stack, logo wall, film reel, brand-kit explorer, nav featured item and footer. Key optional fields:

- `logo { src, white, alt }`: real logo files. Colour for light grounds, white for dark. **No `logo` = shown by name only and no identity sections** (`Mark` returns null, CaseStudy skips `<Identity>`).
- `lockup { src, white }`: full mark + wordmark file, used by LogoSheet and MarkWall lockup tiles.
- `shots`: desktop screens (first is the hero shot, rest form the screens grid). `phones`: phone screens; more than 2 renders a scrolling phone strip.
- `ui`: code-drawn fallback interface when there are no shots (only `'yatricloud'` exists).
- `film { title, src, loop, poster, length, youtube? }`: full cut + 14s silent loop + webp poster.
- `review: true`: copy written from limited public info; needs client sign-off.

Derived exports: `branded` (projects with a logo), `films` (projects with a film), `getProject`, `nextProject`.

### Projects (in order)

| slug | logo | notes |
| --- | --- | --- |
| `yatri-cloud` | `/work/yatri/logo*.png` | blue #007CFF, Bricolage + Inter Tight |
| `careerspace` | mark + lockup | navy #0A1226 / gold #F7CB58. `review: true` |
| `fetchtails` | TF mark crop + lockup | cream #FFF4EA / brown #51392A / orange #F09358. `review: true` |
| `webxela` | λ+dot SVG | mint #DBFAC4 / ink #080808, Geist. `review: true` |
| `nishaan` | SVG | trademark product. Owner has not confirmed keeping it |
| `saarthi` | S mark (png) | lime #C8F04B / ink. No public URL. Film: app walkthrough 1:20, 8 Play Store phone screens |
| `siddhivinayak-classes` | **none** | "SSV Classes", blue #0B5FE0 / yellow #FFC94A. Real site shots, launch film 1:08 + YouTube https://youtu.be/Ol2yXqqePA0 |

Featured: Nav featured = `careerspace`; WorkStack = careerspace, webxela, fetchtails, yatri-cloud.

## Notable components

- **MarkWall** (`components/home/MarkWall.tsx`): "Marks, made to last." bento grid. Each tile has kind `crop | lockup | pattern`, two colourways (`a`, `b`) swapped on hover (wipe-up + crossfade) and scroll parallax. Edit the `tiles` array to change it.
- **Film** (`components/brand/Film.tsx`): silent loop plays only while visible (IntersectionObserver, off under reduced motion); click swaps to the full film with sound and controls. Full file loads only on click. Optional YouTube pill.
- **FilmReel**: dark section of `Film`s; used on Home ("In motion.") and on service pages ("Films we cut.", filtered to related projects with films).
- **ServiceVisual**: illustration per service; the motion service plays the SSV loop as a plain `<video>` (a `Film` there would nest a button inside the rail's Link).
- Service `motion-graphics` is labelled **"Video & motion"** (launch films, app walkthroughs, animated logos).

## Design system

Tailwind tokens: `ink` #0D0D0F, `paper` #FAFAFB (cool white), `mute`, `brand` #ED184F (red), `ember`. Fonts Geist / Instrument Serif (italic accents via `*text*` in SplitReveal) / Geist Mono. Display sizes `text-display-xl|l|m|s`. Utility classes `wrap`, `eyebrow`, `link-underline`. Custom cursor was removed on purpose. Everything respects `prefers-reduced-motion`.

## Asset pipeline

- Screens: Playwright screenshots of live sites at 1440 wide, saved as webp (`cwebp`). Set `localStorage['sx-cookie-consent']` to hide Webxela's cookie banner. Do not pause CSS animations when capturing heroes; wait about 4 s instead.
- Playwright's bundled Chromium cannot play H.264. Check video with `chromium.launch({ channel: 'chrome' })`.
- Films (`ffmpeg`): full cut 1280 wide, `-crf 26`, AAC, `-movflags +faststart`; silent loop 14 s, 960 wide, `-crf 28`, `-an`; poster as webp. Keep each full film around 5–6 MB.
- Logos: crop and recolour with Pillow (alpha bounding box). Always ship a colour and a white version.

Source material outside the repo:
- Webxela branding samples: `/Volumes/Yatri Cloud/org/webxela/trademark-saas/branding`
- SSV launch film: `/Volumes/Yatri Cloud/org/wx/ssv/github/ssv_mac/marketing/launch-video/renders/SSV-Classes-launch-film.mp4`
- Saarthi walkthrough: `~/Downloads/Saarthi-Walkthrough.mp4` (also `~/Downloads/SGP-6-main/client-docs/`)
- Logos: CareerSpace `https://careerspace.co.in/img/logo-white.png`, FetchTails `https://www.fetchtails.com/logo-fetchtails.png`

## Adding a project

1. Put assets in `public/work/<slug>/` (logo colour + white, webp shots, optional film set).
2. Add an entry to `projects` in `src/data/work.ts`. Set `review: true` if copy is not client-approved.
3. Optionally add a MarkWall tile, a WorkStack featured slot or ServiceVisual reference.
4. Add `/work/<slug>` to `public/sitemap.xml`.
5. Run tsc, eslint, build, then check the page in a real browser.

## Open items

- Confirm with the owner whether to keep **Nishaan**.
- Client review of copy on `review: true` entries (CareerSpace, FetchTails, Webxela). Saarthi copy came from its store listing/README, SSV copy from the film's YouTube notes.
- Commit and push only when the owner asks.
