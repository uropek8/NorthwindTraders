import { FC, ReactElement, useState, useEffect } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import { QueryParams } from '@/types/types'
import { getSupplies } from '@/api/suppliers'
import {
  ColumnLink,
  ColumnImage,
  SuppliersTitle,
  SuppliersContent,
  ColumnImageWrapper,
} from './Suppliers.styles'

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
interface ColumnMeta {
  field: string
  header: string
}

const Suppliers: FC = (): ReactElement => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [isLoadingSuppliers, setIsLoadingSuppliers] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [first, setFirst] = useState<number>(0)
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

  const fetchSuppliers = async () => {
    setIsLoadingSuppliers(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getSupplies(params)
      const { supplies, totalElementsFromDB: records } = response.data
      const preparedSuppliers = getPreparedSuppliers(supplies)

      setSuppliers(preparedSuppliers)
      setTotalRecords(records)

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
      <SuppliersTitle>Suppliers</SuppliersTitle>
      <DataTable
        first={first}
        value={suppliers}
        rows={LIMIT_COUNT}
        totalRecords={totalRecords}
        loading={isLoadingSuppliers}
        size="small"
        lazy
        paginator
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
    </SuppliersContent>
  )
}

export default Suppliers
