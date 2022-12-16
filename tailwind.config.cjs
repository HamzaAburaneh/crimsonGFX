/** @type {import('tailwindcss').Config} */
config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			backgroundImage: {
				wLogo: "url('/white-stencil-logo.svg')"
			}
		},
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			kanit: ['Kanit', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif'],
			display: ['Oswald'],
			body: ['"Open Sans"']
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
