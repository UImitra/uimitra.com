import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { nav, site } from '../../config/site';
import { getService, serviceGroups } from '../../data/services';
import { getProject } from '../../data/work';
import { Wordmark } from '../brand/Wordmark';
import { Arrow, Button } from '../ui/Button';
import { useTone } from './chrome';

const ease = [0.22, 1, 0.36, 1] as const;
const featured = getProject('yatri-school');

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { tone } = useTone();
  const { pathname } = useLocation();
  const lenis = useLenis();
  const closeTimer = useRef<number>();
  const openedByHover = useRef(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !open && !menu);
    setScrolled(y > 24);
  });

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open, lenis]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  // hover opens at once and closes after a short pause, so the pointer can cross the gap to the panel
  const enter = () => {
    window.clearTimeout(closeTimer.current);
    if (!menu) openedByHover.current = true;
    setMenu(true);
  };
  // a click right after hover-open keeps the menu open instead of toggling it shut
  const toggle = () => {
    if (openedByHover.current) openedByHover.current = false;
    else setMenu((m) => !m);
  };
  const leave = () => {
    closeTimer.current = window.setTimeout(() => {
      setMenu(false);
      openedByHover.current = false;
    }, 160);
  };

  const onDark = (tone === 'dark' && !scrolled && !menu) || open;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="wrap pt-3 sm:pt-4">
          <div
            className={`flex h-14 items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow,color] duration-500 sm:h-16 sm:pl-6 ${
              (scrolled || menu) && !open ? 'bg-paper/80 text-ink shadow-[0_1px_0_rgba(13,13,15,0.06)] backdrop-blur-xl' : onDark ? 'text-paper' : 'text-ink'
            }`}
          >
            <Link to="/" aria-label="UImitra home" className="relative z-10 flex items-center">
              <Wordmark className="h-[18px] w-auto sm:h-5" />
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {nav.map((n) =>
                n.to === '/services' ? (
                  <div key={n.to} onPointerEnter={enter} onPointerLeave={leave}>
                    <button
                      type="button"
                      onClick={toggle}
                      aria-expanded={menu}
                      aria-controls="services-menu"
                      className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] tracking-tight transition-opacity hover:opacity-100 ${
                        menu || pathname.startsWith('/services') ? 'opacity-100' : 'opacity-60'
                      }`}
                    >
                      {n.label}
                      <svg viewBox="0 0 10 10" className={`h-2.5 w-2.5 transition-transform duration-300 ${menu ? 'rotate-180' : ''}`} aria-hidden>
                        <path d="M2 3.5L5 6.5L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                      {pathname.startsWith('/services') && (
                        <motion.span layoutId="nav-dot" className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
                      )}
                    </button>
                  </div>
                ) : (
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
                ),
              )}
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

          <AnimatePresence>
            {menu && (
              <motion.div
                id="services-menu"
                onPointerEnter={enter}
                onPointerLeave={leave}
                initial={{ opacity: 0, y: -8, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.99 }}
                transition={{ duration: 0.35, ease }}
                className="absolute inset-x-0 top-full mx-auto hidden max-w-[1040px] origin-top px-[var(--gutter)] pt-2 md:block"
              >
                <ServicesMenu onPick={() => setMenu(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {menu && (
          <motion.div
            aria-hidden
            className="fixed inset-0 z-40 hidden bg-ink/10 backdrop-blur-[2px] md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenu(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink text-paper md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
          >
            <div className="wrap flex flex-1 flex-col justify-between gap-10 pb-8 pt-28">
              <ul className="space-y-1">
                {[{ label: 'Home', to: '/' }, ...nav].map((n, i) => (
                  <li key={n.to} className="overflow-hidden">
                    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease, delay: 0.25 + i * 0.06 }}>
                      <Link to={n.to} className="flex items-baseline gap-4 text-[12vw] font-medium leading-[1.05] tracking-[-0.045em]">
                        <span className="font-mono text-xs tracking-normal text-paper/40">0{i + 1}</span>
                        {n.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="space-y-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {serviceGroups.map((g) => (
                    <div key={g.label}>
                      <p className="eyebrow text-paper/40">{g.label}</p>
                      <ul className="mt-3 space-y-2">
                        {g.slugs.map((slug) => (
                          <li key={slug}>
                            <Link to={`/services/${slug}`} className="text-[15px] text-paper/80">
                              {getService(slug)?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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

/** Desktop services panel: three groups, then one piece of real work. */
function ServicesMenu({ onPick }: { onPick: () => void }) {
  const shot = featured?.shots?.[0];
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_minmax(0,1.1fr)] gap-2 rounded-[28px] bg-paper p-3 text-ink shadow-[0_30px_80px_-30px_rgba(13,13,15,0.35),0_0_0_1px_rgba(13,13,15,0.06)]">
      {serviceGroups.map((g, gi) => (
        <div key={g.label} className="p-3">
          <p className="eyebrow px-3 pb-2 pt-1 text-mute">{g.label}</p>
          <ul>
            {g.slugs.map((slug, i) => {
              const s = getService(slug);
              if (!s) return null;
              return (
                <motion.li
                  key={slug}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.04 * (gi * 2 + i) }}
                >
                  <Link to={`/services/${slug}`} onClick={onPick} className="group block rounded-2xl px-3 py-3 transition-colors duration-300 hover:bg-paper-2">
                    <span className="flex items-center gap-2 text-[15px] font-medium tracking-tight">
                      {s.name}
                      <Arrow className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-[13px] leading-snug text-ink/55">{s.short}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      ))}
      <div
        className="flex flex-col justify-between overflow-hidden rounded-[20px] p-5"
        style={{ background: featured?.theme.bg ?? '#171717', color: featured?.theme.fg ?? '#fff' }}
      >
        <Link to={featured ? `/work/${featured.slug}` : '/work'} onClick={onPick} className="group block">
          <p className="eyebrow opacity-50">Recent work</p>
          <p className="mt-2 flex items-center gap-2 text-lg font-medium tracking-tight">
            {featured?.name}
            <Arrow className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
          </p>
          {shot && (
            <img
              src={shot.src}
              alt=""
              className="mt-4 w-full rounded-lg shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02]"
            />
          )}
          <p className="mt-4 text-[13px] leading-snug opacity-60">{featured?.summary}</p>
        </Link>
        <div className="mt-4 flex items-center justify-between text-[13px]">
          <Link to="/services" onClick={onPick} className="link-underline opacity-70 hover:opacity-100">All services</Link>
          <Link to="/work" onClick={onPick} className="link-underline opacity-70 hover:opacity-100">All work</Link>
        </div>
      </div>
    </div>
  );
}
