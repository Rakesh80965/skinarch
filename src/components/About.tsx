import { useCountUp } from '../hooks/useCountUp';

function Stat({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div>
      <div className="font-serif text-4xl stat-num">
        <span ref={ref}>{value.toLocaleString()}</span>
        {suffix}
      </div>
      <div className="text-[12.5px] tracking-wide text-inksoft mt-1">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6 reveal">
          <div className="eyebrow mb-6">A clinic, not a conveyor belt</div>
          <h2 className="display h-section">
            A clinic built around <em className="italic font-normal text-accentdp">your skin,</em>
            <br />
            not a checklist.
          </h2>
          <div className="mt-8 space-y-5 text-inksoft text-[17px] leading-relaxed max-w-[58ch]">
            <p>
              Most skin and hair concerns don't get worse from a lack of treatments — they get worse
              from the wrong ones. We start every visit with a careful diagnosis, an honest
              conversation about what's possible, and a plan tied to the science.
            </p>
            <p>
              That means you'll sometimes leave with a single mild prescription instead of a
              six-step regimen. And it means when we do recommend a laser, a peel, or a procedure,
              it's because the evidence — and your skin — actually call for it.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-y-8 gap-x-8 max-w-md border-t border-line pt-8">
            <Stat target={12} label="Years of practice" />
            <Stat target={5000} suffix="+" label="Treatments performed" />
            <Stat target={100} suffix="%" label="Practo recommendation" />
            <div>
              <div className="font-serif text-4xl stat-num">02</div>
              <div className="text-[12.5px] tracking-wide text-inksoft mt-1">Specialist doctors</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative reveal">
          <div className="grid grid-cols-5 gap-4 lg:gap-6">
            <div className="col-span-3 zoom aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop"
                alt="Calm clinic interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 lg:gap-6 pt-12">
              <div className="zoom aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop"
                  alt="Close-up of skincare texture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl bg-sage/40 p-5">
                <div className="eyebrow mb-2">Practice</div>
                <p className="font-serif italic text-[19px] leading-snug">
                  "We treat the person, then the skin. In that order."
                </p>
                <p className="text-[12px] text-inksoft mt-3">— Dr. B. Ashwini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
