import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 1. You need to import the 'path' module from Node.js
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // 2. Add this 'resolve' object
  resolve: {
    alias: {
      // This line tells Vite that "@" is a shortcut for your "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
