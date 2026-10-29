import type { Project } from '../../data/work';
import { Scaled } from './Frames';
import { Lockup, Mark } from './Marks';

/* Brand applications drawn at print/screen sizes and scaled to fit. */

export function BusinessCard({ p, side = 'front' }: { p: Project; side?: 'front' | 'back' }) {
  const { bg, fg, accent } = p.theme;
  return (
    <div className="overflow-hidden rounded-[6px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)]">
      <Scaled width={850} height={500}>
        {side === 'front' ? (
          <div className="relative flex h-full w-full items-center justify-center" style={{ background: bg }}>
            <Lockup project={p} size="lg" />
            <div className="absolute bottom-10 right-12 h-4 w-4 rounded-full" style={{ background: accent }} />
          </div>
        ) : (
          <div className="flex h-full w-full flex-col justify-between p-14" style={{ background: fg, color: bg, fontFamily: p.type.textFamily }}>
            <Mark project={p} fg={bg} className="h-14 w-14" />
            <div>
              <p className="text-[34px] font-semibold tracking-tight" style={{ fontFamily: p.type.displayFamily }}>Team {p.name}</p>
              <p className="mt-1 text-[20px] opacity-60">{p.url?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</p>
            </div>
          </div>
        )}
      </Scaled>
    </div>
  );
}

export function SocialPost({ p, index = 0 }: { p: Project; index?: number }) {
  const c = p.campaign[index % p.campaign.length];
  const { bg, fg, accent } = p.theme;
  const variants = [
    { back: bg, text: fg, chip: accent },
    { back: accent, text: bg, chip: fg },
    { back: fg, text: bg, chip: accent },
  ];
  const v = variants[index % variants.length];
  return (
    <div className="overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
      <Scaled width={1080} height={1080}>
        <div className="relative flex h-full w-full flex-col justify-between p-20" style={{ background: v.back, color: v.text, fontFamily: p.type.textFamily }}>
          <div className="flex items-center justify-between">
            <Mark project={p} fg={v.text} accent={v.chip} className="h-20 w-20" />
            <span className="rounded-full px-7 py-3 text-[28px] font-medium" style={{ background: `${v.text}14` }}>{c.kicker}</span>
          </div>
          <p className="text-[104px] font-semibold leading-[0.98] tracking-[-0.035em]" style={{ fontFamily: p.type.displayFamily, fontWeight: p.mark === 'nishaan' ? 400 : p.mark === 'draw' ? 700 : 600 }}>
            {c.headline}
          </p>
          <div className="flex items-center justify-between text-[30px]">
            <span className="font-medium">{c.cta} →</span>
            <span className="opacity-60">{p.name}</span>
          </div>
        </div>
      </Scaled>
    </div>
  );
}

/** 9:16 story, designed to sit inside a PhoneFrame (390x844). */
export function Story({ p, index = 0 }: { p: Project; index?: number }) {
  const c = p.campaign[index % p.campaign.length];
  const { bg, fg, accent, soft } = p.theme;
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden px-7 pb-10 pt-16" style={{ background: bg, color: fg, fontFamily: p.type.textFamily }}>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-[3px] flex-1 rounded-full" style={{ background: i <= index ? fg : `${fg}30` }} />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: fg }}>
          <Mark project={p} fg={bg} accent={accent} className="h-5 w-5" />
        </span>
        <span className="text-[14px] font-semibold">{p.name.toLowerCase().replace(/\s+/g, '')}</span>
        <span className="text-[13px] opacity-50">2h</span>
      </div>
      <div className="absolute -right-24 top-40 h-72 w-72 rounded-full opacity-60 blur-2xl" style={{ background: soft }} />
      <div className="relative mt-auto">
        <span className="inline-block rounded-full px-3.5 py-1.5 text-[13px] font-semibold" style={{ background: accent, color: bg }}>{c.kicker}</span>
        <p className="mt-5 text-[46px] leading-[1] tracking-[-0.03em]" style={{ fontFamily: p.type.displayFamily, fontWeight: p.mark === 'nishaan' ? 400 : 650 }}>
          {c.headline}
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 rounded-full py-4 text-[16px] font-semibold" style={{ background: fg, color: bg }}>
          {c.cta}
        </div>
      </div>
    </div>
  );
}

export function AppIcon({ p, size = 'h-20 w-20' }: { p: Project; size?: string }) {
  return (
    <div className={`grid ${size} place-items-center rounded-[22.5%] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)]`} style={{ background: p.theme.bg }}>
      <Mark project={p} className="h-[58%] w-[58%]" />
    </div>
  );
}

export function Poster({ p }: { p: Project }) {
  const { bg, fg, accent } = p.theme;
  const c = p.campaign[0];
  return (
    <div className="overflow-hidden rounded-[4px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
      <Scaled width={800} height={1100}>
        <div className="relative flex h-full w-full flex-col p-16" style={{ background: accent, color: bg, fontFamily: p.type.textFamily }}>
          <div className="flex items-start justify-between text-[22px] font-medium">
            <span>{c.kicker}</span>
            <span>{p.name}</span>
          </div>
          <div className="relative my-auto flex justify-center">
            <Mark project={p} fg={bg} accent={fg} className="h-[420px] w-[420px]" />
          </div>
          <p className="text-[76px] leading-[0.95] tracking-[-0.035em]" style={{ fontFamily: p.type.displayFamily, fontWeight: p.mark === 'nishaan' ? 400 : 650 }}>
            {c.headline}
          </p>
        </div>
      </Scaled>
    </div>
  );
}
