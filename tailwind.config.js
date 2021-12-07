const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        gray: colors.trueGray,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        warmgray: colors.warmGray,
        bluegray: colors.blueGray,
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
