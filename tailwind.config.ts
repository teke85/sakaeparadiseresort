import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lodge-accent": "#7D6E56",
        "lodge-accent-hover": "#64584A",
        "lodge-secondary": "#A3926F",
        "lodge-secondary-hover": "#8A7B5C",
        "lodge-bg": "#F8F5F0",
      },
      fontFamily: {
        aboreto: ["var(--font-aboreto)"],
        jost: ["var(--font-jost)"],
        cormorant: ["var(--font-cormorant)"],
        ibarra: ["var(--font-ibarra)"],
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
