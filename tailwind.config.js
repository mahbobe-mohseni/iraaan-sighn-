/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "768px",
      // => @media (min-width: 768px) { ... }

      md: "992px",
      // => @media (min-width: 992px) { ... }

      lg: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl: "1920px",
      // => @media (min-width: 1920px) { ... }

      "2xl": "2176px",
      // => @media (min-width: 2176px) { ... }
    },
    extend: {
      colors: {
        primary: {
          50: "#e0f0ff",
          100: "#b3daff",
          200: "#80c2ff",
          300: "#4daaff",
          400: "#2697ff",
          500: "#0085ff",
          600: "#007dff",
          700: "#0072ff",
          800: "#0068ff",
          900: "#0055ff",
        },
        complementary: {
          50: "#e5e6ea",
          75: "#f0f0f0",
          100: "#bfc1c9",
          200: "#9497a6",
          300: "#696d82",
          400: "#494e67",
          500: "#292f4c",
          600: "#242a45",
          700: "#1f233c",
          800: "#191d33",
          900: "#0f1224",
        },
        error: {
          50: "#fae7ea",
          100: "#f3c4cb",
          200: "#ec9da9",
          300: "#e47586",
          400: "#de586c",
          500: "#d83a52",
          600: "#d4344b",
          700: "#ce2c41",
          800: "#c82538",
          900: "#bf1828",
        },
        success: {
          50: "#e0f8ee",
          100: "#b3efd6",
          200: "#80e4ba",
          300: "#4dd99e",
          400: "#26d08a",
          500: "#00c875",
          600: "#00c26d",
          700: "#00bb62",
          800: "#00b458",
          900: "#00a745",
        },
        warning: {
          50: "#fff5e8",
          100: "#fee6c5",
          200: "#fed59e",
          300: "#fec477",
          400: "#fdb85a",
          500: "#fdab3d",
          600: "#fda437",
          700: "#fc9a2f",
          800: "#fc9127",
          900: "#fc801a",
        },
        dark: "#000000",
        white: "#ffffff",
        transparent: "transparent",
        myblack: "#00000",
        myblue: "#1B4E8D",
      },
      fontSize: {
        10: ["0.625rem", "0.75rem"],
        11: ["0.688rem", "0.75rem"],
        12: ["0.75rem", "1rem"],
        14: ["0.875rem", "1.25rem"],
        16: ["1rem", "1.5rem"],
        18: ["1.125rem", "1.75rem"],
        20: ["1.25rem", "1.75rem"],
        26: ["1.625rem", "1.75rem"],
      },
      fontFamily: {
        iranyekan: ["IranYekan", "sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
