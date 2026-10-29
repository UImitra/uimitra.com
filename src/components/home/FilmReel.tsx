import { Link } from 'react-router-dom';
import { films, type Project } from '../../data/work';
import { Film } from '../brand/Film';
import { Arrow } from '../ui/Button';
import { Reveal, SplitReveal } from '../ui/motion';

/** The films we have made, playing silently until someone clicks for sound. */
export default function FilmReel({ items = films, title = 'In *motion.*' }: { items?: Project[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section className="bg-ink py-24 text-paper sm:py-36">
      <div className="wrap">
        <h2 className="text-display-l font-medium">
          <SplitReveal text={title} />
        </h2>
        <div className={`mt-12 grid gap-x-6 gap-y-12 sm:mt-16 ${items.length > 1 ? 'lg:grid-cols-2' : ''}`}>
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className={i % 2 ? 'lg:translate-y-16' : ''}>
              <Film p={p} />
              <Link to={`/work/${p.slug}`} className="group mt-4 inline-flex items-center gap-2 text-[15px] text-paper/60 transition-colors hover:text-paper">
                {p.name} case study
                <Arrow className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
