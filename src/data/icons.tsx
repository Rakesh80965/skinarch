import type { ReactNode } from 'react';

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export type IconKey =
  | 'spark'
  | 'droplet'
  | 'sun'
  | 'leaf'
  | 'layers'
  | 'scissors'
  | 'brush'
  | 'heart'
  | 'star'
  | 'pulse'
  | 'sliders'
  | 'syringe'
  | 'shield'
  | 'flask'
  | 'scalpel'
  | 'stitch';

export const ICONS: Record<IconKey, ReactNode> = {
  spark: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 4 0 7 3 7 7a9 9 0 0 1-9 9z" />
      <path d="M2 22s4-2 9-7" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 18l9 5 9-5" />
    </svg>
  ),
  scissors: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </svg>
  ),
  brush: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 0 1 4.03 4.03l-8.06 8.07" />
      <path d="M7 14a4 4 0 0 0-4 4c0 1.5-.5 3-1.5 3.5 1.5 1.5 4 1 5.5-.5a4 4 0 0 0 4-4" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <polygon points="12 2 14.9 8.9 22 10 16.5 14.8 18.2 22 12 18.3 5.8 22 7.5 14.8 2 10 9.1 8.9 12 2" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  syringe: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M18 2l4 4M17 3l4 4M14 6l4 4M11.5 8.5l4 4M8.5 11.5l4 4M3 21l5-1 8-8-4-4-8 8-1 5z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M10 2v6L4 20a2 2 0 0 0 1.8 2.9h12.4A2 2 0 0 0 20 20L14 8V2" />
      <path d="M9 2h6" />
    </svg>
  ),
  scalpel: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M14 4l-9 9 3 3 9-9-3-3z" />
      <path d="M14 4l4-2 4 4-2 4-3-3z" />
    </svg>
  ),
  stitch: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M3 12h2l2-4 4 8 4-8 2 4h4" />
    </svg>
  ),
};
