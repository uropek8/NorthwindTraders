import axiosCfg from '@/api/axios'
import { QueryParams } from '@/types/types'

const API_URL = '/api/employees'

function getEmployees(params: QueryParams) {
  return axiosCfg.get(API_URL, { params })
}

function getEmployeeById(id: string) {
  return axiosCfg.get(`${API_URL}/${id}`)
}

export { getEmployees, getEmployeeById }
