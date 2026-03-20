import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3B6EF5",
          red: "#D64545",
          amber: "#E6A23C",
          green: "#3BA776",
          gray: "#F5F7FA",
        },
        text: {
          primary: "#111827",
          secondary: "#6B7280",
          tertiary: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
