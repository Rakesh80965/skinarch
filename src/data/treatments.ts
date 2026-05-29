import type { IconKey } from './icons';

export type TreatmentTab = 'skin' | 'hair' | 'clinical';

export interface Treatment {
  icon: IconKey;
  title: string;
  desc: string;
  img: string;
}

export const TAB_LABELS: Record<TreatmentTab, string> = {
  skin: 'Skin & Nail',
  hair: 'Hair',
  clinical: 'Clinical & Surgical',
};

export const TREATMENTS: Record<TreatmentTab, Treatment[]> = {
  skin: [
    {
      icon: 'pulse',
      title: 'Acne, Spots & Acne Scars',
      desc: 'From active breakouts to lingering spots and scars. Peels, lasers and micro-needling.',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'sliders',
      title: 'Uneven Skin, Dullness & Melasma',
      desc: 'Brightening regimens and gentle laser protocols tailored to Indian skin tones.',
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'syringe',
      title: 'Anti-Ageing',
      desc: 'Subtle, natural correction with Botox, fillers and collagen-stimulating treatments.',
      img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'shield',
      title: 'Skin Tag & Wart Removal',
      desc: 'Radiofrequency and cryo. Quick, scar-minimised, walk-in procedures.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'flask',
      title: 'Chemical Peels',
      desc: 'Glycolic, mandelic and salicylic peels, graded for your tone and texture.',
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'spark',
      title: 'Carbon Laser Toning & Medi-Facials',
      desc: 'Carbon laser toning, Hydrafacial and bespoke medi-facials for a clear, fresh finish.',
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'droplet',
      title: 'Glow Drips',
      desc: 'IV nutrient therapy. Antioxidants, vitamins and skin-brightening blends, by prescription.',
      img: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'star',
      title: 'Permanent Tattoo Removal',
      desc: 'Q-switched laser sessions to safely fade pigment from ink, paced for your skin.',
      img: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'scalpel',
      title: 'Nail Infection & Surgery',
      desc: 'Fungal infections, discoloration, brittle nails and ingrown-nail surgery.',
      img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80&auto=format&fit=crop',
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
      desc: 'Diode laser with cooling, safe for darker skin and clinically titrated.',
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
  clinical: [
    {
      icon: 'pulse',
      title: 'Fungal Infections',
      desc: 'Skin and nail fungal infections. Diagnosis, oral and topical antifungals, with follow-up reviews.',
      img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'spark',
      title: 'Allergy & Urticaria',
      desc: 'Hives, contact allergies and food-triggered reactions. Diagnosis and management for persistent cases.',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'leaf',
      title: 'Eczema',
      desc: 'Atopic dermatitis and eczema. Barrier repair, calming protocols and prescription care when needed.',
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'layers',
      title: 'Keloid',
      desc: 'Raised-scar treatment with intralesional injections, silicone gel sheets and laser therapy.',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'scalpel',
      title: 'Mole Removal',
      desc: 'Cosmetic and diagnostic excision of moles with fine sutures, leaving minimal scarring.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'stitch',
      title: 'Sebaceous Cyst Removal',
      desc: 'Daycare excision of sebaceous cysts with complete capsule removal to prevent recurrence.',
      img: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'flask',
      title: 'Lipoma Removal',
      desc: 'Surgical removal of benign fatty growths under local anaesthesia, as a daycare procedure.',
      img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'shield',
      title: 'Corn Removal',
      desc: 'Painless corn excision and aftercare, with footwear and pressure-relief guidance to prevent recurrence.',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80&auto=format&fit=crop',
    },
    {
      icon: 'sliders',
      title: 'Earlobe Repair',
      desc: 'Torn or stretched earlobes restored with fine sutures as a daycare procedure, ready to repierce after healing.',
      img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=80&auto=format&fit=crop',
    },
  ],
};
