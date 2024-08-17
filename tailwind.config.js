/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fcfbf7",
        accent: "#fce5a4",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
};
