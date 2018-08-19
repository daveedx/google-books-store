import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import appLoaderVisibility from './appLoaderVisibility'
import notifications from './notifications'
import searchResult from './searchResult'

export default combineReducers({
  appLoaderVisibility,
  notifications,
  searchResult,
  routing,
})
