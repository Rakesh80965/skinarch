interface Doctor {
  role: string;
  name: string;
  qualifications: string;
  tags: string[];
  bio: string;
  stat: { value: string; suffix: string; label: string };
  img: string;
  alt: string;
  objectPosition?: string;
}

const DOCTORS: Doctor[] = [
  {
    role: 'Lead dermatologist',
    name: 'Dr. B. Ashwini',
    qualifications: 'MBBS · MD (Dermatology, Venereology & Leprosy)',
    tags: [
      'Dermatologist',
      'Trichologist',
      'Aesthetic Dermatology',
      'Hair Transplant Surgeon',
      'Cosmetologist',
    ],
    bio: 'Twelve years of clinical and aesthetic dermatology, with a special interest in acne scarring, melasma in Indian skin tones, and natural-looking aesthetic outcomes.',
    stat: { value: '100', suffix: '%', label: 'Practo recommendation' },
    img: '/doctors/ashwini.jpg',
    alt: 'Portrait of Dr. B. Ashwini',
    objectPosition: 'center 22%',
  },
  {
    role: 'Consultant surgeon',
    name: 'Dr. Umashankar',
    qualifications: 'MBBS · MS (General, Laparoscopic & Bariatric Surgery)',
    tags: ['General Surgery', 'Laparoscopic', 'Bariatric', 'Minimally Invasive'],
    bio: 'Twelve years of operating-room experience, with a focus on minimally invasive techniques — daycare procedures, faster recovery, less scarring.',
    stat: { value: '12', suffix: '+', label: 'Years experience' },
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80&auto=format&fit=crop',
    alt: 'Portrait of Dr. Umashankar',
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-32 bg-white/50 border-y border-line">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="eyebrow mb-5">The team</div>
            <h2 className="display h-section">
              Meet your <em className="italic font-normal text-accentdp">doctors.</em>
            </h2>
          </div>
          <p className="text-inksoft max-w-md text-[15.5px] leading-relaxed">
            Two specialists, working under one roof. One looks after your skin and hair, the other
            after surgical concerns that need a careful, experienced hand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {DOCTORS.map((d) => (
            <article key={d.name} className="card overflow-hidden reveal flex flex-col">
              <div className="grid sm:grid-cols-5">
                <div className="sm:col-span-2 aspect-[4/5] sm:aspect-auto bg-line zoom">
                  <img
                    src={d.img}
                    alt={d.alt}
                    className="w-full h-full object-cover"
                    style={d.objectPosition ? { objectPosition: d.objectPosition } : undefined}
                    loading="lazy"
                  />
                </div>
                <div className="sm:col-span-3 p-7 lg:p-9 flex flex-col">
                  <div className="eyebrow mb-3">{d.role}</div>
                  <h3 className="font-serif text-[30px] leading-tight">{d.name}</h3>
                  <p className="text-[13px] text-inksoft mt-2">{d.qualifications}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11.5px] px-2.5 py-1 rounded-full bg-sage/40 text-ink/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-[14.5px] text-inksoft leading-relaxed">{d.bio}</p>
                  <div className="mt-5 pt-5 border-t border-line flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-[28px]">
                        {d.stat.value}
                        <span className="text-base">{d.stat.suffix}</span>
                      </span>
                      <span className="text-[11px] text-inksoft tracking-wide uppercase">
                        {d.stat.label}
                      </span>
                    </div>
                    <a
                      href="#book"
                      className="text-[13px] underline underline-offset-4 hover:text-accentdp"
                    >
                      Book with {d.name.split(' ').slice(0, 2).join(' ')} →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
