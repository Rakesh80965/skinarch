export interface BeforeAfter {
  label: string;
  before: string;
  after: string;
  /** CSS object-position for crop-to-fill, e.g. 'center 28%' to bias toward the face */
  focus?: string;
}

export const BEFORE_AFTER: BeforeAfter[] = [
  {
    label: 'Acne · clearing protocol',
    before: '/results/acne-before.jpg',
    after: '/results/acne-after.jpg',
  },
  {
    label: 'Pigmentation · laser',
    before: '/results/pigmentation-before.jpg',
    after: '/results/pigmentation-after.jpg',
    focus: 'center 24%',
  },
  {
    label: 'PRP · hair regrowth',
    before: '/results/prp-before.jpg',
    after: '/results/prp-after.jpg',
  },
  {
    label: 'Anti-Ageing',
    before: '/results/antiage-before.jpg',
    after: '/results/antiage-after.jpg',
  },
  {
    label: 'Mole removal',
    before: '/results/mole-before.jpg',
    after: '/results/mole-after.jpg',
  },
  {
    label: 'Nail surgery',
    before: '/results/nail-before.jpg',
    after: '/results/nail-after.jpg',
  },
];
