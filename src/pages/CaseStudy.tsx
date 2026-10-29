import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Page, Seo, useTone } from '../components/layout/chrome';
import { AppIcon, BusinessCard, PhoneScreen, Poster, SocialPost } from '../components/brand/Applications';
import { LogoSheet, Palette, TypeSpecimen, onColor } from '../components/brand/BrandKit';
import { BrowserFrame, PhoneFrame } from '../components/brand/Frames';
import { Film } from '../components/brand/Film';
import { Lockup, Mark } from '../components/brand/Marks';
import { ProductUI, Shot } from '../components/brand/ProductUI';
import { Arrow, Button } from '../components/ui/Button';
import { Parallax, Reveal, SplitReveal, ease } from '../components/ui/motion';
import { getService } from '../data/services';
import { getProject, nextProject, type Project } from '../data/work';
import NotFound from './NotFound';

export default function CaseStudy() {
  const { slug = '' } = useParams();
  const p = getProject(slug);
  if (!p) return <NotFound />;
  return <Study p={p} />;
}

/* A case study is mostly pictures: hero, screens, identity, applications. Words are kept to labels and one paragraph. */
function Study({ p }: { p: Project }) {
  const { bg, fg } = p.theme;
  const darkHero = onColor(bg) === '#FFFFFF';
  const { setTone } = useTone();
  const reduce = useReducedMotion();
  const heroShot = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroShot, offset: ['start end', 'center center'] });
  const shotScale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const shotRotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const next = nextProject(p.slug);
  const screens = p.shots?.slice(1) ?? [];
  const site = p.url?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  useEffect(() => {
    setTone(darkHero ? 'dark' : 'light');
    return () => setTone('light');
  }, [darkHero, setTone]);

  return (
    <Page>
      <Seo title={`${p.name} case study`} path={`/work/${p.slug}`} description={`${p.summary} ${p.disciplines.join(', ')} by UImitra.`} />

      {/* hero */}
      <section style={{ background: bg, color: fg }} className="relative overflow-hidden">
        <div className="wrap pb-14 pt-36 sm:pt-44">
          <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.35 }}>
            <Link to="/work" className="eyebrow inline-flex items-center gap-2 opacity-60 hover:opacity-100">
              <Arrow className="h-3 w-3 -rotate-[135deg]" /> All work
            </Link>
          </motion.div>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
            <div className="max-w-3xl">
              <motion.div initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease, delay: 0.45 }}>
                <Lockup project={p} size="xl" />
              </motion.div>
              <h1 className="mt-8 text-display-s font-medium">
                <SplitReveal text={p.summary} immediate delay={0.6} stagger={0.03} />
              </h1>
            </div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.9 }}
              className="space-y-3 text-sm"
            >
              <p className="opacity-60">{p.disciplines.join(' · ')}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b pb-1" style={{ borderColor: `${fg}40` }}>
                  {site} <Arrow className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          </div>
        </div>

        <div ref={heroShot} className="wrap pb-20 sm:pb-28" style={{ perspective: 1600 }}>
          <motion.div style={reduce ? undefined : { scale: shotScale, rotateX: shotRotate }} className="origin-bottom">
            <BrowserFrame url={p.url} dark={darkHero}>
              <ProductUI project={p} />
            </BrowserFrame>
          </motion.div>
        </div>
      </section>

      {/* one paragraph and three facts */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-lead text-ink/75">{p.brief}</p>
          </Reveal>
          <dl className="grid grid-cols-3 gap-6 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
            {p.facts.map((f) => (
              <Reveal key={f.label}>
                <dt className="eyebrow text-mute">{f.label}</dt>
                <dd className="mt-2 text-[15px] font-medium tracking-tight sm:text-lg">{f.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* film */}
      {p.film && (
        <section className="bg-paper pb-24 sm:pb-36">
          <div className="wrap">
            <Reveal><Film p={p} /></Reveal>
          </div>
        </section>
      )}

      {/* screens */}
      {screens.length > 0 && (
        <section className="bg-paper pb-24 sm:pb-36">
          <div className="wrap grid gap-x-6 gap-y-10 md:grid-cols-2 sm:gap-y-14">
            {screens.map((s, i) => {
              // with an odd count the first screen runs full width so no row is left half empty
              const wide = screens.length % 2 === 1 && i === 0;
              const right = !wide && (screens.length % 2 === 1 ? i - 1 : i) % 2 === 1;
              return (
                <Reveal key={s.src} delay={right ? 0.08 : 0} className={wide ? 'md:col-span-2' : right ? 'md:translate-y-14' : ''}>
                  <figure>
                    <BrowserFrame url={p.url} className="transition-transform duration-700 ease-out hover:-translate-y-1.5">
                      <Shot src={s.src} alt={s.alt} />
                    </BrowserFrame>
                    <figcaption className="mt-3 text-[13px] text-ink/50">{s.alt}</figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* phone screens, when there are enough for a row */}
      {p.phones && p.phones.length > 2 && (
        <section className="overflow-hidden py-24 sm:py-32" style={{ background: p.theme.soft }}>
          <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-4 pb-10 sm:gap-6 sm:px-[max(1.5rem,calc((100vw-1400px)/2))]">
            {p.phones.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="w-[62vw] max-w-[260px] shrink-0 snap-center rounded-[22px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-2"
              />
            ))}
          </div>
        </section>
      )}

      {p.logo && <Identity p={p} />}

      {/* services + call to action */}
      <section className="border-t border-ink/10 bg-paper py-12">
        <div className="wrap flex flex-wrap items-center gap-x-8 gap-y-4">
          {p.services.map((s) => {
            const svc = getService(s);
            return svc ? (
              <Link key={s} to={`/services/${s}`} className="link-underline text-[15px] text-ink/70 hover:text-ink">{svc.name}</Link>
            ) : null;
          })}
          <div className="ml-auto"><Button to="/contact" variant="ink">Start a similar project</Button></div>
        </div>
      </section>

      {/* next */}
      <Link to={`/work/${next.slug}`} className="group block overflow-hidden" style={{ background: next.theme.bg, color: next.theme.fg }}>
        <div className="wrap flex min-h-[50svh] flex-col justify-between py-16 sm:py-20">
          <p className="eyebrow opacity-60">Next project</p>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="transition-transform duration-[1s] ease-out group-hover:translate-x-4">
              <Lockup project={next} size="xl" />
            </div>
            <span className="grid h-20 w-20 place-items-center rounded-full transition-transform duration-700 group-hover:rotate-45 sm:h-28 sm:w-28" style={{ background: next.theme.accent, color: onColor(next.theme.accent) }}>
              <Arrow className="h-6 w-6" />
            </span>
          </div>
        </div>
      </Link>
    </Page>
  );
}

/** Logo, type, colour and the brand in use. Only for projects with a logo of ours. */
function Identity({ p }: { p: Project }) {
  const { bg, fg, accent } = p.theme;
  return (
    <>
      {/* identity */}
      <section className="bg-paper-2 py-24 sm:py-36">
        <div className="wrap">
          <Label>Identity</Label>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal><LogoSheet p={p} /></Reveal>
            <Reveal delay={0.08}><TypeSpecimen p={p} /></Reveal>
            <Reveal className="lg:col-span-2"><Palette p={p} /></Reveal>
          </div>
        </div>
      </section>

      {/* the mark, large, on the brand colour */}
      <section style={{ background: accent }} className="overflow-hidden">
        <div className="wrap grid min-h-[70svh] place-items-center py-24">
          <Parallax speed={0.12}>
            <Mark project={p} fg={bg} accent={fg} on={accent} className="h-[46vw] max-h-[420px] w-[46vw] max-w-[420px]" />
          </Parallax>
        </div>
      </section>

      {/* applications */}
      <section className="bg-paper py-24 sm:py-36">
        <div className="wrap">
          <Label>In use</Label>
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <Reveal className="rounded-[24px] bg-paper-2 p-6 sm:p-12 lg:col-span-7">
              <div className="mx-auto flex max-w-xl flex-col gap-4">
                <div className="w-[88%] -rotate-2"><BusinessCard p={p} /></div>
                <div className="ml-auto w-[88%] rotate-2"><BusinessCard p={p} side="back" /></div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="grid place-items-center rounded-[24px] bg-paper-3 p-8 sm:p-12 lg:col-span-5">
              <div className="w-full max-w-[320px]"><Poster p={p} /></div>
            </Reveal>
            <Reveal className="relative flex items-center justify-center gap-4 overflow-hidden rounded-[24px] bg-paper-2 p-8 sm:gap-8 sm:p-14 lg:col-span-7">
              <div className="relative w-[44%] max-w-[250px] translate-y-6"><PhoneFrame><PhoneScreen p={p} index={0} /></PhoneFrame></div>
              <div className="relative w-[44%] max-w-[250px] -translate-y-6"><PhoneFrame><PhoneScreen p={p} index={p.phones && p.phones.length > 1 ? 1 : 2} /></PhoneFrame></div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <div className="grid h-full min-h-[260px] place-items-center rounded-[24px] p-8 sm:p-12" style={{ background: bg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}>
                <div className="flex items-end gap-4">
                  <AppIcon p={p} size="h-24 w-24" />
                  <AppIcon p={p} size="h-16 w-16" />
                  <AppIcon p={p} size="h-10 w-10" />
                </div>
              </div>
            </Reveal>
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.08} className="lg:col-span-4">
                <SocialPost p={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <p className="eyebrow text-mute">{children}</p>
      <span className="h-px flex-1 bg-ink/10" />
    </div>
  );
}
