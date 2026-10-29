import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { projects, type Project } from '../../data/work';
import { BrowserFrame, PhoneFrame } from '../brand/Frames';
import { PhoneScreen } from '../brand/Applications';
import { Lockup } from '../brand/Marks';
import { ProductUI } from '../brand/ProductUI';
import { Arrow, Button } from '../ui/Button';
import { Reveal, SplitReveal } from '../ui/motion';

/** Selected work as full-width cards that stick and stack while you scroll. */
/* Lead with the projects that have the most real screens to show. */
const featured = ['careerspace', 'webxela', 'fetchtails', 'yatri-cloud'];

export default function WorkStack({ items = featured.map((s) => projects.find((p) => p.slug === s)!) }: { items?: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section className="relative bg-paper pb-24 pt-8 sm:pb-32">
      <div className="wrap">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <div>
            <p className="eyebrow text-mute">Selected work</p>
            <h2 className="mt-5 text-display-l font-medium">
              <SplitReveal text={'Brands we\nhelped *build.*'} />
            </h2>
          </div>
          <Reveal>
            <Button to="/work" variant="line">All projects</Button>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          {items.map((p, i) => (
            <Card key={p.slug} p={p} i={i} total={items.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ p, i, total, progress }: { p: Project; i: number; total: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i - 1) * 0.04]);
  const dim = useTransform(progress, [start, start + 1 / total], [0, i < total - 1 ? 0.35 : 0]);

  return (
    <div className="sticky h-[88svh] min-h-[560px] pb-6" style={{ top: `calc(5.5rem + ${i * 14}px)` }}>
      <motion.article
        style={reduce ? undefined : { scale }}
        className="relative h-full origin-top overflow-hidden rounded-[22px] sm:rounded-[32px]"
      >
        <Link
          to={`/work/${p.slug}`}
         
          className="group grid h-full grid-rows-[auto_1fr] gap-4 p-6 sm:p-10 lg:grid-cols-12 lg:grid-rows-1 lg:gap-10 lg:p-14"
          style={{ background: p.theme.bg, color: p.theme.fg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}
        >
          <div className="flex flex-col lg:col-span-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs opacity-50">{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
              <span className="eyebrow opacity-50">{p.sector}</span>
            </div>
            <div className="mt-6 lg:mt-12">
              <Lockup project={p} size="lg" />
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed opacity-75 sm:text-lg">{p.summary}</p>
            <ul className="mt-6 hidden flex-wrap gap-2 sm:flex">
              {p.disciplines.map((d) => (
                <li key={d} className="rounded-full px-3 py-1 text-[13px]" style={{ background: `${p.theme.fg}14` }}>{d}</li>
              ))}
            </ul>
            <span className="mt-auto hidden items-center gap-3 pt-8 text-[15px] font-medium lg:inline-flex">
              <span className="grid h-11 w-11 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45" style={{ background: p.theme.accent, color: p.theme.bg }}>
                <Arrow className="h-4 w-4" />
              </span>
              View case study
            </span>
          </div>
          <div className="relative flex items-end pb-[18%] sm:pb-[12%] lg:col-span-8 lg:items-center lg:pb-0">
            <div className="w-[94%] transition-transform duration-[1.2s] ease-out group-hover:-translate-y-2 group-hover:scale-[1.015] lg:w-full">
              <BrowserFrame url={p.url}>
                <ProductUI project={p} />
              </BrowserFrame>
            </div>
            <div className="absolute bottom-0 right-0 w-[34%] max-w-[200px] rotate-[4deg] lg:hidden">
              <PhoneFrame>
                <PhoneScreen p={p} index={0} />
              </PhoneFrame>
            </div>
          </div>
        </Link>
        {!reduce && <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink" />}
      </motion.article>
    </div>
  );
}
