/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				hand: ["Pangolin", "cursive"],
			},
			backgroundImage: {
				checkmark: "url('/checkmark.svg')",
			},
		},
	},
	plugins: [],
}
