import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages: https://franksiret.github.io/resume-cv/
export default defineConfig({
  plugins: [react()],
  base: '/resume-cv/',
})
