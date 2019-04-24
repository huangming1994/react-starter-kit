const pkg = require('../package.json')

module.exports = {
  title: 'Tangram',
  port: '33333',
  dll: Object.keys(pkg.dependencies),
}
