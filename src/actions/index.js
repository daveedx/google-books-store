// @flow

import { createAction } from 'redux-actions'

import { calculateStartIndex, fetchBooksByTitle } from './utils'
import type { SearchResultData, SearchResultState } from '../types'

export const SHOW_APP_LOADER = 'SHOW_APP_LOADER'
export const HIDE_APP_LOADER = 'HIDE_APP_LOADER'
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT'
export const CLEAR_SEARCH_RESULT = 'CLEAR_SEARCH_RESULT'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'

export const showAppLoader = createAction(SHOW_APP_LOADER)
export const hideAppLoader = createAction(HIDE_APP_LOADER)

export const setSearchResult = createAction(SET_SEARCH_RESULT)
export const clearSearchResult = createAction(CLEAR_SEARCH_RESULT)

export const addNotification = createAction(ADD_NOTIFICATION)

export const searchBooksByTitle = (
  title: string,
) => async (dispatch: Function, getState: Function): Promise<void> => {
  dispatch(showAppLoader())

  const startIndex: number = calculateStartIndex(getState)
  const result: ?SearchResultData = await fetchBooksByTitle(title, startIndex)

  if (result) {
    const props: SearchResultState = {
      title,
      list: result.data.items,
      totalItems: result.data.totalItems,
      lastStartIndex: startIndex,
      hasMore: !!result.data.items,
    }

    dispatch(setSearchResult(props))
  }

  dispatch(hideAppLoader())
}
