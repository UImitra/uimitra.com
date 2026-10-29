import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '../../data/work';
import { AppIcon, BusinessCard, SocialPost } from './Applications';
import { Lockup, Mark } from './Marks';

/** Readable text colour for a given background hex. */
export function onColor(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#0D0D0F' : '#FFFFFF';
}

export function Palette({ p, compact = false }: { p: Project; compact?: boolean }) {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (hex: string) => {
    navigator.clipboard?.writeText(hex).catch(() => {});
    setCopied(hex);
    setTimeout(() => setCopied(null), 1400);
  };
  return (
    <div className={`grid h-full ${compact ? 'grid-cols-5' : 'grid-cols-2 sm:grid-cols-5'} gap-2`}>
      {p.palette.map((s, i) => (
        <button
          key={s.hex}
          onClick={() => copy(s.hex)}
          data-cursor="Copy"
          className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-3 text-left transition-[flex,transform] duration-500 hover:-translate-y-1 sm:p-4 ${!compact && i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
          style={{ background: s.hex, color: onColor(s.hex), boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)', minHeight: compact ? 72 : 150 }}
          aria-label={`Copy ${s.name} ${s.hex}`}
        >
          <span className={`font-medium ${compact ? 'text-[11px]' : 'text-sm'}`}>{s.name}</span>
          {!compact && (
            <span className="font-mono text-[11px] opacity-70">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={copied === s.hex ? 'c' : 'h'} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} className="block">
                  {copied === s.hex ? 'Copied' : s.hex}
                </motion.span>
              </AnimatePresence>
              <span className="mt-0.5 block opacity-70">{s.role}</span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

export function TypeSpecimen({ p }: { p: Project }) {
  return (
    <div className="grid h-full gap-4 sm:grid-cols-2">
      <div className="flex flex-col justify-between rounded-xl p-5 sm:p-6" style={{ background: p.theme.fg, color: p.theme.bg }}>
        <p className="eyebrow opacity-50">Display · {p.type.display}</p>
        <p className="text-[clamp(4rem,9vw,7rem)] leading-none" style={{ fontFamily: p.type.displayFamily, fontWeight: p.mark === 'nishaan' ? 400 : 600 }}>Aa</p>
        <p className="text-xl leading-tight sm:text-2xl" style={{ fontFamily: p.type.displayFamily, fontWeight: p.mark === 'nishaan' ? 400 : 600 }}>{p.campaign[0].headline}</p>
      </div>
      <div className="flex flex-col justify-between gap-6 rounded-xl p-5 sm:p-6" style={{ background: p.theme.bg, color: p.theme.fg }}>
        <p className="eyebrow opacity-50">Text · {p.type.text}</p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: p.type.textFamily }}>{p.type.note}</p>
        <p className="font-mono text-[11px] tracking-wide opacity-50" style={{ fontFamily: p.type.textFamily }}>
          ABCDEFGHIJKLM nopqrstuvwxyz 0123456789
        </p>
      </div>
    </div>
  );
}

/** Logo on its own colour, inverted, and at small sizes. */
export function LogoSheet({ p }: { p: Project }) {
  return (
    <div className="grid h-full min-h-[420px] gap-2 sm:grid-cols-3 sm:grid-rows-2">
      <div className="grid min-h-[200px] place-items-center rounded-xl sm:col-span-2 sm:row-span-2" style={{ background: p.theme.bg }}>
        <Lockup project={p} size="lg" />
      </div>
      <div className="grid min-h-[120px] place-items-center rounded-xl" style={{ background: p.theme.fg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}>
        <Lockup project={p} size="sm" fg={p.theme.bg} />
      </div>
      <div className="flex min-h-[120px] items-center justify-center gap-4 rounded-xl" style={{ background: p.theme.accent }}>
        <Mark project={p} fg={p.theme.bg} accent={p.theme.fg} className="h-12 w-12" />
        <Mark project={p} fg={p.theme.bg} accent={p.theme.fg} className="h-7 w-7" />
        <Mark project={p} fg={p.theme.bg} accent={p.theme.fg} className="h-4 w-4" />
      </div>
    </div>
  );
}

export function ApplicationsSheet({ p }: { p: Project }) {
  return (
    <div className="grid h-full grid-cols-2 gap-4 sm:grid-cols-[1.2fr_1fr_auto]">
      <div className="col-span-2 flex flex-col justify-center gap-3 sm:col-span-1">
        <BusinessCard p={p} />
        <div className="w-[85%] self-end"><BusinessCard p={p} side="back" /></div>
      </div>
      <div className="flex items-center"><SocialPost p={p} index={1} /></div>
      <div className="flex flex-row items-center justify-center gap-3 sm:flex-col">
        <AppIcon p={p} size="h-16 w-16" />
        <AppIcon p={p} size="h-11 w-11" />
        <AppIcon p={p} size="h-8 w-8" />
      </div>
    </div>
  );
}
