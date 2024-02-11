const { join } = require('path');
const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}'),
    'node_modules/@qwikbits/**/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        protest_revolution: ['Protest Revolution', 'sans-serif'],
        rough_dusty_chalk: ['Rough Dusty Chalk', 'sans-serif'],
        sheila_crayon: ['Sheila Crayon', 'sans-serif'],
      },
    },
  },
  safelist: [],
  plugins: [require('daisyui'), addDynamicIconSelectors()],
  daisyui: {
    themes: [
      {
        bdb: {
          primary: '#9a5124',
          secondary: '#603913',
          accent: '#4b2e12',
          neutral: '#fef8ea',
          'base-100': '#fee8d0',
          'base-200': '#f7c698',
          'base-300': '#c19b77',
          info: '#130803',
          success: '#fca361',
          warning: '#ff9600',
          error: '#934441',
        },
      },
    ],
  },
};
