/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  lato: ["Lato", "sans-serif"],
		},
		animation: {
			'circular-motion': 'circularMotion 5s linear infinite',
		  },
		  keyframes: {
			circularMotion: {
			  '0%': {
				transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
			  },
			  '100%': {
				transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
			  },
			},
		  },
	  },
	},
	plugins: [],
  }