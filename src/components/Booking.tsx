import { type FormEvent, useState } from 'react';

const CONCERNS = [
  'Acne & scars',
  'Pigmentation / melasma',
  'Anti-aging',
  'Hair fall / transplant',
  'Laser hair reduction',
  'General dermatology',
  'Surgical consult',
  'Other',
];

export function Booking() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert('Thanks — our team will reach out shortly.');
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 200);
  };

  const inputCls =
    'w-full bg-white/10 placeholder:text-white/65 text-white border border-white/30 rounded-xl px-4 py-3 text-sm focus:bg-white/20 focus:outline-none focus:border-white/70';

  return (
    <section id="book" className="py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="rounded-3xl bg-accent text-[#FBF6EE] overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16">
            <div className="eyebrow !text-[#F0E0D0] mb-4">Book a consultation</div>
            <h2 className="display h-section">
              Book your consultation.
              <br />
              <em className="italic font-normal text-[#FBE8D6]">₹500. Same day available.</em>
            </h2>
            <div className="flex flex-wrap gap-3 mt-7 mb-9">
              <a href="tel:+91XXXXXXXXXX" className="btn btn-light">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 XXXXX XXXXX
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.5 3.5A10 10 0 0 0 4 17l-1.5 5 5.1-1.4A10 10 0 1 0 20.5 3.5zm-8.4 15.4a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 6.7 3.7zm4.5-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7 1-.3.1-.5 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2c0 1.3 1 2.5 1.1 2.7s1.9 3 4.7 4.2a16 16 0 0 0 1.6.6 4 4 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <form className="grid sm:grid-cols-2 gap-3" onSubmit={onSubmit}>
              <label className="block">
                <span className="sr-only">Name</span>
                <input required type="text" placeholder="Your name" className={inputCls} />
              </label>
              <label className="block">
                <span className="sr-only">Phone</span>
                <input required type="tel" placeholder="Phone number" className={inputCls} />
              </label>
              <label className="block">
                <span className="sr-only">Primary concern</span>
                <select required defaultValue="" className={inputCls}>
                  <option value="" className="text-ink" disabled>
                    Primary concern…
                  </option>
                  {CONCERNS.map((c) => (
                    <option key={c} className="text-ink">
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="sr-only">Preferred date</span>
                <input required type="date" className={inputCls} />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="sm:col-span-2 btn bg-ink text-bg hover:bg-espresso mt-2 justify-center disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Request appointment'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1612442058896-08a31b0e9b4d?w=1200&q=80&auto=format&fit=crop"
              alt="Botanical detail"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
