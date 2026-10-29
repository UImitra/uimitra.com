import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Page, Seo } from '../components/layout/chrome';
import { BrowserFrame } from '../components/brand/Frames';
import { Lockup } from '../components/brand/Marks';
import { ProductUI } from '../components/brand/ProductUI';
import { Arrow, Button } from '../components/ui/Button';
import { Reveal, SplitReveal } from '../components/ui/motion';
import MarkWall from '../components/home/MarkWall';
import { services } from '../data/services';
import { projects } from '../data/work';

export default function Work() {
  const [filter, setFilter] = useState<string>('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const used = useMemo(() => services.filter((s) => projects.some((p) => p.services.includes(s.slug))), []);
  const list = filter === 'all' ? projects : projects.filter((p) => p.services.includes(filter as never));

  return (
    <Page>
      <Seo
        title="Work"
        path="/work"
        description="Selected brand identities, websites and product design by UImitra: Yatri Cloud, Career Space, FetchTails, Webxela, Nishaan and more."
      />
      <section className="wrap pb-16 pt-36 sm:pt-44">
        <p className="eyebrow text-mute">Work · {projects.length} projects</p>
        <h1 className="mt-6 text-display-l font-medium">
          <SplitReveal text={'Identities, products\nand *the sites that sell them.*'} immediate delay={0.4} />
        </h1>
      </section>

      <section className="wrap">
        <div className="sticky top-20 z-20 -mx-2 mb-10 flex flex-wrap items-center justify-between gap-3 rounded-full bg-paper/85 px-2 py-2 backdrop-blur-md sm:top-24">
          <div className="no-scrollbar flex gap-1 overflow-x-auto">
            {[{ slug: 'all', name: 'All' }, ...used].map((s) => (
              <button
                key={s.slug}
                onClick={() => setFilter(s.slug)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${filter === s.slug ? 'text-paper' : 'text-ink/60 hover:text-ink'}`}
              >
                {filter === s.slug && <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span className="relative">{s.name}</span>
              </button>
            ))}
          </div>
          <div className="hidden gap-1 rounded-full bg-paper-2 p-1 text-sm sm:flex">
            {(['grid', 'list'] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`rounded-full px-3 py-1 capitalize ${view === v ? 'bg-paper shadow-sm' : 'text-ink/50'}`}>{v}</button>
            ))}
          </div>
        </div>

        {view === 'grid' ? (
          <motion.div layout className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                >
                  <Link to={`/work/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3.2] overflow-hidden rounded-[22px] sm:rounded-[28px]" style={{ background: p.theme.bg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}>
                      <div className="absolute inset-x-[7%] top-[16%] transition-transform duration-[1.1s] ease-out group-hover:-translate-y-3 group-hover:scale-[1.03]">
                        <BrowserFrame url={p.url}>
                          <ProductUI project={p} />
                        </BrowserFrame>
                      </div>
                      <div className="absolute left-5 top-5 sm:left-7 sm:top-6">
                        <Lockup project={p} size="sm" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-6">
                      <h2 className="flex items-center gap-2 text-xl font-medium tracking-tight">
                        {p.name}
                        <Arrow className="h-3 w-3 opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100" />
                      </h2>
                      <p className="truncate text-sm text-ink/50">{p.disciplines.slice(0, 3).join(' · ')}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <ul className="border-t border-ink/10">
            {list.map((p) => (
              <li key={p.slug} className="border-b border-ink/10">
                <Link to={`/work/${p.slug}`} className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-paper-2 sm:px-4">
                  <span className="col-span-12 text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:col-span-4 sm:text-4xl">{p.name}</span>
                  <span className="col-span-6 text-sm text-ink/60 sm:col-span-3">{p.sector}</span>
                  <span className="col-span-6 text-sm text-ink/60 sm:col-span-4">{p.disciplines.join(', ')}</span>
                  <span className="hidden justify-self-end sm:col-span-1 sm:block">
                    <span className="block h-4 w-4 rounded-full transition-transform duration-500 group-hover:scale-150" style={{ background: p.theme.accent }} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <MarkWall />

      <section className="wrap pb-28 sm:pb-40">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-paper-2 p-8 sm:p-14 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl text-display-s font-medium">Your project could be the next one on this page.</h2>
          <Button to="/contact" variant="brand" size="lg">Start a project</Button>
        </Reveal>
      </section>
    </Page>
  );
}
