import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { nav, site } from '../../config/site';
import { services } from '../../data/services';
import { Wordmark } from '../brand/Wordmark';
import { Button } from '../ui/Button';
import { useTone } from './chrome';

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { tone } = useTone();
  const { pathname } = useLocation();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open, lenis]);

  const onDark = (tone === 'dark' && !scrolled) || open;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="wrap pt-3 sm:pt-4">
          <div
            className={`flex h-14 items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow,color] duration-500 sm:h-16 sm:pl-6 ${
              scrolled && !open ? 'bg-paper/80 text-ink shadow-[0_1px_0_rgba(13,13,15,0.06)] backdrop-blur-xl' : onDark ? 'text-paper' : 'text-ink'
            }`}
          >
            <Link to="/" aria-label="UImitra home" className="relative z-10 flex items-center">
              <Wordmark className="h-[18px] w-auto sm:h-5" />
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-[15px] tracking-tight transition-opacity hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-60'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {n.label}
                      {isActive && (
                        <motion.span layoutId="nav-dot" className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-2 pr-3 text-[13px] opacity-60 lg:flex">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" />
                Taking new projects
              </span>
              <div className="hidden sm:block">
                <Button to="/contact" variant={onDark ? 'paper' : 'ink'} size="sm" magnetic={false}>
                  Start a project
                </Button>
              </div>
              <button
                onClick={() => setOpen((o) => !o)}
                className={`relative z-10 grid h-10 w-10 place-items-center rounded-full md:hidden ${onDark ? 'bg-paper text-ink' : 'bg-ink text-paper'}`}
                aria-expanded={open}
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                <span className="relative block h-3 w-4">
                  <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-500 ${open ? 'top-1.5 rotate-45' : 'top-0.5'}`} />
                  <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-500 ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink text-paper md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
          >
            <div className="wrap flex flex-1 flex-col justify-between pb-8 pt-28">
              <ul className="space-y-1">
                {[{ label: 'Home', to: '/' }, ...nav].map((n, i) => (
                  <li key={n.to} className="overflow-hidden">
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.06 }}
                    >
                      <Link to={n.to} className="flex items-baseline gap-4 text-[13vw] font-medium leading-[1.05] tracking-[-0.045em]">
                        <span className="font-mono text-xs tracking-normal text-paper/40">0{i + 1}</span>
                        {n.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap gap-2">
                  {services.slice(0, 5).map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-full border border-paper/15 px-3 py-1.5 text-sm text-paper/70">
                      {s.name}
                    </Link>
                  ))}
                </div>
                <div className="flex items-end justify-between border-t border-paper/10 pt-6 text-sm">
                  <div className="space-y-1">
                    <a href={`mailto:${site.email}`} className="block">{site.email}</a>
                    <a href={`tel:${site.phoneHref}`} className="block text-paper/60">{site.phone}</a>
                  </div>
                  <Button href={site.booking} variant="brand" size="sm" magnetic={false}>
                    Book a call
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
