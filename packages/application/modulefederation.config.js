const deps = require('./package.json').dependencies

module.exports = {
  name: 'application',
  remotes: {
    components: 'components@http://localhost:3001/components.js'
  },
  shared: {
    ...deps,
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
  }
}
