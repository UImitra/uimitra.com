import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { getProject, type Project } from '../../data/work';
import { Mark } from '../brand/Marks';
import { Arrow } from '../ui/Button';
import { SplitReveal } from '../ui/motion';

/*
 * Logos shown the way they get used: cropped, enlarged, repeated, inverted.
 * Each tile has two colourways; hover swaps from `a` to `b`.
 */

type Way = { bg: string; tone: 'color' | 'white' };
type Tile = {
  slug: string;
  span: string;
  a: Way;
  b: Way;
  kind: 'crop' | 'lockup' | 'pattern';
  /** Where the enlarged mark sits for a crop tile. */
  place?: string;
  speed: number;
};

const tiles: Tile[] = [
  { slug: 'webxela', kind: 'crop', span: 'col-span-2 row-span-2 lg:col-span-7', a: { bg: '#DBFAC4', tone: 'color' }, b: { bg: '#080808', tone: 'white' }, place: '-bottom-[12%] right-[4%] w-[56%]', speed: 1 },
  { slug: 'careerspace', kind: 'crop', span: 'col-span-1 lg:col-span-5', a: { bg: '#0A1226', tone: 'white' }, b: { bg: '#F7CB58', tone: 'color' }, place: 'left-1/2 top-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2', speed: 0.4 },
  { slug: 'fetchtails', kind: 'crop', span: 'col-span-1 lg:col-span-5', a: { bg: '#F09358', tone: 'white' }, b: { bg: '#FFF4EA', tone: 'color' }, place: 'right-[6%] -bottom-[36%] w-[46%]', speed: 0.7 },
  { slug: 'nishaan', kind: 'crop', span: 'col-span-2 row-span-2 lg:col-span-4', a: { bg: '#14294B', tone: 'white' }, b: { bg: '#C8D3E9', tone: 'color' }, place: 'left-1/2 top-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2', speed: 0.5 },
  { slug: 'yatri-cloud', kind: 'crop', span: 'col-span-1 lg:col-span-4', a: { bg: '#007CFF', tone: 'white' }, b: { bg: '#FFFFFF', tone: 'color' }, place: '-right-[16%] -bottom-[40%] w-[72%]', speed: 0.8 },
  { slug: 'careerspace', kind: 'lockup', span: 'col-span-1 lg:col-span-4', a: { bg: '#F7CB58', tone: 'color' }, b: { bg: '#0A1226', tone: 'white' }, speed: 0.3 },
  { slug: 'fetchtails', kind: 'pattern', span: 'col-span-1 lg:col-span-4', a: { bg: '#FFF4EA', tone: 'color' }, b: { bg: '#51392A', tone: 'white' }, speed: 0.6 },
  { slug: 'saarthi', kind: 'crop', span: 'col-span-1 lg:col-span-4', a: { bg: '#C8F04B', tone: 'color' }, b: { bg: '#0F0F0F', tone: 'white' }, place: 'left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2', speed: 0.5 },
];

export default function MarkWall() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} className="bg-paper py-24 sm:py-36">
      <div className="wrap">
        <div className="mb-12 flex items-end justify-between gap-6 sm:mb-16">
          <h2 className="text-display-l font-medium">
            <SplitReveal text={'Marks,\n*made to last.*'} />
          </h2>
          <p className="eyebrow hidden text-mute sm:block">Hover to flip</p>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-2 sm:auto-rows-[240px] sm:gap-3 lg:grid-cols-12">
          {tiles.map((t, i) => {
            const p = getProject(t.slug);
            return p ? <Cell key={i} t={t} p={p} progress={scrollYProgress} /> : null;
          })}
        </div>
      </div>
    </section>
  );
}

function Cell({ t, p, progress }: { t: Tile; p: Project; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const y = useTransform(progress, [0, 1], [70 * t.speed, -70 * t.speed]);
  const rotate = useTransform(progress, [0, 1], [-6 * t.speed, 6 * t.speed]);

  return (
    <Link
      to={`/work/${p.slug}`}
      aria-label={`${p.name} case study`}
      className={`group relative isolate overflow-hidden rounded-[20px] sm:rounded-[28px] ${t.span}`}
      style={{ background: t.a.bg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}
    >
      {/* the second colourway wipes up from the bottom on hover */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        style={{ background: t.b.bg }}
      />
      <motion.div style={reduce ? undefined : { y, rotate: t.kind === 'crop' ? rotate : 0 }} className="absolute inset-0">
        <Art t={t} p={p} />
      </motion.div>
      <span
        className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[13px] font-medium text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-5 sm:left-5"
      >
        {p.name}
        <Arrow className="h-3 w-3" />
      </span>
    </Link>
  );
}

/** Both colourways stacked; the hover state crossfades between them. */
function Art({ t, p }: { t: Tile; p: Project }) {
  return (
    <>
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
        <Figure t={t} p={p} way={t.a} />
      </div>
      <div className="absolute inset-0 opacity-0 transition-opacity delay-150 duration-500 group-hover:opacity-100">
        <Figure t={t} p={p} way={t.b} />
      </div>
    </>
  );
}

function Figure({ t, p, way }: { t: Tile; p: Project; way: Way }) {
  const fg = way.tone === 'white' ? '#FFFFFF' : '#000000';

  if (t.kind === 'lockup' && p.lockup) {
    return (
      <div className="grid h-full place-items-center p-8">
        <img src={way.tone === 'white' ? p.lockup.white : p.lockup.src} alt="" draggable={false} className="max-h-[46%] w-[78%] object-contain transition-transform duration-700 group-hover:scale-105" />
      </div>
    );
  }

  if (t.kind === 'pattern') {
    return (
      <div className="absolute -inset-[20%] grid rotate-[-12deg] grid-cols-5 place-items-center gap-6 transition-transform duration-[1.2s] ease-out group-hover:rotate-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <Mark key={i} project={p} fg={fg} className={`h-10 w-10 sm:h-12 sm:w-12 ${i % 2 ? 'opacity-40' : ''}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={`absolute aspect-square transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 ${t.place}`}>
      <Mark project={p} fg={fg} className="h-full w-full" />
    </div>
  );
}
