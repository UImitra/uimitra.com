import { Link, useParams } from 'react-router-dom';
import { Page, Seo } from '../components/layout/chrome';
import ServiceVisual from '../components/home/ServiceVisual';
import { Faq } from '../components/home/Sections';
import { BrowserFrame } from '../components/brand/Frames';
import { Lockup } from '../components/brand/Marks';
import { ProductUI } from '../components/brand/ProductUI';
import { Arrow, Button } from '../components/ui/Button';
import { Reveal, ScrollWords, SplitReveal } from '../components/ui/motion';
import { site } from '../config/site';
import { getService, services } from '../data/services';
import { projects } from '../data/work';
import NotFound from './NotFound';

export default function Service() {
  const { slug = '' } = useParams();
  const s = getService(slug);
  if (!s) return <NotFound />;

  const related = projects.filter((p) => p.services.includes(s.slug)).slice(0, 4);
  const idx = services.indexOf(s);
  const next = services[(idx + 1) % services.length];

  return (
    <Page>
      <Seo title={s.name} path={`/services/${s.slug}`} description={`${s.lead} ${s.deliverables.slice(0, 4).join(', ')}.`} />

      <section className="wrap grid gap-12 pb-20 pt-36 sm:pt-44 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Link to="/services" className="eyebrow inline-flex items-center gap-2 text-mute hover:text-ink">
            <Arrow className="h-3 w-3 -rotate-[135deg]" /> Services / {String(idx + 1).padStart(2, '0')}
          </Link>
          <h1 className="mt-8 text-display-l font-medium">
            <SplitReveal text={s.name} immediate delay={0.4} />
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-8 max-w-xl text-lead text-ink/70">{s.lead}</p>
          </Reveal>
          <Reveal delay={0.6} className="mt-10 flex flex-wrap gap-3">
            <Button to={`/contact?service=${s.slug}`} variant="brand" size="lg">Get a quote</Button>
            <Button href={site.booking} variant="line" size="lg">Book a call</Button>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="lg:col-span-5">
          <div className="aspect-square rounded-[28px] bg-paper-2 p-5 sm:p-7">
            <ServiceVisual slug={s.slug} />
          </div>
        </Reveal>
      </section>

      <section className="bg-ink py-24 text-paper sm:py-36">
        <div className="wrap">
          <p className="eyebrow mb-10 text-paper/50">{s.timeline}</p>
          <ScrollWords className="max-w-[24ch] text-display-m font-medium" text={s.headline} />
          <div className="mt-16 grid gap-12 border-t border-paper/10 pt-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-paper/70">{s.body}</p>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-6 text-paper/40">What you get</p>
              <ul className="grid gap-px overflow-hidden rounded-2xl bg-paper/10 sm:grid-cols-2">
                {s.deliverables.map((d, i) => (
                  <Reveal as="li" key={d} delay={i * 0.04} className="flex items-start gap-4 bg-ink p-5">
                    <span className="font-mono text-[11px] text-brand">{String(i + 1).padStart(2, '0')}</span>
                    <span>{d}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-36">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-mute">Is this for you?</p>
            <h2 className="mt-5 text-display-s font-medium">If you nodded at one of these, let&apos;s talk.</h2>
          </div>
          <ul className="space-y-4 lg:col-span-6 lg:col-start-7">
            {s.questions.map((q, i) => (
              <Reveal as="li" key={q} delay={i * 0.06} className="flex gap-5 rounded-2xl bg-paper-2 p-6 text-xl tracking-tight">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                {q}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-2 py-24 sm:py-36">
        <div className="wrap">
          <p className="eyebrow text-mute">Process</p>
          <h2 className="mt-5 text-display-m font-medium">
            <SplitReveal text="How the work *runs.*" />
          </h2>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.steps.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 0.07} className="flex min-h-[240px] flex-col rounded-[22px] bg-paper p-7">
                <span className="font-mono text-xs text-mute">0{i + 1}</span>
                <h3 className="mt-auto text-2xl font-medium tracking-tight">{st.title}</h3>
                <p className="mt-3 text-sm text-ink/60">{st.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper py-24 sm:py-36">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-mute">Related work</p>
                <h2 className="mt-5 text-display-m font-medium">{s.name} in practice</h2>
              </div>
              <Button to="/work" variant="line">All work</Button>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <Link to={`/work/${p.slug}`} className="group block">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[24px]" style={{ background: p.theme.bg }}>
                      <div className="absolute inset-x-[8%] top-[20%] transition-transform duration-[1.1s] ease-out group-hover:-translate-y-3">
                        <BrowserFrame url={p.url}><ProductUI project={p} /></BrowserFrame>
                      </div>
                      <div className="absolute left-6 top-6"><Lockup project={p} size="sm" /></div>
                    </div>
                    <p className="mt-4 text-ink/60">{p.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq items={s.faqs} title={`${s.name}: common questions`} />

      <Link to={`/services/${next.slug}`} className="group block border-t border-ink/10 bg-paper">
        <div className="wrap flex items-center justify-between gap-6 py-14 sm:py-20">
          <div>
            <p className="eyebrow text-mute">Next service</p>
            <p className="mt-3 text-display-m font-medium transition-transform duration-700 group-hover:translate-x-3">{next.name}</p>
          </div>
          <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-paper transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand">
            <Arrow className="h-5 w-5" />
          </span>
        </div>
      </Link>
    </Page>
  );
}
