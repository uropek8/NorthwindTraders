import { FC, useState, useEffect, useContext, ReactElement } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  ProductBox,
  ProductBtn,
  ProductRow,
  ProductLink,
  ProductList,
  ProductItem,
  ProductTitle,
  ProductLabel,
  ProductHeader,
  ProductAction,
  ProductContent,
} from './Product.styles'
import { ISqlMetric } from '@/types/types'
import { getProductById } from '@/api/products'
import LogContext from '@/contex/log/LogContext'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface TProduct {
  id: string
  supplier: string
  unitPrice: string
  productId: number
  supplierId: number
  unitsInStock: number
  unitsOnOrder: number
  reorderLevel: number
  discontinued: number
  productName: string
  quantityPerUnit: string
}
interface TMainRow {
  supplier: string
  unitPrice: string
  productName: string
  quantityPerUnit: string
}
interface TSecondaryRow {
  unitsInStock: number
  unitsOnOrder: number
  reorderLevel: number
  discontinued: number
}

const Product: FC = (): ReactElement => {
  const [product, setProduct] = useState<Partial<TProduct>>({})
  const [isLoadingProduct, setIsLoadingProduct] = useState(false)
  const [mainRow, setMainRow] = useState<Partial<TMainRow>>({})
  const [secondaryRow, setSecondaryRow] = useState<Partial<TSecondaryRow>>({})
  const { metrics, updateLogMetrics, updateErrorMsg } = useContext(LogContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const MAIN_KEYS_LIST = [
    'productName',
    'supplier',
    'quantityPerUnit',
    'unitPrice',
  ]
  const SECONDARY_KEYS_LIST = [
    'unitsInStock',
    'unitsOnOrder',
    'reorderLevel',
    'discontinued',
  ]

  useEffect(() => {
    fetchProduct()
  }, [])

  useEffect(() => {
    initalContentRows()
  }, [product])

  const fetchProduct = async () => {
    if (!id) return

    setIsLoadingProduct(true)

    try {
      const response = await getProductById(id)
      const { product: productData, sqlLog } = response.data
      const preparedSqlLog = getPreparedSqlLogs(sqlLog, 1)

      setProduct(productData)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      updateErrorMsg(message)

      return Promise.reject(error)
    } finally {
      setIsLoadingProduct(false)
    }
  }

  const initalContentRows = () => {
    if (!product) return

    const mainRowContent = getCurrentRow(MAIN_KEYS_LIST)
    const secondaryRowContent = getCurrentRow(SECONDARY_KEYS_LIST)

    setMainRow(mainRowContent)
    setSecondaryRow(secondaryRowContent)
  }

  const getCurrentRow = (keys: string[]) => {
    return keys.reduce((acc, key) => {
      if (!product[key as keyof TProduct]) return acc

      acc = {
        ...acc,
        [key]: product[key as keyof TProduct],
      }

      return acc
    }, {})
  }

  const handleClickBack = () => {
    navigate(-1)
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

  return (
    <>
      {isLoadingProduct ? (
        <p>Loading...</p>
      ) : (
        <ProductBox>
          <ProductHeader>
            <ProductTitle>
              <i className="pi pi-id-card"></i>
              Product information
            </ProductTitle>
          </ProductHeader>
          <ProductContent>
            {Object.keys(product).length > 0 ? (
              <>
                <ProductRow>
                  <ProductList>
                    {Object.keys(mainRow).length > 0 &&
                      Object.keys(mainRow).map((key) => {
                        if (key === 'supplier') {
                          return (
                            <ProductItem key={key}>
                              <ProductLabel>
                                {capitalizeFromCamelCase(key)}
                              </ProductLabel>
                              <ProductLink
                                to={`/supplier/${product.supplierId}`}
                              >
                                {product[key as keyof TProduct]}
                              </ProductLink>
                            </ProductItem>
                          )
                        }

                        return (
                          <ProductItem key={key}>
                            <ProductLabel>
                              {capitalizeFromCamelCase(key)}
                            </ProductLabel>
                            {key === 'unitPrice' ? '$' : ''}
                            {product[key as keyof TProduct]}
                          </ProductItem>
                        )
                      })}
                  </ProductList>
                </ProductRow>
                <ProductRow>
                  <ProductList>
                    {Object.keys(secondaryRow).length > 0 &&
                      Object.keys(secondaryRow).map((key) => {
                        return (
                          <ProductItem key={key}>
                            <ProductLabel>
                              {capitalizeFromCamelCase(key)}
                            </ProductLabel>
                            {product[key as keyof TProduct]}
                          </ProductItem>
                        )
                      })}
                  </ProductList>
                </ProductRow>
              </>
            ) : (
              <p>Empty data</p>
            )}
          </ProductContent>
          <ProductAction>
            <ProductBtn
              severity="danger"
              label="Go back"
              onClick={handleClickBack}
            />
          </ProductAction>
        </ProductBox>
      )}
    </>
  )
}

export default Product
