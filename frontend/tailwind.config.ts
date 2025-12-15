import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#5b2bee",
                "background-light": "#f6f6f8",
                "background-dark": "#151022",
                // Keeping existing structure as aliases if needed, but primary focus is compatibility
                background: {
                    light: "#f6f6f8",
                    dark: "#151022",
                },
            },
            fontFamily: {
                "display": ["var(--font-display)", "sans-serif"],
                sans: ["var(--font-display)", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
};
export default config;
