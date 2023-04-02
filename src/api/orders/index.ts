import axiosCfg from '@/api/axios'
import { QueryParams } from '@/types/types'

const API_URL = '/api/orders'

function getOrders(params: QueryParams) {
  return axiosCfg.get(API_URL, { params })
}

export { getOrders }
