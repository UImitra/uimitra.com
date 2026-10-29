import './fonts';
import type { MarkKey, Project } from '../../data/work';

/*
 * Logo marks for each project, drawn on a 48x48 grid.
 * `fg` is the mark colour, `accent` the secondary colour.
 */

type MarkProps = { fg: string; accent: string; className?: string };

function YatriCloudMark({ fg, accent, className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M11 9 L24 25 L37 9" stroke={fg} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 25 V36" stroke={fg} strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="24" cy="42.5" r="3.5" fill={accent} />
    </svg>
  );
}

function DrawMark({ fg, accent, className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M14.5 7.5 C14 17 13.6 29 14.2 40.6 C26 42.2 37.8 37 38.4 24.4 C39 12.6 28.4 6.2 15.8 9.6 C12 10.8 9 13 7.6 15.4"
        stroke={fg}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21.5 24 C24.5 21.6 28 22.4 29 25.4" stroke={accent} strokeWidth="4.2" strokeLinecap="round" />
    </svg>
  );
}

function SchoolMark({ fg, accent, className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M8 43 V22 C8 13.2 15.2 6 24 6 C32.8 6 40 13.2 40 22 V43" stroke={fg} strokeWidth="5" strokeLinecap="round" />
      <path d="M24 17.5 L26.2 22.6 L31.6 23.1 L27.5 26.7 L28.8 32 L24 29.2 L19.2 32 L20.5 26.7 L16.4 23.1 L21.8 22.6 Z" fill={accent} />
      <path d="M4 43 H44" stroke={fg} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function PlaybookMark({ fg, accent, className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect x="9" y="8" width="13" height="8" rx="4" fill={fg} />
      <rect x="9" y="20" width="30" height="8" rx="4" fill={accent} />
      <rect x="9" y="32" width="13" height="8" rx="4" fill={fg} />
    </svg>
  );
}

function SiddhivinayakMark({ fg, accent, className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="21" stroke={fg} strokeWidth="2.5" />
      <path d="M8 30 A16 16 0 0 1 40 30" fill={accent} />
      {[-60, -30, 0, 30, 60].map((a) => (
        <line
          key={a}
          x1={24 + Math.sin((a * Math.PI) / 180) * 19}
          y1={30 - Math.cos((a * Math.PI) / 180) * 19}
          x2={24 + Math.sin((a * Math.PI) / 180) * 21.5}
          y2={30 - Math.cos((a * Math.PI) / 180) * 21.5}
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <text x="24" y="38.5" textAnchor="middle" fontFamily='"Fraunces Variable", serif' fontWeight="700" fontSize="13" fill={fg}>
        SV
      </text>
      <line x1="10" y1="30" x2="38" y2="30" stroke={fg} strokeWidth="2" />
    </svg>
  );
}

function NishaanMark({ fg, accent, className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 3 C35.6 3 45 12.4 45 24 C45 35.6 35.6 45 24 45 C12.4 45 3 35.6 3 24 C3 15.5 8 8.2 15.3 4.9"
        stroke={fg}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="12" fill={accent} />
      <path d="M18.5 24.5 L22.4 28.2 L30 20" stroke={fg} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const marks: Record<MarkKey, (p: MarkProps) => JSX.Element> = {
  yatricloud: YatriCloudMark,
  draw: DrawMark,
  school: SchoolMark,
  playbook: PlaybookMark,
  siddhivinayak: SiddhivinayakMark,
  nishaan: NishaanMark,
};

export function Mark({ project, fg, accent, className = 'h-10 w-10' }: { project: Project; fg?: string; accent?: string; className?: string }) {
  const C = marks[project.mark];
  return <C fg={fg ?? project.theme.fg} accent={accent ?? project.theme.accent} className={className} />;
}

/** Mark plus the project name set in its display face. */
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
  const weight = project.mark === 'draw' ? 700 : project.mark === 'nishaan' ? 400 : 600;
  return (
    <span className={`inline-flex items-center gap-[0.4em] ${className}`} style={{ color }}>
      <Mark project={project} fg={color} accent={accent} className={`${dims[0]} shrink-0`} />
      <span className={`${dims[1]} leading-none`} style={{ fontFamily: project.type.displayFamily, fontWeight: weight, letterSpacing: project.mark === 'draw' ? '0' : '-0.03em' }}>
        {project.name}
      </span>
    </span>
  );
}
