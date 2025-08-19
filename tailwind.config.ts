const px0_10 = { ...[...Array(11)].map((_, i) => `${i}px`) };
const px0_100 = { ...[...Array(101)].map((_, i) => `${i}px`) };
const px0_600 = { ...[...Array(601)].map((_, i) => `${i}px`) };

module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mo: '768px',
      // => @media (min-width: 768px) { ... }
      pc: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extends: {
      borderWidth: px0_10,
      borderRadius: px0_100,
      fontSize: px0_100,
      lineHeight: { ...px0_100, normal: 'normal' },
      minWidth: px0_600,
      minHeight: px0_600,
      spacing: { ...px0_600 },
    },
  },
};
