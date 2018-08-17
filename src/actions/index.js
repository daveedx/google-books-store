import { createAction } from 'redux-actions'

export const SHOW_APP_LOADER = 'SHOW_APP_LOADER'
export const HIDE_APP_LOADER = 'HIDE_APP_LOADER'

export const showAppLoader = createAction(SHOW_APP_LOADER)
export const hideAppLoader = createAction(HIDE_APP_LOADER)
