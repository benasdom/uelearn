import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/",
  resolve: {
    alias: {
      // Replaced __dirname with import.meta.dirname to prevent ESM crashes
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
