import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#000000",
        graphite: "#0a0a0a",
        champagne: "#D4AF37",
        porcelain: "#f5f5f5"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      letterSpacing: {
        luxury: "0.18em"
      },
      transitionDuration: {
        600: "600ms",
        800: "800ms"
      }
    }
  },
  plugins: []
};

export default config;
