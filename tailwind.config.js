const themeSwapper = require('tailwindcss-theme-swapper')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#1251B6",
        accent2: "#657ED4",
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('@tailwindcss/forms'), 
  themeSwapper({
    themes: [
      {
        name: 'base',
        selectors: [':root'],
        theme: {
          colors: {
            "bg": "#D9E7D8",
            "box": "#ECEDF5"
          },
        },
      },
      {
        name: 'dark',
        selectors: ['.dark'],
        //mediaQuery: '@media (prefers-color-scheme: dark)',
        theme: {
          colors: {
            "bg": "#090A0E",
            "box": "#13171B"
          },
        },
      },
    ],
  }),
],
};
