import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { services, type Service } from '../../data/services';
import { Arrow } from '../ui/Button';
import { Reveal, SplitReveal } from '../ui/motion';
import ServiceVisual from './ServiceVisual';

/** Desktop: the section pins and the service cards slide sideways as you scroll. Mobile: a plain list. */
export default function ServicesRail() {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section className="bg-ink text-paper">
      {/* desktop pinned rail */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: reduce ? 'auto' : `calc(100vh + ${distance}px)` }}>
        <div className={`${reduce ? '' : 'sticky top-0'} flex h-screen flex-col justify-center overflow-hidden`}>
          <div className="wrap mb-10 flex items-end justify-between">
            <div>
              <p className="eyebrow text-paper/50">What we do</p>
              <h2 className="mt-5 text-display-m font-medium">
                <SplitReveal text="Seven services. *One* team." />
              </h2>
            </div>
            <div className="w-56">
              <div className="h-px w-full bg-paper/15">
                <motion.div className="h-px bg-brand" style={{ width: bar }} />
              </div>
              <p className="eyebrow mt-3 text-right text-paper/40">Scroll</p>
            </div>
          </div>
          <motion.div ref={track} style={reduce ? undefined : { x }} className={`flex gap-5 pl-[var(--gutter)] pr-[var(--gutter)] ${reduce ? 'no-scrollbar overflow-x-auto pb-4' : ''}`}>
            {services.map((s, i) => (
              <Panel key={s.slug} s={s} i={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* mobile list */}
      <div className="wrap py-24 lg:hidden">
        <p className="eyebrow text-paper/50">What we do</p>
        <h2 className="mt-5 text-display-m font-medium">
          <SplitReveal text="Seven services. *One* team." />
        </h2>
        <ul className="mt-12 space-y-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug}>
              <Link to={`/services/${s.slug}`} className="block overflow-hidden rounded-3xl bg-ink-2 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-paper/40">{String(i + 1).padStart(2, '0')}</span>
                  <Arrow className="h-4 w-4 text-paper/50" />
                </div>
                <div className="mt-6 aspect-[4/3] rounded-2xl bg-paper p-3 text-ink">
                  <ServiceVisual slug={s.slug} />
                </div>
                <h3 className="mt-6 text-3xl font-medium tracking-tight">{s.name}</h3>
                <p className="mt-2 text-paper/60">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Panel({ s, i }: { s: Service; i: number }) {
  return (
    <Link
      to={`/services/${s.slug}`}
      data-cursor="Explore"
      className="group grid h-[62vh] w-[min(78vw,980px)] shrink-0 grid-cols-2 gap-8 rounded-[28px] bg-ink-2 p-8 transition-colors duration-700 hover:bg-ink-3 xl:p-10"
    >
      <div className="flex flex-col">
        <span className="font-mono text-xs text-paper/40">{String(i + 1).padStart(2, '0')} / 07</span>
        <h3 className="mt-auto text-[clamp(2.25rem,3.6vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.04em]">{s.name}</h3>
        <p className="mt-4 max-w-sm text-paper/60">{s.short}</p>
        <ul className="mt-6 space-y-1.5 text-sm text-paper/50">
          {s.deliverables.slice(0, 4).map((d) => (
            <li key={d} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />{d}</li>
          ))}
        </ul>
        <span className="mt-8 inline-flex items-center gap-3 text-[15px]">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand group-hover:text-white">
            <Arrow className="h-4 w-4" />
          </span>
          Explore {s.name.toLowerCase()}
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl bg-paper p-4 text-ink transition-transform duration-700 group-hover:scale-[0.98]">
        <ServiceVisual slug={s.slug} />
      </div>
    </Link>
  );
}
