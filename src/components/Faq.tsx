import { FAQS } from '../data/faq';

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4 reveal">
          <div className="eyebrow mb-5">FAQ</div>
          <h2 className="display h-section">
            Good questions, <em className="italic font-normal text-accentdp">honestly</em>{' '}
            answered.
          </h2>
          <p className="text-inksoft mt-6 text-[15px] max-w-sm">
            Don't see your question?{' '}
            <a className="underline underline-offset-4 text-ink hover:text-accentdp" href="#book">
              Ask us directly
            </a>{' '}
            — we usually reply within a working day.
          </p>
        </div>
        <div className="lg:col-span-8 reveal">
          {FAQS.map((f) => (
            <details key={f.q} className="faq">
              <summary>
                <span className="font-serif text-[19px] sm:text-[21px]">{f.q}</span>
                <span className="plus" aria-hidden>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="answer">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
