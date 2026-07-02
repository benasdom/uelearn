import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { copyFileSync } from "fs";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
        {
      name: 'copy-404',
      closeBundle() {
        // Copy 404.html to dist folder after build
        copyFileSync(
          resolve(__dirname, 'public/404.html'),
          resolve(__dirname, 'dist/404.html')
        );
      }
    }
  ],
  base: "/",
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
