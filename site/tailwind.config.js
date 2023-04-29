/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx,html}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				base: "#eff1f5",
				"base-dark": "#1e1e2e",
				blue: "#1e66f5",
				"blue-dark": "#89b4fa",
				text: {
					0: "#4c4f69",
				},
				"text-dark": {
					0: "#cdd6f4",
					1: "#bac2de",
				},
				"surface-dark": {
					0: "#313244",
					1: "#45475a",
				},
				surface: {
					0: "#ccd0da",
				},
			},
		},
		container: {
			center: true,
		},
	},
  plugins: [],
}
