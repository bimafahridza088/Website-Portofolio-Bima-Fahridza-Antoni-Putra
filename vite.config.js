import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Website-Portofolio-Bima-Fahridza-Antoni-Putra/",
  plugins: [
    react(),        
    tailwindcss(),
  ],
})