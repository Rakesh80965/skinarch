const TAGS = [
  'Dermatologist',
  'Trichologist',
  'Aesthetic Dermatology',
  'Hair Transplant Surgeon',
  'Cosmetologist',
];

const HIGHLIGHTS = [
  { label: 'Practo recommendation', value: '100', suffix: '%' },
  { label: 'Years in practice', value: '12', suffix: '+' },
  { label: 'Treatments performed', value: '5,000', suffix: '+' },
];

const SPECIALTIES = [
  'Acne & acne scarring',
  'Melasma & pigmentation',
  'Hair fall & PRP / GFC',
  'Hair transplant (FUE)',
  'Laser hair reduction',
  'Botox, fillers & threads',
  'Chemical peels',
  'Sensitive skin & eczema',
];

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-32 bg-white/50 border-y border-line">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="eyebrow mb-5">Lead dermatologist</div>
            <h2 className="display h-section">
              Meet <span className="text-accentdp">Dr. Ashwini.</span>
            </h2>
          </div>
          <p className="text-inksoft max-w-md text-[15.5px] leading-relaxed">
            A board-certified dermatologist with twelve years of clinical and aesthetic
            experience, focused on natural, evidence-based outcomes for Indian skin.
          </p>
        </div>

        {/* Row 1: portrait + (identity + approach + stats), equal heights */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-6">
          {/* Portrait: pure image card, stretches with the row */}
          <article className="card overflow-hidden reveal lg:col-span-5 flex">
            <div className="zoom w-full min-h-[420px] bg-line">
              <img
                src="/doctors/ashwini-clinic.jpg"
                alt="Dr. B. Ashwini at Skin Arc clinic"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 18%' }}
                loading="lazy"
              />
            </div>
          </article>

          {/* Right column: 3 stacked cards */}
          <div className="lg:col-span-7 reveal flex flex-col gap-6">
            {/* Identity + tags */}
            <div className="card p-7 lg:p-8">
              <h3 className="text-[26px] font-semibold leading-tight tracking-tight">
                Dr. B. Ashwini
              </h3>
              <p className="text-[13px] text-inksoft mt-2">
                MBBS · MD (Dermatology, Venereology &amp; Leprosy)
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {TAGS.map((t) => (
                  <span
                    key={t}
                    className="text-[11.5px] px-2.5 py-1 rounded-full bg-sage/40 text-ink/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="card p-7 lg:p-8 flex-1 flex flex-col justify-center gap-4">
              <div className="eyebrow">Approach</div>
              <p className="text-[15.5px] text-ink/85 leading-relaxed">
                I came to dermatology because skin is rarely just skin. It’s sleep, stress,
                hormones, sunlight, the products on your shelf. Every plan starts with a careful
                diagnosis and an honest conversation about what your skin actually needs. Sometimes
                a single prescription; sometimes a longer protocol. Never a package you didn’t
                ask for.
              </p>
              <p className="text-[14px] text-inksoft leading-relaxed">
                That philosophy runs through every consultation at Skin Arc — diagnose first,
                treat second, and only recommend what genuinely helps your skin and hair.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <span className="font-serif text-[20px] text-accentdp italic">Dr. Ashwini</span>
                <span className="h-px flex-1 bg-line" />
                <span className="text-[11px] tracking-[0.16em] uppercase text-inksoft">
                  Lead dermatologist
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid sm:grid-cols-3 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="card p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent/80" />
                  <div className="text-[26px] leading-none font-semibold tracking-[-0.02em]">
                    {h.value}
                    <span className="text-[16px] text-accentdp ml-0.5">{h.suffix}</span>
                  </div>
                  <div className="text-[11px] tracking-[0.16em] text-inksoft uppercase mt-3">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Full-width expertise + CTA strip */}
        <div className="card p-7 lg:p-10 reveal">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-4">
              <div className="eyebrow mb-3">Areas of expertise</div>
              <h3 className="text-[24px] font-semibold leading-tight tracking-tight">
                What we treat, day in and day out.
              </h3>
              <p className="text-[14px] text-inksoft mt-3 leading-relaxed">
                Common concerns and advanced procedures. Every plan tailored to your
                skin and your timeline.
              </p>
              <a href="#book" className="mt-6 inline-flex btn btn-primary">
                Book with Dr. Ashwini
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                {SPECIALTIES.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-[14.5px]">
                    <span className="w-6 h-6 rounded-full bg-sage/40 text-accentdp grid place-items-center flex-shrink-0">
                      <Check />
                    </span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
