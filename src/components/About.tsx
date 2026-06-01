import { useCountUp } from '../hooks/useCountUp';

function Stat({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div>
      <div className="text-4xl font-semibold tracking-[-0.02em]">
        <span ref={ref}>{value.toLocaleString()}</span>
        <span className="text-accentdp">{suffix}</span>
      </div>
      <div className="text-[12.5px] tracking-wide text-inksoft mt-1.5">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
        <div className="lg:col-span-6 reveal">
          <div className="eyebrow mb-6">About Dr. Ashwini's Skin Arc</div>
          <h2 className="display h-section">
            Careful diagnosis. <span className="text-accentdp">Considered</span> care.
          </h2>
          <div className="mt-8 space-y-5 text-inksoft text-[17px] leading-relaxed max-w-[58ch]">
            <p>
              Dr. Ashwini's Skin Arc is a Kukatpally clinic for skin, hair and
              aesthetics, small by design. Fewer rooms, fewer distractions, and time
              enough to actually examine what you came in for.
            </p>
            <p>
              Dr. B. Ashwini leads the team. Twelve years of clinical and aesthetic work
              shape the approach: careful diagnosis, evidence-based recommendations, and
              treatment plans that get adjusted as your skin or hair responds. No
              subscription packages. No template regimens. Just dermatology, calmly
              delivered.
            </p>
          </div>
          <div className="mt-8 lg:mt-10 grid grid-cols-3 gap-x-6 max-w-md border-t border-line pt-8">
            <Stat target={12} suffix="+" label="Years of practice" />
            <Stat target={5000} suffix="+" label="Treatments performed" />
            <Stat target={100} suffix="%" label="Practo recommended" />
          </div>

          <div className="mt-7 lg:mt-10 flex flex-wrap gap-2.5">
            {['Skin', 'Hair', 'Lasers', 'Aesthetics', 'PRP', 'Pigmentation'].map((f) => (
              <span
                key={f}
                className="text-[13px] tracking-wide rounded-full border border-line bg-bg px-4 py-1.5 text-inksoft"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-7 lg:mt-10 flex items-center gap-5 lg:gap-6">
            <div className="relative shrink-0">
              <div className="absolute -inset-2 rounded-full bg-sage/40" aria-hidden />
              <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-1 ring-line">
                <img
                  src="/doctors/ashwini.jpg"
                  alt="Dr. B. Ashwini"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-accent/15 border border-accent/30" aria-hidden />
            </div>
            <div className="relative">
              <div className="absolute -left-3 top-2 w-1.5 h-10 rounded-full bg-accent" aria-hidden />
              <p className="font-serif text-[18px] leading-snug pl-3">
                Led by Dr. B. Ashwini
              </p>
              <p className="text-[13px] text-inksoft mt-1 pl-3 max-w-[34ch]">
                MBBS, MD (Dermatology) — Kukatpally, Hyderabad. By appointment.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative reveal">
          <div className="grid grid-cols-5 gap-4 lg:gap-6">
            <div className="col-span-3 zoom aspect-[4/5]">
              <img
                src="/clinic/reveal-vega.jpg"
                alt="Reveal VEGA laser system at Dr. Ashwini's Skin Arc"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 lg:gap-6 pt-6 lg:pt-12">
              <div className="zoom aspect-[3/4] bg-bg">
                <img
                  src="/clinic/tri-beam.jpg"
                  alt="Tri-Beam Q-switched laser for pigmentation and tattoo removal"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl bg-sage/40 p-5">
                <div className="eyebrow mb-2">Practice</div>
                <p className="text-[19px] leading-snug font-medium">
                  “We treat the person, then the skin. In that order.”
                </p>
                <p className="text-[12px] text-inksoft mt-3">Dr. B. Ashwini</p>
              </div>
            </div>
          </div>

          <div className="mt-4 lg:mt-6">
            <div className="eyebrow mb-3">In the chair</div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="zoom aspect-[4/5]">
                <img
                  src="/clinic/procedure-laser.jpg"
                  alt="Dr. Ashwini performing a Q-switch laser session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="zoom aspect-[4/5]">
                <img
                  src="/clinic/procedure-prp.jpg"
                  alt="Dr. Ashwini performing a PRP scalp procedure"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
