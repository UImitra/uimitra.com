/*
 * Portfolio data. Every case study on the site is built from an entry here.
 *
 * Logos and screenshots are the real files from each product, stored in
 * /public/work/<slug>/. `shots` are desktop screens (shown at 16:10, cropped
 * from the top), `phones` are phone screens. A project without shots falls
 * back to a code-drawn interface (`ui`). A project without a `logo` is shown
 * by its name alone, with no identity pages.
 *
 * Entries with `review: true` were written from limited public information.
 * Check the copy with the client before publishing.
 */

import type { ServiceSlug } from './services';

export type UiKey = 'yatricloud';

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
  /** The full lockup (mark and wordmark) when the brand has one as a file. */
  lockup?: { src: string; white: string };
  /** Name split as the brand sets it, second part in `brand` colour on light grounds. */
  wordmark?: [string, string];
  brand?: string;
  ui?: UiKey;
  campaign: { kicker: string; headline: string; cta: string }[];
  shots?: Shot[];
  phones?: Shot[];
  /** A film we made: a short silent `loop` for previews and the full cut in `src`. */
  film?: { title: string; src: string; loop: string; poster: string; length: string; youtube?: string };
  review?: boolean;
};

/* Yatri Cloud's mark, blue and type pairing. */
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
    slug: 'careerspace',
    name: 'Career Space',
    client: 'Career Space',
    sector: 'Education / Maths & careers',
    url: 'https://careerspace.co.in/',
    services: ['brand-identity', 'web-design', 'social-media'],
    disciplines: ['Identity', 'Website', 'Workshop collateral'],
    summary: 'A Bengaluru education company that takes students from confusion to curiosity.',
    intro:
      'Career Space works across maths assessment, career guidance and teacher training. It runs Math Cafe, hands-on workshops for schools and colleges, and trains teachers to make maths something students touch and argue with.',
    brief:
      'Parents, principals and teachers all had to read the brand as serious about learning, while students had to find it exciting. One identity had to sit on a school circular and a workshop banner without changing.',
    approach: [
      {
        title: 'A rocket inside the C',
        body: 'The mark is a C that turns into a planet, with a rocket cutting across it and four stars inside. It reads as a monogram at 24px and as an illustration on a banner.',
      },
      {
        title: 'Night sky and one warm yellow',
        body: 'Deep navy carries the space idea. A single sun yellow marks every action and the italic word in each headline, so the eye always lands on curiosity.',
      },
      {
        title: 'Heavy type, plain words',
        body: 'Headlines are set heavy and short. The body copy talks the way a good teacher does, with no exam jargon.',
      },
    ],
    facts: [
      { label: 'Years in education', value: '10+' },
      { label: 'Teachers trained', value: '300+' },
      { label: 'Cities', value: '20+ across India' },
    ],
    theme: { bg: '#0A1226', fg: '#FFFFFF', accent: '#F7CB58', soft: '#1C2540' },
    palette: [
      { name: 'Night', hex: '#0A1226', role: 'Primary ground' },
      { name: 'Sun', hex: '#F7CB58', role: 'Actions and the italic word' },
      { name: 'Paper', hex: '#F9F7F1', role: 'Reading sections' },
      { name: 'Dusk', hex: '#141B2C', role: 'Cards on navy' },
      { name: 'White', hex: '#FFFFFF', role: 'Text on navy' },
    ],
    type: {
      display: 'Manrope',
      displayFamily: '"Manrope Variable", sans-serif',
      text: 'Manrope',
      textFamily: '"Manrope Variable", sans-serif',
      weight: 800,
      note: 'One geometric family at two weights. Extra bold for headlines, regular for long reading about workshops and programmes.',
    },
    logo: { src: '/work/careerspace/mark.png', white: '/work/careerspace/mark-white.png', alt: 'Career Space mark' },
    lockup: { src: '/work/careerspace/logo.png', white: '/work/careerspace/logo-white.png' },
    campaign: [
      { kicker: 'Math Cafe', headline: 'Maths you can touch.', cta: 'Book a workshop' },
      { kicker: 'Career guidance', headline: 'From confusion to curiosity.', cta: 'Start a conversation' },
      { kicker: 'Teacher training', headline: 'Teach the question, not the formula.', cta: 'See programmes' },
    ],
    shots: [
      { src: '/work/careerspace/home.webp', alt: 'Career Space homepage: from confusion to curiosity' },
      { src: '/work/careerspace/math-cafe.webp', alt: 'Math Cafe, the flagship workshop' },
      { src: '/work/careerspace/products.webp', alt: 'Assessment tools listed as numbered products' },
      { src: '/work/careerspace/contact.webp', alt: 'Contact section in navy' },
    ],
    phones: [{ src: '/work/careerspace/phone.webp', alt: 'Career Space homepage on a phone' }],
    review: true,
  },
  {
    slug: 'fetchtails',
    name: 'FetchTails',
    client: 'FetchTails',
    sector: 'Consumer app / Pet care',
    url: 'https://www.fetchtails.com/',
    services: ['brand-identity', 'ui-ux-design', 'web-design'],
    disciplines: ['Identity', 'App UI', 'Website'],
    summary: 'One app for grooming, vets, walks, daycare and boarding.',
    intro:
      'FetchTails connects pet owners with groomers, vets, trainers, walkers, daycare and boarding across India. Owners keep their pet’s records in one profile and book and pay in the app.',
    brief:
      'Pet care is a trust purchase. The brand had to feel warm enough for a dog owner and organised enough for a clinic listing its services.',
    approach: [
      {
        title: 'T and F, stepped like a tail',
        body: 'The monogram stacks a T and an F with soft corners and a curled foot. It sits well as an app icon and on a collar tag.',
      },
      {
        title: 'Warm orange, earthy brown',
        body: 'Apricot orange for the mark and every button, a coat-brown for the wordmark and headlines. Cream grounds keep it soft.',
      },
      {
        title: 'Booking in three steps',
        body: 'Create a profile, find a service, book and pay. The site and the app repeat the same three steps so owners know what comes next.',
      },
    ],
    facts: [
      { label: 'Services', value: 'Vet · Grooming · Walks · Daycare · Boarding' },
      { label: 'Payments', value: 'In-app, via Razorpay' },
      { label: 'Platforms', value: 'Android, iOS, web' },
    ],
    theme: { bg: '#FFF4EA', fg: '#51392A', accent: '#F09358', soft: '#FFE3CC' },
    palette: [
      { name: 'Apricot', hex: '#F09358', role: 'The mark and every button' },
      { name: 'Coat', hex: '#7B5737', role: 'Wordmark and headlines' },
      { name: 'Bark', hex: '#51392A', role: 'Footer and dark grounds' },
      { name: 'Cream', hex: '#FFF4EA', role: 'Page ground' },
      { name: 'Blaze', hex: '#FF7A00', role: 'Stats band' },
    ],
    type: {
      display: 'Figtree',
      displayFamily: '"Figtree Variable", sans-serif',
      text: 'Figtree',
      textFamily: '"Figtree Variable", sans-serif',
      weight: 800,
      note: 'Rounded, friendly and clear on small phone screens. Extra bold for headlines, medium for booking details.',
    },
    logo: { src: '/work/fetchtails/mark.png', white: '/work/fetchtails/mark-white.png', alt: 'FetchTails monogram' },
    lockup: { src: '/work/fetchtails/logo.png', white: '/work/fetchtails/logo-white.png' },
    campaign: [
      { kicker: 'Pet care', headline: 'Your pet’s care, simplified.', cta: 'Download the app' },
      { kicker: 'Grooming', headline: 'Fresh coat, zero calls.', cta: 'Book a groomer' },
      { kicker: 'Boarding', headline: 'Going away? They’re in good paws.', cta: 'Find boarding' },
    ],
    shots: [
      { src: '/work/fetchtails/home.webp', alt: 'FetchTails homepage: your pet’s care, simplified' },
      { src: '/work/fetchtails/why.webp', alt: 'Four reasons to choose FetchTails' },
      { src: '/work/fetchtails/how.webp', alt: 'How it works in three steps' },
      { src: '/work/fetchtails/screens.webp', alt: 'App screens: dashboard, pet profile and booking' },
    ],
    phones: [{ src: '/work/fetchtails/phone.webp', alt: 'FetchTails homepage on a phone' }],
    review: true,
  },
  {
    slug: 'webxela',
    name: 'Webxela',
    client: 'Webxela',
    sector: 'B2B / IT & AI engineering',
    url: 'https://www.webxela.com/',
    services: ['brand-identity', 'web-design', 'motion-graphics'],
    disciplines: ['Identity', 'Website', 'Motion'],
    summary: 'An engineering firm that builds AI agents, cloud platforms and SaaS.',
    intro:
      'Webxela builds AI agents, cloud and DevOps platforms, SaaS products and mobile apps for companies that need them to run without downtime.',
    brief:
      'Enterprise buyers compare engineering firms on proof, not adjectives. The identity had to look exact and calm, closer to a lab than an agency.',
    approach: [
      {
        title: 'An x that leans forward',
        body: 'The mark is a sharp x with a dot set above its arm, like a cursor about to move. It stands alone as an icon and sits as the x inside the lowercase wordmark.',
      },
      {
        title: 'Mint, ink and nothing loud',
        body: 'A pale mint ground and near-black ink. Mint is the only colour, so it reads as a signature rather than decoration.',
      },
      {
        title: 'Grotesk headlines, mono details',
        body: 'Large, light grotesk headlines. Specs, uptime numbers and labels in monospace, like a spec sheet.',
      },
    ],
    facts: [
      { label: 'Projects delivered', value: '120+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Average MVP', value: '4 weeks' },
    ],
    theme: { bg: '#DBFAC4', fg: '#080808', accent: '#080808', soft: '#F2FBEA' },
    palette: [
      { name: 'Mint', hex: '#DBFAC4', role: 'The one colour' },
      { name: 'Ink', hex: '#080808', role: 'Mark, text, buttons' },
      { name: 'Paper', hex: '#FAF9F5', role: 'Reading sections' },
      { name: 'Forest', hex: '#285718', role: 'Mint text on light' },
      { name: 'Graphite', hex: '#1C1C1C', role: 'Dark sections' },
    ],
    type: {
      display: 'Geist',
      displayFamily: '"Geist Variable", sans-serif',
      text: 'Geist Mono',
      textFamily: '"Geist Mono Variable", monospace',
      weight: 500,
      note: 'A neutral grotesk for statements, a monospace for numbers, tags and labels. Engineers trust what looks like a spec.',
    },
    logo: { src: '/work/webxela/mark.svg', white: '/work/webxela/mark-white.svg', alt: 'Webxela mark' },
    campaign: [
      { kicker: 'AI agents', headline: 'Agents that ship, not demos.', cta: 'Book a meeting' },
      { kicker: 'Cloud', headline: '99.99% is a design decision.', cta: 'Talk to an engineer' },
      { kicker: 'SaaS', headline: 'MVP in four weeks.', cta: 'Start a project' },
    ],
    shots: [
      { src: '/work/webxela/home.webp', alt: 'Webxela homepage: enterprise IT and AI engineering' },
      { src: '/work/webxela/services.webp', alt: 'Service cards on the mint ground' },
      { src: '/work/webxela/disciplines.webp', alt: 'Core disciplines with spec tags' },
      { src: '/work/webxela/cta.webp', alt: 'Closing call to action and stats' },
    ],
    phones: [{ src: '/work/webxela/phone.webp', alt: 'Webxela homepage on a phone' }],
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
  {
    slug: 'saarthi',
    name: 'Saarthi',
    client: 'Saarthi',
    sector: 'Mobility / Ride app',
    services: ['ui-ux-design', 'brand-identity', 'motion-graphics'],
    disciplines: ['App UI', 'Identity', 'Walkthrough film'],
    summary: 'A ride app where the rider names the fare and picks the captain.',
    intro:
      'Saarthi lets riders see a fair price for bike, auto, cab and XL, offer more or less, and choose from captains who reply with their own offers. Rides start with a 4 digit PIN and are tracked live.',
    brief:
      'Ride apps all look alike and riders distrust surge pricing. Saarthi had to make bargaining feel fair and quick, and make safety visible on every screen.',
    approach: [
      {
        title: 'One S, one road',
        body: 'The mark is a rounded S drawn like a road with two bends. It reads as an app icon at 29px and as a pin on a map.',
      },
      {
        title: 'Lime for go',
        body: 'An electric lime marks the fare, the route and the one button to press. Everything else is ink on a warm off-white.',
      },
      {
        title: 'A walkthrough instead of a manual',
        body: 'A 80 second film walks through the rider, captain and ops apps screen by screen, with one line of copy per step.',
      },
    ],
    facts: [
      { label: 'Apps', value: 'Rider · Captain · Ops' },
      { label: 'Vehicles', value: 'Bike · Auto · Cab · XL' },
      { label: 'Built with', value: 'React Native, iOS and Android' },
    ],
    theme: { bg: '#C8F04B', fg: '#0F0F0F', accent: '#0F0F0F', soft: '#F4F5F0' },
    palette: [
      { name: 'Lime', hex: '#C8F04B', role: 'Fare, route and the main button' },
      { name: 'Ink', hex: '#0F0F0F', role: 'Mark and text' },
      { name: 'Chalk', hex: '#F4F5F0', role: 'App background' },
      { name: 'White', hex: '#FFFFFF', role: 'Cards and sheets' },
      { name: 'Moss', hex: '#4A7A12', role: 'Money and confirmations' },
    ],
    type: {
      display: 'Bricolage Grotesque',
      displayFamily: '"Bricolage Grotesque Variable", sans-serif',
      text: 'Inter Tight',
      textFamily: '"Inter Tight Variable", sans-serif',
      weight: 700,
      note: 'Rounded, compact headlines that match the S. A tight text face for fares, PINs and addresses.',
    },
    logo: { src: '/work/saarthi/mark.png', white: '/work/saarthi/mark-white.png', alt: 'Saarthi mark' },
    campaign: [
      { kicker: 'Name your fare', headline: 'You set the price. Captains reply.', cta: 'Plan a ride' },
      { kicker: 'Safety', headline: 'No PIN, no ride.', cta: 'See how' },
      { kicker: 'Captains', headline: 'Paid every Monday.', cta: 'Drive with Saarthi' },
    ],
    shots: [
      { src: '/work/saarthi/fare.webp', alt: 'Name your own fare: a fair price per vehicle, then your offer' },
      { src: '/work/saarthi/offers.webp', alt: 'Captains send offers with price, rating and arrival time' },
      { src: '/work/saarthi/live.webp', alt: 'Live ride with the start PIN, trip sharing and SOS' },
      { src: '/work/saarthi/earnings.webp', alt: 'Captain earnings with a weekly payout' },
    ],
    phones: ['01', '02', '03', '04', '05', '06', '07', '08'].map((n) => ({ src: `/work/saarthi/phone-${n}.webp`, alt: `Saarthi Play Store screen ${n}` })),
    film: {
      title: 'App walkthrough',
      src: '/work/saarthi/walkthrough.mp4',
      loop: '/work/saarthi/walkthrough-loop.mp4',
      poster: '/work/saarthi/walkthrough-poster.webp',
      length: '1:20',
    },
  },
  {
    slug: 'siddhivinayak-classes',
    name: 'SSV Classes',
    client: 'Shree Siddhivinayak Classes',
    sector: 'Education / Std 11 & 12 app',
    url: 'https://www.siddhivinayakclasses.org/',
    services: ['web-design', 'ui-ux-design', 'motion-graphics'],
    disciplines: ['Website', 'App UI', 'Launch film'],
    summary: 'Physics, Chemistry and Maths lessons from SSV teachers, now in an app.',
    intro:
      'Shree Siddhivinayak Classes teaches Standards 11 and 12 for GSEB, GUJCET and NEET. The SSV app puts each chapter’s video lessons, notes and past papers on a student’s phone, with a dashboard for the SSV team.',
    brief:
      'Students already trust their SSV teachers. The website and the film had to show, in under a minute, that the same lessons now live in an app, and get students to ask the office for a class code.',
    approach: [
      {
        title: 'Learn it once. Learn it right.',
        body: 'One line carries the site, the film and the store listing. It sits in deep blue with the last word in yellow.',
      },
      {
        title: 'The phone is the hero',
        body: 'Every section shows the real app on a phone, chapter by chapter, so parents see exactly what their child gets.',
      },
      {
        title: 'A 68 second launch film',
        body: 'Five beats: the class, lessons, notes and progress, doubts and class codes, and the dashboard for teachers. Cut to music, one claim per shot.',
      },
    ],
    facts: [
      { label: 'Standards', value: '11 and 12' },
      { label: 'Exams', value: 'GSEB · GUJCET · NEET' },
      { label: 'Subjects', value: 'Physics · Chemistry · Maths' },
    ],
    theme: { bg: '#0B5FE0', fg: '#FFFFFF', accent: '#FFC94A', soft: '#EEF3FB' },
    palette: [
      { name: 'SSV Blue', hex: '#0B5FE0', role: 'Primary ground and buttons' },
      { name: 'Sun', hex: '#FFC94A', role: 'The last word of a headline' },
      { name: 'Night', hex: '#0B1F4D', role: 'Teacher dashboard sections' },
      { name: 'Mist', hex: '#EEF3FB', role: 'Page ground' },
      { name: 'Ink', hex: '#0B1220', role: 'Text' },
    ],
    type: {
      display: 'Geist',
      displayFamily: '"Geist Variable", sans-serif',
      text: 'Geist',
      textFamily: '"Geist Variable", sans-serif',
      weight: 600,
      note: 'One clean grotesk for headlines and chapter lists, easy to read on a budget phone.',
    },
    campaign: [
      { kicker: 'Std 11 & 12', headline: 'Learn it once. Learn it right.', cta: 'Get a class code' },
      { kicker: 'Video lessons', headline: 'Your class, now an app.', cta: 'See the app' },
      { kicker: 'Doubts', headline: 'Stuck on a concept? Just ask.', cta: 'Ask a doubt' },
    ],
    shots: [
      { src: '/work/ssv/home.webp', alt: 'SSV Classes homepage: learn it once, learn it right' },
      { src: '/work/ssv/film.webp', alt: 'The launch film embedded on the site' },
      { src: '/work/ssv/subjects.webp', alt: 'Physics, Chemistry and Maths, chapter by chapter' },
      { src: '/work/ssv/dashboard.webp', alt: 'Dashboard for the SSV team' },
      { src: '/work/ssv/cta.webp', alt: 'Closing call to action in SSV blue' },
    ],
    phones: [{ src: '/work/ssv/phone.webp', alt: 'SSV Classes homepage on a phone' }],
    film: {
      title: 'App launch film',
      src: '/work/ssv/launch-film.mp4',
      loop: '/work/ssv/launch-loop.mp4',
      poster: '/work/ssv/launch-poster.webp',
      length: '1:08',
      youtube: 'https://youtu.be/Ol2yXqqePA0',
    },
  },
];

/** Projects with a logo of ours to show. */
export const branded = projects.filter((p) => p.logo);

export const films = projects.filter((p) => p.film);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
