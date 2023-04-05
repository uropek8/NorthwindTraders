import { FC, ReactElement, useState, useEffect } from 'react'
import { Column } from 'primereact/column'
import { useParams, useNavigate } from 'react-router-dom'
import { DataTable } from 'primereact/datatable'

import {
  OrderBox,
  OrderBtn,
  OrderRow,
  OrderLink,
  OrderList,
  OrderItem,
  OrderTitle,
  OrderLabel,
  OrderHeader,
  OrderAction,
  OrderContent,
  OrderTableTitle,
  OrderTableWrapper,
} from './Order.styles'
import { ColumnMeta } from '@/types/types'
import { getOrderById } from '@/api/orders'
import { formatDate } from '@/services/dayjs-service'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface Order {
  id: string
  orderId: number
  freight: string
  shipVia: string
  quantity: number
  products: number
  shipCity: string
  shipName: string
  orderDate: string
  shipPhone: string
  shipRegion: string
  customerId: string
  totalPrice: number
  shippedDate: string
  shipAddress: string
  shipCountry: string
  requiredDate: string
  shipPostalCode: string
}
interface Product {
  id: string
  quantity: number
  discount: string
  unitPrice: string
  productId: number
  totalPrice: number
  productName: string
}
interface OrderDates {
  orderDate?: string
  shippedDate?: string
  requiredDate?: string
}

const Order: FC = (): ReactElement => {
  const [order, setOrder] = useState<Order | null>(null)
  const [orderProducts, setOrderProducts] = useState<Product[]>([])
  const [isLoadingOrder, setIsLoadingOrder] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const MAIN_KEYS_LIST = [
    'freight',
    'shipVia',
    'shipName',
    'quantity',
    'products',
    'customerId',
    'totalPrice',
  ]
  const SECONDARY_KEYS_LIST = [
    'shipCity',
    'orderDate',
    'shipRegion',
    'shippedDate',
    'shipCountry',
    'requiredDate',
    'shipPostalCode',
  ]
  const DATES_KEYS_LIST = ['orderDate', 'shippedDate', 'requiredDate']
  const columns: ColumnMeta[] = [
    { field: 'productName', header: 'Product' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'unitPrice', header: 'Order Price' },
    { field: 'totalPrice', header: 'Total Price' },
    { field: 'discount', header: 'Discount' },
  ]

  useEffect(() => {
    fetchOrder()
  }, [])

  const fetchOrder = async () => {
    if (!id) return

    setIsLoadingOrder(true)

    try {
      const response = await getOrderById(id)
      const { order: orderData, products } = response.data
      const preparedOrder = getOrderWithPreparedDates(orderData)

      setOrder(preparedOrder)
      setOrderProducts(products)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingOrder(false)
    }
  }

  const getOrderWithPreparedDates = (order: Order) => {
    const preparedOrder = Object.keys(order).reduce((acc, key) => {
      const isDateKey = DATES_KEYS_LIST.includes(key as keyof Order)
      const value = isDateKey
        ? formatDate(order[key as keyof OrderDates], 'YYYY-MM-DD')
        : order[key as keyof Order]

      acc = {
        ...acc,
        [key]: value,
      }

      return acc
    }, {} as Order)

    return !Object.keys(preparedOrder).length ? null : preparedOrder
  }

  const productNameBodyTemplate = (row: Product) => {
    return (
      <OrderLink to={`/product/${row.productId}`}>{row.productName}</OrderLink>
    )
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <OrderBox>
      <OrderHeader>
        <OrderTitle>
          <i className="pi pi-id-card"></i>
          Supplier information
        </OrderTitle>
      </OrderHeader>
      <OrderContent>
        {isLoadingOrder && <p>Loading...</p>}
        <OrderRow>
          <OrderList>
            {order &&
              Object.keys(order).map((key) => {
                if (
                  !MAIN_KEYS_LIST.includes(key) ||
                  order[key as keyof Order] === undefined
                )
                  return null

                if (key === 'supplier') {
                  return (
                    <OrderItem key={key}>
                      <OrderLabel>{capitalizeFromCamelCase(key)}</OrderLabel>
                      <OrderLink to={`/customer/${order.customerId}`}>
                        {order[key as keyof Order]}
                      </OrderLink>
                    </OrderItem>
                  )
                }

                const labelPrefix = ['quantity', 'products'].includes(key)
                  ? 'Total '
                  : ''

                return (
                  <OrderItem key={key}>
                    <OrderLabel>
                      {labelPrefix}
                      {capitalizeFromCamelCase(key)}
                    </OrderLabel>
                    {order[key as keyof Order]}
                  </OrderItem>
                )
              })}
          </OrderList>
        </OrderRow>
        <OrderRow>
          <OrderList>
            {order &&
              Object.keys(order).map((key) => {
                if (
                  !SECONDARY_KEYS_LIST.includes(key) ||
                  order[key as keyof Order] === undefined
                )
                  return null

                return (
                  <OrderItem key={key}>
                    <OrderLabel>{capitalizeFromCamelCase(key)}</OrderLabel>
                    {order[key as keyof Order]}
                  </OrderItem>
                )
              })}
          </OrderList>
        </OrderRow>
      </OrderContent>
      {orderProducts.length > 0 && (
        <OrderTableWrapper>
          <OrderTableTitle>Products in Order</OrderTableTitle>
          <DataTable
            value={orderProducts}
            rows={orderProducts.length}
            size="small"
            lazy
            stripedRows
          >
            <Column
              body={productNameBodyTemplate}
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
        </OrderTableWrapper>
      )}
      <OrderAction>
        <OrderBtn
          severity="danger"
          label="Go back"
          onClick={handleClickBack}
        />
      </OrderAction>
    </OrderBox>
  )
}

export default Order
