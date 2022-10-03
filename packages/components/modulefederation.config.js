const deps = require('./package.json').dependencies

module.exports = {
  name: 'components',
  filename: 'components.js',
  exposes: {
    './ColorLoading': './src/components/color-loading/ColorLoading.jsx',
    './Button': './src/components/button/Button.jsx'
  },
  remotes: {
    loading: 'loading@http://localhost:3002/loading.js'
  },
  shared: {
    ...deps,
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
  }
}
