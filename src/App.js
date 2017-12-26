import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from './store'
import routes from './routes'

const history = createBrowserHistory()

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <ul>
              <li><Link to="/homepage">HomePage</Link></li>
              <li><Link to="/infopage">InfoPage</Link></li>
            </ul>
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))
            }
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
