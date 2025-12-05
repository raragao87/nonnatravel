import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#3A6351",
        },
        accent: {
          gold: "#F4A261",
        },
        background: "#FAF9F6",
        text: {
          primary: "#2D2D2D",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "Merriweather", "serif"],
        body: ["Inter", "Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

