export default function homePageReducer(state = '', action) {
  if (action.type === 'HOME_PAGE') {
    return action.payload
  }
  return state
}
