import linaria from '@linaria/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
  ],
})
