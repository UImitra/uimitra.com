export const site = {
  name: 'UImitra',
  url: 'https://uimitra.com',
  tagline: 'UI meets trust. UX meets Mitra.',
  description:
    'UImitra is a brand and design studio in Bengaluru. We design identities, websites, products and campaigns for companies that want to lead their category.',
  email: 'info@uimitra.com',
  phone: '+91 97248 23602',
  phoneHref: '+919724823602',
  whatsapp: 'https://wa.me/919724823602',
  booking: 'https://calendly.com/theuimitra/30min',
  address: 'E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru 560103, India',
  city: 'Bengaluru, India',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/uimitra' },
    { label: 'Instagram', href: 'https://www.instagram.com/uimitra/' },
    { label: 'X', href: 'https://x.com/uimitra' },
    { label: 'YouTube', href: 'https://www.youtube.com/@uimitra?sub_confirmation=1' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1AUHKSY93e/' },
  ],
  appsScriptUrl: import.meta.env.VITE_APPS_SCRIPT_URL as string | undefined,
};

export const nav = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Studio', to: '/about' },
  { label: 'Contact', to: '/contact' },
];
