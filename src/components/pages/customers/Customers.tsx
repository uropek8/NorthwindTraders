import { FC, useState, useEffect, useContext, ReactElement } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import {
  ColumnLink,
  ColumnImage,
  CustomersTitle,
  CustomersContent,
  ColumnImageWrapper,
} from './Customers.styles'
import { getCustomers } from '@/api/customers'
import { getAvatarPath } from '@/services/utils'
import LogContext from '@/contex/log/LogContext'
import { QueryParams, ColumnMeta, ISqlMetric } from '@/types/types'

interface TCustomer {
  id: string
  city: string
  country: string
  customerId: string
  companyName: string
  contactName: string
  contactTitle: string
  contactAvatar?: string
}

const Customers: FC = (): ReactElement => {
  const [customers, setCustomers] = useState<TCustomer[]>([])
  const [totalRecords, setTotalRecords] = useState(0)
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(true)
  const [page, setPage] = useState(1)
  const [first, setFirst] = useState(0)
  const { metrics, updateLogMetrics, updateErrorMsg } = useContext(LogContext)
  const LIMIT_COUNT = 20
  const columns: ColumnMeta[] = [
    { field: 'contactName', header: 'Contact' },
    { field: 'contactTitle', header: 'Title' },
    { field: 'city', header: 'City' },
    { field: 'country', header: 'Country' },
  ]

  useEffect(() => {
    fetchCustomers()
  }, [page])

  const fetchCustomers = async () => {
    setIsLoadingCustomers(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getCustomers(params)
      const {
        customers: customersList,
        totalElementsFromDB: records,
        sqlLog,
      } = response.data
      const preparedCustomers = getPreparedCustomers(customersList)
      const preparedSqlLog = getPreparedSqlLogs(
        sqlLog,
        preparedCustomers.length
      )

      setTotalRecords(records)
      setCustomers(preparedCustomers)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      updateErrorMsg(message)

      return Promise.reject(error)
    } finally {
      setIsLoadingCustomers(false)
    }
  }

  const getPreparedCustomers = (list: TCustomer[]) => {
    if (!list.length) return []

    return list.map((item) => {
      return {
        ...item,
        contactAvatar: getAvatarPath(item.contactName),
      }
    })
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

  const avatarBodyTemplate = (row: TCustomer) => {
    return (
      <ColumnImageWrapper>
        <ColumnImage
          src={row.contactAvatar}
          alt="avatar"
        />
      </ColumnImageWrapper>
    )
  }

  const companyBodyTemplate = (row: TCustomer) => {
    return (
      <ColumnLink to={`/customer/${row.customerId}`}>
        {row.companyName}
      </ColumnLink>
    )
  }

  const handlePage = (e: DataTablePageEvent) => {
    const { first, page } = e
    const currentPage = page !== undefined ? page + 1 : 1

    setPage(currentPage)
    setFirst(first)
  }

  return (
    <CustomersContent>
      {!isLoadingCustomers ? (
        <>
          <CustomersTitle>Customers</CustomersTitle>
          <DataTable
            first={first}
            value={customers}
            rows={LIMIT_COUNT}
            totalRecords={totalRecords}
            loading={isLoadingCustomers}
            paginator={customers.length > 0}
            size="small"
            lazy
            scrollable
            stripedRows
            onPage={handlePage}
          >
            <Column body={avatarBodyTemplate} />
            <Column
              body={companyBodyTemplate}
              field="companyName"
              header="Company"
            />
            {columns.map((col) => (
              <Column
                key={col.field}
                field={col.field}
                header={col.header}
              />
            ))}
          </DataTable>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </CustomersContent>
  )
}

export default Customers
