// @flow

import axios from 'axios'

import type { SearchResultData, SearchResultState } from '../types'

const maxSearchResultsPerQuery: number = 10

export const calculateStartIndex = (getState: Function): number => {
  const { list, lastStartIndex }: SearchResultState = getState().searchResult

  if (!list.length && !lastStartIndex) {
    return 0
  }

  return lastStartIndex + maxSearchResultsPerQuery
}

export const fetchBooksByTitle = async (title: string, startIndex: number = 0): Promise<?SearchResultData> => {
  const encodedTitle: string = encodeURIComponent(title)

  try {
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=
      ${encodedTitle}&startIndex=${startIndex}&maxResults=${maxSearchResultsPerQuery}`

    return await axios.get(url)
  } catch (e) { /* */ }

  return null
}

export const fetchBookById = async (volumeId: string): Promise<*> => {
  try {
    const url: string = `https://www.googleapis.com/books/v1/volumes/${volumeId}`

    return await axios.get(url)
  } catch (e) { /* */ }

  return null
}
