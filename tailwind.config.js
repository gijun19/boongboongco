const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        sky: colors.sky,
        cyan: colors.cyan
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: ['gatsby-plugin-postcss', require('@tailwindcss/forms')]
}
