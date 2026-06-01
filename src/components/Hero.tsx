export function Hero() {
  return (
    <section className="relative">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 pt-10 lg:pt-16 pb-6 lg:pb-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        <div className="lg:col-span-7 reveal">
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ink" />
            Skin · Hair · Aesthetics
          </div>
          <h1 className="display h-hero">
            Where skin meets <em className="font-normal text-accentdp">science,</em>
            <br />
            and finds calm.
          </h1>
          <p className="mt-7 max-w-xl text-inksoft text-[17px] leading-relaxed">
            Dermatology that listens before it prescribes. Dr. Ashwini's Skin Arc is
            a Kukatpally clinic for skin, hair and aesthetics. Small, well-equipped,
            and built around one idea: diagnose first, treat second, sell never.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#book" className="btn btn-primary">
              Book a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#treatments" className="btn btn-ghost">
              Explore Treatments
            </a>
          </div>
          <div className="mt-10 pt-6 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-inksoft tracking-wide">
            <span>12+ years experience</span>
            <span className="w-1 h-1 rounded-full bg-line" />
            <span>100% patient-recommended on Practo</span>
            <span className="w-1 h-1 rounded-full bg-line" />
            <span>MD, Dermatology · Venereology · Leprosy</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative reveal">
          <div className="zoom relative aspect-[4/5] max-h-[680px]">
            <img
              src="/doctors/ashwini-hero.jpg"
              alt="Dr. B. Ashwini at Skin Arc clinic, Kukatpally"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              loading="eager"
            />
          </div>
          <div className="absolute -left-3 sm:-left-8 bottom-6 sm:bottom-10 bg-white/85 backdrop-blur-md border border-line rounded-2xl p-5 max-w-[260px] shadow-[0_18px_40px_-22px_rgba(31,27,22,.4)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10.5px] tracking-[0.2em] uppercase text-inksoft">
                Led by
              </span>
            </div>
            <div className="font-serif text-[22px] leading-tight">Dr. B. Ashwini</div>
            <div className="text-[12.5px] text-inksoft mt-1.5 leading-relaxed">
              MD Dermatology · 12+ years in skin, hair &amp; aesthetics.
            </div>
          </div>
          <div className="hidden md:block absolute -right-2 top-8 bg-sage/60 px-3 py-1.5 rounded-full text-[11px] tracking-[0.16em] uppercase text-ink/80 rotate-3">
            Kukatpally · Hyd
          </div>
        </div>
      </div>
    </section>
  );
}
