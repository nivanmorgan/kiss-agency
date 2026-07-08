/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				carbon: {
					800: '#1e1e24',
					900: '#121214',
					950: '#0a0a0c',
				},
				brand: {
					indigo: '#6366f1',
					violet: '#8b5cf6',
					accent: '#06b6d4',
				}
			},
			animation: {
				'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			}
		},
	},
	plugins: [],
};
