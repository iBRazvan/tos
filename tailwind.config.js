/*eslint-env node*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#acc820",
        secondary: "#222222",
        text: "#7A7A7A",
        white: "#ffffff",
        gradientLime_100: "#9bb41d",
        gradientLime_200: "#8aa01a",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
      },
    },
    screens: {
      xxs: "250px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",

      lg: "1200px",
      xl: "1700px",
      xxl: "1900px",

      530: "530px",
      700: "700px",
      1200: "1200px",
    },
  },
  plugins: [],
};
