const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}'),
    'node_modules/@qwikbits/**/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        bdb: {
          primary: '#9a5124',
          secondary: '#623717',
          accent: '#b9936e',
          neutral: '#fef8ea',
          'base-100': '#fee8d0',
          info: '#1a0900',
          success: '#fca361',
          warning: '#ff9600',
          error: '#d94700',
        },
      },
    ],
  },
};
