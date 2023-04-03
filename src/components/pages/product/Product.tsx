import { FC, ReactElement, useState, useEffect } from 'react'
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
import { getProductById } from '@/api/products'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface Product {
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

const Product: FC = (): ReactElement => {
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoadingProduct, setIsLoadingProduct] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const MAIN_KEYS_LIST = [
    'supplier',
    'unitPrice',
    'productName',
    'quantityPerUnit',
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

  const fetchProduct = async () => {
    if (!id) return

    setIsLoadingProduct(true)

    try {
      const response = await getProductById(id)
      const { product: productData } = response.data

      setProduct(productData)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingProduct(false)
    }
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <ProductBox>
      <ProductHeader>
        <ProductTitle>
          <i className="pi pi-id-card"></i>
          Supplier information
        </ProductTitle>
      </ProductHeader>
      <ProductContent>
        {isLoadingProduct && <p>Loading...</p>}
        <ProductRow>
          <ProductList>
            {product &&
              Object.keys(product).map((key) => {
                if (
                  !MAIN_KEYS_LIST.includes(key) ||
                  product[key as keyof Product] === undefined
                )
                  return null

                if (key === 'supplier') {
                  return (
                    <ProductItem key={key}>
                      <ProductLabel>
                        {capitalizeFromCamelCase(key)}
                      </ProductLabel>
                      <ProductLink to={`/supplier/${product.supplierId}`}>
                        {product[key as keyof Product]}
                      </ProductLink>
                    </ProductItem>
                  )
                }

                return (
                  <ProductItem key={key}>
                    <ProductLabel>{capitalizeFromCamelCase(key)}</ProductLabel>
                    {product[key as keyof Product]}
                  </ProductItem>
                )
              })}
          </ProductList>
        </ProductRow>
        <ProductRow>
          <ProductList>
            {product &&
              Object.keys(product).map((key) => {
                if (
                  !SECONDARY_KEYS_LIST.includes(key) ||
                  product[key as keyof Product] === undefined
                )
                  return null

                return (
                  <ProductItem key={key}>
                    <ProductLabel>{capitalizeFromCamelCase(key)}</ProductLabel>
                    {product[key as keyof Product]}
                  </ProductItem>
                )
              })}
          </ProductList>
        </ProductRow>
      </ProductContent>
      <ProductAction>
        <ProductBtn
          severity="danger"
          label="Go back"
          onClick={handleClickBack}
        />
      </ProductAction>
    </ProductBox>
  )
}

export default Product
