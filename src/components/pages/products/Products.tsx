import { FC, ReactElement, useState, useEffect, useContext } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import { getProducts } from '@/api/products'
import LogContext from '@/contex/log/LogContext'
import { QueryParams, ColumnMeta, ISqlMetric } from '@/types/types'
import { ProductsContent, ProductsTitle, ColumnLink } from './Products.styles'

interface TProduct {
  id: string
  productId: number
  unitPrice: string
  productName: string
  unitsInStock: number
  unitsOnOrder: number
  quantityPerUnit: string
}

const Products: FC = (): ReactElement => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [first, setFirst] = useState<number>(0)
  const { metrics, updateLogMetrics } = useContext(LogContext)
  const LIMIT_COUNT = 20

  const columns: ColumnMeta[] = [
    { field: 'productName', header: 'Name' },
    { field: 'quantityPerUnit', header: 'Qt per unit' },
    { field: 'unitPrice', header: 'Price' },
    { field: 'unitsInStock', header: 'Stock' },
    { field: 'unitsOnOrder', header: 'Orders' },
  ]

  useEffect(() => {
    fetchProducts()
  }, [page])

  const fetchProducts = async () => {
    setIsLoadingProducts(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getProducts(params)
      const {
        products: productsList,
        totalElementsFromDB: records,
        sqlLog,
      } = response.data
      const preparedSqlLog = getPreparedSqlLogs(sqlLog, productsList.length)

      setTotalRecords(records)
      setProducts(productsList)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingProducts(false)
    }
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

  const productBodyTemplate = (row: TProduct) => {
    return (
      <ColumnLink to={`/product/${row.productId}`}>
        {row.productName}
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
    <ProductsContent>
      {!isLoadingProducts ? (
        <>
          <ProductsTitle>Products</ProductsTitle>
          <DataTable
            first={first}
            value={products}
            rows={LIMIT_COUNT}
            totalRecords={totalRecords}
            loading={isLoadingProducts}
            paginator={products.length > 0}
            size="small"
            lazy
            stripedRows
            onPage={handlePage}
          >
            <Column
              body={productBodyTemplate}
              field="productName"
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
    </ProductsContent>
  )
}

export default Products
