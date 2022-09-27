import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ui-components',
      filename: 'ui-components.js',
      exposes: {
        './UILoading': './src/UILoading.jsx',
        './Button': './src/Button.jsx'
      },
      remotes: {
        'ui-loading': 'http://localhost:5001/ui-loading.js'
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
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
