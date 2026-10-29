import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
