const plugin = require('tailwindcss/plugin')

const minMax = { min: 'min-content', max: 'max-content' }

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
    options: {
      whitelist: ['aspect-ratio', 'aspect-ratio-pdf', 'aspect-ratio*', 'underline', 'text-indigo-700'],
    }
  },
  theme: {
    extend: {
      width: minMax,
      height: minMax,
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  // variants: {},
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const clamps = {}
      for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        clamps[`.clamp-${i}`] = {
          "display": "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": `${i}`,
          "overflow": "hidden",
        }
      }
      addUtilities(clamps)
    }),
  ],
}
