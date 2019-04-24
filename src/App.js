import React, { PureComponent } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import routes from './routes'
import Loading from '@/components/Loading'
import '@/styles/global.css'
import '@/styles/override.css'

export const history = createBrowserHistory()

const renderRoute = route => (
  <Route exact key={route.path} path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )}/>
)

class App extends PureComponent {
  render () {
    const isLoading = false
    return (
      <Router history={history}>
        <React.Fragment>
          {routes.map(route => renderRoute(route))}
          {isLoading && <Loading />}
        </React.Fragment>
      </Router>
    )
  }
}

export default App
