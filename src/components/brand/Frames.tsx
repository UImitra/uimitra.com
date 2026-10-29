import { ReactNode, useLayoutEffect, useRef, useState } from 'react';

/** Renders children at a fixed design size and scales them to fit the container width. */
export function Scaled({ width, height, children, className = '' }: { width: number; height: number; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width, height, transform: `scale(${scale})`, visibility: scale ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

export function BrowserFrame({ url, children, dark = false, className = '' }: { url?: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[10px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.08)] sm:rounded-[14px] ${className}`}>
      <div className={`flex h-7 items-center gap-3 px-3 sm:h-9 sm:px-4 ${dark ? 'bg-[#1d1d20]' : 'bg-[#E8E8EC]'}`}>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#28C840] sm:h-2.5 sm:w-2.5" />
        </div>
        {url && (
          <div className={`mx-auto flex h-4 max-w-[60%] flex-1 items-center justify-center truncate rounded-md px-3 font-mono text-[8px] sm:h-5 sm:text-[10px] ${dark ? 'bg-white/5 text-white/40' : 'bg-white/70 text-black/40'}`}>
            {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </div>
        )}
        <div className="w-10" />
      </div>
      <Scaled width={1280} height={800}>{children}</Scaled>
    </div>
  );
}

export function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[13%/6.2%] bg-[#111] p-[3.2%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55),inset_0_0_0_1.5px_rgba(255,255,255,0.12)] ${className}`}>
      <div className="relative overflow-hidden rounded-[10.5%/4.9%]">
        <Scaled width={390} height={844}>{children}</Scaled>
        <div className="absolute left-1/2 top-[1.6%] h-[3.4%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}
