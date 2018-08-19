// @flow

import React from 'react'
import type { Node as ReactNode } from 'react'
import { Button, Card, Tooltip } from 'antd'

import type { Book } from '../../../types'
import { SALE_FOR_SALE } from '../../../types'
import './SearchList.css'
import notForSale from './not-for-sale.svg'

type Props = {
  items: Book[],
}

const isItemOnSale = (item: Book): boolean => item.saleInfo.saleability === SALE_FOR_SALE

const renderItem = (item: Book): ReactNode => {
  const actions = [
    isItemOnSale(item)
      ? (
        <strong>{`${item.saleInfo.listPrice.currencyCode} ${item.saleInfo.listPrice.amount}`}</strong>
      )
      : (
        <Tooltip
          title="Not for sale"
        >
          <img src={notForSale} alt="Not for sale" width="32" />
        </Tooltip>
      ),
  ]

  return (
    <Card.Grid
      key={item.id}
    >
      <Card
        bordered={false}
        cover={(
          (item.volumeInfo.imageLinks
          && <img alt={item.volumeInfo.title} src={item.volumeInfo.imageLinks.thumbnail} />)
          || <div />
        )}
        actions={actions}
      >
        <h4><strong>{item.volumeInfo.title}</strong></h4>
      </Card>
    </Card.Grid>
  )
}

const SearchList = (props: Props): ReactNode => {
  const { items } = props

  if (!items.length) {
    return null
  }
  // items.map(item => console.log(item.saleInfo))
  return (
    <Card className="searchlist-container">
      {items.map(
        (item: Book): ReactNode => renderItem(item),
      )}
    </Card>
  )
}

export default SearchList
