import { FC, ReactElement, useState, useEffect, useContext } from 'react'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useParams, useNavigate } from 'react-router-dom'

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
import { getOrderById } from '@/api/orders'
import LogContext from '@/contex/log/LogContext'
import { formatDate } from '@/services/dayjs-service'
import { ColumnMeta, ISqlMetric } from '@/types/types'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface TOrder {
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
interface TProduct {
  id: string
  quantity: number
  discount: string
  unitPrice: string
  productId: number
  totalPrice: number
  productName: string
}
interface TOrderDates {
  orderDate?: string
  shippedDate?: string
  requiredDate?: string
}
interface TMainRow {
  shipVia: string
  freight: string
  shipName: string
  products: number
  quantity: number
  customerId: string
  totalPrice: number
}
interface TSecondaryRow {
  shipCity: string
  orderDate: string
  shipRegion: string
  shippedDate: string
  shipCountry: string
  requiredDate: string
  shipPostalCode: string
}

const Order: FC = (): ReactElement => {
  const [order, setOrder] = useState<Partial<TOrder>>({})
  const [orderProducts, setOrderProducts] = useState<TProduct[]>([])
  const [isLoadingOrder, setIsLoadingOrder] = useState(false)
  const [mainRow, setMainRow] = useState<Partial<TMainRow>>({})
  const [secondaryRow, setSecondaryRow] = useState<Partial<TSecondaryRow>>({})
  const { metrics, updateLogMetrics } = useContext(LogContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const MAIN_KEYS_LIST = [
    'customerId',
    'shipName',
    'products',
    'quantity',
    'totalPrice',
    'shipVia',
    'freight',
  ]
  const SECONDARY_KEYS_LIST = [
    'orderDate',
    'requiredDate',
    'shippedDate',
    'shipCity',
    'shipRegion',
    'shipPostalCode',
    'shipCountry',
  ]
  const LABELS_PREFIX_LIST = ['quantity', 'products']
  const CURRENCIES_PREFIX_LIST = ['totalPrice', 'freight']
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

  useEffect(() => {
    initalContentRows()
  }, [order])

  const fetchOrder = async () => {
    if (!id) return

    setIsLoadingOrder(true)

    try {
      const response = await getOrderById(id)
      const { order: orderData, products, sqlLog } = response.data
      const preparedOrder = getOrderWithPreparedDates(orderData)
      const preparedSqlLog = getPreparedSqlLogs(sqlLog, 1)

      setOrder(preparedOrder)
      setOrderProducts(products)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingOrder(false)
    }
  }

  const initalContentRows = () => {
    if (!order) return

    const mainRowContent = getCurrentRow(MAIN_KEYS_LIST)
    const secondaryRowContent = getCurrentRow(SECONDARY_KEYS_LIST)

    setMainRow(mainRowContent)
    setSecondaryRow(secondaryRowContent)
  }

  const getCurrentRow = (keys: string[]) => {
    return keys.reduce((acc, key) => {
      if (!order[key as keyof TOrder]) return acc

      acc = {
        ...acc,
        [key]: order[key as keyof TOrder],
      }

      return acc
    }, {})
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

  const getOrderWithPreparedDates = (order: TOrder) => {
    return Object.keys(order).reduce((acc, key) => {
      const isDateKey = DATES_KEYS_LIST.includes(key as keyof TOrder)
      const value = isDateKey
        ? formatDate(order[key as keyof TOrderDates], 'YYYY-MM-DD')
        : order[key as keyof TOrder]

      acc = {
        ...acc,
        [key]: value,
      }

      return acc
    }, {} as TOrder)
  }

  const productNameBodyTemplate = (row: TProduct) => {
    return (
      <OrderLink to={`/product/${row.productId}`}>{row.productName}</OrderLink>
    )
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <>
      {isLoadingOrder ? (
        <p>Loading...</p>
      ) : (
        <OrderBox>
          <OrderHeader>
            <OrderTitle>
              <i className="pi pi-id-card"></i>
              Order information
            </OrderTitle>
          </OrderHeader>
          <OrderContent>
            {Object.keys(order).length > 0 && (
              <>
                <OrderRow>
                  <OrderList>
                    {Object.keys(mainRow).length > 0 &&
                      Object.keys(mainRow).map((key) => {
                        if (key === 'customerId') {
                          return (
                            <OrderItem key={key}>
                              <OrderLabel>
                                {capitalizeFromCamelCase(key)}
                              </OrderLabel>
                              <OrderLink to={`/customer/${order[key]}`}>
                                {order[key as keyof TOrder]}
                              </OrderLink>
                            </OrderItem>
                          )
                        }

                        return (
                          <OrderItem key={key}>
                            <OrderLabel>
                              {LABELS_PREFIX_LIST.includes(key) ? 'Total ' : ''}
                              {capitalizeFromCamelCase(key)}
                            </OrderLabel>
                            {CURRENCIES_PREFIX_LIST.includes(key) ? '$' : ''}
                            {order[key as keyof TOrder]}
                          </OrderItem>
                        )
                      })}
                  </OrderList>
                </OrderRow>
                <OrderRow>
                  <OrderList>
                    {Object.keys(secondaryRow).length > 0 &&
                      Object.keys(secondaryRow).map((key) => {
                        return (
                          <OrderItem key={key}>
                            <OrderLabel>
                              {capitalizeFromCamelCase(key)}
                            </OrderLabel>
                            {order[key as keyof TOrder]}
                          </OrderItem>
                        )
                      })}
                  </OrderList>
                </OrderRow>
              </>
            )}
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
      )}
    </>
  )
}

export default Order
