import { useState } from 'react';

export function InsideClinic() {
  const [hasImg, setHasImg] = useState(true);

  return (
    <section id="inside" className="py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 reveal">
          <div>
            <div className="eyebrow mb-5">Inside Dr. Ashwini's Skin Arch</div>
            <h2 className="display h-section">
              Calm, well-lit, <span className="text-accentdp">unhurried.</span>
            </h2>
          </div>
          <p className="text-inksoft max-w-md text-[15.5px] leading-relaxed">
            A clean clinic, a quiet waiting area, and a team that knows you by name on your
            second visit. Walk in, take a breath. We'll take it from here.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-line aspect-[3/4] sm:aspect-[16/9] lg:aspect-[16/7] bg-sage/30 reveal">
          {hasImg ? (
            <img
              src="/clinic/front-desk.jpg"
              alt="Dr. Ashwini's Skin Arch front desk and reception"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
              onError={() => setHasImg(false)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full grid place-items-center bg-gradient-to-br from-sage/40 via-bg to-accent/15">
              <div className="text-center px-6">
                <div className="mx-auto w-12 h-12 rounded-full border border-ink/15 grid place-items-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <div className="font-serif text-[20px] leading-tight font-semibold">
                  Front desk photo goes here
                </div>
                <div className="text-[13px] text-inksoft mt-2">
                  Drop a clinic image at{' '}
                  <code className="text-[12px] bg-white/70 px-1.5 py-0.5 rounded">
                    public/clinic/front-desk.jpg
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* Floating welcome card: compact on mobile so it doesn't smother the photo */}
          <div className="absolute left-4 right-4 bottom-4 sm:left-8 sm:right-auto sm:bottom-8 bg-white/90 backdrop-blur-md border border-line rounded-2xl px-4 py-3 sm:px-5 sm:py-4 sm:max-w-[300px] shadow-[0_18px_40px_-22px_rgba(31,27,22,.4)]">
            <div className="text-[10px] sm:text-[10.5px] tracking-[0.22em] uppercase text-inksoft">
              Walk in
            </div>
            <div className="font-serif text-[15px] sm:text-[18px] leading-snug mt-0.5 sm:mt-1 font-semibold">
              Welcome to Dr. Ashwini's Skin Arch.
            </div>
            <div className="text-[11.5px] sm:text-[12.5px] text-inksoft mt-0.5 sm:mt-1">
              Kukatpally, Hyderabad · Mon–Sun
            </div>
          </div>
        </div>

        {/* Three small detail cards under the main image */}
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="card p-5 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-sage/40 grid place-items-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <div className="text-[14.5px] font-semibold">Same-day visits</div>
              <div className="text-[12.5px] text-inksoft mt-0.5">Often available, Mon–Sun.</div>
            </div>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-sage/40 grid place-items-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l18-7-7 18-2-8-9-3z" />
              </svg>
            </div>
            <div>
              <div className="text-[14.5px] font-semibold">2 min from Metro</div>
              <div className="text-[12.5px] text-inksoft mt-0.5">Kukatpally station nearby.</div>
            </div>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-sage/40 grid place-items-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="text-[14.5px] font-semibold">Easy parking</div>
              <div className="text-[12.5px] text-inksoft mt-0.5">Two-wheeler &amp; street parking.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
