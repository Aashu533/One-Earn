import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C5CE7",
          50: "#F2F1FF",
          100: "#E6E4FF",
          200: "#CFC9FF",
          300: "#B1A5FF",
          400: "#8F7DFF",
          500: "#6C5CE7",
          600: "#5749C2",
          700: "#4539A0",
          800: "#332A78",
          900: "#231C53",
        },
      },
      boxShadow: {
        glass: "0 10px 30px rgba(108,92,231,0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
