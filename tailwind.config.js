/*eslint-env node*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
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
        grayFruit : "#FAFAFA"
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      classNames: [
        "responsive",
        "hover",
        "focus",
        "active",
        "group-hover",
        "group",
        "selected"
      ],

      boxShadow: {
        'yShadow': '0_3px_10px_rgb(0,0,0,0.2)',
        'test': '[5px_5px_0px_0px_rgba(109,40,217)]',
      },

      backgroundColor: ['group-hover'],
    },
    screens: {
      xxs: "250px",
      mobile: "350px",
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
