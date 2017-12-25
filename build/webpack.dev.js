const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cheerio = require('cheerio')
const dllPlugin = require('./config').dll
const base = require('./webpack.base')

base.output.publicPath = '/assets/'

// Plugins Configuration
base.plugins = [
  new ProgressBarPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('dev')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('../node_modules/react-ele-start-dlls/vendor-manifest.json')
  }),
  new HtmlWebpackPlugin({
    templateContent: templateContent(),
    inject: true
  }),
  new openBrowserWebpackPlugin({url: 'http://localhost:9999'})
]


function templateContent() {
  const html = fs.readFileSync(
    path.join(__dirname, '/index.html')
  ).toString()

  if (!dllPlugin) { return html }

  const $ = cheerio.load(html)
  $('body').append(`<script src='../node_modules/react-ele-start-dlls/vendor.dll.js'></script>`)

  return $.html()
}

module.exports = base
