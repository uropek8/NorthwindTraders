import axiosCfg from '@/api/axios'
import { SearchParams } from '@/types/types'

const API_URL = '/api/search'

function getSearchResults(params: SearchParams) {
  return axiosCfg.get(API_URL, { params })
}

export { getSearchResults }
