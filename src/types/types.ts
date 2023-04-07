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
export interface ISqlMetric {
  startTime: string
  finishTime: string
  querySqlLog: string
  resultsCount?: number
  executionTimeToSecond: number
}
export interface IGeolocationParams {
  apiKey: string
}
export interface INearByParams {
  lat: number
  lng: number
  lang?: string
  api_key: string
  distance: number
  _fields?: string
}
