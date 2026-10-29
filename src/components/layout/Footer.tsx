import { FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { site } from '../../config/site';
import { services } from '../../data/services';
import { projects } from '../../data/work';
import { subscribeToNewsletter } from '../../lib/newsletter';
import { Wordmark } from '../brand/Wordmark';
import { Arrow, Button } from '../ui/Button';
import { useLocalTime } from './chrome';

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-35%', '0%']);
  const time = useLocalTime();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState('sending');
    const res = await subscribeToNewsletter(email);
    setState(res.success ? 'done' : 'error');
    if (res.success) setEmail('');
  };

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink text-paper">
      <div className="wrap pt-24 sm:pt-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-paper/50">Got a project?</p>
            <h2 className="mt-6 text-display-m font-medium">
              Tell us what you are building. We reply <span className="font-serif italic font-normal">within a day.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/contact" variant="brand" size="lg">Start a project</Button>
              <Button href={site.booking} variant="line-light" size="lg">Book a 30-min call</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[15px] sm:grid-cols-3 lg:col-span-5">
            <FooterCol title="Work" links={projects.slice(0, 5).map((p) => ({ label: p.name, to: `/work/${p.slug}` }))} />
            <FooterCol title="Services" links={services.map((s) => ({ label: s.name, to: `/services/${s.slug}` }))} />
            <FooterCol
              title="Studio"
              links={[
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Privacy', to: '/privacy-policy' },
                { label: 'Terms', to: '/terms' },
                { label: 'Cookies', to: '/cookie-policy' },
              ]}
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-paper/10 pt-10 md:grid-cols-12">
          <div className="space-y-2 md:col-span-4">
            <p className="eyebrow text-paper/40">Say hello</p>
            <a href={`mailto:${site.email}`} className="link-underline block text-xl">{site.email}</a>
            <a href={`tel:${site.phoneHref}`} className="link-underline inline-block text-paper/60">{site.phone}</a>
          </div>
          <div className="space-y-2 md:col-span-4">
            <p className="eyebrow text-paper/40">Studio</p>
            <p className="max-w-xs text-paper/60">{site.address}</p>
            <p className="text-paper/60">
              <span className="text-paper">{time}</span> in Bengaluru
            </p>
          </div>
          <form onSubmit={subscribe} className="md:col-span-4">
            <label htmlFor="nl" className="eyebrow text-paper/40">One email a month. Our best work and what we learned.</label>
            <div className="mt-3 flex items-center border-b border-paper/25 focus-within:border-paper">
              <input
                id="nl"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 bg-transparent text-paper placeholder:text-paper/30 focus:outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-brand" disabled={state === 'sending'}>
                <Arrow className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 h-5 text-sm text-paper/50" aria-live="polite">
              {state === 'done' && 'You are on the list.'}
              {state === 'error' && 'That did not go through. Try again?'}
            </p>
          </form>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-paper/50">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-underline hover:text-paper">{s.label}</a>
              </li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()} UImitra. {site.tagline}</p>
        </div>
      </div>

      <motion.div style={reduce ? undefined : { y }} className="wrap pb-4 pt-16 text-paper" aria-hidden>
        <Wordmark className="h-auto w-full" />
      </motion.div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-5 text-paper/40">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="link-underline text-paper/75 hover:text-paper">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
