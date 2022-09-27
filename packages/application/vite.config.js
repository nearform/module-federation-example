import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        'ui-components': 'http://localhost:5002/ui-components.js'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: pkg.dependencies['react-dom']
        }
      }
    })
  ]
})
