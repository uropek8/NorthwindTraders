import axiosCfg from '@/api/axios'
import { QueryParams } from '@/types/types'

const API_URL = '/api/products'

function getProducts(params: QueryParams) {
  return axiosCfg.get(API_URL, { params })
}

export { getProducts }
