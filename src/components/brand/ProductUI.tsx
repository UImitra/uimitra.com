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
  const C = uis[project.ui ?? 'siddhivinayak'];
  return <C p={project} />;
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

/* ---------- Siddhivinayak Classes: institute website ---------- */

function SiddhivinayakUI({ p }: P) {
  const { bg, fg, accent, soft } = p.theme;
  return (
    <div className="h-full w-full overflow-hidden" style={{ background: fg, color: '#2E2A28', fontFamily: p.type.textFamily }}>
      <div className="flex items-center justify-between px-14 py-6">
        <Lockup project={p} size="sm" fg={bg} />
        <div className="flex gap-9 text-[15px] font-medium opacity-70">
          <span>Courses</span><span>Faculty</span><span>Results</span><span>Gallery</span><span>Contact</span>
        </div>
        <span className="rounded-full px-5 py-2.5 text-[14px] font-bold text-white" style={{ background: accent }}>Enquire now</span>
      </div>
      <div className="mx-14 grid grid-cols-[1.2fr_1fr] overflow-hidden rounded-[28px]" style={{ background: bg, color: fg }}>
        <div className="p-14">
          <span className="rounded-full px-4 py-1.5 text-[13px] font-bold" style={{ background: accent, color: bg }}>Admissions open</span>
          <h1 className="mt-7 text-[62px] font-semibold leading-[1.02] tracking-[-0.02em]" style={{ fontFamily: p.type.displayFamily }}>
            Strong basics. <span className="italic" style={{ color: accent }}>Confident</span> students.
          </h1>
          <p className="mt-5 max-w-[440px] text-[17px] leading-relaxed opacity-75">
            Coaching with regular tests, doubt sessions and progress updates for parents.
          </p>
          <div className="mt-8 flex gap-3">
            <span className="rounded-full px-6 py-3.5 text-[15px] font-bold" style={{ background: fg, color: bg }}>View courses</span>
            <span className="flex items-center gap-2 rounded-full border px-6 py-3.5 text-[15px] font-semibold" style={{ borderColor: `${fg}40` }}>WhatsApp us</span>
          </div>
        </div>
        <div className="relative">
          <svg viewBox="0 0 400 420" className="absolute inset-0 h-full w-full">
            <circle cx="220" cy="430" r="300" fill={accent} opacity="0.9" />
            <circle cx="220" cy="430" r="230" fill={soft} opacity="0.35" />
            {Array.from({ length: 9 }).map((_, i) => {
              const a = (-80 + i * 20) * (Math.PI / 180);
              return <line key={i} x1={220 + Math.sin(a) * 320} y1={430 - Math.cos(a) * 320} x2={220 + Math.sin(a) * 360} y2={430 - Math.cos(a) * 360} stroke={accent} strokeWidth="6" strokeLinecap="round" />;
            })}
          </svg>
          <div className="absolute bottom-10 left-8 right-10 rounded-2xl bg-white p-5 text-[#2E2A28] shadow-xl">
            <p className="text-[13px] opacity-60">Next batch</p>
            <p className="mt-1 text-[20px] font-bold" style={{ fontFamily: p.type.displayFamily }}>Class 10 · Maths & Science</p>
            <div className="mt-3 flex gap-2 text-[12px] font-semibold">
              <span className="rounded-md px-2 py-1" style={{ background: soft }}>Mon–Sat</span>
              <span className="rounded-md px-2 py-1" style={{ background: soft }}>Evening</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-14 mt-6 grid grid-cols-4 gap-4">
        {['Class 8–10', 'Class 11–12 Science', 'Commerce', 'Foundation'].map((c) => (
          <div key={c} className="rounded-2xl border p-5" style={{ borderColor: `${bg}20` }}>
            <p className="text-[18px] font-semibold" style={{ fontFamily: p.type.displayFamily, color: bg }}>{c}</p>
            <p className="mt-1 text-[13px] opacity-60">See syllabus →</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const uis = {
  yatricloud: YatriCloudUI,
  siddhivinayak: SiddhivinayakUI,
};
