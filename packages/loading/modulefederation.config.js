const deps = require('./package.json').dependencies

module.exports = {
  name: "loading",
  filename: "loading.js",
  exposes: {
    './Loading': './src/Loading.jsx',
  },
  shared: {
    ...deps,
    react: {singleton: true, requiredVersion: deps.react}, 
    "react-dom": {singleton: true, requiredVersion: deps['react-dom']}
  },
}
