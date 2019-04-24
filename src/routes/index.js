// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
const views = require.context('../views', true, /\.js$/)
// keys is a function that returns an array of all possible requests that the context module can handle.
const keys = views.keys()

// map the keys returns all the routes.
// views exported data structure is like { path: '/', component: Home }, match the react-router rules.
// finally, return all the routes array for react-route use.
export default keys.map(key => views(key).__esModule ? views(key).default : views(key))
