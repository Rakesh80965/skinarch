import { useRef, useState } from 'react';
import type { BeforeAfter } from '../data/beforeAfter';

interface Props {
  item: BeforeAfter;
}

export function BeforeAfterCard({ item }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const onMove = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100));
    setPct(next);
  };

  const startDrag = (clientX: number) => {
    dragging.current = true;
    onMove(clientX);
  };

  return (
    <div className="snap-start flex-shrink-0 w-[78vw] sm:w-[42vw] lg:w-[26vw]">
      <div
        ref={wrapRef}
        className="ba"
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => dragging.current && onMove(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => dragging.current && onMove(e.touches[0].clientX)}
        onTouchEnd={() => (dragging.current = false)}
      >
        <img className="before" src={item.before} alt={`${item.label} before`} loading="lazy" />
        <div className="after-wrap" style={{ clipPath: `inset(0 0 0 ${pct}%)` }}>
          <img className="after" src={item.after} alt={`${item.label} after`} loading="lazy" />
        </div>
        <div className="handle" style={{ left: `${pct}%` }} />
        <div className="knob" style={{ left: `${pct}%` }} aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F1B16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
        <div className="tag" style={{ left: 12 }}>
          Before
        </div>
        <div className="tag" style={{ right: 12 }}>
          After
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-serif text-[16px]">{item.label}</span>
        <span className="text-[11px] tracking-[0.16em] uppercase text-inksoft">Drag →</span>
      </div>
    </div>
  );
}
