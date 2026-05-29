import { useState } from 'react';
import { TAB_LABELS, TREATMENTS, type TreatmentTab } from '../data/treatments';
import { ICONS } from '../data/icons';

export function Treatments() {
  const [tab, setTab] = useState<TreatmentTab>('skin');
  const items = TREATMENTS[tab];

  return (
    <section id="treatments" className="py-20 lg:py-32 bg-white/50 border-y border-line">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
          <div>
            <div className="eyebrow mb-5">Our services</div>
            <h2 className="display h-section">
              Treatments, <em className="font-normal text-accentdp">tailored.</em>
            </h2>
          </div>
          <p className="text-inksoft max-w-md text-[15.5px] leading-relaxed">
            Skin, hair and aesthetics, from everyday concerns to advanced procedures.
            Every plan is built around what you actually need, in the order that makes sense.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-10 reveal">
          {(Object.keys(TAB_LABELS) as TreatmentTab[]).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`tab-btn ${tab === key ? 'active' : ''}`}
            >
              {TAB_LABELS[key]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <article
              key={`${tab}-${idx}`}
              className="reveal-card card p-7 h-full flex flex-col in"
            >
              <div className="reveal-card-content">
                <div className="reveal-card-icon w-11 h-11 rounded-full border border-line grid place-items-center text-ink mb-6 [&_svg]:w-5 [&_svg]:h-5">
                  {ICONS[it.icon]}
                </div>
                <h3 className="font-serif text-[22px] leading-tight mb-2 text-ink">{it.title}</h3>
                <p className="text-inksoft text-[14.5px] leading-relaxed">{it.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-ink/85">
                  <span>Learn more</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="reveal-img" style={{ backgroundImage: `url('${it.img}')` }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
