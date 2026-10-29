import './fonts';
import type { Project } from '../../data/work';

/** True when a hex colour is light enough to need dark text on top. */
export function isLight(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

function luminance(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const lin = (c: number) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
}

/** `text` if it reads on `back` at WCAG AA, otherwise plain ink or white. */
export function readable(text: string, back: string) {
  const [a, b] = [luminance(text), luminance(back)].sort((x, y) => y - x);
  if ((a + 0.05) / (b + 0.05) >= 4.5) return text;
  return isLight(back) ? '#171717' : '#FFFFFF';
}

/**
 * The project's logo: the full colour file on light grounds, the white one on
 * dark grounds. `on` is the colour the logo sits on; without it, a light `fg`
 * is taken to mean a dark ground. Projects without a logo render nothing.
 */
export function Mark({ project, fg, on, className = 'h-10 w-10' }: { project: Project; fg?: string; accent?: string; on?: string; className?: string }) {
  if (!project.logo) return null;
  const dark = on ? !isLight(on) : isLight(fg ?? project.theme.fg);
  return <img src={dark ? project.logo.white : project.logo.src} alt="" aria-hidden draggable={false} className={`object-contain ${className}`} />;
}

/** Mark plus the project name, set the way the brand sets it. */
export function Lockup({
  project,
  fg,
  accent,
  size = 'md',
  className = '',
}: {
  project: Project;
  fg?: string;
  accent?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const dims = { sm: ['h-6 w-6', 'text-base'], md: ['h-9 w-9', 'text-2xl'], lg: ['h-14 w-14', 'text-4xl'], xl: ['h-20 w-20 sm:h-28 sm:w-28', 'text-5xl sm:text-7xl'] }[size];
  const color = fg ?? project.theme.fg;
  const [lead, rest] = project.wordmark ?? [project.name, ''];
  const restColor = !isLight(color) && project.brand ? project.brand : color;
  return (
    <span className={`inline-flex items-center gap-[0.4em] ${className}`} style={{ color }} aria-label={project.name}>
      <Mark project={project} fg={color} accent={accent} className={`${dims[0]} shrink-0`} />
      <span aria-hidden className={`${dims[1]} leading-none`} style={{ fontFamily: project.type.displayFamily, fontWeight: project.type.weight, letterSpacing: '-0.03em' }}>
        {lead}
        {rest && <span style={{ color: restColor }}> {rest}</span>}
      </span>
    </span>
  );
}
