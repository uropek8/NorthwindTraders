import { FC, useState, useEffect, useContext, ReactElement } from 'react'

import {
  DashboardBox,
  DashboardInfo,
  DashboardText,
  DashboardDesc,
  DashboardList,
  DashboardTitle,
  DashboardLabel,
  DashboardContent,
  DashboardListItem,
  DashboardInfoItem,
  DashboardListText,
} from './Dashboard.styles'
import { getNearByInfo } from '@/api/near-by'
import LogContext from '@/contex/log/LogContext'
import { getGeolocationInfo } from '@/api/geolocation'
import { ISqlMetric, IGeolocationParams, INearByParams } from '@/types/types'

interface IMetric {
  lat: number
  lng: number
}

const Dashboard: FC = (): ReactElement => {
  const [country, setCountry] = useState<string>('')
  const [geoCode, setGeoCode] = useState<string>('')
  const [metric, setMetric] = useState<Partial<IMetric>>({})
  const { metrics, updateErrorMsg } = useContext(LogContext)
  const LOCATION_DISTANCE = 200
  const SELECT_KEYS = ['select']
  const SELECT_WHERE_KEYS = ['select', 'where']
  const SELECT_LEFT_JOIN_KEYS = ['select', 'left', 'join']
  const NEAR_BY_API_KEY = import.meta.env.VITE_API_NEAR_BY_KEY
  const GEOLOCATION_API_KEY = import.meta.env.VITE_API_GEOLOCATION_KEY

  useEffect(() => {
    fetchGeolocationInfo()
  }, [])

  useEffect(() => {
    if (!Object.keys(metric).length) return

    fetchNearByInfo(metric)
  }, [metric])

  const fetchGeolocationInfo = async () => {
    try {
      const params: IGeolocationParams = {
        apiKey: GEOLOCATION_API_KEY,
      }

      const response = await getGeolocationInfo(params)
      const { location } = response.data
      const { lat, lng } = location

      setCountry(location.country)
      setMetric({ lat, lng })

      return Promise.resolve()
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      updateErrorMsg(message)

      return Promise.reject(error)
    }
  }

  const fetchNearByInfo = async (metric: Partial<IMetric>) => {
    const { lat, lng } = metric

    if (!lat || !lng) return

    try {
      const params: INearByParams = {
        lat,
        lng,
        api_key: NEAR_BY_API_KEY,
        distance: LOCATION_DISTANCE,
      }

      const response = await getNearByInfo(params)
      const {
        response: { airports },
      } = response.data
      const { iata_code } = airports[0]

      setGeoCode(iata_code)

      return Promise.resolve()
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      updateErrorMsg(message)

      return Promise.reject(error)
    }
  }

  const getIncludesCount = (mapList: string[]) => {
    if (!metrics.length) return 0

    return metrics.reduce((acc, log) => {
      const queryLog = log?.querySqlLog || ''
      const filteredKeys = mapList.filter((key) => queryLog.includes(key))

      if (filteredKeys.length < mapList.length) return acc

      acc = acc + 1

      return acc
    }, 0)
  }

  const getLogInfoText = (metric: Partial<ISqlMetric> | undefined) => {
    if (!metric) return ''

    return `${metric.startTime}, ${metric.executionTimeToSecond}ms`
  }

  const getLogResultsCount = () => {
    if (!metrics.length) return 0

    return metrics.reduce((acc, log) => {
      if (!log?.resultsCount) return acc

      acc = acc + log.resultsCount

      return acc
    }, 0)
  }

  return (
    <DashboardBox>
      <DashboardInfo>
        <DashboardInfoItem>
          <DashboardTitle>Worker</DashboardTitle>
          <DashboardText>Colo: {geoCode}</DashboardText>
          <DashboardText>Country: {country}</DashboardText>
        </DashboardInfoItem>
        <DashboardInfoItem>
          <DashboardTitle>SQL Metrics</DashboardTitle>
          <DashboardText>Query count: {metrics.length}</DashboardText>
          <DashboardText>Results count: {getLogResultsCount()}</DashboardText>
          <DashboardText>
            # SELECT: {getIncludesCount(SELECT_KEYS)}
          </DashboardText>
          <DashboardText>
            # SELECT WHERE: {getIncludesCount(SELECT_WHERE_KEYS)}
          </DashboardText>
          <DashboardText>
            # SELECT LEFT JOIN: {getIncludesCount(SELECT_LEFT_JOIN_KEYS)}
          </DashboardText>
        </DashboardInfoItem>
      </DashboardInfo>
      <DashboardContent>
        <DashboardTitle>Activity log</DashboardTitle>
        <DashboardDesc>Explore the app and see metrics here</DashboardDesc>
        {metrics.length > 0 && (
          <DashboardList>
            {metrics.map((item, idx) => {
              return (
                <DashboardListItem key={idx}>
                  <DashboardLabel>{getLogInfoText(item)}</DashboardLabel>
                  <DashboardListText>{item?.querySqlLog}</DashboardListText>
                </DashboardListItem>
              )
            })}
          </DashboardList>
        )}
      </DashboardContent>
    </DashboardBox>
  )
}

export default Dashboard
