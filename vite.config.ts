import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: [
      'infocine-mas-front-production.up.railway.app'
    ]
  },
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
})