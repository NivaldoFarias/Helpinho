import tailwindPreset from "@spartan-ng/ui-core/hlm-tailwind-preset";

import type { Config } from "tailwindcss";

const colors = {
	neutral: {
		50: "#f6f6f6",
		100: "#e7e7e7",
		200: "#d1d1d1",
		300: "#b0b0b0",
		400: "#888888",
		500: "#6d6d6d",
		600: "#5d5d5d",
		700: "#4f4f4f",
		800: "#454545",
		900: "#3d3d3d",
		950: "#0a0a0a",
	},
	primary: {
		50: "#fff0f3",
		100: "#ffe2e7",
		200: "#ffc8d6",
		300: "#ff9cb4",
		400: "#ff648e",
		500: "#FF2E6B",
		600: "#f40b59",
		700: "#ce024c",
		800: "#ac0546",
		900: "#930843",
		950: "#530020",
	},
	secondary: {
		50: "#fefbe8",
		100: "#fdf5c4",
		200: "#fde88b",
		300: "#fbd549",
		400: "#f8be17",
		500: "#f4ae0b",
		600: "#c87e06",
		700: "#9f5909",
		800: "#84460f",
		900: "#703a13",
		950: "#411d07",
	},
	success: {
		50: "#f0fdf3",
		100: "#ddfbe4",
		200: "#bdf5cb",
		300: "#89eca4",
		400: "#4eda74",
		500: "#2dd55b",
		600: "#1a9f3e",
		700: "#187d34",
		800: "#18632e",
		900: "#165127",
		950: "#062d12",
	},
	warning: {
		50: "#ffffea",
		100: "#fffcc5",
		200: "#fff985",
		300: "#ffef46",
		400: "#ffe11b",
		500: "#ffc409",
		600: "#e29600",
		700: "#bb6a02",
		800: "#985208",
		900: "#7c430b",
		950: "#482300",
	},
	error: {
		50: "#fff0f1",
		100: "#ffdde0",
		200: "#ffc1c6",
		300: "#ff959d",
		400: "#ff5966",
		500: "#ff2637",
		600: "#fc0619",
		700: "#c5000f",
		800: "#af0512",
		900: "#900c16",
		950: "#500006",
	},
};

export default {
	presets: [tailwindPreset],
	content: ["./src/**/*.{html,ts}"],
	theme: {
		colors: {
			...colors,
			Neutral: colors.neutral,
			Primary: colors.primary,
			Secondary: colors.secondary,
			Success: colors.success,
			Warning: colors.warning,
			Error: colors.error,
		},
		fontFamily: {
			sans: ["Inter", "Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
	},
} satisfies Config;
