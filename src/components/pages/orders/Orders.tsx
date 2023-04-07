import { FC, ReactElement, useState, useEffect, useContext } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import { getOrders } from '@/api/orders'
import LogContext from '@/contex/log/LogContext'
import { formatDate } from '@/services/dayjs-service'
import { QueryParams, ColumnMeta, ISqlMetric } from '@/types/types'
import { OrdersContent, OrdersTitle, ColumnLink } from './Orders.styles'

interface TOrder {
  id: string
  orderId: number
  quantity: number
  products: number
  shipName: string
  shipCity: string
  totalPrice: number
  shippedDate: string
  shipCountry: string
}

const Orders: FC = (): ReactElement => {
  const [orders, setOrders] = useState<TOrder[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [isLoadingOrders, setIsLoadingOrders] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [first, setFirst] = useState<number>(0)
  const { metrics, updateLogMetrics } = useContext(LogContext)
  const LIMIT_COUNT = 20
  const columns: ColumnMeta[] = [
    { field: 'totalPrice', header: 'Total Price' },
    { field: 'products', header: 'Products' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'shippedDate', header: 'Shipped' },
    { field: 'shipName', header: 'Ship Name' },
    { field: 'shipCountry', header: 'City' },
    { field: 'shipCity', header: 'Country' },
  ]

  useEffect(() => {
    fetchOrders()
  }, [page])

  const fetchOrders = async () => {
    setIsLoadingOrders(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getOrders(params)
      const {
        orders: ordersList,
        totalElementsFromDB: records,
        sqlLog,
      } = response.data
      const preparedOrders = getPreparedOrders(ordersList)
      const preparedSqlLog = getPreparedSqlLogs(sqlLog, preparedOrders.length)

      setTotalRecords(records)
      setOrders(preparedOrders)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingOrders(false)
    }
  }

  const getPreparedOrders = (orders: TOrder[]) => {
    if (!orders.length) return []

    return orders.map((order) => {
      return {
        ...order,
        shippedDate: formatDate(order.shippedDate, 'YYYY-MM-DD'),
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

  const orderIdBodyTemplate = (row: TOrder) => {
    return <ColumnLink to={`/order/${row.orderId}`}>{row.orderId}</ColumnLink>
  }

  const handlePage = (e: DataTablePageEvent) => {
    const { first, page } = e
    const currentPage = page !== undefined ? page + 1 : 1

    setPage(currentPage)
    setFirst(first)
  }

  return (
    <OrdersContent>
      {!isLoadingOrders ? (
        <>
          <OrdersTitle>Orders</OrdersTitle>
          <DataTable
            first={first}
            value={orders}
            rows={LIMIT_COUNT}
            totalRecords={totalRecords}
            loading={isLoadingOrders}
            paginator={orders.length > 0}
            size="small"
            lazy
            stripedRows
            onPage={handlePage}
          >
            <Column
              body={orderIdBodyTemplate}
              header="Id"
              field="orderId"
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
    </OrdersContent>
  )
}

export default Orders
