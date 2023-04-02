import { FC, ReactElement, useState, useEffect } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import { QueryParams } from '@/types/types'
import { getProducts } from '@/api/products'
import { ProductsContent, ProductsTitle } from './Products.styles'

interface Product {
  id: string
  productName: string
  quantityPerUnit: string
  unitPrice: string
  unitsInStock: number
  unitsOnOrder: number
}
interface ColumnMeta {
  field: string
  header: string
}

const Products: FC = (): ReactElement => {
  const [products, setProducts] = useState<Product[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [first, setFirst] = useState<number>(0)
  const LIMIT_COUNT = 20

  const columns: ColumnMeta[] = [
    { field: 'productName', header: 'Name' },
    { field: 'quantityPerUnit', header: 'Qt per unit' },
    { field: 'unitPrice', header: 'Price' },
    { field: 'unitsInStock', header: 'Stock' },
    { field: 'unitsOnOrder', header: 'Orders' },
  ]

  const fetchProducts = async () => {
    setIsLoadingProducts(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getProducts(params)
      const { products: productsList, totalElementsFromDB: records } =
        response.data

      setProducts(productsList)
      setTotalRecords(records)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingProducts(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [page])

  const handlePage = (e: DataTablePageEvent) => {
    const { first, page } = e
    const currentPage = page !== undefined ? page + 1 : 1

    setPage(currentPage)
    setFirst(first)
  }

  return (
    <ProductsContent>
      <ProductsTitle>Products</ProductsTitle>
      <DataTable
        first={first}
        value={products}
        rows={LIMIT_COUNT}
        totalRecords={totalRecords}
        loading={isLoadingProducts}
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
    </ProductsContent>
  )
}

export default Products
