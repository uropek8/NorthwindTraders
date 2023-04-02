import { FC, ReactElement, useState, useEffect } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import { QueryParams } from '@/types/types'
import { getSupplies } from '@/api/suppliers'
import { SuppliersContent, SuppliersTitle } from './Suppliers.styles'

interface Supplier {
  id: string
  city: string
  country: string
  companyName: string
  contactName: string
  contactTitle: string
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

  const columns: ColumnMeta[] = [
    { field: 'companyName', header: 'Company' },
    { field: 'contactName', header: 'Contact' },
    { field: 'contactTitle', header: 'Title' },
    { field: 'city', header: 'City' },
    { field: 'country', header: 'Country' },
  ]

  const fetchSuppliers = async () => {
    setIsLoadingSuppliers(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getSupplies(params)
      const { supplies, totalElementsFromDB: records } = response.data

      setSuppliers(supplies)
      setTotalRecords(records)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingSuppliers(false)
    }
  }

  useEffect(() => {
    fetchSuppliers()
  }, [page])

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
