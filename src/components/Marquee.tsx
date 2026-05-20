import { MARQUEE_ITEMS } from '../data/marquee';

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <span className="flex items-center gap-12" aria-hidden={ariaHidden || undefined}>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="contents">
          <span>{item}</span>
          <span className="text-accent" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <section aria-hidden="true" className="border-y border-line bg-white/40">
      <div className="marquee py-4">
        <div className="marquee__track text-inksoft font-serif italic text-2xl md:text-[28px]">
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  );
}
