const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const dllPath = path.join(__dirname, '../node_modules/react-ele-start-dlls')

module.exports = {
  entry: {
    vendor: config.dll
  },
  output: {
    filename: "[name].dll.js",
    path: dllPath,
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(dllPath, '[name]-manifest.json'),
      name: '[name]',
      context: __dirname
    })
  ]
}