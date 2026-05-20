interface Item {
  n: string;
  title: string;
  body: string;
}

const ITEMS: Item[] = [
  {
    n: '01',
    title: 'Board-certified dermatology',
    body: 'Led by an MD dermatologist with a sub-specialty in aesthetics and hair restoration.',
  },
  {
    n: '02',
    title: 'FDA-approved technology',
    body: 'Only equipment and protocols with a proven safety profile for Indian skin types.',
  },
  {
    n: '03',
    title: 'Honest, no-upsell consults',
    body: "If a single cream will do it, we'll say so. We sell results, never packages.",
  },
  {
    n: '04',
    title: 'Personalised plans',
    body: 'Every plan is written for one face — yours. Reviewed and adjusted at every follow-up.',
  },
];

export function WhySkinArch() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <div className="eyebrow mb-5">Why Skin Arch</div>
          <h2 className="display h-section">
            Quietly thorough.{' '}
            <em className="italic font-normal text-accentdp">Refreshingly honest.</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-line">
          {ITEMS.map((it, idx) => (
            <div
              key={it.n}
              className={`reveal pt-8 pb-8 ${
                idx === 0
                  ? 'lg:pr-8 lg:border-r border-line'
                  : idx === ITEMS.length - 1
                    ? 'lg:pl-8 border-t lg:border-t-0 border-line'
                    : 'lg:px-8 lg:border-r border-t sm:border-t-0 lg:border-t-0 border-line'
              }`}
            >
              <div className="font-serif italic text-accent text-5xl mb-4">{it.n}</div>
              <h3 className="font-serif text-[22px] mb-2 leading-tight">{it.title}</h3>
              <p className="text-inksoft text-[14.5px] leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
