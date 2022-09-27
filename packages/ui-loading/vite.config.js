import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

import pkg from './package.json'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ui-loading',
      filename: 'ui-loading.js',
      exposes: {
        './Loading': './src/Loading.jsx'
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
