import { FC, ReactElement, useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  SupplierBox,
  SupplierRow,
  SupplierBtn,
  SupplierList,
  SupplierItem,
  SupplierLabel,
  SupplierTitle,
  SupplierAction,
  SupplierHeader,
  SupplierContent,
} from './Supplier.styles'
import { ISqlMetric } from '@/types/types'
import { getSupplieById } from '@/api/suppliers'
import LogContext from '@/contex/log/LogContext'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface Supplier {
  id: string
  fax: string
  city: string
  phone: string
  region: string
  address: string
  country: string
  homePage: string
  supplierId: number
  postalCode: string
  companyName: string
  contactName: string
  contactTitle: string
}

const Supplier: FC = (): ReactElement => {
  const [supplier, setSupplier] = useState<Partial<Supplier>>({})
  const [isLoadingSupplier, setIsLoadingSupplier] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const { metrics, updateLogMetrics } = useContext(LogContext)
  const MAIN_KEYS_LIST = [
    'city',
    'address',
    'companyName',
    'contactName',
    'contactTitle',
  ]
  const SECONDARY_KEYS_LIST = [
    'phone',
    'region',
    'country',
    'homePage',
    'postalCode',
  ]

  useEffect(() => {
    fetchSupplier()
  }, [])

  const fetchSupplier = async () => {
    if (!id) return

    setIsLoadingSupplier(true)

    try {
      const response = await getSupplieById(id)
      const { supplier: supplierData, sqlLog } = response.data
      const preparedSqlLog = getPreparedSqlLogs(sqlLog, 1)

      setSupplier(supplierData)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingSupplier(false)
    }
  }

  const handleClickBack = () => {
    navigate(-1)
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

  return (
    <>
      {isLoadingSupplier ? (
        <p>Loading...</p>
      ) : (
        <SupplierBox>
          <SupplierHeader>
            <SupplierTitle>
              <i className="pi pi-id-card"></i>
              Supplier information
            </SupplierTitle>
          </SupplierHeader>
          <SupplierContent>
            {Object.keys(supplier).length > 0 ? (
              <>
                <SupplierRow>
                  <SupplierList>
                    {supplier &&
                      Object.keys(supplier).map((key) => {
                        if (
                          !MAIN_KEYS_LIST.includes(key) ||
                          !supplier[key as keyof Supplier]
                        )
                          return null

                        return (
                          <SupplierItem key={key}>
                            <SupplierLabel>
                              {capitalizeFromCamelCase(key)}
                            </SupplierLabel>
                            {supplier[key as keyof Supplier]}
                          </SupplierItem>
                        )
                      })}
                  </SupplierList>
                </SupplierRow>
                <SupplierRow>
                  <SupplierList>
                    {supplier &&
                      Object.keys(supplier).map((key) => {
                        if (
                          !SECONDARY_KEYS_LIST.includes(key) ||
                          !supplier[key as keyof Supplier]
                        )
                          return null

                        return (
                          <SupplierItem key={key}>
                            <SupplierLabel>
                              {capitalizeFromCamelCase(key)}
                            </SupplierLabel>
                            {supplier[key as keyof Supplier]}
                          </SupplierItem>
                        )
                      })}
                  </SupplierList>
                </SupplierRow>
              </>
            ) : (
              <p>Empty data</p>
            )}
          </SupplierContent>
          <SupplierAction>
            <SupplierBtn
              severity="danger"
              label="Go back"
              onClick={handleClickBack}
            />
          </SupplierAction>
        </SupplierBox>
      )}
    </>
  )
}

export default Supplier
