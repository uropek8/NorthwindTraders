import axiosCfg from '@/api/axios'
import { QueryParams } from '@/types/types'

const API_URL = '/api/supplies'

function getSupplies(params: QueryParams) {
  return axiosCfg.get(API_URL, { params })
}

function getSupplieById(id: string) {
  return axiosCfg.get(`${API_URL}/${id}`)
}

export { getSupplies, getSupplieById }
