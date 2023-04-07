import axiosCfg from '@/api/axios'
import { IGeolocationParams } from '@/types/types'

const API_URL = import.meta.env.VITE_API_GEOLOCATION_PATH

function getGeolocationInfo(params: IGeolocationParams) {
  return axiosCfg.get(API_URL, { params })
}

export { getGeolocationInfo }
