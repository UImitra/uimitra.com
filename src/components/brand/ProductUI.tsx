import type { Project } from '../../data/work';
import { Lockup } from './Marks';

/*
 * The product screen shown inside a BrowserFrame (1280x800). Projects with
 * real screenshots show the first one; the rest are drawn here from the live
 * product's own content.
 */

export function ProductUI({ project }: { project: Project }) {
  const shot = project.shots?.[0];
  if (shot) return <Shot src={shot.src} alt={shot.alt} />;
  const C = project.ui && uis[project.ui];
  return C ? <C p={project} /> : null;
}

export function Shot({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" draggable={false} className="h-full w-full bg-white object-cover object-top" />;
}

type P = { p: Project };

/* ---------- Yatri Cloud: homepage, rebuilt from the live site's hero ---------- */

const providers = [
  ['aws', 'AWS'],
  ['azure', 'Azure'],
  ['googlecloud', 'Google Cloud'],
  ['kubernetes', 'Kubernetes'],
  ['terraform', 'Terraform'],
  ['github', 'GitHub'],
  ['docker', 'Docker'],
  ['aws', 'AWS'],
  ['azure', 'Azure'],
];

function YatriCloudUI({ p }: P) {
  const blue = p.brand ?? '#007CFF';
  return (
    <div className="h-full w-full overflow-hidden bg-white text-[#171717]" style={{ fontFamily: p.type.textFamily }}>
      <div className="flex items-center justify-between border-b border-[#E5E5E5] px-14 py-6">
        <Lockup project={p} fg="#171717" size="sm" />
        <div className="flex gap-9 text-[15px] text-[#171717]/70">
          <span>Community</span><span>Training</span><span>Hands-on Labs</span><span>Blog</span><span>Events</span>
        </div>
        <span className="rounded-xl px-5 py-2.5 text-[14px] font-semibold text-white" style={{ background: blue }}>Sign In</span>
      </div>
      <div className="grid grid-cols-[1.3fr_1fr] items-center gap-12 px-14 pt-14">
        <div>
          <p className="text-[20px] font-medium">Good morning, Yatris</p>
          <h1 className="mt-4 text-[62px] leading-[1.04] tracking-[-0.02em]" style={{ fontFamily: p.type.displayFamily, fontWeight: 700 }}>
            Get Discounted<br /><span style={{ color: blue }}>Certification Vouchers</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[18px] leading-relaxed text-[#171717]/60">
            Get AWS certified with discounted vouchers. Book your time slot and we will schedule your exam during the meeting. Practice tests, resources, and support included!
          </p>
          <span className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl px-6 text-[16px] font-semibold text-white" style={{ background: blue }}>
            Get Discounted Voucher <span aria-hidden>→</span>
          </span>
          <dl className="mt-12 grid max-w-[600px] grid-cols-4 divide-x divide-[#E5E5E5] rounded-2xl border border-[#E5E5E5]">
            {[['50K+', 'Learners'], ['4.8', 'Rating'], ['10000+', 'Certified'], ['95%', 'Success Rate']].map(([v, l]) => (
              <div key={l} className="px-5 py-4">
                <dd className="text-[30px] leading-none tracking-tight" style={{ color: blue, fontFamily: p.type.displayFamily, fontWeight: 800 }}>{v}</dd>
                <dt className="mt-1.5 text-[13px] font-medium text-[#171717]/55">{l}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#E5E5E5] shadow-[0_24px_48px_-24px_rgba(0,60,153,0.25)]">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] px-6 py-5">
            <p className="text-[15px] font-semibold">Certifications we prepare you for</p>
            <span className="rounded-full px-3 py-1 text-[12px] font-semibold text-white" style={{ background: blue }}>Discounted</span>
          </div>
          <div className="relative h-[400px] overflow-hidden px-4 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]">
            <div className="grid grid-cols-3 gap-3 pt-6">
              {providers.map(([logo, name], i) => (
                <div key={i} className="flex aspect-square flex-col items-center justify-center gap-2.5 rounded-2xl border border-[#E5E5E5] bg-white p-3" style={{ transform: `translateY(${[0, -46, -18][i % 3]}px)` }}>
                  <img src={`/work/yatri-cloud/${logo}.svg`} alt="" className="h-12 w-12 object-contain" />
                  <span className="text-center text-[12px] font-medium text-[#171717]/55">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const uis = {
  yatricloud: YatriCloudUI,
};
