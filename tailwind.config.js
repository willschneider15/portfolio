module.exports = {
  mode: "jit",
  // important: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
      // backgroundImage: {
      //   'back': "url('../public/images/Background.jpg')",
      // },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("daisyui"), require('tailwind-scrollbar')],
  // daisyui: {
  //   themes: ["black"],
  // },
};
