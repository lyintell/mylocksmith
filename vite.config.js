import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Allow overriding the base path for GitHub Pages (e.g. /<repo>/)
  base: process.env.VITE_BASE_PATH || '/',
  logLevel: 'error', // Suppress warnings, only show errors
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [react()]
});