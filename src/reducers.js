import { combineReducers } from 'redux'
import homePageReducer from './containers/HomePage/reducers'
import infoPageReducer from './containers/InfoPage/reducers'

export default combineReducers({
  homePage: homePageReducer,
  infoPage: infoPageReducer
})
