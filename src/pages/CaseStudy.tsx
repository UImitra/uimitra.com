import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Page, Seo, useTone } from '../components/layout/chrome';
import { AppIcon, BusinessCard, Poster, SocialPost, Story } from '../components/brand/Applications';
import { LogoSheet, Palette, TypeSpecimen, onColor } from '../components/brand/BrandKit';
import { BrowserFrame, PhoneFrame } from '../components/brand/Frames';
import { Lockup, Mark } from '../components/brand/Marks';
import { ProductUI } from '../components/brand/ProductUI';
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

function Study({ p }: { p: Project }) {
  const { bg, fg, accent } = p.theme;
  const darkHero = onColor(bg) === '#FFFFFF';
  const { setTone } = useTone();
  const reduce = useReducedMotion();
  const heroShot = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroShot, offset: ['start end', 'center center'] });
  const shotScale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const shotRotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const next = nextProject(p.slug);

  useEffect(() => {
    setTone(darkHero ? 'dark' : 'light');
    return () => setTone('light');
  }, [darkHero, setTone]);

  return (
    <Page>
      <Seo title={`${p.name} case study`} path={`/work/${p.slug}`} description={`${p.summary} ${p.disciplines.join(', ')} by UImitra.`} />

      {/* hero */}
      <section style={{ background: bg, color: fg }} className="relative overflow-hidden">
        <div className="wrap pb-16 pt-36 sm:pt-44">
          <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.35 }}>
            <Link to="/work" className="eyebrow inline-flex items-center gap-2 opacity-60 hover:opacity-100">
              <Arrow className="h-3 w-3 -rotate-[135deg]" /> All work
            </Link>
          </motion.div>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <motion.div initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease, delay: 0.45 }}>
                <Lockup project={p} size="xl" />
              </motion.div>
              <h1 className="mt-10 text-display-s font-medium">
                <SplitReveal text={p.summary} immediate delay={0.6} stagger={0.03} />
              </h1>
            </div>
            <motion.dl
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.9 }}
              className="grid grid-cols-2 gap-x-6 gap-y-6 text-sm lg:col-span-4 lg:col-start-9"
            >
              <div>
                <dt className="eyebrow opacity-50">Client</dt>
                <dd className="mt-2">{p.client}</dd>
              </div>
              <div>
                <dt className="eyebrow opacity-50">Sector</dt>
                <dd className="mt-2">{p.sector}</dd>
              </div>
              <div className="col-span-2">
                <dt className="eyebrow opacity-50">What we did</dt>
                <dd className="mt-2">{p.disciplines.join(', ')}</dd>
              </div>
              {p.url && (
                <div className="col-span-2">
                  <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b pb-1" style={{ borderColor: `${fg}40` }}>
                    Visit {p.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} <Arrow className="h-3 w-3" />
                  </a>
                </div>
              )}
            </motion.dl>
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

      {/* facts */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="wrap grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {p.facts.map((f) => (
            <Reveal key={f.label} className="py-8 sm:px-8 sm:first:pl-0">
              <p className="eyebrow text-mute">{f.label}</p>
              <p className="mt-3 text-2xl font-medium tracking-tight">{f.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* brief */}
      <section className="bg-paper py-24 sm:py-36">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-mute">The brief</p>
          </div>
          <div className="space-y-8 lg:col-span-7">
            <Reveal>
              <p className="text-display-s font-medium">{p.brief}</p>
            </Reveal>
            <Reveal>
              <p className="max-w-2xl text-lead text-ink/65">{p.intro}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* approach chapters */}
      <section className="bg-paper pb-24 sm:pb-36">
        <div className="wrap space-y-24 sm:space-y-36">
          {p.approach.map((a, i) => (
            <div key={a.title} className="grid items-center gap-10 lg:grid-cols-12">
              <div className={`lg:col-span-4 ${i % 2 ? 'lg:order-2 lg:col-start-9' : ''}`}>
                <Reveal>
                  <span className="font-mono text-xs text-mute">0{i + 1}</span>
                  <h3 className="mt-4 text-display-s font-medium">{a.title}</h3>
                  <p className="mt-5 text-ink/65">{a.body}</p>
                </Reveal>
              </div>
              <Reveal className={`lg:col-span-7 ${i % 2 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-6'}`}>
                <div className="min-h-[320px]">
                  {i === 0 && <LogoSheet p={p} />}
                  {i === 1 && <Palette p={p} />}
                  {i === 2 && <TypeSpecimen p={p} />}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* mark detail on brand colour */}
      <section style={{ background: accent, color: bg }} className="overflow-hidden">
        <div className="wrap grid min-h-[80svh] place-items-center py-24">
          <Parallax speed={0.12}>
            <Mark project={p} fg={bg} accent={fg} className="h-[46vw] max-h-[460px] w-[46vw] max-w-[460px]" />
          </Parallax>
        </div>
      </section>

      {/* applications */}
      <section className="bg-paper-2 py-24 sm:py-36">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-mute">Applications</p>
              <h2 className="mt-5 text-display-m font-medium">
                <SplitReveal text="The system, *in use.*" />
              </h2>
            </div>
            {p.type && (
              <p className="max-w-sm text-sm text-ink/60">
                Set in {p.type.display}
                {p.type.text !== p.type.display ? ` and ${p.type.text}` : ''}. Palette of {p.palette.length} colours, each with one job.
              </p>
            )}
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            <Reveal className="rounded-[24px] bg-paper p-6 sm:p-12 lg:col-span-7">
              <div className="mx-auto flex max-w-xl flex-col gap-4">
                <div className="w-[88%] -rotate-2"><BusinessCard p={p} /></div>
                <div className="ml-auto w-[88%] rotate-2"><BusinessCard p={p} side="back" /></div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="grid place-items-center rounded-[24px] bg-paper-3 p-8 sm:p-12 lg:col-span-5">
              <div className="w-full max-w-[340px]"><Poster p={p} /></div>
            </Reveal>
            <Reveal className="relative flex items-center justify-center gap-4 overflow-hidden rounded-[24px] p-8 sm:gap-8 sm:p-14 lg:col-span-7">
              <div aria-hidden className="absolute inset-0" style={{ background: p.theme.soft, opacity: 0.35 }} />
              <div className="relative w-[44%] max-w-[260px] translate-y-6"><PhoneFrame><Story p={p} index={0} /></PhoneFrame></div>
              <div className="relative w-[44%] max-w-[260px] -translate-y-6"><PhoneFrame><Story p={p} index={2} /></PhoneFrame></div>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col justify-between gap-10 rounded-[24px] bg-paper p-8 sm:p-12 lg:col-span-5">
              <div className="flex items-end gap-4">
                <AppIcon p={p} size="h-24 w-24" />
                <AppIcon p={p} size="h-16 w-16" />
                <AppIcon p={p} size="h-10 w-10" />
              </div>
              <div className="rounded-2xl p-6" style={{ background: bg, color: fg }}>
                <p className="eyebrow opacity-50">Favicon and app icon</p>
                <p className="mt-3 text-sm opacity-75">The mark is drawn to stay sharp from 16px browser tabs up to a store listing.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* campaign */}
      <section className="overflow-hidden bg-paper py-24 sm:py-36">
        <div className="wrap">
          <p className="eyebrow text-mute">Campaign and social</p>
          <h2 className="mt-5 max-w-3xl text-display-m font-medium">
            <SplitReveal text="Launch posts your team can *make again* without us." />
          </h2>
        </div>
        <div className="wrap mt-14 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <SocialPost p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* services involved */}
      <section className="border-t border-ink/10 bg-paper py-16">
        <div className="wrap flex flex-wrap items-center gap-x-10 gap-y-4">
          <p className="eyebrow text-mute">Services on this project</p>
          {p.services.map((s) => {
            const svc = getService(s);
            return svc ? (
              <Link key={s} to={`/services/${s}`} className="link-underline text-lg">{svc.name}</Link>
            ) : null;
          })}
          <div className="ml-auto"><Button to="/contact" variant="ink">Start a similar project</Button></div>
        </div>
      </section>

      {/* next */}
      <Link to={`/work/${next.slug}`} className="group block overflow-hidden" style={{ background: next.theme.bg, color: next.theme.fg }}>
        <div className="wrap flex min-h-[60svh] flex-col justify-between py-16 sm:py-20">
          <p className="eyebrow opacity-60">Next project</p>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="transition-transform duration-[1s] ease-out group-hover:translate-x-4">
              <Lockup project={next} size="xl" />
              <p className="mt-6 max-w-lg opacity-70">{next.summary}</p>
            </div>
            <span className="grid h-20 w-20 place-items-center rounded-full transition-transform duration-700 group-hover:rotate-45 sm:h-28 sm:w-28" style={{ background: next.theme.accent, color: next.theme.bg }}>
              <Arrow className="h-6 w-6" />
            </span>
          </div>
        </div>
      </Link>
    </Page>
  );
}
