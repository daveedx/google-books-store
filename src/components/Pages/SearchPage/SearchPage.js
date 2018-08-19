// @flow

import React, { Fragment } from 'react'
import {
  Button,
  Col,
  Icon,
  Input,
  Tooltip,
} from 'antd'
import type { Node as ReactNode } from 'react'
import { connect } from 'react-redux'

import {
  clearSearchResult as clearSearchResultAction,
  searchBooksByTitle as searchBooksByTitleAction,
} from '../../../actions'
import SearchList from './SearchList'
import type { SearchResultState } from '../../../types'

const { Search, Group } = Input

type Props = {
  clearSearchResult: Function,
  searchBooksByTitle: Function,
  searchResult: SearchResultState,
}

const SearchPage = (props: Props): ReactNode => {
  const {
    searchResult: {
      title: searchTitle,
      list,
      hasMore,
    },
  } = props

  const handleOnSearch = async (title: string): Promise<void> => {
    const { clearSearchResult, searchBooksByTitle } = props

    if (!title.trim().length) {
      clearSearchResult()

      return
    }

    await searchBooksByTitle(title)
  }

  const handleClearSearchResult = () => {
    const { clearSearchResult } = props

    clearSearchResult()
  }

  const doSearch = async (): Promise<void> => {
    const { searchBooksByTitle, searchResult } = props
    const { title } = searchResult

    await searchBooksByTitle(title)
  }

  return (
    <Fragment>
      <header>
        <h1>Book Search</h1>
      </header>

      <Group
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Col span={6}>
          <Search
            placeholder="Enter book title"
            onSearch={handleOnSearch}
            enterButton
            defaultValue={searchTitle}
          />
        </Col>
        {list.length > 0 && (
          <Col span={6}>
            <Tooltip title="Clear actual search result">
              <Icon
                type="close-circle"
                style={{ cursor: 'pointer' }}
                onClick={handleClearSearchResult}
              />
            </Tooltip>
          </Col>
        )}
      </Group>

      <SearchList items={list} />

      {list.length > 0
        && (
          <Button
            type="primary"
            onClick={doSearch}
            disabled={!hasMore}
          >
            Load more...
          </Button>
        )
      }
    </Fragment>
  )
}

const mapStateToProps = (state: { searchResult: SearchResultState }): { searchResult: SearchResultState } => ({
  searchResult: state.searchResult,
})

const mapDispatchToProps = dispatch => ({
  clearSearchResult: () => dispatch(clearSearchResultAction()),
  searchBooksByTitle: (title: string) => dispatch(searchBooksByTitleAction(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
