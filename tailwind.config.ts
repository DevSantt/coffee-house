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
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent)",
        white: "var(--white)",
        night: "var(--night)"
      },
    },
    fontFamily: {
      sans: ["var(--font-montserrat)"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animated"),
  ],
};
export default config;
