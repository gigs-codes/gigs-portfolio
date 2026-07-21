import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Served at https://gigs-codes.github.io/gigs-portfolio/ in production;
  // keep dev server at root so localhost URLs stay unchanged.
  base: command === 'build' ? '/gigs-portfolio/' : '/',
}))
