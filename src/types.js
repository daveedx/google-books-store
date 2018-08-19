// @flow

type AccessInfo = {
  accessViewStatus: string,
  country: string,
  embeddable: boolean,
  epub: {
    acsTokenLink: string,
    isAvailable: boolean,
  },
  pdf: {
    acsTokenLink: string,
    isAvailable: boolean,
  },
  publicDomain: boolean,
  quoteSharingAllowed: boolean,
  textToSpeechPermission: string,
  viewability: string,
  webReaderLink: string,
}

type Price = {
  amount: number,
  currencyCode: string,
}

export const SALE_FOR_SALE = 'FOR_SALE'
export const SALE_NOT_FOR_SALE = 'NOT_FOR_SALE'

type Saleability = 'FOR_SALE' | 'NOT_FOR_SALE'

type SaleInfo = {
  buyLink: string,
  country: string,
  isEbook: boolean,
  listPrice: Price,
  retailPrice: Price,
  saleability: Saleability,
}

type IndustryIdentifier = {
  type: string,
  identifier: string,
}

type VolumeInfo = {
  allowAnonLogging: boolean,
  authors: string[],
  canonicalVolumeLink: string,
  categories: string[],
  contentVersion: string,
  description: string,
  imageLinks: {
    smallThumbnail?: string,
    thumbnail?: string,
  },
  industryIdentifiers: IndustryIdentifier[],
  infoLink: string,
  language: string,
  maturityRating: string,
  pageCount: number,
  panelizationSummary: {
    containsEpubBubbles: boolean,
    containsImageBubbles: boolean,
  },
  previewLink: string,
  printType: string,
  publishedDate: Date,
  publisher: string,
  readingModes: {
    image: boolean,
    text: boolean,
  },
  title: string,
}

export type Book = {
  accessInfo: AccessInfo,
  etag: string,
  id: string,
  kind: string,
  saleInfo: SaleInfo,
  searchInfo: {
    textSnippet: string,
  },
  selfLink: string,
  volumeInfo: VolumeInfo,
}

export type SearchResultState = {
  title: string,
  list: Book[],
  totalItems: number,
  lastStartIndex: number,
  hasMore: boolean,
}

export type SearchResultData = {
  data: {
    items: Book[],
    totalItems: number,
  },
  status: number,
  statusText: string,
}

type NotificationType = 'success' | 'info' | 'warning' | 'error'

export type Notification = {
  type: NotificationType,
  title: string,
  description?: string,
}
