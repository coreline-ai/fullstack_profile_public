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
                // We keep primary mapped if needed for non-CSS usage, but v4 prefers CSS
                primary: "var(--primary)",
                // Remove background object to let @theme handle bg-background-dark
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
