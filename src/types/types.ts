export interface QueryParams {
  page: number
  limit: number
}

export interface SearchParams {
  table: string
  page?: number
  limit?: number
  field?: string
  searchValue: string
}

export interface ColumnMeta {
  field: string
  header: string
}
