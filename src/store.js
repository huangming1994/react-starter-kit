import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import reducers from '@/modules'
import { thunk, promise, multiDispatch } from '@/utils/middleware'

export default function (initialState = {}) {
  const middlewares = [
    multiDispatch,
    promise,
    thunk
  ]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(require('./modules').default)
    })
  }

  return store
}
