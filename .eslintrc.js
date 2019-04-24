module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    'react'
  ],
  rules: {
    camelcase: 0,
    // allow paren-less arrow functions
    'no-mixed-operators': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    'no-trailing-spaces': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console':  process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
