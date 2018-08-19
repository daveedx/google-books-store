// @flow

import { SET_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from '../actions'
import type { SearchResultState } from '../types'

type Action = {
  type: string,
  payload: SearchResultState,
}

const initialState = {
  title: '',
  list: [],
  totalItems: 0,
  lastStartIndex: 0,
  hasMore: false,
}

const setSearchResult = (state: SearchResultState = initialState, { type: actionType, payload }: Action) => {
  switch (actionType) {
    case SET_SEARCH_RESULT: {
      const isSameSearch: boolean = state.title === payload.title
      const lastStartIndex: number = isSameSearch ? payload.lastStartIndex : 0
      const { hasMore } = payload

      if (payload.list) {
        return {
          ...payload,
          list: isSameSearch ? state.list.concat(payload.list) : payload.list,
          lastStartIndex,
          hasMore,
        }
      }

      return {
        ...payload,
        list: state.list,
        hasMore,
      }
    }

    case CLEAR_SEARCH_RESULT:
      return initialState

    default:
      return state
  }
}

export default setSearchResult
