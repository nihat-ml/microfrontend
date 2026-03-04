import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: 'http://localhost:5173/',
  plugins: [
    react(),
    tailwindcss(), 
    federation({
      name: 'host_app',
      remotes: {
        remoteApp: 'http://localhost:5173/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ]
})