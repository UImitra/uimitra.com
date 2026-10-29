import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Magnetic } from './motion';

type Variant = 'ink' | 'brand' | 'paper' | 'line' | 'line-light';

const styles: Record<Variant, string> = {
  ink: 'bg-ink text-paper hover:bg-brand',
  brand: 'bg-brand text-white hover:bg-ink',
  paper: 'bg-paper text-ink hover:bg-brand hover:text-white',
  line: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  'line-light': 'border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink',
};

export function Arrow({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

/** Pill button whose label rolls up on hover. Renders a Link, an anchor or a button. */
export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'ink',
  size = 'md',
  arrow = true,
  magnetic = true,
  className = '',
  type = 'button',
  disabled,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  arrow?: boolean;
  magnetic?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) {
  const pad = size === 'lg' ? 'h-16 px-8 text-base' : size === 'sm' ? 'h-10 px-4 text-sm' : 'h-12 px-6 text-[15px]';
  const cls = `group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full font-medium tracking-tight transition-colors duration-500 ease-out disabled:pointer-events-none disabled:opacity-40 ${pad} ${styles[variant]} ${className}`;

  const inner = (
    <>
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out group-hover/btn:-translate-y-full">{children}</span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out group-hover/btn:translate-y-0" aria-hidden>
          {children}
        </span>
      </span>
      {arrow && (
        <span className="relative grid h-4 w-4 place-items-center overflow-hidden">
          <Arrow className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover/btn:-translate-y-4 group-hover/btn:translate-x-4" />
          <Arrow className="absolute h-3.5 w-3.5 -translate-x-4 translate-y-4 transition-transform duration-500 ease-out group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
        </span>
      )}
    </>
  );

  let el;
  if (to) el = <Link to={to} className={cls}>{inner}</Link>;
  else if (href)
    el = (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  else
    el = (
      <button type={type} onClick={onClick} className={cls} disabled={disabled}>
        {inner}
      </button>
    );

  return magnetic ? <Magnetic strength={0.25}>{el}</Magnetic> : el;
}
