import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Esto activa Tailwind v4 de forma nativa en Vite
  ],
  base: '/Portfolio/',
})