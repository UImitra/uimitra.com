import { motion, useReducedMotion, type TargetAndTransition } from 'framer-motion';
import type { ServiceSlug } from '../../data/services';
import { branded, getProject } from '../../data/work';
import { AppIcon, SocialPost } from '../brand/Applications';
import { BrowserFrame } from '../brand/Frames';
import { Mark } from '../brand/Marks';
import { ProductUI } from '../brand/ProductUI';

const [yatri, careerspace, fetchtails, webxela, ssv] = ['yatri-cloud', 'careerspace', 'fetchtails', 'webxela', 'siddhivinayak-classes'].map((s) => getProject(s)!);

const loop = { repeat: Infinity, repeatType: 'reverse' as const, ease: 'easeInOut' as const };

/** Small illustrative visual for each service, built from real portfolio pieces. */
export default function ServiceVisual({ slug }: { slug: ServiceSlug }) {
  const reduce = useReducedMotion();
  const anim = (a: TargetAndTransition, d = 4) => (reduce ? {} : { animate: a, transition: { duration: d, ...loop } });

  switch (slug) {
    case 'brand-strategy':
      return (
        <div className="relative grid h-full w-full place-items-center">
          <div className="absolute h-[70%] w-px bg-ink/15" />
          <div className="absolute h-px w-[80%] bg-ink/15" />
          <span className="eyebrow absolute top-[8%] text-mute">Premium</span>
          <span className="eyebrow absolute bottom-[8%] text-mute">Accessible</span>
          <span className="eyebrow absolute left-[4%] text-mute">Classic</span>
          <span className="eyebrow absolute right-[4%] text-mute">Modern</span>
          {[
            [28, 62],
            [38, 70],
            [62, 66],
            [30, 40],
          ].map(([x, y], i) => (
            <span key={i} className="absolute h-3 w-3 rounded-full bg-ink/25" style={{ left: `${x}%`, top: `${y}%` }} />
          ))}
          <motion.span
            className="absolute grid h-14 w-14 place-items-center rounded-full bg-brand text-[11px] font-medium text-white shadow-lg"
            style={{ left: '66%', top: '22%' }}
            {...anim({ scale: [1, 1.12, 1] }, 2.2)}
          >
            You
          </motion.span>
        </div>
      );
    case 'brand-identity':
      return (
        <div className="grid h-full w-full grid-cols-3 gap-2 p-2 sm:gap-3">
          {branded.slice(0, 6).map((p, i) => (
            <motion.div
              key={p.slug}
              className="grid place-items-center rounded-xl"
              style={{ background: p.theme.bg }}
              {...anim({ rotate: [0, i % 2 ? 3 : -3, 0] }, 3 + i * 0.4)}
            >
              <Mark project={p} className="h-1/2 w-1/2" />
            </motion.div>
          ))}
        </div>
      );
    case 'ui-ux-design':
      return (
        <div className="relative h-full w-full">
          <motion.div className="absolute left-0 top-[6%] w-[88%]" {...anim({ y: [0, -8, 0] }, 5)}>
            <BrowserFrame url={fetchtails.url}><ProductUI project={fetchtails} /></BrowserFrame>
          </motion.div>
          <motion.div className="absolute bottom-0 right-0 w-[52%]" {...anim({ y: [0, 10, 0] }, 6)}>
            <BrowserFrame url={careerspace.url} dark><ProductUI project={careerspace} /></BrowserFrame>
          </motion.div>
        </div>
      );
    case 'web-design':
      return (
        <div className="relative h-full w-full">
          <motion.div className="absolute inset-x-0 top-[10%]" {...anim({ y: [0, -10, 0] }, 5)}>
            <BrowserFrame url={webxela.url}><ProductUI project={webxela} /></BrowserFrame>
          </motion.div>
        </div>
      );
    case 'motion-graphics':
      return (
        <div className="grid h-full w-full place-items-center">
          <video
            src={ssv.film!.loop}
            poster={ssv.film!.poster}
            autoPlay={!reduce}
            muted
            loop
            playsInline
            aria-hidden
            className="aspect-video w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
          />
        </div>
      );
    case 'digital-marketing':
      return (
        <div className="relative flex h-full w-full flex-col justify-end rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:p-7">
          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            <p className="eyebrow text-mute">Organic sessions</p>
            <p className="mt-1 text-3xl font-medium tracking-tight">Trending up</p>
          </div>
          <svg viewBox="0 0 300 140" className="w-full" fill="none">
            {[30, 65, 100].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#0D0D0F" strokeOpacity="0.08" />)}
            <motion.path
              d="M0 128 C30 124 50 118 70 112 S110 104 130 92 S170 86 190 70 S240 44 260 30 S290 14 300 10"
              stroke="#ED184F"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
            <path d="M0 128 C30 124 50 118 70 112 S110 104 130 92 S170 86 190 70 S240 44 260 30 S290 14 300 10 V140 H0Z" fill="#ED184F" fillOpacity="0.06" />
          </svg>
        </div>
      );
    case 'social-media':
      return (
        <div className="relative h-full w-full">
          {[1, 0, 2].map((idx, i) => (
            <motion.div
              key={idx}
              className="absolute w-[54%]"
              style={{ left: `${8 + i * 19}%`, top: `${12 + (i === 1 ? -6 : 6)}%`, zIndex: i === 1 ? 2 : 1, rotate: (i - 1) * 7 }}
              {...anim({ y: [0, i === 1 ? -10 : 8, 0] }, 4 + i)}
            >
              <SocialPost p={[careerspace, yatri, fetchtails][i]} index={idx} />
            </motion.div>
          ))}
          <div className="absolute bottom-[4%] right-[4%] z-10"><AppIcon p={webxela} size="h-12 w-12" /></div>
        </div>
      );
  }
}
