module.exports = {
	content: ["./src/**/*.{js,jsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				main_d_bg: "#010409",
				primary_d_bg: "#21262d",
				secondary_d_bg: "#0d1117",
				ternary_d_bg: "#161b22",
				main_d_text: "#f0f6fc",
				primary_d_text: "#c9d1d9",
				secondary_d_text: "#8b949e",
				ternary_d_text: "#8b949e",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
