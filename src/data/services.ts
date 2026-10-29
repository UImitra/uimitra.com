export type ServiceSlug =
  | 'brand-strategy'
  | 'brand-identity'
  | 'ui-ux-design'
  | 'web-design'
  | 'motion-graphics'
  | 'digital-marketing'
  | 'social-media';

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  headline: string;
  lead: string;
  body: string;
  deliverables: string[];
  questions: string[];
  steps: { title: string; body: string }[];
  timeline: string;
  faqs: { q: string; a: string }[];
  legacy: string[];
};

export const services: Service[] = [
  {
    slug: 'brand-strategy',
    name: 'Brand strategy',
    short: 'Positioning, naming and the story everything else is built on.',
    headline: 'Decide what you stand for before you decide how you look.',
    lead: 'Strategy is the part of branding nobody sees and everyone feels. We work out who you are for, why they should pick you and how to say it in one sentence.',
    body: 'We start with interviews: founders, a few customers and, where we can, people who chose a competitor. From there we write the positioning, the voice and the messages your team, your website and your sales deck will all use. If you need a name, this is where we find it and check it is free to use.',
    deliverables: [
      'Stakeholder and customer interviews',
      'Competitor and category audit',
      'Positioning statement',
      'Brand story and messaging hierarchy',
      'Voice and tone guide',
      'Naming and tagline (optional)',
    ],
    questions: [
      'Can your team describe what you do in the same sentence?',
      'Do customers pick you for the reason you think they do?',
      'Is your name holding you back in new markets?',
    ],
    steps: [
      { title: 'Listen', body: 'Interviews, analytics and a look at everything you have published so far.' },
      { title: 'Map', body: 'We place you and your competitors on the few axes buyers actually use to decide.' },
      { title: 'Write', body: 'Positioning, story and messages, tested with real customers before we lock them.' },
      { title: 'Hand over', body: 'A short playbook your team can use the same week.' },
    ],
    timeline: '3 to 5 weeks',
    faqs: [
      { q: 'Do we need strategy if we only want a logo?', a: 'A small version, yes. Even a two-day workshop saves weeks of going back and forth on design, because everyone agrees on what the logo has to say before we draw it.' },
      { q: 'Can you help us rename the company?', a: 'Yes. We create a long list, check domains and trademark classes, and bring you a shortlist of names that are actually available.' },
    ],
    legacy: ['brand-development'],
  },
  {
    slug: 'brand-identity',
    name: 'Brand identity',
    short: 'Logo, colour, type and a system that holds together everywhere.',
    headline: 'A logo is the start. The system is what people remember.',
    lead: 'We design marks that work at sixteen pixels and on a building, and the colour, type and rules that keep every touchpoint looking like the same company.',
    body: 'Each identity comes with the decisions behind it, so your team knows why the blue is that blue and when the logo can sit on a photo. You get master files, a guideline document and templates for the things you make most often: social posts, decks, invoices, signage.',
    deliverables: [
      'Logo and logo system',
      'Colour palette with accessible pairings',
      'Typography system',
      'Iconography and graphic elements',
      'Brand guidelines',
      'Stationery, social and deck templates',
    ],
    questions: [
      'Does your logo fall apart on a phone screen or a dark background?',
      'Does every new designer reinvent the look?',
      'Are you about to raise, launch or enter a new market?',
    ],
    steps: [
      { title: 'Explore', body: 'Moodboards and three distinct directions, each tied back to the strategy.' },
      { title: 'Choose', body: 'You pick one route and we test it on real material: your website, a post, a card.' },
      { title: 'Refine', body: 'Drawing, spacing and colour are tuned until the system holds up at every size.' },
      { title: 'Systemise', body: 'Guidelines, files and templates so the brand stays consistent without us.' },
    ],
    timeline: '4 to 8 weeks',
    faqs: [
      { q: 'How many logo options will we see?', a: 'Three directions in the first round. Fewer, better options lead to a stronger result than twenty quick sketches.' },
      { q: 'Do we own the files?', a: 'Yes. On final payment you get full ownership and every source file: AI, SVG, PNG, PDF and the Figma library.' },
    ],
    legacy: ['logo-design', 'brand-identity', 'brand-guidelines', 'brand-design-build'],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX design',
    short: 'Apps, dashboards and products people understand on first use.',
    headline: 'Interfaces that feel obvious the first time someone opens them.',
    lead: 'We design web apps, mobile apps and dashboards. Research tells us where people get stuck, and design removes the reasons.',
    body: 'We map the flows that matter most to your business, test early with clickable prototypes and hand developers a component library with every state documented: empty, loading, error and done. Products get a design system, so the next feature is quicker to design than the last one.',
    deliverables: [
      'User research and journey mapping',
      'Information architecture',
      'Wireframes and clickable prototypes',
      'High-fidelity UI for web and mobile',
      'Design system in Figma',
      'Usability testing and developer handoff',
    ],
    questions: [
      'Do new users drop off before they reach the useful part?',
      'Is support answering the same how-do-I question every day?',
      'Is every new screen designed from scratch?',
    ],
    steps: [
      { title: 'Understand', body: 'Interviews, analytics and a walkthrough of the product as it is today.' },
      { title: 'Structure', body: 'Flows and wireframes for the journeys that matter most.' },
      { title: 'Design', body: 'High-fidelity screens, tested with users as a clickable prototype.' },
      { title: 'Ship', body: 'Design system, specs and reviews with your developers until it is live.' },
    ],
    timeline: '6 to 12 weeks',
    faqs: [
      { q: 'Do you work with our developers?', a: 'Yes. We join your standups during build, review pull requests for visual detail and answer questions in your Slack or Teams.' },
      { q: 'Can you redesign one part of the product first?', a: 'Often that is the best start. We pick the flow with the biggest drop-off, fix it and use it to set up the design system.' },
    ],
    legacy: ['ui-ux-design', 'app-design', 'ai-design', 'ui-ux-graphic-design'],
  },
  {
    slug: 'web-design',
    name: 'Websites',
    short: 'Marketing sites designed to convert and built to load fast.',
    headline: 'Your website is your best salesperson. Give it a better script.',
    lead: 'We design and build marketing websites that explain what you do in seconds and make it easy to take the next step.',
    body: 'Every page starts with a goal: book a call, start a trial, ask for a quote. We write the structure around it, design with your identity and build on a stack your team can update without calling us. Sites ship with SEO basics, analytics and fast load times on mid-range phones.',
    deliverables: [
      'Site map and conversion plan',
      'Copywriting support',
      'Responsive web design',
      'Interaction and motion design',
      'Development in React, Framer or Webflow',
      'SEO setup, analytics and launch',
    ],
    questions: [
      'Do visitors leave before they understand what you sell?',
      'Do you need a developer to change a headline?',
      'Does the site look different from your pitch deck?',
    ],
    steps: [
      { title: 'Plan', body: 'Goals, audience and a page-by-page outline with the messages for each.' },
      { title: 'Design', body: 'Desktop and mobile layouts with your real copy in place.' },
      { title: 'Build', body: 'Clean code, a CMS your team can use, and animation that stays smooth.' },
      { title: 'Launch', body: 'Redirects, SEO checks, analytics and a walkthrough for your team.' },
    ],
    timeline: '4 to 10 weeks',
    faqs: [
      { q: 'Which platform will you build on?', a: 'Whatever suits your team. Framer and Webflow for teams that want to edit visually, React or Next.js when the site needs custom logic.' },
      { q: 'Will we lose our Google rankings?', a: 'No. We map every old URL to its new home with redirects and keep titles and structured data in place.' },
    ],
    legacy: ['web-design'],
  },
  {
    slug: 'motion-graphics',
    name: 'Video & motion',
    short: 'Launch films, app walkthroughs, animated logos and campaign visuals.',
    headline: 'Make the brand move, then make it move people.',
    lead: 'We design the graphics and motion that carry your brand into ads, launches, decks and social feeds.',
    body: 'From an animated logo to a full launch film, we keep motion consistent with the identity: same timing, same easing, same personality. You get files sized for every placement and a motion guide so future animations match.',
    deliverables: [
      'Launch films and app walkthroughs',
      'Logo animation',
      'Product and explainer videos',
      'Illustration and iconography',
      'Ad creatives and key visuals',
      'Pitch and sales decks',
      'Motion guidelines',
    ],
    questions: [
      'Do your ads look different on every platform?',
      'Is there a launch coming up with nothing to show?',
      'Does your pitch deck undersell the product?',
    ],
    steps: [
      { title: 'Script', body: 'One idea per piece, written and storyboarded before anything moves.' },
      { title: 'Style', body: 'Frames that set the look, approved before animation starts.' },
      { title: 'Animate', body: 'Motion, sound and edit, with a review link at each stage.' },
      { title: 'Deliver', body: 'Exports for every channel, plus editable source files.' },
    ],
    timeline: '1 to 6 weeks',
    faqs: [
      { q: 'Can you make a monthly batch of creatives?', a: 'Yes. Many clients keep us on a monthly plan for ads, social and decks once the brand is set.' },
      { q: 'Do you do 3D?', a: 'Light 3D for product shots and logo reveals, yes. For heavy 3D or live action we bring in specialist partners and direct the work.' },
    ],
    legacy: ['graphics-design'],
  },
  {
    slug: 'digital-marketing',
    name: 'Digital marketing',
    short: 'SEO, paid campaigns, email and the reporting that ties it together.',
    headline: 'Get found by the people already looking for you.',
    lead: 'We plan and run search, paid and email marketing, and report on what brings in customers.',
    body: 'We begin with tracking, so every rupee and every visit can be traced to a result. Then we fix the technical SEO, write content that answers what buyers search for and run campaigns we can measure. You get one monthly report in plain language with what worked, what did not and what we will do next.',
    deliverables: [
      'Analytics and conversion tracking',
      'Technical and on-page SEO',
      'Content strategy and articles',
      'Google and Meta ad campaigns',
      'Email and lifecycle automation',
      'Monthly reporting',
    ],
    questions: [
      'Do you know which channel brings your best customers?',
      'Are you paying for ads that point to a weak landing page?',
      'Is your email list sitting unused?',
    ],
    steps: [
      { title: 'Measure', body: 'Analytics, pixels and conversion goals set up properly first.' },
      { title: 'Fix', body: 'Technical SEO, landing pages and the leaks in your funnel.' },
      { title: 'Grow', body: 'Content, campaigns and email running on a monthly plan.' },
      { title: 'Report', body: 'A short monthly report and a call to agree what changes next.' },
    ],
    timeline: 'Monthly, 3-month minimum',
    faqs: [
      { q: 'How soon will we see results?', a: 'Paid campaigns can bring leads in the first weeks. SEO usually takes three to six months to show steady growth, which is why we start both together.' },
      { q: 'Who owns the ad accounts?', a: 'You do. We work inside accounts in your name, so the data stays with you if we ever part ways.' },
    ],
    legacy: ['digital-marketing', 'digital-marketing-page', 'seo', 'email-marketing', 'analytics'],
  },
  {
    slug: 'social-media',
    name: 'Social media',
    short: 'Content and community on Instagram, LinkedIn, YouTube and X.',
    headline: 'Show up every week with something worth stopping for.',
    lead: 'We plan, design and publish content for Instagram, LinkedIn, YouTube and X, built from your brand system so the feed looks like you.',
    body: 'Each month starts with a content calendar tied to your launches and goals. We design posts, carousels, reels and thumbnails, write captions in your voice and handle publishing. For founders, we also ghost-write LinkedIn posts from short recorded conversations.',
    deliverables: [
      'Channel strategy and content pillars',
      'Monthly content calendar',
      'Post, carousel and reel design',
      'YouTube thumbnails and channel art',
      'Founder LinkedIn ghostwriting',
      'Community management and reporting',
    ],
    questions: [
      'Is your feed a mix of styles from different designers?',
      'Do you post only when someone remembers to?',
      'Is your founder\'s LinkedIn quieter than it should be?',
    ],
    steps: [
      { title: 'Audit', body: 'What works on your channels and on competitors\', and what to stop doing.' },
      { title: 'Plan', body: 'Pillars, formats and a calendar agreed a month ahead.' },
      { title: 'Create', body: 'Design, copy and editing, reviewed in one shared board.' },
      { title: 'Publish', body: 'Scheduling, replies and a monthly review of what to repeat.' },
    ],
    timeline: 'Monthly, 3-month minimum',
    faqs: [
      { q: 'Which platforms should we be on?', a: 'Usually two, done well. B2B companies tend to start with LinkedIn and YouTube, consumer brands with Instagram. We recommend after the audit.' },
      { q: 'Do you shoot photos and video?', a: 'For Bengaluru-based clients we organise shoots. Elsewhere we work with your footage or source local crews.' },
    ],
    legacy: [
      'social-media',
      'social-media-page',
      'youtube-marketing',
      'linkedin-marketing',
      'twitter-marketing',
      'instagram-marketing',
      'other-platforms',
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** old /services/<slug> path -> new slug, so links from the previous site keep working */
export const legacyServiceMap: Record<string, ServiceSlug> = Object.fromEntries(
  services.flatMap((s) => s.legacy.filter((l) => l !== s.slug).map((l) => [l, s.slug])),
);

/** How services are grouped in the header menu and on the services page. */
export const serviceGroups: { label: string; slugs: ServiceSlug[] }[] = [
  { label: 'Brand', slugs: ['brand-strategy', 'brand-identity'] },
  { label: 'Digital', slugs: ['ui-ux-design', 'web-design'] },
  { label: 'Growth', slugs: ['motion-graphics', 'social-media', 'digital-marketing'] },
];
