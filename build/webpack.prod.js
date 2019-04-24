const exec = require('child_process').execSync
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('./webpack.base')

exec('rm -rf dist/')

base.mode = "production"

base.optimization = {
  splitChunks: {
    chunks: 'initial',
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: 2,
        name: 'vendors',
        enforce: true,
        chunks: 'all'
      }
    }
  }
}

base.module.rules.push({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader'
  ]
}, {
  test: /\.less$/,
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
