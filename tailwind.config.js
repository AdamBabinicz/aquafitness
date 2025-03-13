/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // spacing: {
      //   "10rem": "10rem",
      // },
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        deepBlue: "#1E3A8A",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.avif')",
        person1: "url('./assets/7.avif')",
        person2: "url('./assets/5.avif')",
        person3: "url('./assets/6.avif')",
        person4: "url('./assets/8.avif')",
        person5: "url('./assets/tadzio.avif')",
        person6: "url('./assets/1.avif')",
        person7: "url('./assets/user.avif')",
        person8: "url('./assets/3.avif')",
        person9: "url('./assets/1-1.avif')",
        person10: "url('./assets/1-2.avif')",
        person11: "url('./assets/1-3.avif')",
        person12: "url('./assets/1-4.avif')",
        person13: "url('./assets/1-5.avif')",
        person14: "url('./assets/1-6.avif')",
        person15: "url('./assets/1-7.avif')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
