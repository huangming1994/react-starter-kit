const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cheerio = require('cheerio')
const dllPlugin = require('./config').dll
const base = require('./webpack.base')
const dllPath = path.join(process.cwd(), 'node_modules/react-ele-start-dlls')

base.output.publicPath = '/assets/'

// Plugins Configuration
base.plugins = handlePlugins().concat([
  new ProgressBarPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    templateContent: templateContent(),
    inject: true
  }),
  new openBrowserWebpackPlugin({url: 'http://localhost:9999'})
])

function handlePlugins() {
  const manifestPath = path.join(dllPath, 'vendor-manifest.json')
  if (!fs.existsSync(manifestPath)) {
    console.error('The DLL manifest is missing. Please run `npm run build:dll`')
    process.exit(0)
  }
  return [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(manifestPath)
    })
  ]
}

function templateContent() {
  const html = fs.readFileSync(
    path.join(__dirname, '/index.html')
  ).toString()

  if (!dllPlugin) { return html }

  const $ = cheerio.load(html)
  $('body').append(`<script src='/vendor.dll.js'></script>`)

  return $.html()
}

module.exports = base
