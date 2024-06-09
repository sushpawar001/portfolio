import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0CCE6B",
                    dark: "#078e49",
                    light: "#78fdb8",
                },
                secondary: "#202125",
                background: "#E0E0E0",
                grayNav: "#39383d",
            },
        },
    },
    plugins: [require("daisyui")],
};
export default config;
