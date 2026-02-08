import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Use root path for custom domain
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
