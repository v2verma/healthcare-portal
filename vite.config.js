import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxying API requests to the backend server
      '/api': {
        target: 'https://musical-winner-qvj694wp7q52xrjv-8080.app.github.dev',  // Backend server URL
        changeOrigin: true,              // Changes the origin of the request to the target URL
        secure: false,                  // Set to `false` if you're working with a self-signed certificate
        rewrite: (path) => path.replace(/^\/api/, '')  // Optionally rewrite the URL path
      },
    },
  },
  plugins: [react()],
})
