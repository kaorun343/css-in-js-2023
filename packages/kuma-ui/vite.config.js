import KumaUI from '@kuma-ui/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react({}), KumaUI()],
})
