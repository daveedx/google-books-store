// @flow

import { SHOW_APP_LOADER, HIDE_APP_LOADER } from '../actions'

type Action = {
  type: string,
}

const appLoaderVisibility = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case SHOW_APP_LOADER:
      return true

    case HIDE_APP_LOADER:
      return false

    default:
      return state
  }
}

export default appLoaderVisibility
