const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DefinePlugin = require('webpack').DefinePlugin
const config = require('./config')


module.exports = {
  entry: {
    client: './src/index',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify(process.env.APP_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      title: config.title,
      favicon: path.resolve(__dirname, './favicon.ico'),
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    })
  ]
}
