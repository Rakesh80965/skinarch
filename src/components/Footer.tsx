const COLS = [
  {
    title: 'Quick links',
    links: [
      ['About', '#about'],
      ['Treatments', '#treatments'],
      ['Doctors', '#doctors'],
      ['Results', '#results'],
      ['Visit', '#visit'],
    ],
  },
  {
    title: 'Treatments',
    links: [
      ['Acne & scars', '#treatments'],
      ['Pigmentation', '#treatments'],
      ['Anti-aging', '#treatments'],
      ['Hair transplant', '#treatments'],
      ['Laser hair reduction', '#treatments'],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-[#C9BFB1] pt-20 pb-10">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="text-[#F4EFE5] text-[28px] font-semibold tracking-[-0.02em]">
            Dr. Ashwini's skin arch<span className="text-accent">.</span>
          </div>
          <p className="mt-4 max-w-sm text-[14.5px]">
            Skin, hair and aesthetics. A dermatology clinic in Kukatpally, Hyderabad.
            Careful diagnosis, considered care, quietly confident results.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <a
              aria-label="Instagram"
              href="#"
              className="w-9 h-9 rounded-full border border-[#3a3127] grid place-items-center hover:bg-[#3a3127] transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="w-9 h-9 rounded-full border border-[#3a3127] grid place-items-center hover:bg-[#3a3127] transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2c-.3 0-1.6-.2-3-.2-3 0-5 1.8-5 5.1V10H6v4h3v8h4z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow !text-[#857968] mb-5">{COLS[0].title}</div>
          <ul className="space-y-2.5 text-[14.5px]">
            {COLS[0].links.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="eyebrow !text-[#857968] mb-5">{COLS[1].title}</div>
          <ul className="space-y-2.5 text-[14.5px]">
            {COLS[1].links.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="eyebrow !text-[#857968] mb-5">Contact</div>
          <ul className="space-y-2.5 text-[14.5px]">
            <li>
              <a href="tel:+91XXXXXXXXXX" className="hover:text-white">
                +91 XXXXX XXXXX
              </a>
            </li>
            <li>
              <a href="mailto:hello@skinarch.in" className="hover:text-white">
                hello@skinarch.in
              </a>
            </li>
            <li className="text-[#857968] text-[13px] pt-2">
              Kukatpally,
              <br />
              Hyderabad 500072
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 mt-14 pt-6 border-t border-[#3a3127] flex flex-col sm:flex-row gap-3 justify-between text-[12px] text-[#857968]">
        <span>© {new Date().getFullYear()} Dr. Ashwini's Skin Arch. All rights reserved.</span>
        <span>Designed with care.</span>
      </div>
    </footer>
  );
}
