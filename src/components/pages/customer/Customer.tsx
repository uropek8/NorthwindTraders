import { FC, ReactElement, useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  CustomerBox,
  CustomerRow,
  CustomerBtn,
  CustomerList,
  CustomerItem,
  CustomerLabel,
  CustomerTitle,
  CustomerAction,
  CustomerHeader,
  CustomerContent,
} from './Customer.styles'
import { ISqlMetric } from '@/types/types'
import LogContext from '@/contex/log/LogContext'
import { getCustomerById } from '@/api/customers'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface TCustomer {
  id: string
  fax: string
  city: string
  phone: string
  region: string
  address: string
  country: string
  postalCode: string
  customerId: string
  companyName: string
  contactName: string
  contactTitle: string
}
interface TMainRow {
  city: string
  address: string
  companyName: string
  contactName: string
  contactTitle: string
}
interface TSecondaryRow {
  fax: string
  region: string
  postalCode: string
  phone: string
  country: string
}

const Customer: FC = (): ReactElement => {
  const [customer, setCustomer] = useState<Partial<TCustomer>>({})
  const [mainRow, setMainRow] = useState<Partial<TMainRow>>({})
  const [secondaryRow, setSecondaryRow] = useState<Partial<TSecondaryRow>>({})
  const [isLoadingCustomer, setIsLoadingCustomer] = useState(false)
  const { metrics, updateLogMetrics, updateErrorMsg } = useContext(LogContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const MAIN_KEYS_LIST = [
    'companyName',
    'contactName',
    'contactTitle',
    'address',
    'city',
  ]
  const SECONDARY_KEYS_LIST = [
    'postalCode',
    'region',
    'country',
    'phone',
    'fax',
  ]

  useEffect(() => {
    fetchCustomer()
  }, [])

  useEffect(() => {
    initalContentRows()
  }, [customer])

  const fetchCustomer = async () => {
    if (!id) return

    setIsLoadingCustomer(true)

    try {
      const response = await getCustomerById(id)
      const { customer: customerData, sqlLog } = response.data
      const preparedSqlLog = getPreparedSqlLogs(sqlLog, 1)

      setCustomer(customerData)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      updateErrorMsg(message)

      return Promise.reject(error)
    } finally {
      setIsLoadingCustomer(false)
    }
  }

  const initalContentRows = () => {
    if (!customer) return

    const mainRowContent = getCurrentRow(MAIN_KEYS_LIST)
    const secondaryRowContent = getCurrentRow(SECONDARY_KEYS_LIST)

    setMainRow(mainRowContent)
    setSecondaryRow(secondaryRowContent)
  }

  const updateSqlMetrics = (logs: Partial<ISqlMetric[]>) => {
    if (!logs.length) return

    const updatedLogs = metrics.length ? [...logs, ...metrics] : [...logs]
    const lastLogs = updatedLogs.slice(0, 5)

    updateLogMetrics(lastLogs)
  }

  const getPreparedSqlLogs = (logs: ISqlMetric[], count: number) => {
    if (!logs.length) return []

    return logs.map((log) => {
      const queryLog = log?.querySqlLog || ''

      return {
        ...log,
        resultsCount: queryLog.includes('select count') ? 1 : count,
      }
    })
  }

  const getCurrentRow = (keys: string[]) => {
    return keys.reduce((acc, key) => {
      if (!customer[key as keyof TCustomer]) return acc

      acc = {
        ...acc,
        [key]: customer[key as keyof TCustomer],
      }

      return acc
    }, {})
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <>
      {isLoadingCustomer ? (
        <p>Loading...</p>
      ) : (
        <CustomerBox>
          <CustomerHeader>
            <CustomerTitle>
              <i className="pi pi-id-card"></i>
              Customer information
            </CustomerTitle>
          </CustomerHeader>
          <CustomerContent>
            {Object.keys(customer).length > 0 ? (
              <>
                <CustomerRow>
                  <CustomerList>
                    {Object.keys(mainRow).length > 0 &&
                      Object.keys(mainRow).map((key) => {
                        return (
                          <CustomerItem key={key}>
                            <CustomerLabel>
                              {capitalizeFromCamelCase(key)}
                            </CustomerLabel>
                            {mainRow[key as keyof TMainRow]}
                          </CustomerItem>
                        )
                      })}
                  </CustomerList>
                </CustomerRow>
                <CustomerRow>
                  {Object.keys(secondaryRow).length > 0 && (
                    <CustomerList>
                      {Object.keys(secondaryRow).map((key) => {
                        return (
                          <CustomerItem key={key}>
                            <CustomerLabel>
                              {capitalizeFromCamelCase(key)}
                            </CustomerLabel>
                            {secondaryRow[key as keyof TSecondaryRow]}
                          </CustomerItem>
                        )
                      })}
                    </CustomerList>
                  )}
                </CustomerRow>
              </>
            ) : (
              <p>Empty data</p>
            )}
          </CustomerContent>
          <CustomerAction>
            <CustomerBtn
              severity="danger"
              label="Go back"
              onClick={handleClickBack}
            />
          </CustomerAction>
        </CustomerBox>
      )}
    </>
  )
}

export default Customer
