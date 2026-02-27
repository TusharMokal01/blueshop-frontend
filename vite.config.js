import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // ✅ Enable SPA fallback for React Router
  server: {
    fs: {
      strict: false, // optional, avoids some file access issues
    },
    historyApiFallback: true, // SPA fallback
  },
  build: {
    rollupOptions: {
      input: '/index.html', // ensure correct entry point
    },
  },
})