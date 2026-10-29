import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/work';
import { ApplicationsSheet, LogoSheet, Palette, TypeSpecimen } from '../brand/BrandKit';
import { Mark } from '../brand/Marks';
import { Arrow } from '../ui/Button';
import { Reveal, SplitReveal } from '../ui/motion';

const tabs = ['Logo', 'Colour', 'Type', 'Applications'] as const;

/** Pick a project, then flip through the parts of its brand kit. */
export default function KitExplorer() {
  const [pi, setPi] = useState(0);
  const [tab, setTab] = useState<(typeof tabs)[number]>('Logo');
  const p = projects[pi];

  return (
    <section className="bg-paper py-24 sm:py-36">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-mute">Inside a brand kit</p>
            <h2 className="mt-5 text-display-m font-medium">
              <SplitReveal text={'A logo is one file.\nA brand is a *system.*'} />
            </h2>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-lead text-ink/65">
              Every identity we hand over includes the mark, the colours with their jobs, the type and the templates your team will use daily. Try it on our recent projects.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
            <div className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1" role="tablist" aria-label="Project">
              {projects.map((x, i) => (
                <button
                  key={x.slug}
                  role="tab"
                  aria-selected={pi === i}
                  onClick={() => setPi(i)}
                  className={`flex shrink-0 items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-sm transition-colors duration-300 ${pi === i ? 'bg-ink text-paper' : 'hover:bg-ink/5'}`}
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full" style={{ background: x.theme.bg }}>
                    <Mark project={x} className="h-4 w-4" />
                  </span>
                  {x.name}
                </button>
              ))}
            </div>
            <div className="flex gap-1 rounded-full bg-paper-2 p-1" role="tablist" aria-label="Kit section">
              {tabs.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className="relative rounded-full px-3.5 py-1.5 text-sm sm:px-4"
                >
                  {tab === t && <motion.span layoutId="kit-tab" className="absolute inset-0 rounded-full bg-paper shadow-sm" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  <span className="relative">{t}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-6 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.slug + tab}
                initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                {tab === 'Logo' && <LogoSheet p={p} />}
                {tab === 'Colour' && <Palette p={p} />}
                {tab === 'Type' && <TypeSpecimen p={p} />}
                {tab === 'Applications' && <ApplicationsSheet p={p} />}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
            <p className="max-w-xl text-mute">{p.approach[0].title}. {p.approach[0].body}</p>
            <Link to={`/work/${p.slug}`} className="group inline-flex items-center gap-2 font-medium">
              Full {p.name} case study
              <Arrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
