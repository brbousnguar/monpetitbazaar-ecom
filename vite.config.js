import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative base so the built assets work when served from
  // GitHub Pages (repo or custom domain) and also work locally.
  // If you need an absolute base (e.g. a custom domain root), set
  // VITE_BASE environment variable when building.
  base: process.env.VITE_BASE ?? './',
  server: {
    host: '0.0.0.0', // Listen on all network interfaces for Docker
    port: 3000,
    open: false, // Don't auto-open browser in container
    strictPort: true,
    watch: {
      usePolling: true // Enable polling for Docker volumes
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true
  }
})
