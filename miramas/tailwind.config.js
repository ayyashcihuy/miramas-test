const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      borderColor: theme => ({
        default: theme('colors.gray.300', 'currentColor'),
        'neon': '#ccff00',
      }),
      backgroundColor: theme => ({
        'neon' : '#ccff00'
      })
    },
  },
  variants: {
    extends: {
      backgroundColor: ['checked'],
    }
  },
  plugins: [],
}
