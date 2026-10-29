/*
 * Portfolio data. Every case study on the site is built from an entry here.
 *
 * Logos and screenshots are the real files from each product, stored in
 * /public/work/<slug>/. `shots` are desktop screens (shown at 16:10, cropped
 * from the top), `phones` are phone screens. A project without shots falls
 * back to a code-drawn interface (`ui`), and one without a `logo` file falls
 * back to a code-drawn `mark`.
 *
 * Entries with `review: true` were written from limited public information.
 * Check the copy with the client before publishing.
 */

import type { ServiceSlug } from './services';

export type MarkKey = 'siddhivinayak';
export type UiKey = 'yatricloud' | 'siddhivinayak';

export type Swatch = { name: string; hex: string; role: string };
export type Shot = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  url?: string;
  services: ServiceSlug[];
  disciplines: string[];
  summary: string;
  intro: string;
  brief: string;
  approach: { title: string; body: string }[];
  facts: { label: string; value: string }[];
  theme: { bg: string; fg: string; accent: string; soft: string };
  palette: Swatch[];
  type: { display: string; displayFamily: string; text: string; textFamily: string; weight: number; note: string };
  /** Real logo files: full colour for light grounds, white for dark ones. */
  logo?: { src: string; white: string; alt: string };
  /** Name split as the brand sets it, second part in `brand` colour on light grounds. */
  wordmark?: [string, string];
  brand?: string;
  mark?: MarkKey;
  ui?: UiKey;
  campaign: { kicker: string; headline: string; cta: string }[];
  shots?: Shot[];
  phones?: Shot[];
  review?: boolean;
};

/* The Yatri Cloud family shares one mark, one blue and one type pairing. */
const YATRI_BLUE = '#007CFF';

const yatriLogo = { src: '/work/yatri/logo.png', white: '/work/yatri/logo-white.png', alt: 'Yatri Cloud logo' };

const yatriType = (note: string) => ({
  display: 'Bricolage Grotesque',
  displayFamily: '"Bricolage Grotesque Variable", "Inter Tight Variable", sans-serif',
  text: 'Inter Tight',
  textFamily: '"Inter Tight Variable", sans-serif',
  weight: 700,
  note,
});

const blue: Swatch = { name: 'Yatri Blue', hex: YATRI_BLUE, role: 'The one accent: main buttons, links, header panels' };
const ink: Swatch = { name: 'Ink', hex: '#171717', role: 'Text' };
const white: Swatch = { name: 'White', hex: '#FFFFFF', role: 'Pages and cards' };
const canvas: Swatch = { name: 'Canvas', hex: '#FAFAFA', role: 'App background behind cards' };
const hairline: Swatch = { name: 'Hairline', hex: '#E5E5E5', role: 'Borders and dividers' };

export const projects: Project[] = [
  {
    slug: 'yatri-cloud',
    name: 'Yatri Cloud',
    client: 'Yatri Cloud',
    sector: 'EdTech / Cloud certification',
    url: 'https://www.yatricloud.com/',
    services: ['brand-identity', 'web-design', 'ui-ux-design', 'social-media'],
    disciplines: ['Identity', 'Website', 'Product UI', 'Social'],
    summary: 'A certification platform that 50,000+ learners use to prepare for AWS, Azure and Google Cloud exams.',
    intro:
      'Yatri Cloud helps people get certified in AWS, Azure, Google Cloud, DevOps, Kubernetes and Terraform. Learners get free practice tests and study guides, training, community events and discounted exam vouchers in one place.',
    brief:
      'The community had grown past 50,000 learners, who the team calls Yatris, and the brand had to keep up. Students compare prep sites on price and trust before they pay, so the site had to look as dependable as the exam it prepares you for and get people to a voucher booking fast.',
    approach: [
      {
        title: 'A traveller inside a cloud',
        body: 'Yatri means traveller. The mark is a person with raised arms drawn inside a cloud, in white on a solid blue disc. It holds up as a 16px favicon and on a conference banner, and every Yatri product carries it.',
      },
      {
        title: 'One blue, nothing else',
        body: 'The canvas is white and the text is near-black. A single bright blue marks the one thing to do on each screen. Greys come from the ink at set opacities, so the whole site reads as one tonal family.',
      },
      {
        title: 'Bricolage for headlines, Inter Tight for reading',
        body: 'Headlines are set in Bricolage Grotesque with tight tracking. Long exam questions and voucher tables use Inter Tight, which stays clear at small sizes.',
      },
    ],
    facts: [
      { label: 'Learners', value: '50K+' },
      { label: 'Rating', value: '4.8 out of 5' },
      { label: 'Tracks', value: 'AWS · Azure · GCP · DevOps · K8s · Terraform' },
    ],
    theme: { bg: YATRI_BLUE, fg: '#FFFFFF', accent: '#171717', soft: '#FFFFFF' },
    palette: [blue, ink, white, canvas, hairline],
    type: yatriType('Bricolage Grotesque gives headlines a confident, slightly hand-cut feel. Inter Tight handles practice questions, prices and tables.'),
    logo: yatriLogo,
    wordmark: ['Yatri', 'Cloud'],
    brand: YATRI_BLUE,
    ui: 'yatricloud',
    campaign: [
      { kicker: 'AWS · Azure · Google Cloud', headline: 'Get discounted certification vouchers.', cta: 'Book a slot' },
      { kicker: 'Always free', headline: 'Practice tests and study guides stay free.', cta: 'Start a practice test' },
      { kicker: 'Community', headline: '50,000 Yatris and counting.', cta: 'Join the community' },
    ],
  },
  {
    slug: 'yatri-draw',
    name: 'Yatri Draw',
    client: 'Yatri Cloud',
    sector: 'Productivity / Whiteboard',
    url: 'https://draw.yatricloud.com/',
    services: ['brand-identity', 'ui-ux-design', 'web-design'],
    disciplines: ['Identity', 'Product UI', 'Onboarding'],
    summary: 'A free whiteboard where shapes look hand drawn and friends draw together from a shared link.',
    intro:
      'Yatri Draw is a virtual whiteboard from Yatri Cloud. Learners use it to sketch cloud architectures, plan a study week or explain a concept to a friend. Drawings stay in the browser until you export them, and a shared link opens a live session.',
    brief:
      'Whiteboard tools are judged in the first ten seconds, when someone opens a blank canvas and tries to draw a box. The canvas had to stay loose and friendly while the frame around it looked like the rest of the Yatri family.',
    approach: [
      {
        title: 'The family mark on a blank page',
        body: 'Draw carries the same traveller-in-a-cloud mark as every Yatri product. On the welcome screen it sits alone in the middle of an empty canvas, with three plain choices underneath: open a file, get help or start a live session.',
      },
      {
        title: 'Quiet chrome, loud canvas',
        body: 'Toolbars are white with hairline borders and stay out of the way. Yatri Blue shows up on the selected tool and the Share button, so the colour on screen belongs to what people draw.',
      },
      {
        title: 'Hints that look hand written',
        body: 'First-time hints are drawn in the same hand-drawn style as the canvas, with arrows pointing at the toolbar and the menu. They teach the tool without a tour or a pop-up.',
      },
    ],
    facts: [
      { label: 'Shapes', value: 'Hand drawn' },
      { label: 'Sharing', value: 'Live sessions by link' },
      { label: 'Storage', value: 'In your browser until you export' },
    ],
    theme: { bg: '#FFFFFF', fg: '#171717', accent: YATRI_BLUE, soft: '#E5E5E5' },
    palette: [blue, ink, white, canvas, hairline],
    type: yatriType('The brand faces sit around the canvas. Inside it, text uses a hand-drawn face so diagrams stay rough and easy to change.'),
    logo: yatriLogo,
    wordmark: ['Yatri', 'Draw'],
    brand: YATRI_BLUE,
    campaign: [
      { kicker: 'Whiteboard', headline: 'A whiteboard that feels like pen and paper.', cta: 'Open Yatri Draw' },
      { kicker: 'Live', headline: 'Share a link and draw together.', cta: 'Start a session' },
      { kicker: 'Private', headline: 'Your drawings stay in your browser.', cta: 'Draw something' },
    ],
    shots: [{ src: '/work/yatri-draw/canvas.webp', alt: 'Yatri Draw welcome screen with hand-drawn hints around the toolbar' }],
  },
  {
    slug: 'yatri-school',
    name: 'Yatri School',
    client: 'Yatri Cloud',
    sector: 'EdTech / School management',
    url: 'https://school.yatricloud.com/',
    services: ['brand-identity', 'ui-ux-design', 'web-design'],
    disciplines: ['Identity', 'Dashboard UX', 'Parent app', 'Website'],
    summary: 'School management for Indian schools, from attendance to fee receipts.',
    intro:
      'Yatri School runs the daily work of a school. Office staff and teachers handle students, classes, attendance, exams, notices and fees. Parents see attendance, fees, receipts and results on their phone and pay online through Razorpay.',
    brief:
      'The people using it every day are office staff on a shared desktop and parents checking a phone between other things. Neither group wants to learn software, so every screen had to be as plain as a register book, in English or Hindi.',
    approach: [
      {
        title: 'One mark for the whole family',
        body: 'School uses the Yatri traveller-in-a-cloud mark, so a parent who already knows Yatri Cloud trusts the app on day one. Each school adds its own crest beside it on report cards and receipts.',
      },
      {
        title: 'One blue panel per screen',
        body: 'Every screen opens with a solid blue header panel that greets the user and holds the main action, like Take attendance. Everything below it is white, grey and ink, so the next step is never in doubt.',
      },
      {
        title: 'Large type for busy people',
        body: 'Body text is 15 to 16px and every button is at least 44px tall. Status always comes with a word, Paid or Due, never colour alone.',
      },
    ],
    facts: [
      { label: 'Users', value: 'Office, teachers, parents' },
      { label: 'Modules', value: 'Attendance · Exams · Timetable · Notices · Fees' },
      { label: 'Languages', value: 'English and Hindi' },
    ],
    theme: { bg: '#171717', fg: '#FFFFFF', accent: YATRI_BLUE, soft: '#2A2A2A' },
    palette: [blue, ink, white, canvas, { name: 'Paid', hex: '#19764A', role: 'Status pills, always with a word' }],
    type: yatriType('Bricolage Grotesque for greetings and headings, Inter Tight for registers, timetables and fee tables. Both stay legible on old school desktops.'),
    logo: yatriLogo,
    wordmark: ['Yatri', 'School'],
    brand: YATRI_BLUE,
    campaign: [
      { kicker: 'For schools', headline: 'Run your school from one simple app.', cta: 'Set up your school' },
      { kicker: 'For parents', headline: 'Attendance, results and receipts on your phone.', cta: 'See the parent app' },
      { kicker: 'For teachers', headline: 'Mark attendance from the classroom.', cta: 'See how it works' },
    ],
    shots: [
      { src: '/work/yatri-school/dashboard.webp', alt: 'Office home screen with students, attendance, collections and overdue fees' },
      { src: '/work/yatri-school/website.webp', alt: 'Yatri School website: run your school from one simple app' },
      { src: '/work/yatri-school/fees.webp', alt: 'Pending fees with one-tap WhatsApp reminders' },
      { src: '/work/yatri-school/report-card.webp', alt: 'Printable report card with the school crest' },
      { src: '/work/yatri-school/timetable.webp', alt: 'Weekly timetable for a class' },
      { src: '/work/yatri-school/teacher.webp', alt: 'Teacher home screen with classes and notices' },
    ],
    phones: [
      { src: '/work/yatri-school/phone-parent.webp', alt: 'Parent home screen on a phone, with a Hindi switch' },
      { src: '/work/yatri-school/phone-attendance.webp', alt: 'Marking class attendance on a phone' },
    ],
  },
  {
    slug: 'yatri-playbook',
    name: 'Yatri Playbook',
    client: 'Yatri Cloud',
    sector: 'SaaS / Documentation',
    url: 'https://playbook.yatricloud.com/',
    services: ['brand-identity', 'ui-ux-design', 'web-design', 'motion-graphics'],
    disciplines: ['Identity', 'Website', 'Product UI', 'Store listing'],
    summary: 'Record a process once and get a step-by-step guide with screenshots.',
    intro:
      'Playbook records your clicks as you work and turns them into a step-by-step guide with screenshots. You can edit it, share a link, embed it, show it as slides or export it as PDF, Word, HTML or Markdown. Capture runs as a Chrome and Edge extension and as a desktop app for macOS and Windows.',
    brief:
      'Documentation tools get opened when someone is already behind on work. Playbook had to show its value in one demo: press Start, do the task, press Done, and a finished guide is waiting.',
    approach: [
      {
        title: 'The demo is the hero',
        body: 'The homepage plays the product. A supplier form fills itself in on the left while the finished guide writes itself on the right, one step at a time.',
      },
      {
        title: 'No icons at all',
        body: 'Playbook follows the Yatri system with one change: there are no icons anywhere. Navigation, buttons and status use words, which keeps guides readable for people who are new to software.',
      },
      {
        title: 'Privacy said plainly',
        body: 'Nothing is recorded until you press Start. Password and card fields are never captured, and emails or phone numbers can be blurred before upload. The store listing says this in five short lines.',
      },
    ],
    facts: [
      { label: 'Exports', value: 'PDF · Word · HTML · Markdown' },
      { label: 'Capture', value: 'Chrome, Edge, macOS, Windows' },
      { label: 'Price', value: 'Every feature free' },
    ],
    theme: { bg: '#EAF3FF', fg: '#171717', accent: YATRI_BLUE, soft: '#FFFFFF' },
    palette: [blue, { name: 'Pressed', hex: '#0070E0', role: 'Button hover and press' }, ink, white, hairline],
    type: yatriType('Bricolage Grotesque for the big promises, Inter Tight for every step in a guide. No icons, so the type does all the work.'),
    logo: yatriLogo,
    wordmark: ['Yatri', 'Playbook'],
    brand: YATRI_BLUE,
    campaign: [
      { kicker: 'Press Start', headline: 'Do it once. The guide writes itself.', cta: 'Start free' },
      { kicker: 'Extension', headline: 'Capture from your toolbar.', cta: 'Add to Chrome' },
      { kicker: 'Privacy', headline: 'Private details stay private.', cta: 'Read how' },
    ],
    shots: [
      { src: '/work/yatri-playbook/home.webp', alt: 'Playbook homepage with a guide writing itself as a form is filled in' },
      { src: '/work/yatri-playbook/guide.webp', alt: 'Store listing: do it once, the guide writes itself' },
      { src: '/work/yatri-playbook/capture.webp', alt: 'Store listing: capture from your toolbar in three steps' },
      { src: '/work/yatri-playbook/privacy.webp', alt: 'Store listing: what is and is not recorded' },
    ],
    phones: [{ src: '/work/yatri-playbook/phone.webp', alt: 'Playbook on a phone during a capture' }],
  },
  {
    slug: 'siddhivinayak-classes',
    name: 'Siddhivinayak Classes',
    client: 'Siddhivinayak Classes',
    sector: 'Education / Coaching institute',
    url: 'https://www.siddhivinayakclasses.org/',
    services: ['brand-identity', 'web-design', 'digital-marketing'],
    disciplines: ['Logo', 'Website', 'Admissions campaign'],
    summary: 'A coaching institute website where parents and students find courses and enquire.',
    intro:
      'Siddhivinayak Classes is a coaching institute. The website is where parents and students look at courses, check the faculty and send an enquiry.',
    brief:
      'Parents choose a coaching class on reputation and on how organised the institute looks. Most enquiries start on a phone, often from a link shared in a family group, so the site had to load fast and make calling or messaging the office easy.',
    approach: [
      {
        title: 'A monogram with a rising sun',
        body: 'The S and V sit inside a circle with a sunrise arc behind them, in saffron and deep maroon. It works on a shop-front board, a fee receipt and a WhatsApp profile picture.',
      },
      {
        title: 'Call and WhatsApp on every screen',
        body: 'On mobile, a bar with Call and WhatsApp stays at the bottom of the page. Parents who are ready do not have to look for a contact page.',
      },
      {
        title: 'Admission season assets',
        body: 'We designed a set of posters, Instagram posts and WhatsApp-ready images in the same system, so the institute can announce new batches without a designer each time.',
      },
    ],
    facts: [
      { label: 'Audience', value: 'Students and parents' },
      { label: 'Primary action', value: 'Call or WhatsApp' },
      { label: 'Channels', value: 'Website, Instagram, WhatsApp' },
    ],
    theme: { bg: '#5E1624', fg: '#FFF6EA', accent: '#F28C28', soft: '#FBE3C4' },
    palette: [
      { name: 'Maroon', hex: '#5E1624', role: 'Primary' },
      { name: 'Saffron', hex: '#F28C28', role: 'Accent, calls to action' },
      { name: 'Marigold', hex: '#FBE3C4', role: 'Surfaces' },
      { name: 'Ivory', hex: '#FFF6EA', role: 'Paper' },
      { name: 'Slate', hex: '#2E2A28', role: 'Text' },
    ],
    type: {
      display: 'Fraunces',
      displayFamily: '"Fraunces Variable", serif',
      text: 'Manrope',
      textFamily: '"Manrope Variable", sans-serif',
      weight: 600,
      note: 'A warm serif for headlines gives the institute some gravity. Manrope keeps timetables and fee details easy to read.',
    },
    mark: 'siddhivinayak',
    ui: 'siddhivinayak',
    campaign: [
      { kicker: 'Admissions open', headline: 'New batches start soon. Reserve a seat.', cta: 'WhatsApp the office' },
      { kicker: 'Courses', headline: 'Find the right batch for your child.', cta: 'Book a visit' },
      { kicker: 'Results', headline: 'Strong basics, better marks.', cta: 'See courses' },
    ],
    review: true,
  },
  {
    slug: 'nishaan',
    name: 'Nishaan',
    client: 'Yatri Cloud',
    sector: 'LegalTech / Trademark watch',
    url: 'https://nishaan.yatricloud.com/',
    services: ['brand-identity', 'ui-ux-design', 'web-design'],
    disciplines: ['Naming', 'Identity', 'Product UI', 'Website'],
    summary: 'Trademark watch, opposition and compliance software for Indian IP firms.',
    intro:
      'Nishaan reads every Trade Marks Journal, flags advertised marks that conflict with a firm’s portfolio, prepares recommendation letters and Form TM-O drafts, and tracks every opposition and renewal date under the Trade Marks Act, 1999.',
    brief:
      'Trademark attorneys live by deadlines: four months to oppose a mark once it is advertised, then fixed windows for every reply. Missing one can lose a client’s case. The product had to put every conflict and every date in view for people who read dense legal tables all day.',
    approach: [
      {
        title: 'A mark that means mark',
        body: 'Nishaan is Hindi for mark or sign. The logo is a navy ring holding a crescent and a single dot, like a seal pressed onto a filing.',
      },
      {
        title: 'The Yatri system in navy',
        body: 'Nishaan uses the Yatri Cloud design system in a navy edition. Wherever the other apps use their blue, Nishaan uses deep navy, on a cool grey canvas that lets white cards stand apart.',
      },
      {
        title: 'Dense tables, calm screens',
        body: 'Journals, oppositions and compliance dates are long tables. Each screen gets one navy header panel, navy table headers and status pills that always carry a word, like Overdue or Pending, so an attorney can scan a hundred rows quickly.',
      },
    ],
    facts: [
      { label: 'Built for', value: 'Indian IP firms' },
      { label: 'Reads', value: 'Every Trade Marks Journal' },
      { label: 'Drafts', value: 'Form TM-O and letters' },
    ],
    theme: { bg: '#14294B', fg: '#FFFFFF', accent: '#C8D3E9', soft: '#253F6A' },
    palette: [
      { name: 'Navy', hex: '#14294B', role: 'The one brand colour' },
      { name: 'Ink', hex: '#171717', role: 'Body text' },
      { name: 'Seal', hex: '#C8D3E9', role: 'The crescent in the logo' },
      { name: 'Canvas', hex: '#F1F4F8', role: 'App background behind cards' },
      { name: 'White', hex: '#FFFFFF', role: 'Pages and cards' },
    ],
    type: {
      display: 'Figtree',
      displayFamily: '"Figtree Variable", sans-serif',
      text: 'Figtree',
      textFamily: '"Figtree Variable", sans-serif',
      weight: 700,
      note: 'One family for the app, the docs and the website. Headings are bold with slightly tight tracking and big numbers go extra bold, which keeps long tables easy to scan.',
    },
    logo: { src: '/work/nishaan/logo.svg', white: '/work/nishaan/logo-white.svg', alt: 'Nishaan logo' },
    brand: '#14294B',
    campaign: [
      { kicker: 'Trade Marks Journal', headline: 'Know every conflict before the deadline.', cta: 'Request a demo' },
      { kicker: 'Oppositions', headline: 'Every opposition date, tracked.', cta: 'See the product' },
      { kicker: 'Letters', headline: 'Recommendation letters and TM-O drafts, prepared.', cta: 'See a sample' },
    ],
    shots: [
      { src: '/work/nishaan/dashboard.webp', alt: 'Firm dashboard with compliance due, the latest journal and portfolio changes' },
      { src: '/work/nishaan/journal-watch.webp', alt: 'Journal watch with days left in each opposition window' },
      { src: '/work/nishaan/oppositions.webp', alt: 'Opposition portfolio with statutory next steps' },
      { src: '/work/nishaan/compliance.webp', alt: 'Compliance deadlines with overdue and pending status' },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
