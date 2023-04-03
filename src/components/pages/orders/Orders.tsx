import { FC, ReactElement, useState, useEffect } from 'react'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent } from 'primereact/datatable'

import { getOrders } from '@/api/orders'
import { QueryParams } from '@/types/types'
import { formatDate } from '@/services/dayjs-service'
import { OrdersContent, OrdersTitle, ColumnLink } from './Orders.styles'

interface Order {
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
interface ColumnMeta {
  field: string
  header: string
}

const Orders: FC = (): ReactElement => {
  const [orders, setOrders] = useState<Order[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [isLoadingOrders, setIsLoadingOrders] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  const [first, setFirst] = useState<number>(0)
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

  const getPreparedOrders = (orders: Order[]) => {
    if (!orders.length) return []

    return orders.map((order) => {
      return {
        ...order,
        shippedDate: formatDate(order.shippedDate, 'YYYY-MM-DD'),
      }
    })
  }

  const fetchOrders = async () => {
    setIsLoadingOrders(true)

    try {
      const params: QueryParams = {
        page: page,
        limit: LIMIT_COUNT,
      }

      const response = await getOrders(params)
      const { orders: ordersList, totalElementsFromDB: records } = response.data
      const preparedOrders = getPreparedOrders(ordersList)

      setOrders(preparedOrders)
      setTotalRecords(records)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingOrders(false)
    }
  }

  const orderIdBodyTemplate = (row: Order) => {
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
      <OrdersTitle>Orders</OrdersTitle>
      <DataTable
        first={first}
        value={orders}
        rows={LIMIT_COUNT}
        totalRecords={totalRecords}
        loading={isLoadingOrders}
        size="small"
        lazy
        paginator
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
    </OrdersContent>
  )
}

export default Orders
