import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Page, Seo } from '../components/layout/chrome';
import { Button } from '../components/ui/Button';
import { branded } from '../data/work';
import { Mark } from '../components/brand/Marks';

export default function NotFound() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [12, -12]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-16, 16]), { stiffness: 120, damping: 18 });

  return (
    <Page>
      <Seo title="Page not found" />
      <section
        ref={ref}
        onPointerMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          mx.set((e.clientX - r.left) / r.width);
          my.set((e.clientY - r.top) / r.height);
        }}
        className="wrap flex min-h-[100svh] flex-col items-start justify-center pb-20 pt-36"
        style={{ perspective: 1200 }}
      >
        <motion.div style={{ rotateX: rx, rotateY: ry }} className="flex gap-3">
          {branded.slice(0, 3).map((p) => (
            <div key={p.slug} className="grid h-24 w-24 place-items-center rounded-3xl sm:h-36 sm:w-36" style={{ background: p.theme.bg }}>
              <Mark project={p} className="h-1/2 w-1/2" />
            </div>
          ))}
        </motion.div>
        <p className="eyebrow mt-14 text-mute">Error 404</p>
        <h1 className="mt-4 text-display-l font-medium">
          This page wandered <span className="font-serif italic font-normal">off-brand.</span>
        </h1>
        <p className="mt-6 max-w-md text-lead text-ink/60">The link may be old or mistyped. The work, on the other hand, is right where we left it.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/" variant="ink" size="lg">Back home</Button>
          <Button to="/work" variant="line" size="lg">See the work</Button>
        </div>
      </section>
    </Page>
  );
}
