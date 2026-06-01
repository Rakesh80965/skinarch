import { useHeaderBlur } from '../hooks/useHeaderBlur';

interface Props {
  onOpenMenu: () => void;
}

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#treatments', label: 'Treatments' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#results', label: 'Results' },
  { href: '#visit', label: 'Visit' },
];

export function Header({ onOpenMenu }: Props) {
  const blurred = useHeaderBlur();
  return (
    <header
      id="header"
      className={`sticky top-0 z-40 transition-all ${blurred ? 'header-blur' : ''}`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <img src="/brand/lotus.png" alt="" className="h-7 sm:h-9 w-auto shrink-0" />
          <span className="flex items-baseline gap-1.5 min-w-0">
            <span className="inline sm:hidden lg:inline text-[16px] lg:text-[22px] font-semibold tracking-[-0.02em] leading-none whitespace-nowrap">
              Dr. Ashwini's skin arch<span className="text-accent">.</span>
            </span>
            <span className="hidden lg:inline w-1 h-1 rounded-full bg-accent translate-y-[-2px]" />
            <span className="hidden lg:inline text-[11px] tracking-[0.18em] uppercase text-inksoft">
              Hyderabad
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-[14px] text-inksoft">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-ink transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:+91XXXXXXXXXX"
            className="hidden md:inline-flex btn btn-ghost !py-2 !px-3.5 text-[13px]"
            aria-label="Call clinic"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </a>
          <a href="#book" className="hidden sm:inline-flex btn btn-primary !py-2.5 !px-4 text-[13px] whitespace-nowrap">
            Book Consultation
          </a>
          <button
            onClick={onOpenMenu}
            className="lg:hidden w-10 h-10 rounded-full border border-line grid place-items-center shrink-0 active:bg-line/60 transition"
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
