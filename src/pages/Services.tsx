import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Page, Seo } from '../components/layout/chrome';
import ServiceVisual from '../components/home/ServiceVisual';
import { Engagements, Faq, generalFaqs } from '../components/home/Sections';
import { Arrow } from '../components/ui/Button';
import { SplitReveal } from '../components/ui/motion';
import { services } from '../data/services';

export default function Services() {
  const [hover, setHover] = useState(0);
  const active = services[hover];

  return (
    <Page>
      <Seo
        title="Services"
        path="/services"
        description="Brand strategy, brand identity, UI/UX design, websites, graphics and motion, digital marketing and social media from one studio."
      />
      <section className="wrap pb-16 pt-36 sm:pt-44">
        <p className="eyebrow text-mute">Services</p>
        <h1 className="mt-6 max-w-5xl text-display-l font-medium">
          <SplitReveal text={'Everything a brand needs\nto *launch and grow.*'} immediate delay={0.4} />
        </h1>
      </section>

      <section className="wrap pb-24 sm:pb-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <ul className="border-t border-ink/10 lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-ink/10" onPointerEnter={() => setHover(i)}>
                <Link to={`/services/${s.slug}`} className="group flex items-center gap-6 py-7 sm:py-9">
                  <span className="w-8 font-mono text-xs text-mute">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1">
                    <span className={`block text-[clamp(1.9rem,4vw,3.4rem)] font-medium leading-none tracking-[-0.04em] transition-all duration-500 text-ink ${hover === i ? 'lg:translate-x-2' : 'lg:text-ink/35'}`}>
                      {s.name}
                    </span>
                    <span className={`mt-3 block max-w-md text-sm text-ink/60 transition-opacity duration-500 ${hover === i ? 'lg:opacity-100' : 'lg:opacity-0'}`}>{s.short}</span>
                  </span>
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-500 border border-ink/15 ${hover === i ? 'lg:rotate-45 lg:border-brand lg:bg-brand lg:text-white' : ''}`}>
                    <Arrow className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32 aspect-[4/4.4] overflow-hidden rounded-[28px] bg-paper-2 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col"
                >
                  <div className="flex-1"><ServiceVisual slug={active.slug} /></div>
                  <div className="mt-6 flex items-end justify-between gap-6">
                    <p className="max-w-xs text-sm text-ink/60">{active.deliverables.slice(0, 3).join(' · ')}</p>
                    <span className="eyebrow text-mute">{active.timeline}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Engagements />
      <Faq items={generalFaqs} />
    </Page>
  );
}
