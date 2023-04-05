import { FC, ReactElement, useState, useEffect } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import {
  ColumnLink,
  ColumnImage,
  EmployeesTitle,
  EmployeesContent,
  ColumnImageWrapper,
} from './Employees.styles'
import { QueryParams, ColumnMeta } from '@/types/types'
import { getEmployees } from '@/api/employees'

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
  const LIMIT_COUNT = 20
  const AVATAR_API_PATH = 'https://avatars.dicebear.com/v2/initials/'

  const columns: ColumnMeta[] = [
    { field: 'title', header: 'Title' },
    { field: 'city', header: 'City' },
    { field: 'homePhone', header: 'Phone' },
    { field: 'country', header: 'Country' },
  ]

  useEffect(() => {
    fetchEmployees()
  }, [page])

  const getPreparedEmployees = (employees: TEmployee[]) => {
    if (!employees.length) return []

    return employees.map((item) => {
      return {
        ...item,
        contactAvatar: getPreparedAvatarPath(item.name),
      }
    })
  }

  const getPreparedAvatarPath = (avatar: string) => {
    const avatarPath = encodeURIComponent(avatar)

    return `${AVATAR_API_PATH}${avatarPath}.svg`
  }

  const fetchEmployees = async () => {
    setIsLoadingEmployees(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getEmployees(params)
      const { employees, totalElementsFromDB: records } = response.data
      const preparedEmployees = getPreparedEmployees(employees)

      setEmployees(preparedEmployees)
      setTotalRecords(records)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingEmployees(false)
    }
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
    </EmployeesContent>
  )
}

export default Employees
