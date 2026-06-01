export function Visit() {
  return (
    <section id="visit" className="py-20 lg:py-28 border-t border-line">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 reveal">
          <div className="eyebrow mb-5">Visit us</div>
          <h2 className="display h-section mb-8">
            Find us in <span className="text-accentdp">Kukatpally.</span>
          </h2>
          <div className="rounded-2xl overflow-hidden border border-line aspect-[4/3] bg-line">
            <iframe
              title="Skin Arc Clinic on map"
              src="https://www.google.com/maps?q=17.493742,78.413866&z=16&output=embed"
              className="w-full h-full"
              style={{ border: 0, filter: 'grayscale(0.25) contrast(0.95)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5 reveal">
          <div className="card p-7">
            <div className="eyebrow mb-3">Address</div>
            <p className="font-serif text-[19px] leading-snug">
              Laxminagar Colony,
              <br />
              Vivekananda Nagar Extension,
              <br />
              Kukatpally, Hyderabad,
              <br />
              Telangana 500072
            </p>
            <p className="text-[13px] text-inksoft mt-3">
              Opp. Tipsy Topsy Bakery · Near Narayana Junior College
            </p>
            <a
              className="inline-flex items-center gap-1.5 mt-5 text-[13px] underline underline-offset-4 hover:text-accentdp"
              href="https://www.google.com/maps?q=17.493742,78.413866"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="card p-7">
            <div className="eyebrow mb-3">Hours · Mon–Sun</div>
            <div className="flex items-center justify-between py-2 border-b border-line">
              <span className="text-[14px]">Morning</span>
              <span className="font-serif text-[18px]">10:00 AM – 2:00 PM</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[14px]">Evening</span>
              <span className="font-serif text-[18px]">5:30 PM – 9:30 PM</span>
            </div>
          </div>

          <div className="card p-7">
            <div className="eyebrow mb-3">Reach us</div>
            <div className="space-y-2 text-[14.5px]">
              <div className="flex items-center gap-3">
                <span className="text-inksoft text-[12px] w-14 uppercase tracking-wide">Phone</span>
                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-inksoft text-[12px] w-14 uppercase tracking-wide">
                  WhatsApp
                </span>
                <a href="https://wa.me/91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-inksoft text-[12px] w-14 uppercase tracking-wide">Email</span>
                <a href="mailto:hello@skinarch.in">hello@skinarch.in</a>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5 pt-5 border-t border-line">
              <a
                aria-label="Instagram"
                href="#"
                className="w-9 h-9 rounded-full border border-line grid place-items-center hover:bg-ink hover:text-bg transition"
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
                className="w-9 h-9 rounded-full border border-line grid place-items-center hover:bg-ink hover:text-bg transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2c-.3 0-1.6-.2-3-.2-3 0-5 1.8-5 5.1V10H6v4h3v8h4z" />
                </svg>
              </a>
              <a
                aria-label="Practo"
                href="#"
                className="px-3 h-9 rounded-full border border-line grid place-items-center hover:bg-ink hover:text-bg transition text-[11px] tracking-wide"
              >
                PRACTO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
