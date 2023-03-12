/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#1DB954",
        tertiary: "#000000",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        Black: ["Book", "sans-serif"],
        Medium: ["Medium", "sans-serif"],
        Bold: ["Bold", "sans-serif"],
        Black: ["Black", "sans-serif"],
      },
    },
    screens: {
      xxs: "0px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      mm: "769px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};