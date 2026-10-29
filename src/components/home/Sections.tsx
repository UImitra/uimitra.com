import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { site } from '../../config/site';
import { Button } from '../ui/Button';
import { Reveal, ScrollWords, SplitReveal } from '../ui/motion';

/* ---------- statement ---------- */

export function Statement() {
  return (
    <section className="bg-paper py-28 sm:py-44">
      <div className="wrap">
        <p className="eyebrow mb-10 text-mute">Why UImitra</p>
        <ScrollWords
          className="max-w-[22ch] text-display-m font-medium sm:max-w-[26ch]"
          text="People decide what they think of a company in a few seconds. We spend weeks making sure those seconds go *your* way."
        />
        <div className="mt-16 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {[
            ['One team, start to finish', 'The people who write your positioning also design the logo, build the site and run the first campaign. Nothing gets lost between agencies.'],
            ['Designed for the next stage', 'We design for the company you are becoming, so the brand still fits after the next raise or the next market.'],
            ['Files you own', 'Every source file, font licence note and template is yours on handover, so you can take the brand to any designer later.'],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <h3 className="text-xl font-medium tracking-tight">{t}</h3>
              <p className="mt-3 text-ink/60">{b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- process ---------- */

const steps = [
  { t: 'Discover', d: 'Week 1', b: 'Workshops with your founders and team, interviews with a handful of customers and a close look at the competition. We leave with a written brief you sign off.' },
  { t: 'Define', d: 'Weeks 2 to 3', b: 'Positioning, story and the creative direction. You see three distinct routes for the identity, each tied back to the brief.' },
  { t: 'Design', d: 'Weeks 3 to 8', b: 'The chosen route grows into the full system: logo, colour, type, website, product screens and launch assets. Weekly reviews, one shared Figma file.' },
  { t: 'Deliver', d: 'Launch', b: 'Guidelines, source files, templates and a handover call. If we built the site, we stay on for launch week and fix anything that comes up.' },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="bg-paper-2 py-24 sm:py-36">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-mute">How we work</p>
            <h2 className="mt-5 text-display-m font-medium">
              <SplitReveal text={'Four stages.\nNo *surprises.*'} />
            </h2>
            <Reveal>
              <p className="mt-6 max-w-md text-lead text-ink/65">
                You always know what we are working on, what you need to review and what comes next. A typical brand and website project takes eight to twelve weeks.
              </p>
            </Reveal>
          </div>
        </div>
        <div ref={ref} className="relative lg:col-span-6 lg:col-start-7">
          <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-ink/10">
            <motion.div className="w-px bg-brand" style={{ height: h }} />
          </div>
          <ol className="space-y-16 sm:space-y-24">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} className="relative pl-12">
                <span className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-ink/15 bg-paper-2 font-mono text-[10px]">{i + 1}</span>
                <p className="eyebrow text-mute">{s.d}</p>
                <h3 className="mt-3 text-display-s font-medium">{s.t}</h3>
                <p className="mt-4 max-w-lg text-ink/65">{s.b}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- engagement models ---------- */

const plans = [
  {
    name: 'Brand Sprint',
    time: '3 to 5 weeks',
    for: 'New companies that need to look credible before a launch or a raise.',
    items: ['Positioning workshop', 'Logo and core identity', 'Colour and type system', 'Social and deck templates', 'Mini guidelines'],
  },
  {
    name: 'Brand + Website',
    time: '8 to 12 weeks',
    for: 'Growing companies whose brand and site no longer match what they sell.',
    items: ['Everything in Brand Sprint', 'Full brand guidelines', 'Website design and build', 'Copywriting support', 'SEO setup and analytics', 'Launch assets'],
    featured: true,
  },
  {
    name: 'Growth Partner',
    time: 'Monthly',
    for: 'Teams that want one studio for design, social and marketing every month.',
    items: ['Monthly design hours', 'Social content and publishing', 'SEO and paid campaigns', 'Landing pages', 'Monthly report and planning call'],
  },
];

export function Engagements() {
  return (
    <section className="bg-paper py-24 sm:py-36">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="eyebrow text-mute">Ways to work with us</p>
          <h2 className="mt-5 text-display-m font-medium">
            <SplitReveal text="Pick the one that fits *where you are.*" />
          </h2>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-[24px] p-7 sm:p-9 ${p.featured ? 'bg-ink text-paper' : 'bg-paper-2'}`}>
                <div className="flex items-center justify-between">
                  <span className="eyebrow opacity-50">{p.time}</span>
                  {p.featured && <span className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">Recommended</span>}
                </div>
                <h3 className="mt-8 text-3xl font-medium tracking-tight">{p.name}</h3>
                <p className={`mt-3 ${p.featured ? 'text-paper/60' : 'text-ink/60'}`}>{p.for}</p>
                <ul className={`mt-8 space-y-3 border-t pt-8 text-[15px] ${p.featured ? 'border-paper/10' : 'border-ink/10'}`}>
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0 text-brand" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Button to={`/contact?plan=${encodeURIComponent(p.name)}`} variant={p.featured ? 'brand' : 'ink'} className="w-full justify-between" magnetic={false}>
                    Ask about {p.name}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-mute">
          Every project is quoted after a short call, based on scope. Not sure which fits? <a href={site.booking} target="_blank" rel="noreferrer" className="text-ink underline underline-offset-4">Book 30 minutes</a> and we will tell you honestly.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function Faq({ items, title = 'Questions we get asked a lot' }: { items: { q: string; a: string }[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-paper py-24 sm:py-36">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow text-mute">FAQ</p>
          <h2 className="mt-5 text-display-s font-medium">{title}</h2>
          <p className="mt-6 text-ink/60">
            Something else on your mind? Write to <a className="text-ink underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <ul className="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-7 lg:col-start-6">
          {items.map((f, i) => (
            <li key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-tight sm:text-xl"
              >
                {f.q}
                <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15">
                  <span className="absolute h-px w-3 bg-current" />
                  <motion.span className="absolute h-3 w-px bg-current" animate={{ rotate: open === i ? 90 : 0 }} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-ink/65">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const generalFaqs = [
  { q: 'How much does a project cost?', a: 'It depends on scope. After a 30-minute call we send a fixed quote with what is included, the timeline and the payment schedule.' },
  { q: 'How long does a brand identity take?', a: 'A focused identity takes four to eight weeks. Brand plus website usually takes eight to twelve. We agree the dates in the proposal and share a weekly plan.' },
  { q: 'Do you work with companies outside India?', a: 'Yes. We work remotely with teams in other time zones and keep a few hours of overlap for calls and reviews.' },
  { q: 'Who will we work with?', a: 'A small senior team: a strategist, a lead designer and, when needed, a developer and a marketer. The people in the first call are the people doing the work.' },
  { q: 'Can you work with our in-house team?', a: 'Often that is the best setup. We set the system and the first pieces, then train your team and stay on call for reviews.' },
  { q: 'What do you need from us to start?', a: 'A signed proposal, the first payment and an hour with the founders for the kickoff. We send a short questionnaire before the first workshop.' },
];
