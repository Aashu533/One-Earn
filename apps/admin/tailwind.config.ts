import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF6B6B",
          50: "#FFF0F0",
          100: "#FFE0E0",
          200: "#FFC1C1",
          300: "#FF9A9A",
          400: "#FF7A7A",
          500: "#FF6B6B",
          600: "#E05757",
          700: "#B54646",
          800: "#8C3737",
          900: "#632828",
        },
      },
    },
  },
  plugins: [],
};

export default config;
