// tailwind.config.ts
import type { Config } from 'tailwindcss';

const rangePx = (max: number) => Object.fromEntries(Array.from({ length: max + 1 }, (_, i) => [String(i), `${i}px`]));

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // app/와 pages/ 둘 다 커버
  theme: {
    extend: {
      borderWidth: rangePx(10),
      borderRadius: rangePx(100),
      fontSize: rangePx(100),
      lineHeight: { ...rangePx(100), normal: 'normal' },
      minWidth: rangePx(600),
      minHeight: rangePx(600),
      height: rangePx(600),
      width: rangePx(600),
      spacing: rangePx(600),
    },
    screens: {
      mo: '768px',
      pc: '1440px',
    },
  },
};

export default config;
