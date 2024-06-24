import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Customize asset filenames with content hash
        // assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'index.html',
        // entryFileNames: 'entry/[name].[hash].js'
      }
    }
  }
})
