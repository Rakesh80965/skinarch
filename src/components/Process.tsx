const STEPS = [
  {
    n: '01',
    title: 'Consult',
    body: 'A 30-minute sit-down. We listen to your history before we look at your skin.',
  },
  {
    n: '02',
    title: 'Skin analysis',
    body: 'Magnification, photo documentation and — when needed — bloodwork or biopsy.',
  },
  {
    n: '03',
    title: 'Personalised plan',
    body: 'A written plan, a clear timeline, and a transparent breakdown of options — no pressure.',
  },
  {
    n: '04',
    title: 'Follow-through',
    body: 'Scheduled check-ins, photo reviews, and adjustments — until your skin is settled.',
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-28 bg-espresso text-[#EDE6DA]">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-14 reveal">
          <div className="eyebrow mb-5 !text-[#B8A892]">The visit</div>
          <h2 className="display h-section text-[#F4EFE5]">
            How a visit <em className="font-normal text-accent">feels.</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-[58px] h-px bg-[#3a3127]" />
          {STEPS.map((s) => (
            <div key={s.n} className="reveal relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="font-serif text-3xl text-accent">{s.n}</div>
                <div className="w-3 h-3 rounded-full border border-accent bg-espresso relative z-10" />
              </div>
              <h3 className="font-serif text-[22px] mb-2">{s.title}</h3>
              <p className="text-[#C9BFB1] text-[14.5px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
