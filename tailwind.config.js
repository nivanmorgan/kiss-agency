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
				kiss: {
					dark:    '#080910',
					surface: '#0F1018',
					card:    '#13151F',
					red:     '#E8315B',
					border:  'rgba(255,255,255,0.07)',
				},
				brand: {
					indigo: '#6366f1',
					violet: '#8b5cf6',
					accent: '#06b6d4',
				},
			},
			backgroundImage: {
				'kiss-gradient': 'linear-gradient(135deg, #E8315B, #6366f1, #8b5cf6)',
				'kiss-gradient-h': 'linear-gradient(90deg, #E8315B, #6366f1, #8b5cf6)',
				'kiss-gradient-soft': 'linear-gradient(135deg, rgba(232,49,91,0.15), rgba(99,102,241,0.15), rgba(139,92,246,0.15))',
			},
			animation: {
				'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'ticker': 'ticker 35s linear infinite',
				'ticker-slow': 'ticker 55s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
				'grain': 'grain 0.4s steps(1) infinite',
				'spin-slow': 'spin 20s linear infinite',
			},
			keyframes: {
				ticker: {
					'0%':   { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%':      { transform: 'translateY(-12px)' },
				},
				glowPulse: {
					'0%':   { opacity: '0.5' },
					'100%': { opacity: '1' },
				},
				grain: {
					'0%, 100%': { backgroundPosition: '0% 0%' },
					'10%':  { backgroundPosition: '-5% -10%' },
					'20%':  { backgroundPosition: '-15% 5%' },
					'30%':  { backgroundPosition: '7% -25%' },
					'40%':  { backgroundPosition: '20% 25%' },
					'50%':  { backgroundPosition: '-25% 10%' },
					'60%':  { backgroundPosition: '15% 5%' },
					'70%':  { backgroundPosition: '0% 15%' },
					'80%':  { backgroundPosition: '25% 35%' },
					'90%':  { backgroundPosition: '-10% 10%' },
				},
			},
		},
	},
	plugins: [],
};
