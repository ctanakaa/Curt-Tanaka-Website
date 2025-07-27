import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/', // Use root for both dev and production with custom domain
  plugins: [
    react(), 
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
}))
