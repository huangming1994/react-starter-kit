const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./config')
const webpackConfig = require('./webpack.local')

webpackConfig.entry.client = [
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://0.0.0.0:33333',
  webpackConfig.entry.client
]

const compiler = webpack(webpackConfig)
const app = new WebpackDevServer(compiler, webpackConfig.devServer)

app.listen(config.port, '0.0.0.0')
