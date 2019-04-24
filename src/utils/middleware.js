export function thunk({ dispatch, getState }) {
  return next => action => {
    if (action && typeof action === 'function') {
      return dispatch(action(getState()))
    }
    return next(action)
  }
}

export function promise({ dispatch }) {
  return next => action => {
    if (action && typeof action.then === 'function') {
      const finishLoadingAndDispatch = input => {
        dispatch(input)
      }
      return action.then(finishLoadingAndDispatch).catch(finishLoadingAndDispatch)
    }
    return next(action)
  }
}

export function multiDispatch({ dispatch }) {
  return next => actions => {
    if (Array.isArray(actions)) {
      return actions.map(action => dispatch(action))
    }
    return next(actions)
  }
}
