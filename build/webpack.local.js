const webpack = require('webpack')
const base = require('./webpack.base')

base.mode = 'development'
base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'

// Plugins Configuration
base.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
)

base.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader'
  ]
})

module.exports = base
