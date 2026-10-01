import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#003be2",
          lime: "#d4fb20",
        },
        ink: {
          950: "#040819",
          900: "#242528",
          700: "#4b4c53",
          400: "#82868e",
          200: "#ced0d3",
          100: "#e5e6e8",
          50: "#f5f5f6",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        clash: ["var(--font-clash)", "sans-serif"],
      },
      maxWidth: {
        page: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
