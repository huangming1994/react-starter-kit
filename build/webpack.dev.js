const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const base = require('./webpack.base')

base.output.publicPath = '/assets/'

base.mode = 'development'

base.module.rules.push({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader'
  ]
})

base.plugins.push(
  new ProgressBarPlugin(),
  new MiniCssExtractPlugin({
    filename: 'styles.[hash:8].css',
    chunkFilename: '[name].css'
  })
)

module.exports = base
