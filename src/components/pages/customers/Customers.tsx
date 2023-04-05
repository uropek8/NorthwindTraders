import { FC, ReactElement, useState, useEffect } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import {
  ColumnLink,
  ColumnImage,
  CustomersTitle,
  CustomersContent,
  ColumnImageWrapper,
} from './Customers.styles'
import { QueryParams, ColumnMeta } from '@/types/types'
import { getCustomers } from '@/api/customers'

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
  const LIMIT_COUNT = 20
  const AVATAR_API_PATH = 'https://avatars.dicebear.com/v2/initials/'

  const columns: ColumnMeta[] = [
    { field: 'contactName', header: 'Contact' },
    { field: 'contactTitle', header: 'Title' },
    { field: 'city', header: 'City' },
    { field: 'country', header: 'Country' },
  ]

  useEffect(() => {
    fetchCustomers()
  }, [page])

  const getPreparedCustomers = (list: TCustomer[]) => {
    if (!list.length) return []

    return list.map((item) => {
      return {
        ...item,
        contactAvatar: getPreparedAvatarPath(item.contactName),
      }
    })
  }

  const getPreparedAvatarPath = (avatar: string) => {
    const avatarPath = encodeURIComponent(avatar)

    return `${AVATAR_API_PATH}${avatarPath}.svg`
  }

  const fetchCustomers = async () => {
    setIsLoadingCustomers(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getCustomers(params)
      const { customers, totalElementsFromDB: records } = response.data
      const preparedCustomers = getPreparedCustomers(customers)

      setCustomers(preparedCustomers)
      setTotalRecords(records)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingCustomers(false)
    }
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
