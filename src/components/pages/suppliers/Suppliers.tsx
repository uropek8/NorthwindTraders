import { FC, ReactElement, useState, useEffect, useContext } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import {
  ColumnLink,
  ColumnImage,
  SuppliersTitle,
  SuppliersContent,
  ColumnImageWrapper,
} from './Suppliers.styles'
import { getSupplies } from '@/api/suppliers'
import LogContext from '@/contex/log/LogContext'
import { QueryParams, ColumnMeta, ISqlMetric } from '@/types/types'

interface Supplier {
  id: string
  city: string
  country: string
  supplierId: number
  companyName: string
  contactName: string
  contactTitle: string
  contactAvatar?: string
}

const Suppliers: FC = (): ReactElement => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [isLoadingSuppliers, setIsLoadingSuppliers] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [first, setFirst] = useState<number>(0)
  const { metrics, updateLogMetrics } = useContext(LogContext)
  const LIMIT_COUNT = 20
  const AVATAR_API_PATH = 'https://avatars.dicebear.com/v2/initials/'

  const columns: ColumnMeta[] = [
    { field: 'contactName', header: 'Contact' },
    { field: 'contactTitle', header: 'Title' },
    { field: 'city', header: 'City' },
    { field: 'country', header: 'Country' },
  ]

  useEffect(() => {
    fetchSuppliers()
  }, [page])

  const getPreparedSuppliers = (supplies: Supplier[]) => {
    if (!supplies.length) return []

    return supplies.map((supplie) => {
      return {
        ...supplie,
        contactAvatar: getPreparedAvatarPath(supplie.contactName),
      }
    })
  }

  const getPreparedAvatarPath = (avatar: string) => {
    const avatarPath = encodeURIComponent(avatar)

    return `${AVATAR_API_PATH}${avatarPath}.svg`
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

  const fetchSuppliers = async () => {
    setIsLoadingSuppliers(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getSupplies(params)
      const { supplies, totalElementsFromDB: records, sqlLog } = response.data
      const preparedSuppliers = getPreparedSuppliers(supplies)
      const preparedSqlLog = getPreparedSqlLogs(
        sqlLog,
        preparedSuppliers.length
      )

      setTotalRecords(records)
      setSuppliers(preparedSuppliers)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingSuppliers(false)
    }
  }

  const avatarBodyTemplate = (row: Supplier) => {
    return (
      <ColumnImageWrapper>
        <ColumnImage
          src={row.contactAvatar}
          alt="avatar"
        />
      </ColumnImageWrapper>
    )
  }

  const companyBodyTemplate = (row: Supplier) => {
    return (
      <ColumnLink to={`/supplier/${row.supplierId}`}>
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
    <SuppliersContent>
      {!isLoadingSuppliers ? (
        <>
          <SuppliersTitle>Suppliers</SuppliersTitle>
          <DataTable
            first={first}
            value={suppliers}
            rows={LIMIT_COUNT}
            totalRecords={totalRecords}
            loading={isLoadingSuppliers}
            paginator={suppliers.length > 0}
            size="small"
            lazy
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
    </SuppliersContent>
  )
}

export default Suppliers
