'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev')
const dllPlugin = require('./config')

const app = express()

webpackConfig.entry.client = [
  'webpack-hot-middleware/client',
  webpackConfig.entry.client
]

const compiler = webpack(webpackConfig)

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})
app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler))

if (dllPlugin) {
  app.get(/\.dll\.js$/, (req, res) => {
    const filename = req.path.replace(/^\//, '')
    res.sendFile(path.join(process.cwd(), 'node_modules/react-ele-start-dlls/', filename))
  })
}

app.get('*', (req, res) => {
  const fs = devMiddleWare.fileSystem
  devMiddleWare.waitUntilValid(() => {
    const html = fs.readFileSync(path.join(webpackConfig.output.path, './index.html'))
    res.send(html.toString())
  })
})

app.listen('9999', () => {
  console.log(`\nListening at http://localhost:9999`)
})
