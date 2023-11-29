import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: (() => {
        const source = {
          blueBase: '#00a0d0',
          light: '#c8c8c8',
          white: '#ffffff',
        }

        const dist = {}

        for (const [key, value] of Object.entries(source)) {
          dist[key] = { value }
        }

        return dist
      })(),
    },
    keyframes: {},
    breakpoints: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
