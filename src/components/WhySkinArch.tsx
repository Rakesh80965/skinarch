interface Pillar {
  n: string;
  title: string;
  body: string;
  icon: JSX.Element;
}

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const PILLARS: Pillar[] = [
  {
    n: '01',
    title: 'Personalised treatments',
    body: 'Every plan is written for one person — yours. Reviewed and adjusted at every follow-up.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Expert dermatology',
    body: 'Led by a board-certified MD dermatologist with a sub-specialty in aesthetics and hair restoration.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Honest consults',
    body: "If a single cream will do it, we'll say so. We sell results, not packages.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'FDA-approved tech',
    body: 'Only equipment and protocols with a proven safety profile for Indian skin types.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M12 11v6M9 14h6" />
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Proven results',
    body: 'Treatments judged by your photographs and your satisfaction — never by a sales target.',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <polygon points="12 2 14.9 8.9 22 10 16.5 14.8 18.2 22 12 18.3 5.8 22 7.5 14.8 2 10 9.1 8.9" />
      </svg>
    ),
  },
];

export function WhySkinArch() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">Our approach</div>
            <h2 className="display h-section">
              Personalised, <span className="text-accentdp">science-backed</span> care for
              skin, hair and aesthetics.
            </h2>
          </div>
          <p className="text-inksoft max-w-md text-[15.5px] leading-relaxed">
            Five principles that shape every consultation at Dr. Ashwini's Skin Arch — from the first phone call to
            the last follow-up.
          </p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block relative reveal">
          {/* Flow line behind icons (dashed) */}
          <div
            className="absolute top-[31px] left-[10%] right-[10%] h-0 border-t border-dashed border-accent/50 pointer-events-none"
            aria-hidden
          />
          {/* End caps on the line */}
          <div
            className="absolute top-[28px] left-[10%] w-1.5 h-1.5 rounded-full bg-accent -translate-x-1/2"
            aria-hidden
          />
          <div
            className="absolute top-[28px] right-[10%] w-1.5 h-1.5 rounded-full bg-accent translate-x-1/2"
            aria-hidden
          />

          <div className="grid grid-cols-5 gap-5 relative">
            {PILLARS.map((p) => (
              <div key={p.n} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-[62px] h-[62px] rounded-full bg-bg border border-line grid place-items-center text-ink [&_svg]:w-6 [&_svg]:h-6 shadow-[0_8px_20px_-12px_rgba(31,27,22,.25)]">
                  {p.icon}
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-accentdp mt-5">
                  {p.n}
                </div>
                <h3 className="text-[17px] font-semibold mt-1.5 leading-tight max-w-[14ch]">
                  {p.title}
                </h3>
                <p className="text-inksoft text-[13.5px] leading-relaxed mt-2.5 max-w-[22ch]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical flow */}
        <div className="lg:hidden relative reveal">
          {/* Vertical flow line */}
          <div
            className="absolute top-2 bottom-2 left-[31px] w-0 border-l border-dashed border-accent/50 pointer-events-none"
            aria-hidden
          />
          <div className="space-y-6">
            {PILLARS.map((p) => (
              <div key={p.n} className="flex items-start gap-5 relative">
                <div className="relative z-10 w-[62px] h-[62px] flex-shrink-0 rounded-full bg-bg border border-line grid place-items-center text-ink [&_svg]:w-6 [&_svg]:h-6 shadow-[0_8px_20px_-12px_rgba(31,27,22,.25)]">
                  {p.icon}
                </div>
                <div className="pt-2">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-accentdp">{p.n}</div>
                  <h3 className="text-[17px] font-semibold mt-1 leading-tight">{p.title}</h3>
                  <p className="text-inksoft text-[14px] leading-relaxed mt-1.5">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
