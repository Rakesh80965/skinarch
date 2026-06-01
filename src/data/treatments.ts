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
      img: '/treatments/acne.jpg',
    },
    {
      icon: 'sliders',
      title: 'Uneven Skin, Dullness & Melasma',
      desc: 'Brightening regimens and gentle laser protocols tailored to Indian skin tones.',
      img: '/treatments/melasma.jpg',
    },
    {
      icon: 'syringe',
      title: 'Anti-Ageing',
      desc: 'Subtle, natural correction with Botox, fillers and collagen-stimulating treatments.',
      img: '/treatments/anti-ageing.jpg',
    },
    {
      icon: 'shield',
      title: 'Skin Tag & Wart Removal',
      desc: 'Radiofrequency and cryo. Quick, scar-minimised, walk-in procedures.',
      img: '/treatments/skin-tag.jpg',
    },
    {
      icon: 'flask',
      title: 'Chemical Peels',
      desc: 'Glycolic, mandelic and salicylic peels, graded for your tone and texture.',
      img: '/treatments/chemical-peels.jpg',
    },
    {
      icon: 'spark',
      title: 'Carbon Laser Toning & Medi-Facials',
      desc: 'Carbon laser toning, Hydrafacial and bespoke medi-facials for a clear, fresh finish.',
      img: '/treatments/medi-facial.jpg',
    },
    {
      icon: 'droplet',
      title: 'Glow Drips',
      desc: 'IV nutrient therapy. Antioxidants, vitamins and skin-brightening blends, by prescription.',
      img: '/treatments/glow-drips.jpg',
    },
    {
      icon: 'star',
      title: 'Permanent Tattoo Removal',
      desc: 'Q-switched laser sessions to safely fade pigment from ink, paced for your skin.',
      img: '/treatments/tattoo.jpg',
    },
    {
      icon: 'scalpel',
      title: 'Nail Infection & Surgery',
      desc: 'Fungal infections, discoloration, brittle nails and ingrown-nail surgery.',
      img: '/treatments/nail.jpg',
    },
  ],
  hair: [
    {
      icon: 'leaf',
      title: 'Hair Fall Treatment',
      desc: 'Medical evaluation, scalp analysis, and a written plan with timelines.',
      img: '/treatments/hair-fall.jpg',
    },
    {
      icon: 'syringe',
      title: 'PRP / GFC Therapy',
      desc: 'Growth-factor therapy for active hair loss and post-transplant support.',
      img: '/treatments/prp-hair.jpg',
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
      img: '/treatments/laser-hair.jpg',
    },
    {
      icon: 'shield',
      title: 'Dandruff & Scalp Care',
      desc: 'Diagnosis-led care for seborrheic dermatitis, psoriasis and itch.',
      img: '/treatments/dandruff.jpg',
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
      img: '/treatments/fungal.jpg',
    },
    {
      icon: 'spark',
      title: 'Allergy & Urticaria',
      desc: 'Hives, contact allergies and food-triggered reactions. Diagnosis and management for persistent cases.',
      img: '/treatments/urticaria.jpg',
    },
    {
      icon: 'leaf',
      title: 'Eczema',
      desc: 'Atopic dermatitis and eczema. Barrier repair, calming protocols and prescription care when needed.',
      img: '/treatments/eczema.jpg',
    },
    {
      icon: 'layers',
      title: 'Keloid',
      desc: 'Raised-scar treatment with intralesional injections, silicone gel sheets and laser therapy.',
      img: '/treatments/keloid.jpg',
    },
    {
      icon: 'scalpel',
      title: 'Mole Removal',
      desc: 'Cosmetic and diagnostic excision of moles with fine sutures, leaving minimal scarring.',
      img: '/treatments/mole.jpg',
    },
    {
      icon: 'stitch',
      title: 'Sebaceous Cyst Removal',
      desc: 'Daycare excision of sebaceous cysts with complete capsule removal to prevent recurrence.',
      img: '/treatments/cyst.jpg',
    },
    {
      icon: 'flask',
      title: 'Lipoma Removal',
      desc: 'Surgical removal of benign fatty growths under local anaesthesia, as a daycare procedure.',
      img: '/treatments/lipoma.jpg',
    },
    {
      icon: 'shield',
      title: 'Corn Removal',
      desc: 'Painless corn excision and aftercare, with footwear and pressure-relief guidance to prevent recurrence.',
      img: '/treatments/corn.jpg',
    },
    {
      icon: 'sliders',
      title: 'Earlobe Repair',
      desc: 'Torn or stretched earlobes restored with fine sutures as a daycare procedure, ready to repierce after healing.',
      img: '/treatments/earlobe.jpg',
    },
  ],
};
