import type { Project } from '../../data/work';
import { Lockup, Mark } from './Marks';

/*
 * Desktop interface mockups, one per project, drawn at 1280x800.
 * Numbers and names inside these screens are sample interface data.
 */

export function ProductUI({ project }: { project: Project }) {
  const C = uis[project.ui];
  return <C p={project} />;
}

type P = { p: Project };

/* ---------- Yatri Cloud: certification platform landing ---------- */

function YatriCloudUI({ p }: P) {
  const { bg, fg, accent, soft } = p.theme;
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: bg, color: fg, fontFamily: p.type.textFamily }}>
      <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full opacity-40 blur-3xl" style={{ background: soft }} />
      <div className="relative flex items-center justify-between px-14 py-8">
        <Lockup project={p} size="sm" />
        <div className="flex gap-9 text-[15px] opacity-70">
          <span>Certifications</span><span>Practice tests</span><span>Vouchers</span><span>Community</span>
        </div>
        <span className="rounded-full px-5 py-2.5 text-[14px] font-semibold" style={{ background: accent, color: bg }}>Start free</span>
      </div>
      <div className="relative grid grid-cols-[1.1fr_1fr] gap-14 px-14 pt-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px]" style={{ borderColor: `${fg}30` }}>
            <span className="h-2 w-2 rounded-full" style={{ background: accent }} /> 50K+ Yatris learning
          </span>
          <h1 className="mt-7 text-[64px] font-semibold leading-[1.02] tracking-[-0.035em]" style={{ fontFamily: p.type.displayFamily }}>
            Master IT certifications the affordable way.
          </h1>
          <p className="mt-6 max-w-[460px] text-[18px] leading-relaxed opacity-70">
            Practice tests, training, community events and exam vouchers for every major cloud.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {['AWS', 'Azure', 'GCP', 'DevOps', 'Kubernetes', 'Terraform'].map((t) => (
              <span key={t} className="rounded-lg px-4 py-2 text-[14px]" style={{ background: `${fg}10` }}>{t}</span>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl p-7 shadow-2xl" style={{ background: fg, color: bg }}>
            <div className="flex items-center justify-between text-[13px] opacity-60">
              <span>AWS Solutions Architect · Practice 3</span><span>Q 14 / 65</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full" style={{ background: `${bg}15` }}>
              <div className="h-full w-[22%] rounded-full" style={{ background: soft }} />
            </div>
            <p className="mt-5 text-[18px] font-medium leading-snug">
              A company needs to store session data with single-digit millisecond latency. Which service fits best?
            </p>
            <div className="mt-5 space-y-2.5 text-[15px]">
              {['Amazon RDS', 'Amazon ElastiCache', 'Amazon S3 Glacier', 'Amazon Redshift'].map((o, i) => (
                <div
                  key={o}
                  className="flex items-center gap-3 rounded-xl border px-4 py-3"
                  style={i === 1 ? { borderColor: soft, background: `${soft}12` } : { borderColor: `${bg}18` }}
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full border text-[12px]" style={i === 1 ? { background: soft, color: '#fff', borderColor: soft } : { borderColor: `${bg}30` }}>
                    {'ABCD'[i]}
                  </span>
                  {o}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl px-7 py-5" style={{ background: accent, color: bg }}>
            <div>
              <p className="text-[13px] font-medium opacity-70">Exam voucher</p>
              <p className="text-[26px] font-semibold tracking-tight" style={{ fontFamily: p.type.displayFamily }}>50% off</p>
            </div>
            <span className="rounded-full px-5 py-2.5 text-[14px] font-semibold" style={{ background: bg, color: fg }}>Claim</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Yatri Draw: whiteboard ---------- */

function DrawUI({ p }: P) {
  const { bg, fg, accent, soft } = p.theme;
  const hand = '"Caveat", cursive';
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: bg, color: fg, fontFamily: p.type.textFamily }}>
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: `radial-gradient(${fg}22 1.2px, transparent 1.2px)`, backgroundSize: '26px 26px' }} />
      <div className="absolute left-6 top-6 flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 shadow-md">
        <Mark project={p} className="h-6 w-6" />
        <span className="text-[14px] font-medium">Sprint planning</span>
      </div>
      <div className="absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-1 rounded-xl bg-white p-1.5 shadow-md">
        {['M5 12h14', 'M4 4h16v16H4z', 'M12 4a8 8 0 100 16 8 8 0 000-16z', 'M5 19L19 5', 'M4 20c4-8 8-12 16-16', 'M6 4v16M18 4v16M6 12h12'].map((d, i) => (
          <span key={i} className="grid h-10 w-10 place-items-center rounded-lg" style={i === 4 ? { background: `${accent}20`, color: accent } : undefined}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d={d} /></svg>
          </span>
        ))}
      </div>
      <div className="absolute right-6 top-6 flex items-center gap-3">
        <div className="flex -space-x-2">
          {['#6C4BF4', '#FF8A7A', '#2BB673'].map((c, i) => (
            <span key={c} className="grid h-9 w-9 place-items-center rounded-full border-2 border-white text-[13px] font-semibold text-white" style={{ background: c }}>{'AKR'[i]}</span>
          ))}
        </div>
        <span className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] font-medium text-white" style={{ background: accent }}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>
          Share
        </span>
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1280 800" fill="none">
        <path d="M182 232 C260 226 352 228 418 234 C422 290 420 336 416 380 C338 384 260 386 184 380 C180 330 178 280 182 232Z" stroke={fg} strokeWidth="3" />
        <path d="M528 214 C610 210 700 212 776 220 C782 280 780 340 774 398 C694 402 610 404 530 398 C524 336 522 276 528 214Z" stroke={accent} strokeWidth="3" fill={`${accent}10`} />
        <path d="M426 306 C460 300 492 300 520 304" stroke={fg} strokeWidth="3" strokeLinecap="round" />
        <path d="M506 292 L522 304 L506 318" stroke={fg} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M650 410 C652 450 654 486 650 520" stroke={fg} strokeWidth="3" strokeLinecap="round" />
        <path d="M636 504 L650 522 L666 506" stroke={fg} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="652" cy="600" rx="126" ry="62" stroke={fg} strokeWidth="3" />
        <path d="M860 560 C900 520 980 520 1010 560" stroke="#FF8A7A" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 10" />
        <path d="M1040 230 L1060 250 L1100 200" stroke="#2BB673" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute" style={{ left: 214, top: 284, fontFamily: hand, fontSize: 34, fontWeight: 700 }}>Ideas</div>
      <div className="absolute" style={{ left: 584, top: 278, fontFamily: hand, fontSize: 34, fontWeight: 700, color: accent }}>Pick top 3</div>
      <div className="absolute" style={{ left: 584, top: 572, fontFamily: hand, fontSize: 32, fontWeight: 700 }}>Ship Friday</div>
      <div className="absolute rotate-[3deg] p-5 shadow-lg" style={{ left: 880, top: 270, width: 230, height: 190, background: soft, fontFamily: hand, fontSize: 28, lineHeight: 1.1 }}>
        Ask Riya about the login flow
      </div>
      <div className="absolute -rotate-[4deg] p-5 shadow-lg" style={{ left: 170, top: 470, width: 210, height: 170, background: '#FFD1C9', fontFamily: hand, fontSize: 28, lineHeight: 1.1 }}>
        Keep it simple!!
      </div>
      <svg className="absolute" style={{ left: 1010, top: 520 }} width="24" height="30" viewBox="0 0 24 30"><path d="M2 2 L2 24 L8 18 L13 28 L17 26 L12 16 L20 16 Z" fill="#FF8A7A" stroke="#fff" strokeWidth="1.5" /></svg>
      <span className="absolute rounded-md px-2 py-0.5 text-[12px] font-medium text-white" style={{ left: 1030, top: 548, background: '#FF8A7A' }}>Kiran</span>

      <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[13px] shadow-md">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke={accent} strokeWidth="2"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>
        End-to-end encrypted. Only people with this link can read it.
      </div>
      <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[13px] shadow-md">
        <span>−</span><span className="font-medium">100%</span><span>+</span>
      </div>
    </div>
  );
}

/* ---------- Yatri School: admin dashboard ---------- */

function SchoolUI({ p }: P) {
  const { bg, fg, accent, soft } = p.theme;
  const paper = '#FBF7EE';
  const nav = ['Today', 'Students', 'Classes', 'Attendance', 'Exams', 'Notices', 'Fees'];
  const bars = [92, 88, 95, 90, 84, 97, 93, 91, 89, 96];
  return (
    <div className="flex h-full w-full" style={{ background: paper, color: '#1d2a24', fontFamily: p.type.textFamily }}>
      <aside className="flex w-[240px] flex-col px-6 py-7" style={{ background: bg, color: fg }}>
        <Lockup project={p} size="sm" fg={fg} />
        <div className="mt-10 space-y-1 text-[15px]">
          {nav.map((n, i) => (
            <div key={n} className="rounded-lg px-3.5 py-2.5" style={i === 0 ? { background: `${fg}14`, fontWeight: 700 } : { opacity: 0.7 }}>{n}</div>
          ))}
        </div>
        <div className="mt-auto rounded-xl p-4 text-[13px]" style={{ background: `${fg}10` }}>
          <p className="font-semibold">Green Valley School</p>
          <p className="opacity-60">Academic year 2026–27</p>
        </div>
      </aside>
      <main className="flex-1 px-10 py-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[14px] opacity-60">Thursday, 29 October</p>
            <h2 className="mt-1 text-[34px] font-extrabold tracking-[-0.02em]">Good morning, Office</h2>
          </div>
          <div className="flex gap-3">
            <span className="rounded-xl border px-4 py-2.5 text-[14px] font-semibold" style={{ borderColor: '#0002' }}>Send notice</span>
            <span className="rounded-xl px-4 py-2.5 text-[14px] font-semibold" style={{ background: bg, color: fg }}>Mark attendance</span>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-4">
          {[
            ['Present today', '1,184', '/ 1,240'],
            ['Absent', '56', 'students'],
            ['Fees collected', '₹8.4L', 'this month'],
            ['Dues pending', '73', 'families'],
          ].map(([l, v, s], i) => (
            <div key={l} className="rounded-2xl p-5" style={{ background: i === 0 ? soft : '#fff' }}>
              <p className="text-[13px] opacity-60">{l}</p>
              <p className="mt-2 text-[30px] font-extrabold tracking-tight" style={i === 1 || i === 3 ? { color: '#D64545' } : undefined}>{v}</p>
              <p className="text-[12px] opacity-50">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-[1.4fr_1fr] gap-5">
          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-bold">Attendance, last 10 days</p>
              <p className="text-[12px] opacity-50">% present</p>
            </div>
            <div className="mt-6 flex h-[220px] items-end gap-4">
              {bars.map((b, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-md" style={{ height: `${(b - 70) * 7}px`, background: i === bars.length - 1 ? accent : bg, opacity: i === bars.length - 1 ? 1 : 0.85 }} />
                  <span className="text-[11px] opacity-50">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <p className="text-[15px] font-bold">Recent fee payments</p>
            <div className="mt-4 divide-y" style={{ borderColor: '#0001' }}>
              {[
                ['Aarav S.', 'Class 6B', '₹12,500'],
                ['Meera K.', 'Class 9A', '₹14,000'],
                ['Ishaan P.', 'Class 3C', '₹9,800'],
                ['Diya R.', 'Class 11', '₹16,200'],
              ].map(([n, c, a]) => (
                <div key={n} className="flex items-center justify-between py-3 text-[14px]">
                  <div>
                    <p className="font-semibold">{n}</p>
                    <p className="text-[12px] opacity-50">{c} · Razorpay</p>
                  </div>
                  <span className="rounded-md px-2 py-1 text-[13px] font-bold" style={{ background: soft, color: bg }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------- Yatri Playbook: guide editor ---------- */

function PlaybookUI({ p }: P) {
  const { bg, fg, accent, soft } = p.theme;
  const steps = ['Open Billing', 'Click "New invoice"', 'Choose the customer', 'Add line items', 'Send and download PDF'];
  return (
    <div className="flex h-full w-full" style={{ background: bg, color: fg, fontFamily: p.type.displayFamily }}>
      <aside className="w-[300px] border-r px-5 py-6" style={{ borderColor: `${fg}12` }}>
        <Lockup project={p} size="sm" />
        <div className="mt-7 flex items-center gap-2 rounded-lg px-3 py-2.5 text-[13px]" style={{ background: `${accent}18`, color: accent }}>
          <span className="h-2.5 w-2.5 animate-pulse rounded-full" style={{ background: accent }} /> Recording · 00:42
        </div>
        <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.12em] opacity-40">How to raise an invoice</p>
        <div className="mt-3 space-y-1.5">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px]" style={i === 1 ? { background: soft } : { opacity: 0.65 }}>
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md font-mono text-[11px]" style={i < 1 ? { background: '#2BB673', color: '#fff' } : i === 1 ? { background: accent, color: '#fff' } : { background: `${fg}12` }}>
                {i + 1}
              </span>
              {s}
            </div>
          ))}
        </div>
      </aside>
      <main className="flex flex-1 flex-col px-10 py-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[12px] opacity-40">STEP 02 / 05</p>
            <h2 className="mt-1 text-[30px] font-semibold tracking-[-0.03em]">Click &ldquo;New invoice&rdquo;</h2>
          </div>
          <div className="flex gap-2 font-mono text-[12px]">
            {['PDF', 'Word', 'HTML', 'Markdown'].map((f, i) => (
              <span key={f} className="rounded-md px-3 py-2" style={i === 0 ? { background: fg, color: bg } : { background: `${fg}10` }}>{f}</span>
            ))}
          </div>
        </div>
        <div className="relative mt-6 flex-1 overflow-hidden rounded-xl bg-white text-[#1b1d22]">
          <div className="flex h-12 items-center gap-6 border-b px-6 text-[13px]" style={{ borderColor: '#0000000f' }}>
            <span className="font-semibold">Acme Books</span><span className="opacity-50">Dashboard</span><span>Billing</span><span className="opacity-50">Reports</span>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-semibold">Invoices</p>
              <span className="relative rounded-lg bg-[#1b1d22] px-4 py-2.5 text-[13px] font-medium text-white">
                + New invoice
                <span className="absolute -inset-3 rounded-2xl border-[3px]" style={{ borderColor: accent }} />
                <span className="absolute -inset-6 rounded-3xl border-2 opacity-30" style={{ borderColor: accent }} />
              </span>
            </div>
            <div className="mt-6 space-y-2">
              {[1, 2, 3, 4, 5].map((r) => (
                <div key={r} className="grid grid-cols-[1fr_1fr_120px_100px] items-center gap-4 rounded-lg bg-[#f5f5f2] px-4 py-3.5 text-[13px]">
                  <span className="h-2.5 w-28 rounded bg-black/15" /><span className="h-2.5 w-20 rounded bg-black/10" />
                  <span className="h-2.5 w-16 rounded bg-black/10" />
                  <span className="justify-self-end rounded px-2 py-0.5 text-[11px]" style={{ background: r % 2 ? '#2BB67322' : '#0000000d', color: r % 2 ? '#1a7f4f' : '#555' }}>{r % 2 ? 'Paid' : 'Draft'}</span>
                </div>
              ))}
            </div>
          </div>
          <svg className="absolute" style={{ right: 70, top: 92 }} width="26" height="32" viewBox="0 0 24 30"><path d="M2 2 L2 24 L8 18 L13 28 L17 26 L12 16 L20 16 Z" fill="#111" stroke="#fff" strokeWidth="1.5" /></svg>
        </div>
      </main>
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

/* ---------- Nishaan ---------- */

function NishaanUI({ p }: P) {
  const { bg, fg, accent, soft } = p.theme;
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: bg, color: fg, fontFamily: p.type.textFamily }}>
      <div className="absolute -bottom-72 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full border" style={{ borderColor: `${soft}25` }} />
      <div className="absolute -bottom-52 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full border" style={{ borderColor: `${soft}35` }} />
      <div className="relative flex items-center justify-between px-14 py-8">
        <Lockup project={p} size="sm" />
        <div className="flex gap-9 text-[15px] opacity-70"><span>Product</span><span>How it works</span><span>Pricing</span></div>
        <span className="rounded-full px-5 py-2.5 text-[14px] font-semibold text-white" style={{ background: accent }}>Get early access</span>
      </div>
      <div className="relative mx-auto mt-14 max-w-[880px] text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em]" style={{ color: soft }}>Part of the Yatri Cloud family</p>
        <h1 className="mt-6 text-[104px] leading-[0.95] tracking-[-0.03em]" style={{ fontFamily: p.type.displayFamily }}>
          Leave your <span className="italic" style={{ color: accent }}>mark.</span>
        </h1>
        <div className="mx-auto mt-14 flex w-fit items-center gap-4 rounded-2xl p-3 pr-6 text-left" style={{ background: `${fg}0d`, border: `1px solid ${fg}1a` }}>
          <div className="grid h-16 w-16 place-items-center rounded-xl" style={{ background: fg }}>
            <Mark project={p} fg={bg} className="h-10 w-10" />
          </div>
          <div>
            <p className="text-[15px] font-medium">Sealed by Nishaan</p>
            <p className="font-mono text-[12px] opacity-50">NSH-8F2A-41C7 · verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const uis = {
  yatricloud: YatriCloudUI,
  draw: DrawUI,
  school: SchoolUI,
  playbook: PlaybookUI,
  siddhivinayak: SiddhivinayakUI,
  nishaan: NishaanUI,
};
