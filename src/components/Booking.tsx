import { type FormEvent, useState } from 'react';

const CONCERNS = [
  'Acne & scars',
  'Pigmentation / melasma',
  'Anti-aging',
  'Hair fall / transplant',
  'Laser hair reduction',
  'General dermatology',
  'Other',
];

const EXPECTATIONS = [
  "We'll call within a working day to confirm.",
  '30-minute initial consultation with Dr. Ashwini.',
  'A written plan with timelines and options. No pressure.',
];

function BookingImage() {
  const [hasImg, setHasImg] = useState(true);

  if (hasImg) {
    return (
      <img
        src="/clinic/booking.jpg"
        alt="Skin Arc clinic"
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setHasImg(false)}
        loading="lazy"
      />
    );
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-accentdp via-accent to-accent/70">
      {/* Decorative pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] text-white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div className="absolute top-8 left-8 sm:top-10 sm:left-10 text-white/85">
        <div className="w-14 h-14 rounded-full border border-white/40 grid place-items-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

const WHATSAPP_NUMBER = '917288911000';

export function Booking() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const concern = String(data.get('concern') ?? '').trim();
    const date = String(data.get('date') ?? '').trim();

    const text =
      `Hello Dr. Ashwini's Skin Arc, I'd like to book a consultation.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Concern: ${concern}\n` +
      `Preferred date: ${date}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    form.reset();
  };

  const inputCls =
    'w-full bg-white/10 placeholder:text-white/65 text-white border border-white/30 rounded-xl px-4 py-3 text-[14px] focus:bg-white/20 focus:outline-none focus:border-white/70 transition';

  return (
    <section id="book" className="py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="rounded-3xl bg-accent text-[#FBF6EE] overflow-hidden grid lg:grid-cols-12 shadow-[0_30px_80px_-40px_rgba(138,98,73,.6)]">
          {/* LEFT: form panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14">
            <div className="eyebrow !text-[#F0E0D0] mb-4">Book a consultation</div>
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] leading-[1.05]">
              Book your consultation.
            </h2>
            <p className="mt-4 text-[16px] text-[#FBE8D6] max-w-md leading-relaxed">
              Same-day appointments often available. Drop your details and we'll get
              back within a working day.
            </p>

            <div className="flex flex-wrap gap-3 mt-7 mb-8">
              <a href="tel:+917288911000" className="btn btn-light !py-3 !px-5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 72889 11000
              </a>
              <a
                href="https://wa.me/917288911000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light !py-3 !px-5"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.5 3.5A10 10 0 0 0 4 17l-1.5 5 5.1-1.4A10 10 0 1 0 20.5 3.5zm-8.4 15.4a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 6.7 3.7zm4.5-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7 1-.3.1-.5 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2c0 1.3 1 2.5 1.1 2.7s1.9 3 4.7 4.2a16 16 0 0 0 1.6.6 4 4 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <form className="grid sm:grid-cols-2 gap-3" onSubmit={onSubmit}>
              <label className="block">
                <span className="sr-only">Name</span>
                <input required name="name" type="text" placeholder="Your name" className={inputCls} />
              </label>
              <label className="block">
                <span className="sr-only">Phone</span>
                <input required name="phone" type="tel" placeholder="Phone number" className={inputCls} />
              </label>
              <label className="block">
                <span className="sr-only">Primary concern</span>
                <select required name="concern" defaultValue="" className={inputCls}>
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
                <input required name="date" type="date" className={inputCls} />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 btn bg-ink text-bg hover:bg-espresso mt-2 justify-center !py-3.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.5 3.5A10 10 0 0 0 4 17l-1.5 5 5.1-1.4A10 10 0 1 0 20.5 3.5zm-8.4 15.4a8 8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 6.7 3.7zm4.5-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7 1-.3.1-.5 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2c0 1.3 1 2.5 1.1 2.7s1.9 3 4.7 4.2a16 16 0 0 0 1.6.6 4 4 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
                </svg>
                Request via WhatsApp
              </button>
              <p className="sm:col-span-2 text-[12px] text-[#FBE8D6]/80 text-center -mt-1">
                Opens WhatsApp with your details ready to send — we reply within a working day.
              </p>
            </form>
          </div>

          {/* RIGHT: visual panel */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/15">
            <BookingImage />
            {/* Subtle gradient for readability of overlay card */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating "What to expect" card */}
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
              <div className="bg-white/95 backdrop-blur-md text-ink rounded-2xl p-6 lg:p-7 shadow-[0_20px_50px_-22px_rgba(31,27,22,.45)]">
                <div className="eyebrow mb-4">What happens next</div>
                <ul className="space-y-3">
                  {EXPECTATIONS.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-[14px] leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-accent/15 text-accentdp grid place-items-center flex-shrink-0 mt-0.5">
                        <Check />
                      </span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-line flex items-center justify-between gap-3 text-[12px]">
                  <div className="text-inksoft">
                    <span className="uppercase tracking-[0.16em] text-[10.5px]">Open</span>
                    <div className="mt-0.5 text-ink">Mon–Sun · 10 AM – 9:30 PM</div>
                  </div>
                  <a
                    href="#"
                    className="text-accentdp underline underline-offset-4 hover:text-ink"
                  >
                    See directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
