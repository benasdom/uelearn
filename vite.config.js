import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { copyFileSync } from "fs";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "./",
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
