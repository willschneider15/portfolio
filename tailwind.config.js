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
  plugins: [require("daisyui"), require('tailwind-scrollbar')],
  daisyui: {
    themes: ["dark", "night", "coffee", "retro"
      ,{
        day: {
           
          "primary": "#f3f4f6",
                    
          "secondary": "#d1d5db",
                    
          "accent": "#67e8f9",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff",
        },
      },
  ],
  },
};
