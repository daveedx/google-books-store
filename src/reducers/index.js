import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import appLoaderVisibility from './appLoaderVisibility'
import searchResult from './searchResult'

export default combineReducers({
  appLoaderVisibility,
  searchResult,
  routing,
})
