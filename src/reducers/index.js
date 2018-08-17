import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import appLoaderVisibility from './appLoaderVisibility'

export default combineReducers({
  appLoaderVisibility,
  routing,
})
