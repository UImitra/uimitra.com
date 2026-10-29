import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { Project } from '../../data/work';
import { Arrow } from '../ui/Button';

/**
 * A project film. Shows a short silent loop while on screen; a click swaps in
 * the full cut with sound and controls. The full file only loads on that click.
 */
export function Film({ p, className = '' }: { p: Project; className?: string }) {
  const film = p.film!;
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  // play the loop only while it is visible, and never under reduced motion
  useEffect(() => {
    const v = ref.current;
    if (!v || playing || reduce) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, [playing, reduce]);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    setPlaying(true);
    v.src = film.src;
    v.muted = false;
    v.loop = false;
    v.controls = true;
    v.play().catch(() => {});
  };

  return (
    <div className={`group relative aspect-video overflow-hidden rounded-[18px] bg-ink sm:rounded-[26px] ${className}`}>
      <video
        ref={ref}
        src={film.loop}
        poster={film.poster}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
        aria-label={`${film.title}, ${p.name}`}
      />
      {!playing && (
        <button
          onClick={start}
          className="absolute inset-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/55 via-transparent to-transparent p-5 text-left text-white sm:p-8"
        >
          <span>
            <span className="block text-lg font-medium tracking-tight sm:text-2xl">{film.title}</span>
            <span className="mt-1 block text-[13px] opacity-70">{p.name} · {film.length}</span>
          </span>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
            <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" aria-hidden><path d="M7 4.5v15l12.5-7.5z" /></svg>
            <span className="sr-only">Play with sound</span>
          </span>
        </button>
      )}
      {film.youtube && (
        <a
          href={film.youtube}
          target="_blank"
          rel="noreferrer"
          className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-[12px] text-white backdrop-blur transition-colors hover:bg-black/60 sm:right-6 sm:top-6"
        >
          YouTube <Arrow className="h-2.5 w-2.5" />
        </a>
      )}
    </div>
  );
}
