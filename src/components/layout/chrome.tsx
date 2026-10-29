import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ReactLenis, useLenis } from 'lenis/react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { site } from '../../config/site';

/* ---------- smooth scroll ---------- */

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash, lenis]);
  return null;
}

/* ---------- nav tone (light text over dark page heroes) ---------- */

type Tone = 'light' | 'dark';
const ToneCtx = createContext<{ tone: Tone; setTone: (t: Tone) => void }>({ tone: 'light', setTone: () => {} });

export function ToneProvider({ children }: { children: ReactNode }) {
  const [tone, setTone] = useState<Tone>('light');
  return <ToneCtx.Provider value={{ tone, setTone }}>{children}</ToneCtx.Provider>;
}

export const useTone = () => useContext(ToneCtx);

/** Call from a page whose hero is dark so the nav starts with light text. */
export function useDarkHero() {
  const { setTone } = useTone();
  useEffect(() => {
    setTone('dark');
    return () => setTone('light');
  }, [setTone]);
}

/* ---------- cursor ---------- */

export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(fine && !reduce);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');
      setLabel(t ? t.dataset.cursor || '' : null);
    };
    const leave = () => setHidden(true);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  const big = label !== null && label !== '';

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className={`-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full ${big ? 'bg-brand text-white' : 'bg-white mix-blend-difference'}`}
        animate={{ width: big ? 92 : 10, height: big ? 92 : 10, opacity: hidden ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      >
        {big && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12px] font-medium tracking-tight"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ---------- SEO ---------- */

export function Seo({ title, description, path = '', image }: { title?: string; description?: string; path?: string; image?: string }) {
  const full = title ? `${title} | UImitra` : 'UImitra | Brand & design studio';
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;
  const img = image ?? `${site.url}/Uimitra.jpg`;
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}

/* ---------- page transition ---------- */

export function Page({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <>
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[65] origin-top bg-ink"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
        />
      )}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
}

/* ---------- local clock for the footer ---------- */

export function useLocalTime(timeZone = 'Asia/Kolkata') {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);
  return new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone }).format(now);
}
