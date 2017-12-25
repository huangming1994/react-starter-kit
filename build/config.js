const pkg = require('../package.json')

module.exports = {
  title: 'react-ele-start',
  port: '9999',
  dll: Object.keys(pkg.dependencies),
}