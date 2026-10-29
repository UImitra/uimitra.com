import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { site } from '../../config/site';
import { projects } from '../../data/work';
import { AppIcon } from '../brand/Applications';
import { Lockup } from '../brand/Marks';
import { Button } from '../ui/Button';
import { Marquee, SplitReveal, ease } from '../ui/motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative">
      <motion.div style={reduce ? undefined : { scale, borderRadius: radius }} className="origin-top overflow-hidden bg-paper">
        <div className="wrap flex min-h-[86svh] flex-col pb-10 pt-32 sm:min-h-[100svh] sm:pt-40">
          <motion.div style={reduce ? undefined : { opacity: fade }} className="flex flex-1 flex-col">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.5 }}
              className="eyebrow flex flex-wrap items-center gap-x-6 gap-y-2 text-mute"
            >
              <span>Brand & design studio</span>
              <span className="hidden h-px w-10 bg-ink/20 sm:block" />
              <span>{site.city}</span>
            </motion.div>

            <h1 className="mt-8 text-display-xl font-medium">
              <SplitReveal text={'We build brands\npeople *remember.*'} immediate delay={0.55} stagger={0.08} />
            </h1>

            <div className="mt-auto grid gap-10 pt-14 lg:grid-cols-12 lg:items-end">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 1.1 }}
                className="max-w-xl text-lead text-ink/70 lg:col-span-6"
              >
                Strategy, identity, websites, products and marketing from one team. We work with founders who want to lead their category and need the brand to look the part.
              </motion.p>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 1.25 }}
                className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end"
              >
                <Button to="/contact" variant="brand" size="lg">Start a project</Button>
                <Button to="/work" variant="line" size="lg">See the work</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="relative -mt-2 pb-16"
      >
        <Marquee duration={55}>
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
             
              className="group mr-4 flex h-44 w-[300px] shrink-0 flex-col justify-between rounded-2xl p-5 transition-transform duration-700 ease-out hover:-rotate-1 hover:scale-[1.02] sm:mr-5 sm:h-56 sm:w-[400px] sm:p-7"
              style={{ background: p.theme.bg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}
            >
              <div className="flex items-start justify-between">
                <Lockup project={p} size="sm" />
                <AppIcon p={p} size="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
              <div className="flex items-end justify-between gap-4" style={{ color: p.theme.fg }}>
                <p className="max-w-[230px] text-[13px] leading-snug opacity-70 sm:text-sm">{p.summary}</p>
                <span className="eyebrow shrink-0 opacity-50">{p.disciplines[0]}</span>
              </div>
            </Link>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
