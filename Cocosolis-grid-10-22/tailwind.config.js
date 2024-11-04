/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'secondary': '#DEBAA7',
      'white': '#ffffff',
      'nav-text': '#816c65',
      'shimmer': '#FBF1EB',
      'benefits': '#f2d3c1',
    },
    gridTemplateColumns: {
      'hero': '1.25fr 1fr;'
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'product': "url('product.png')",
      },
    },
  },
  plugins: [],
}