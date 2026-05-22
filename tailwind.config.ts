import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF7F2',
        surface: '#FFFFFF',
        ink: '#1F1B16',
        inksoft: '#5C544B',
        accent: '#B68A6E',
        accentdp: '#8A6249',
        sage: '#C8CFB8',
        line: '#E8E2D8',
        espresso: '#221C17',
      },
      fontFamily: {
        // single typeface; `serif` aliased so any leftover className="font-serif"
        // still resolves to Outfit without code churn.
        serif: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
