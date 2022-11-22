/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    screens: {
      'sm': '20em',
      // => @media (min-width: 320px) { ... }

      'md': '48em',
      // => @media (min-width: 768px) { ... }

      'lg': '64em',
      // => @media (min-width: 1024px) { ... }

      'xl': '80em',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      //PRIMARIOS
      'Pale-blue' : 'hsl(225, 100%, 94%)',
      'Bright-blue' : 'hsl(245, 75%, 52%)',
      'bright-blue-hover' : '#695BFF',
      // NEUTRALES
      'Very-pale-blue' : 'hsl(225, 100%, 98%)',
      'Desaturated-blue' : 'hsl(224, 23%, 55%)',
      'Dark-blue' : 'hsl(223, 47%, 23%)',
    },
    fontFamily: {
      redHatDisplay : ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'desktop-bg': "url('/images/pattern-background-desktop.svg')",
        'mobile-bg': "url('/images/pattern-background-mobile.svg')",
      }
    },
  },
  plugins: [],
}
