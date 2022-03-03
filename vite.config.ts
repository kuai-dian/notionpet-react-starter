import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const packageJSON = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    emptyOutDir: true,
    lib: {
      entry: 'src/main.tsx',
      name: packageJSON.name,
      formats: ['umd'],
      fileName: () => 'index.js'
    }
  }
})
