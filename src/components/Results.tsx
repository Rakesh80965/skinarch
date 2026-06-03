import { useState } from 'react';
import { BEFORE_AFTER } from '../data/beforeAfter';
import { BeforeAfterCard } from './BeforeAfterCard';

const STAR = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
  </svg>
);

interface Review {
  name: string;
  stars: number;
  when: string;
  text: string;
}

// Real Google reviews for Dr. Ashwini's Skin Arc Clinic, Kukatpally.
const REVIEWS: Review[] = [
  {
    name: 'shilpa guniganti',
    stars: 5,
    when: '8 months ago',
    text: "I recently underwent a chemical peel treatment, and I'm really happy with the results. The procedure was explained to me clearly beforehand, including what to expect during and after the peel. The treatment itself was quick and only caused mild tingling, which was very manageable. In the first few days, I experienced some redness and peeling (as expected), but once my skin healed, it felt smoother, looked brighter, and had a more even tone. The staff was professional and ensured I was comfortable throughout the process. They also gave me proper aftercare instructions, which really helped with recovery. Overall, it was a positive experience, and I'd definitely recommend a chemical peel to anyone looking for skin rejuvenation, acne scar reduction, or an instant glow, provided they follow post-treatment care strictly.",
  },
  {
    name: 'Gatte Srinayana',
    stars: 5,
    when: '7 months ago',
    text: "I consulted this hospital about 1 month's ago for pimples and rashes doctor prescribed some medicine which is helpful control to the condition I loved the personalised approach the doctor has taken to understand my skin concerns with a lot of Patience, coached me about my skin and tailored the needs accordingly. The results from hair dandurf and skintag removel Chemical peels were extremely noticeable, reliable and Effective. Thank you Dr.Ashwini and team.",
  },
  {
    name: 'Srinivas M',
    stars: 5,
    when: '6 months ago',
    text: "I recently completed my GFC sessions at Aswani Skin Arc Clinic, and I am extremely happy with the experience. Dr. Aswani is very knowledgeable, friendly, and explains every step clearly. Her treatment approach is very professional, and I've already seen very good improvement in my hair. A special thanks to assistant Deevena — she is very supportive throughout the sessions, makes you feel comfortable, and guides you with proper care and follow-up. Overall, the clinic provides excellent service, maintains great hygiene, and truly cares about patient results. I highly recommend Aswani ARC Clinic for anyone looking for genuine and effective hair treatment.",
  },
  {
    name: 'Sony Chowdary',
    stars: 5,
    when: '9 months ago',
    text: "I visited this dermatology clinic for laser treatment for both unwanted hair and acne scars. The experience has been excellent. The dermatologist explained the procedure clearly, and my 1st session was smooth with minimal discomfort. I noticed a significant reduction in hair growth and my acne scars have lightened. The clinic maintains very good hygiene, the staff is professional and supportive, and the machines used are safe. Overall, I am very satisfied with the results and highly recommend this clinic for anyone considering laser treatments.",
  },
  {
    name: 'kusumareddy Cimmanolla',
    stars: 5,
    when: '7 months ago',
    text: "I consulted this clinic for skin irritation and pigmentation problems. The irritation and rash were resolved completely in just 5 days, thanks to the effective treatment. I've now begun pigmentation treatment nd doctor is knowledgeable and caring, and the clinic staff ensure a smooth experience. Highly recommended for dermatological treatments.",
  },
  {
    name: 'Almas Ali',
    stars: 5,
    when: '6 months ago',
    text: "Visited Dr. Ashwini's Skin Arc Clinic for a severe skin infection, and I am extremely satisfied with the treatment. Dr. Ashwini is very kind, patient, and professional. She listened carefully to my concerns and treated my condition so well that it is now almost completely cured. The staff at the clinic is also very welcoming and supportive, which made the entire experience comfortable and reassuring. I would definitely recommend Dr. Ashwini's Skin Arc Clinic to anyone looking for effective and trustworthy skin treatment.",
  },
];

// A real review featured as the large pull quote.
const FEATURED =
  "My experience at Skin Arc Clinic has been excellent! The staff are very professional, friendly, and caring. A special thanks to Ashwini Ma'am for her expertise and kind approach — she explains everything clearly and makes every session comfortable. I'm very happy with the results and highly recommend this clinic to anyone looking for quality skin care! 💫";

// Replace with the actual Google Business Profile review URL once you have
// the Place ID. The g.page short link is the simplest form:
//   https://g.page/r/<PLACE_ID>/review
const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Dr.+Ashwini%27s+Skin+Arc+Kukatpally+Hyderabad';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, j) => (
        <span key={j}>{STAR}</span>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  const [open, setOpen] = useState(false);
  const LIMIT = 180;
  const isLong = r.text.length > LIMIT;
  const shown =
    open || !isLong ? r.text : r.text.slice(0, LIMIT).replace(/\s+\S*$/, '') + '…';

  return (
    <article className="card p-7 reveal flex flex-col h-full">
      <Stars count={r.stars} />
      <p className="font-serif text-[15.5px] leading-relaxed text-ink/90 mt-4">{shown}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="self-start mt-2 text-[12.5px] text-accentdp underline underline-offset-4 hover:text-ink transition"
        >
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
      <div className="mt-auto pt-5 border-t border-line flex items-center justify-between gap-2">
        <span className="text-[13px] font-semibold text-ink">{r.name}</span>
        <span className="text-[11px] tracking-wide uppercase text-inksoft whitespace-nowrap">
          {r.when}
        </span>
      </div>
    </article>
  );
}

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
            <p className="font-serif text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.25] max-w-4xl relative">
              {FEATURED}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Stars count={5} />
              <span className="text-[12.5px] tracking-[0.16em] uppercase text-ink/70">
                Google review · Skin Arc Clinic
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>

        {/* Leave-a-review CTA: sends visitors to Google Business Profile.
            Replace the URL with g.page/r/<PLACE_ID>/review when ready. */}
        <div className="mt-10 lg:mt-12 reveal">
          <div className="rounded-3xl border border-line bg-white/60 p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="eyebrow mb-2">Been to Dr. Ashwini's Skin Arc?</div>
              <h3 className="text-[22px] sm:text-[24px] font-semibold leading-tight tracking-tight">
                Share your experience on Google.
              </h3>
              <p className="text-[14px] text-inksoft mt-2 max-w-md">
                Honest reviews from real patients help us keep doing what we do, and help
                others find us. Two minutes is all it takes.
              </p>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
              </svg>
              Leave a Google review
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
