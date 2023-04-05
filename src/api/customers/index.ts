import axiosCfg from '@/api/axios'
import { QueryParams } from '@/types/types'

const API_URL = '/api/customers'

function getCustomers(params: QueryParams) {
  return axiosCfg.get(API_URL, { params })
}

function getCustomerById(id: string) {
  return axiosCfg.get(`${API_URL}/${id}`)
}

export { getCustomers, getCustomerById }
