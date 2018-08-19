// @flow

import { SHOW_APP_LOADER, HIDE_APP_LOADER } from '../actions'

type State = boolean

type Action = {
  type: string,
}

const appLoaderVisibility = (state: State = false, { type: actionType }: Action) => {
  switch (actionType) {
    case SHOW_APP_LOADER:
      return true

    case HIDE_APP_LOADER:
      return false

    default:
      return state
  }
}

export default appLoaderVisibility
