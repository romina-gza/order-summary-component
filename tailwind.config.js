/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    colors: {
      //PRIMARIOS
      'Pale-blue' : 'hsl(225, 100%, 94%)',
      'Bright-blue' : 'hsl(245, 75%, 52%)',
      // NEUTRALES
      'Very pale blue' : 'hsl(225, 100%, 98%)',
      'Desaturated blue' : 'hsl(224, 23%, 55%)',
      'Dark blue' : 'hsl(223, 47%, 23%)',
    },
    fontFamily: {
      //CAMBIAR FONTFAMILY DESDE STYLE-GUIDE.MD!!!!!!!!!!!!!!!!!!!!!!!!!
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
