const { ModuleFederationPlugin } = require('webpack').container
const paths = require('react-scripts/config/paths')

const path = require('path')
const fs = require('fs')

const getModuleFederationConfigPath = () => {
  const appDirectory = fs.realpathSync(process.cwd())

  const moduleFederationConfigFile = path.resolve(
    appDirectory,
    'modulefederation.config.js'
  )

  return fs.existsSync(moduleFederationConfigFile) && moduleFederationConfigFile
}

const findHtmlPlugin = plugin => plugin.constructor.name === 'HtmlWebpackPlugin'

const configureHtmlPlugin = (webpackConfig, moduleFederationConfig) => {
  const htmlWebpackPlugin = webpackConfig.plugins.find(findHtmlPlugin)

  htmlWebpackPlugin.userOptions.publicPath = paths.publicUrlOrPath
  htmlWebpackPlugin.excludeChunks = [moduleFederationConfig.name]
}

module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    const moduleFederationConfigPath = getModuleFederationConfigPath()

    if (moduleFederationConfigPath) {
      const moduleFederationConfig = require(moduleFederationConfigPath)
      webpackConfig.output.publicPath = 'auto'

      configureHtmlPlugin(webpackConfig, moduleFederationConfigPath)

      webpackConfig.plugins.push(
        new ModuleFederationPlugin(moduleFederationConfig)
      )
    }
    return webpackConfig
  },
  overrideDevServerConfig: ({ devServerConfig }) => {
    devServerConfig.headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }

    return devServerConfig
  }
}
