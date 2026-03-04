import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      // Host app-ə ötürəcəyimiz komponentlər
      exposes: {
  './Card': './src/components/Card.jsx',
  './Footer': './src/components/Footer.jsx',
},
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5173,
    strictPort: true,
  }
})