const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const base = require('./webpack.base')

base.output.publicPath = '/assets/'

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('dev')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new openBrowserWebpackPlugin({ url: 'http://localhost:9999' })
)

module.exports = base
