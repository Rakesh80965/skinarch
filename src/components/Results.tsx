import { BEFORE_AFTER } from '../data/beforeAfter';
import { BeforeAfterCard } from './BeforeAfterCard';

const STAR = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
  </svg>
);

const TESTIMONIALS = [
  "\"The first dermatologist who didn't make me feel like a sales target. She explained every step and the science behind it.\"",
  "\"I'd tried four different acne regimens. The plan I got here was simpler than all of them — and the only one that actually worked.\"",
  '"My hair-fall consult felt like a doctor\'s appointment, not a sales pitch. PRP, six sessions, very visible difference."',
];

export function Results() {
  return (
    <section id="results" className="py-20 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
          <div>
            <div className="eyebrow mb-5">Results</div>
            <h2 className="display h-section">
              Quiet, <em className="font-normal text-accentdp">visible</em> results.
            </h2>
          </div>
          <p className="text-inksoft max-w-md text-[15.5px] leading-relaxed">
            Drag the slider on any photo to see before and after. Identical lighting; no filters;
            printed with consent.
          </p>
        </div>

        <div className="relative -mx-5 lg:mx-0">
          <div className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 lg:px-0 pb-2">
            {BEFORE_AFTER.map((b) => (
              <BeforeAfterCard key={b.label} item={b} />
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24 reveal">
          <div className="rounded-3xl bg-sage/40 p-8 sm:p-14 lg:p-20 relative overflow-hidden">
            <svg className="absolute -left-2 top-6 w-16 h-16 text-ink/15" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
              <path d="M9.5 8c-3 0-5.5 2.4-5.5 5.5 0 3 2.4 5.4 5.4 5.4.6 0 .9.4.7 1-1 2.6-2.8 4.2-4.1 5-.6.4-.3 1.4.4 1.3 5.4-.9 9.7-5.4 9.7-12.1C16.1 10.5 13.2 8 9.5 8zm14 0c-3 0-5.5 2.4-5.5 5.5 0 3 2.4 5.4 5.4 5.4.6 0 .9.4.7 1-1 2.6-2.8 4.2-4.1 5-.6.4-.3 1.4.4 1.3 5.4-.9 9.7-5.4 9.7-12.1C30.1 10.5 27.2 8 23.5 8z" />
            </svg>
            <p className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.2] max-w-4xl relative">
              I came in for one persistent patch of pigmentation. I left with a three-product plan
              and a clear timeline. Six weeks later, the patch is almost gone — and I haven't bought
              a single thing I didn't need.
            </p>
            <p className="mt-8 text-[12.5px] tracking-[0.16em] uppercase text-ink/70">
              Verified patient · Hyderabad
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card p-7 reveal">
              <div className="flex gap-0.5 mb-4 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j}>{STAR}</span>
                ))}
              </div>
              <p className="font-serif text-[18px] leading-snug">{t}</p>
              <p className="mt-5 text-[12px] tracking-wide uppercase text-inksoft">
                Verified patient · Hyderabad
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
