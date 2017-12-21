const webpack = require('webpack')
const path = require('path')

const outputPath = path.join(__dirname, '../node_modules/react-ele-start-dlls')

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router'
    ]
  },
  output: {
    filename: "[name].dll.js",
    path: outputPath,
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(outputPath, '[name]-manifest.json'),
      name: '[name]',
      context: __dirname
    })
  ]
}