import type { IconKey } from './icons';

export type TreatmentTab = 'skin' | 'hair' | 'body';

export interface Treatment {
  icon: IconKey;
  title: string;
  desc: string;
  img: string;
}

export const TAB_LABELS: Record<TreatmentTab, string> = {
  skin: 'Skin',
  hair: 'Hair',
  body: 'Body & Surgical',
};

export const TREATMENTS: Record<TreatmentTab, Treatment[]> = {
  skin: [
    {
      icon: 'pulse',
      title: 'Acne & Acne Scars',
      desc: 'From persistent breakouts to deep scarring — peels, lasers, micro-needling.',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'sliders',
      title: 'Pigmentation & Melasma',
      desc: 'Topical, oral and gentle laser protocols tailored to Indian skin tones.',
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'syringe',
      title: 'Anti-Aging',
      desc: 'Botox, dermal fillers and thread lifts — subtle, natural, never overdone.',
      img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'layers',
      title: 'Open Pores & Texture',
      desc: 'Combination treatments to refine and visibly smooth skin texture.',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'sun',
      title: 'Uneven Skin Tone',
      desc: 'Brightening regimens and pigment-correcting in-clinic sessions.',
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'shield',
      title: 'Tag & Wart Removal',
      desc: 'Radiofrequency and cryo — quick, scar-minimised, walk-in procedures.',
      img: 'https://images.unsplash.com/photo-1559757175-08c1f15c5e29?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'droplet',
      title: 'Medi-Facials',
      desc: 'Hydrafacial, carbon laser and bespoke clinical facials.',
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'flask',
      title: 'Chemical Peels',
      desc: 'Glycolic, mandelic, salicylic — graded peels for tone and texture.',
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'spark',
      title: 'Sensitive Skin & Eczema',
      desc: 'Calming protocols, barrier repair, and prescription care when needed.',
      img: 'https://images.unsplash.com/photo-1611205502833-c70a4f49adb2?w=900&q=80&auto=format&fit=crop',
    },
  ],
  hair: [
    {
      icon: 'leaf',
      title: 'Hair Fall Treatment',
      desc: 'Medical evaluation, scalp analysis, and a written plan with timelines.',
      img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'syringe',
      title: 'PRP / GFC Therapy',
      desc: 'Growth-factor therapy for active hair loss and post-transplant support.',
      img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'scissors',
      title: 'Hair Transplant (FUE)',
      desc: 'Natural hairlines, careful density planning, micro-FUE technique.',
      img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'sliders',
      title: 'Laser Hair Reduction',
      desc: 'Diode laser with cooling — safe for darker skin, clinically titrated.',
      img: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'shield',
      title: 'Dandruff & Scalp Care',
      desc: 'Diagnosis-led care for seborrheic dermatitis, psoriasis and itch.',
      img: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'brush',
      title: 'Trichology Consults',
      desc: 'In-depth scalp camera, bloodwork and a long-view hair strategy.',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&auto=format&fit=crop',
    },
  ],
  body: [
    {
      icon: 'scalpel',
      title: 'Sebaceous Cyst Excision',
      desc: 'Daycare procedure with fine closure — minimal scarring.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'stitch',
      title: 'Hemorrhoids / Piles',
      desc: 'Stapler surgery (MIPH) — short hospital stay, faster return to work.',
      img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'flask',
      title: 'Gall Bladder Stones',
      desc: 'Laparoscopic cholecystectomy with same-day or next-day discharge.',
      img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'heart',
      title: 'Appendicitis',
      desc: 'Emergency-trained laparoscopic appendectomy, minimal scar approach.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'sliders',
      title: 'Minimally Invasive',
      desc: 'Daycare-friendly procedures for hernias, lipomas and more.',
      img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'shield',
      title: 'Bariatric Consults',
      desc: 'Pre-op counseling and surgical planning for medically-indicated cases.',
      img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80&auto=format&fit=crop',
    },
  ],
};
