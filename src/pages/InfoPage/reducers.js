export default function infoPageReducer(state = '', action) {
  if (action.type === 'INFO_PAGE') {
    return action.payload
  }
  return state
}
