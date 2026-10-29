import { Link } from 'react-router-dom';
import { Page, Seo } from '../components/layout/chrome';
import { legal, type LegalDoc } from '../data/legal';

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Legal({ doc }: { doc: LegalDoc }) {
  const d = legal[doc];
  return (
    <Page>
      <Seo title={d.title} description={d.description} path={d.path} />
      <section className="wrap pb-12 pt-36 sm:pt-44">
        <p className="eyebrow text-mute">Legal</p>
        <h1 className="mt-6 text-display-l font-medium">{d.title}</h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {(Object.keys(legal) as LegalDoc[]).map((k) => (
            <Link
              key={k}
              to={legal[k].path}
              className={`rounded-full border px-4 py-2 text-sm ${k === doc ? 'border-ink bg-ink text-paper' : 'border-ink/15 hover:border-ink/50'}`}
            >
              {legal[k].title}
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-12 pb-28 lg:grid-cols-12">
        <nav className="hidden lg:col-span-3 lg:block" aria-label="On this page">
          <ul className="sticky top-32 space-y-2 text-sm text-ink/60">
            {d.sections.map((s) => (
              <li key={s.title}>
                <a href={`#${slug(s.title)}`} className="hover:text-ink">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-12 lg:col-span-8 lg:col-start-5">
          {d.sections.map((s) => (
            <article key={s.title} id={slug(s.title)} className="scroll-mt-32 border-t border-ink/10 pt-8">
              <h2 className="text-2xl font-medium tracking-tight">{s.title}</h2>
              <div className="mt-4 space-y-3 text-ink/70">
                {s.body.map((b, i) =>
                  b.startsWith('• ') ? (
                    <p key={i} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand" />{b.slice(2)}</p>
                  ) : (
                    <p key={i}>{b}</p>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
