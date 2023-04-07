import { FC, ReactElement, useState, useEffect, useContext } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import {
  ColumnLink,
  ColumnImage,
  EmployeesTitle,
  EmployeesContent,
  ColumnImageWrapper,
} from './Employees.styles'
import { getEmployees } from '@/api/employees'
import { getAvatarPath } from '@/services/utils'
import LogContext from '@/contex/log/LogContext'
import { QueryParams, ColumnMeta, ISqlMetric } from '@/types/types'

interface TEmployee {
  id: string
  name: string
  city: string
  title: string
  country: string
  homePhone: string
  employeeId: number
  contactAvatar?: string
}

const Employees: FC = (): ReactElement => {
  const [employees, setEmployees] = useState<TEmployee[]>([])
  const [totalRecords, setTotalRecords] = useState(0)
  const [isLoadingEmployees, setIsLoadingEmployees] = useState(true)
  const [page, setPage] = useState(1)
  const [first, setFirst] = useState(0)
  const { metrics, updateLogMetrics } = useContext(LogContext)
  const LIMIT_COUNT = 20
  const columns: ColumnMeta[] = [
    { field: 'title', header: 'Title' },
    { field: 'city', header: 'City' },
    { field: 'homePhone', header: 'Phone' },
    { field: 'country', header: 'Country' },
  ]

  useEffect(() => {
    fetchEmployees()
  }, [page])

  const fetchEmployees = async () => {
    setIsLoadingEmployees(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getEmployees(params)
      const {
        employees: employeesList,
        totalElementsFromDB: records,
        sqlLog,
      } = response.data
      const preparedEmployees = getPreparedEmployees(employeesList)
      const preparedSqlLog = getPreparedSqlLogs(
        sqlLog,
        preparedEmployees.length
      )

      setTotalRecords(records)
      setEmployees(preparedEmployees)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingEmployees(false)
    }
  }

  const getPreparedEmployees = (employees: TEmployee[]) => {
    if (!employees.length) return []

    return employees.map((item) => {
      return {
        ...item,
        contactAvatar: getAvatarPath(item.name),
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

  const avatarBodyTemplate = (row: TEmployee) => {
    return (
      <ColumnImageWrapper>
        <ColumnImage
          src={row.contactAvatar}
          alt="avatar"
        />
      </ColumnImageWrapper>
    )
  }

  const nameBodyTemplate = (row: TEmployee) => {
    return (
      <ColumnLink to={`/employee/${row.employeeId}`}>{row.name}</ColumnLink>
    )
  }

  const handlePage = (e: DataTablePageEvent) => {
    const { first, page } = e
    const currentPage = page !== undefined ? page + 1 : 1

    setPage(currentPage)
    setFirst(first)
  }

  return (
    <EmployeesContent>
      {!isLoadingEmployees ? (
        <>
          <EmployeesTitle>Employees</EmployeesTitle>
          <DataTable
            first={first}
            value={employees}
            rows={LIMIT_COUNT}
            totalRecords={totalRecords}
            loading={isLoadingEmployees}
            paginator={employees.length > 0}
            size="small"
            lazy
            stripedRows
            onPage={handlePage}
          >
            <Column body={avatarBodyTemplate} />
            <Column
              body={nameBodyTemplate}
              field="name"
              header="Name"
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
    </EmployeesContent>
  )
}

export default Employees
