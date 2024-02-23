const { join } = require('path');
const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [join(__dirname, 'src/**/*.{js,ts,svelte}')],
	theme: {
		extend: {
			fontFamily: {
				protest_revolution: ['Protest Revolution', 'sans-serif'],
				rough_dusty_chalk: ['Rough Dusty Chalk', 'sans-serif'],
				sheila_crayon: ['Sheila Crayon', 'sans-serif']
			}
		}
	},
	safelist: [
		'text-[2rem]',
		'text-[2.5rem]',
		'text-[3rem]',
		'text-[3.5rem]',
		'text-[4rem]',
		'text-[4.5rem]',
		'text-[5rem]',
		'text-[5.5rem]',
		'text-[6rem]',
		'text-[6.5rem]',
		'text-[7rem]',
		'text-[7.5rem]',
		'text-[8rem]',
		'text-[8.5rem]',
		'text-[9rem]',
		'text-[9.5rem]',
		'text-[10rem]',
		'text-[10.5rem]',
		'text-[11rem]',
		'text-[11.5rem]',
		'text-[12rem]',
		'text-[12.5rem]',
		'text-[13rem]',
		'text-[13.5rem]',
		'text-[14rem]',
		'text-[14.5rem]',
		'text-[15rem]'
	],
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
					error: '#934441'
				}
			}
		]
	}
};
