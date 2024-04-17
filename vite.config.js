import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Add a custom rewrite rule to serve index.html for all routes
      '/': {
        target: '/index.html',
        rewrite: (path) => path === '/' ? '/index.html' : path
      }
    }
  }
})
