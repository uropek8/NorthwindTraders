import axiosCfg from '@/api/axios'
import { INearByParams } from '@/types/types'

const API_URL = import.meta.env.VITE_API_NEAR_BY_PATH

function getNearByInfo(params: INearByParams) {
  return axiosCfg.get(API_URL, { params })
}

export { getNearByInfo }
