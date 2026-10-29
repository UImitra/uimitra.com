/*
 * Portfolio data. Every case study on the site is built from an entry here.
 *
 * To add a project: copy an entry, give it a new slug, pick a `mark` and `ui`
 * (or add new ones in components/brand), and fill in the copy. To show real
 * screenshots instead of the code-drawn interface, put the image in
 * /public/work/<slug>/ and set `shots`.
 *
 * Entries with `review: true` were written from limited public information.
 * Check the copy with the client before publishing.
 */

import type { ServiceSlug } from './services';

export type MarkKey = 'yatricloud' | 'draw' | 'school' | 'playbook' | 'siddhivinayak' | 'nishaan';
export type UiKey = MarkKey;

export type Swatch = { name: string; hex: string; role: string };

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
  type: { display: string; displayFamily: string; text: string; textFamily: string; note: string };
  mark: MarkKey;
  ui: UiKey;
  campaign: { kicker: string; headline: string; cta: string }[];
  shots?: { src: string; alt: string }[];
  review?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'yatri-cloud',
    name: 'Yatri Cloud',
    client: 'Yatri Cloud',
    sector: 'EdTech / Cloud certification',
    url: 'https://www.yatricloud.com/',
    services: ['brand-identity', 'web-design', 'ui-ux-design', 'social-media'],
    disciplines: ['Identity', 'Website', 'Product UI', 'Social'],
    summary: 'A certification platform that 50,000+ learners use to pass AWS, Azure and GCP exams.',
    intro:
      'Yatri Cloud helps people get certified in AWS, Azure, GCP, DevOps, Kubernetes and Terraform. Learners get practice tests, training, community events and discounted exam vouchers in one place.',
    brief:
      'The community had grown past 50,000 learners, which the team calls Yatris, and the old look still read like a side project. Students compare prep sites on price and trust before they pay, so the brand had to look as dependable as the exam it prepares you for.',
    approach: [
      {
        title: 'A mark built from a route',
        body: 'Yatri means traveller. The Y is drawn as two paths that meet and continue as one line to a fixed point, the certificate. It works at 16px in a browser tab and on a conference banner.',
      },
      {
        title: 'Blue you can trust, orange you can see',
        body: 'Cloud vendors own most shades of blue, so we pushed ours deeper and paired it with a sunrise orange used only for prices, vouchers and calls to action. Orange always means a deal.',
      },
      {
        title: 'Practice first',
        body: 'The site leads with the practice test. A visitor can start answering questions before signing up and judge the content for themselves.',
      },
    ],
    facts: [
      { label: 'Learners', value: '50K+' },
      { label: 'Tracks', value: 'AWS · Azure · GCP · DevOps · K8s · Terraform' },
      { label: 'Stack', value: 'React, Supabase, Razorpay' },
    ],
    theme: { bg: '#0B1B3F', fg: '#F4F7FF', accent: '#FF7A1A', soft: '#1F4DFF' },
    palette: [
      { name: 'Altitude', hex: '#0B1B3F', role: 'Primary, backgrounds' },
      { name: 'Signal Blue', hex: '#1F4DFF', role: 'Links, focus, charts' },
      { name: 'Sunrise', hex: '#FF7A1A', role: 'Prices and calls to action' },
      { name: 'Haze', hex: '#E6ECFF', role: 'Surfaces' },
      { name: 'Cloud', hex: '#F4F7FF', role: 'Paper' },
    ],
    type: {
      display: 'Space Grotesk',
      displayFamily: '"Space Grotesk Variable", sans-serif',
      text: 'Geist',
      textFamily: '"Geist Variable", sans-serif',
      note: 'Space Grotesk has the slightly technical feel of a terminal without being hard to read. Geist handles the long question text in practice tests.',
    },
    mark: 'yatricloud',
    ui: 'yatricloud',
    campaign: [
      { kicker: 'AWS · Azure · GCP', headline: 'Practice until the real exam feels familiar.', cta: 'Start a free practice test' },
      { kicker: 'Exam vouchers', headline: '50% off your next certification.', cta: 'Claim a voucher' },
      { kicker: 'Community', headline: '50,000 Yatris and counting.', cta: 'Join the community' },
    ],
  },
  {
    slug: 'yatri-draw',
    name: 'Yatri Draw',
    client: 'Yatri Cloud',
    sector: 'Productivity / Open source',
    url: 'https://draw.yatricloud.com/',
    services: ['brand-identity', 'ui-ux-design', 'web-design'],
    disciplines: ['Identity', 'Product UI', 'Website'],
    summary: 'An open-source whiteboard with a hand-drawn feel and end-to-end encrypted collaboration.',
    intro:
      'Yatri Draw is an open-source virtual whiteboard. Sketches look hand drawn, several people can work on one board at the same time, and every session is end-to-end encrypted.',
    brief:
      'Whiteboard tools are judged in the first ten seconds, when someone opens a blank canvas and tries to draw a box. The identity had to carry the same loose, friendly line as the product and still make the encryption feel serious.',
    approach: [
      {
        title: 'One continuous stroke',
        body: 'The logo is a single pen line that loops into a D. It keeps the slight wobble of a real pen, the same line quality people get on the canvas.',
      },
      {
        title: 'Calm chrome, loud canvas',
        body: 'Toolbars sit in warm paper tones and get out of the way. Colour is saved for what people draw. Marker violet is the default stroke and highlighter yellow is for sticky notes.',
      },
      {
        title: 'Security in plain words',
        body: 'Instead of a wall of security badges, each shared board shows one small lock and a plain sentence: only people with this link can read it.',
      },
    ],
    facts: [
      { label: 'Licence', value: 'Open source' },
      { label: 'Sessions', value: 'End-to-end encrypted' },
      { label: 'Mode', value: 'Real-time collaboration' },
    ],
    theme: { bg: '#FFF8EC', fg: '#1E1E1E', accent: '#6C4BF4', soft: '#FFE45C' },
    palette: [
      { name: 'Paper', hex: '#FFF8EC', role: 'Canvas' },
      { name: 'Graphite', hex: '#1E1E1E', role: 'Text, default line' },
      { name: 'Marker', hex: '#6C4BF4', role: 'Brand, active tool' },
      { name: 'Highlighter', hex: '#FFE45C', role: 'Sticky notes' },
      { name: 'Eraser', hex: '#FF8A7A', role: 'Alerts' },
    ],
    type: {
      display: 'Caveat',
      displayFamily: '"Caveat", cursive',
      text: 'Geist',
      textFamily: '"Geist Variable", sans-serif',
      note: 'Caveat appears only on the canvas and in marketing headlines. Every menu and setting uses Geist so the product never feels like a toy.',
    },
    mark: 'draw',
    ui: 'draw',
    campaign: [
      { kicker: 'Open source', headline: 'Think out loud. Together.', cta: 'Open a blank board' },
      { kicker: 'Encrypted', headline: 'Only people with the link can see it.', cta: 'Start a private board' },
      { kicker: 'Whiteboard', headline: 'Boxes, arrows and bad handwriting welcome.', cta: 'Draw something' },
    ],
  },
  {
    slug: 'yatri-school',
    name: 'Yatri School',
    client: 'Yatri Cloud',
    sector: 'EdTech / School management',
    url: 'https://school.yatricloud.com/',
    services: ['brand-identity', 'ui-ux-design', 'web-design'],
    disciplines: ['Identity', 'Dashboard UX', 'Parent app'],
    summary: 'School management software for Indian schools, from attendance to fee receipts.',
    intro:
      'Yatri School runs the daily work of a school. Office staff and teachers manage students, classes, attendance, exams, notices and fees. Parents see attendance, results and receipts, and pay fees online through Razorpay.',
    brief:
      'The people using it every day are school office staff, often on a shared desktop, and parents checking on a phone between other things. Neither group wants to learn software. The product had to feel as familiar as a register book.',
    approach: [
      {
        title: 'An arch for a school gate',
        body: 'The mark is the arch over a school entrance with a single star inside. It reads as a school at any size and leaves room to sit on report cards and ID badges.',
      },
      {
        title: 'Built around the morning',
        body: 'The dashboard opens on today: who is absent, which fees are due and which notices went out. Staff reach the three tasks they do most often in one click from the home screen.',
      },
      {
        title: 'Receipts parents can trust',
        body: 'Every online payment produces a receipt that looks like the paper one the school already issues, with the school name and logo on top. Parents get a document they already recognise.',
      },
    ],
    facts: [
      { label: 'Users', value: 'Office, teachers, parents' },
      { label: 'Modules', value: 'Students · Attendance · Exams · Notices · Fees' },
      { label: 'Payments', value: 'Razorpay' },
    ],
    theme: { bg: '#0F3D2E', fg: '#FBF7EE', accent: '#F5B800', soft: '#DDEBDF' },
    palette: [
      { name: 'Chalkboard', hex: '#0F3D2E', role: 'Primary' },
      { name: 'Gold Star', hex: '#F5B800', role: 'Highlights, awards' },
      { name: 'Sage', hex: '#DDEBDF', role: 'Surfaces' },
      { name: 'Register', hex: '#FBF7EE', role: 'Paper' },
      { name: 'Red Ink', hex: '#D64545', role: 'Absences, dues' },
    ],
    type: {
      display: 'Manrope',
      displayFamily: '"Manrope Variable", sans-serif',
      text: 'Manrope',
      textFamily: '"Manrope Variable", sans-serif',
      note: 'One family with open, round letters that stay clear on cheap screens and in printed circulars.',
    },
    mark: 'school',
    ui: 'school',
    campaign: [
      { kicker: 'For school offices', headline: 'Attendance, fees and results in one place.', cta: 'Book a school demo' },
      { kicker: 'For parents', headline: 'Pay fees from your phone. Get the receipt instantly.', cta: 'See the parent app' },
      { kicker: 'For teachers', headline: 'Mark attendance from the classroom.', cta: 'See how it works' },
    ],
  },
  {
    slug: 'yatri-playbook',
    name: 'Yatri Playbook',
    client: 'Yatri Cloud',
    sector: 'SaaS / Documentation',
    url: 'https://www.yatricloud.com/playbook',
    services: ['brand-identity', 'ui-ux-design', 'web-design', 'motion-graphics'],
    disciplines: ['Identity', 'Desktop app', 'Website', 'Motion'],
    summary: 'Record a process once and get a step-by-step guide with screenshots.',
    intro:
      'Playbook records a process while you do it and turns it into a step-by-step guide with screenshots. You can edit the guide, share a link, embed it, present it as slides or export it to PDF, Word, HTML or Markdown. A desktop capture app runs on macOS and Windows.',
    brief:
      'Documentation tools get opened when someone is already behind on work. Playbook had to show its value in one demo: press record, do the task, stop, and a finished guide is waiting.',
    approach: [
      {
        title: 'A play button made of steps',
        body: 'The mark is a play triangle cut into three bars of different length. It says record and it says steps, and it animates well: the bars slide in one after another when capture starts.',
      },
      {
        title: 'Coral means recording',
        body: 'The interface is mostly ink and white. Signal coral appears only while recording and on the highlight ring that marks each click in a screenshot, so it always means the same thing.',
      },
      {
        title: 'The guide is the homepage',
        body: 'The marketing site is itself a Playbook guide. Visitors scroll through real steps, which explains the product better than a feature grid.',
      },
    ],
    facts: [
      { label: 'Exports', value: 'PDF · Word · HTML · Markdown' },
      { label: 'Desktop', value: 'macOS and Windows' },
      { label: 'Share', value: 'Link, embed, slides' },
    ],
    theme: { bg: '#111318', fg: '#F5F5F2', accent: '#FF5A4E', soft: '#2A2D35' },
    palette: [
      { name: 'Ink', hex: '#111318', role: 'Primary' },
      { name: 'Signal Coral', hex: '#FF5A4E', role: 'Recording, highlights' },
      { name: 'Graphite', hex: '#2A2D35', role: 'Panels' },
      { name: 'Margin', hex: '#F5F5F2', role: 'Paper' },
      { name: 'Done', hex: '#2BB673', role: 'Completed steps' },
    ],
    type: {
      display: 'Geist',
      displayFamily: '"Geist Variable", sans-serif',
      text: 'Geist Mono',
      textFamily: '"Geist Mono Variable", monospace',
      note: 'Geist for headings and steps. Mono for step numbers, shortcuts and file names, which keeps the guides scannable.',
    },
    mark: 'playbook',
    ui: 'playbook',
    campaign: [
      { kicker: 'Press record', headline: 'Do it once. Never explain it again.', cta: 'Download for Mac' },
      { kicker: 'Export anywhere', headline: 'PDF, Word, HTML or Markdown.', cta: 'See a sample guide' },
      { kicker: 'Desktop app', headline: 'Now on macOS and Windows.', cta: 'Get Playbook' },
    ],
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
    sector: 'Product / Yatri Cloud family',
    url: 'https://nishaan.yatricloud.com/',
    services: ['brand-identity', 'ui-ux-design'],
    disciplines: ['Naming system', 'Identity', 'Product UI'],
    summary: 'Identity and interface for Nishaan, a product in the Yatri Cloud family.',
    intro:
      'Nishaan is part of the Yatri Cloud family of products. The name means mark or sign in Hindi, and the identity is built on that idea.',
    brief:
      'A new product inside a growing family has two jobs: look like it belongs, and still be recognisable on its own. Nishaan shares the Yatri Cloud type and spacing and has its own mark and colour.',
    approach: [
      {
        title: 'A seal, pressed once',
        body: 'The mark is a round seal with a single notch, like a stamp pressed into wax. It sits next to the other Yatri marks without looking like a sibling copy.',
      },
      {
        title: 'Shared system, own colour',
        body: 'Grid, type scale and components come from the Yatri Cloud system. Nishaan takes indigo and a warm vermilion so it can be told apart in a crowded app switcher.',
      },
    ],
    facts: [
      { label: 'Family', value: 'Yatri Cloud' },
      { label: 'Name', value: 'Hindi for mark, sign' },
      { label: 'Scope', value: 'Identity, interface' },
    ],
    theme: { bg: '#1B1446', fg: '#F6F2FF', accent: '#FF5B3A', soft: '#C9BFFF' },
    palette: [
      { name: 'Indigo Ink', hex: '#1B1446', role: 'Primary' },
      { name: 'Vermilion', hex: '#FF5B3A', role: 'The seal, actions' },
      { name: 'Lilac', hex: '#C9BFFF', role: 'Secondary' },
      { name: 'Parchment', hex: '#F6F2FF', role: 'Paper' },
      { name: 'Night', hex: '#0E0B24', role: 'Text' },
    ],
    type: {
      display: 'Instrument Serif',
      displayFamily: '"Instrument Serif", serif',
      text: 'Geist',
      textFamily: '"Geist Variable", sans-serif',
      note: 'A sharp serif for the wordmark and headlines gives Nishaan a signature feel. Interface text stays in Geist, shared with Yatri Cloud.',
    },
    mark: 'nishaan',
    ui: 'nishaan',
    campaign: [
      { kicker: 'Yatri Cloud', headline: 'Leave your mark.', cta: 'Get early access' },
      { kicker: 'Nishaan', headline: 'Signed, sealed, shared.', cta: 'See how it works' },
      { kicker: 'New', headline: 'A new member of the Yatri family.', cta: 'Explore Nishaan' },
    ],
    review: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
