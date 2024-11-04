/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'secondary': '#DEBAA7',
      'white': '#ffffff',
      'nav-text': '#816c65',
    },
    gridTemplateColumns: {
      'hero': '1.25fr 1fr;'
    },
    fontFamily: {
      'Monserrat': ['Montserrat', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}
