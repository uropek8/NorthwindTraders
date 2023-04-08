import { FC, ReactElement, useState, useContext } from 'react'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton'

import {
  SearchBox,
  SearchForm,
  SearchFormItem,
  SearchFormLabel,
  SearchFormInput,
  SearchEmptyText,
  SearchResultsBox,
  SearchResultItem,
  SearchResultLink,
  SearchResultText,
  SearchResultsTitle,
  SearchFormRadioLabel,
  SearchResultsContent,
  SearchFormRadioGroup,
  SearchFormRadioWrapper,
} from './Search.styles'
import { SearchParams } from '@/types/types'
import { getSearchResults } from '@/api/search'
import LogContext from '@/contex/log/LogContext'

interface TResultProduct {
  id: string
  unitPrice: string
  productId: number
  productName: string
  unitsInStock: number
  quantityPerUnit: string
}
interface TResultCustomer {
  id: string
  phone: string
  customerId: string
  companyName: string
  contactName: string
  contactTitle: string
}

const Search: FC = (): ReactElement => {
  const [products, setProducts] = useState<TResultProduct[]>([])
  const [customers, setCustomers] = useState<TResultCustomer[]>([])
  const { updateErrorMsg } = useContext(LogContext)
  const formik = useFormik({
    initialValues: {
      search: '',
      checkName: 'products',
    },
    onSubmit: (data) => {
      const { search, checkName } = data

      if (!search) return

      fetchSearchResults({ searchValue: search, table: checkName })
    },
  })

  const fetchSearchResults = async (params: SearchParams) => {
    try {
      const response = await getSearchResults(params)
      const { data: resultsList, tableName } = response.data

      if (tableName === 'products') {
        setProducts(resultsList)
      } else {
        setCustomers(resultsList)
      }

      return Promise.resolve()
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      updateErrorMsg(message)

      return Promise.reject(error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    formik.setFieldValue('search', value)
  }

  const handleRadioCheck = (e: RadioButtonChangeEvent) => {
    const { value } = e

    formik.setFieldValue('checkName', value)
  }

  const getProductItemText = (product: TResultProduct, idx: number) => {
    return `
      #${idx + 1},
      Quantity Per Unit: ${product.quantityPerUnit},
      Price: ${product.unitPrice},
      Stock: ${product.unitsInStock}
    `
  }

  const getCustomerItemText = (product: TResultCustomer, idx: number) => {
    return `
      #${idx + 1},
      Contact: ${product.contactName},
      Title: ${product.contactTitle},
      Phone: ${product.phone}
    `
  }

  const isHasResults = products.length > 0 || customers.length > 0

  return (
    <SearchBox>
      <SearchForm onSubmit={formik.handleSubmit}>
        <SearchFormItem>
          <SearchFormLabel>Search Database</SearchFormLabel>
          <div className="p-inputgroup">
            <SearchFormInput
              value={formik.values.search}
              placeholder="Enter keyword..."
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              icon="pi pi-search"
            />
          </div>
        </SearchFormItem>
        <SearchFormItem>
          <SearchFormLabel>Tables</SearchFormLabel>
          <SearchFormRadioGroup>
            <SearchFormRadioWrapper>
              <RadioButton
                inputId="products"
                name="products"
                value="products"
                checked={formik.values.checkName === 'products'}
                onChange={handleRadioCheck}
              />
              <SearchFormRadioLabel htmlFor="products">
                Products
              </SearchFormRadioLabel>
            </SearchFormRadioWrapper>
            <SearchFormRadioWrapper>
              <RadioButton
                inputId="customers"
                name="customers"
                value="customers"
                checked={formik.values.checkName === 'customers'}
                onChange={handleRadioCheck}
              />
              <SearchFormRadioLabel htmlFor="customers">
                Customers
              </SearchFormRadioLabel>
            </SearchFormRadioWrapper>
          </SearchFormRadioGroup>
        </SearchFormItem>
      </SearchForm>
      <SearchResultsBox>
        <SearchResultsTitle>Search results</SearchResultsTitle>
        <SearchResultsContent>
          {!isHasResults ? (
            <SearchEmptyText>No results</SearchEmptyText>
          ) : (
            <>
              {products.length > 0 &&
                products.map((item, idx) => {
                  return (
                    <SearchResultItem key={item.id}>
                      <SearchResultLink to={`/product/${item.productId}`}>
                        {item.productName}
                      </SearchResultLink>
                      <SearchResultText>
                        {getProductItemText(item, idx)}
                      </SearchResultText>
                    </SearchResultItem>
                  )
                })}
              {customers.length > 0 &&
                customers.map((item, idx) => {
                  return (
                    <SearchResultItem key={item.id}>
                      <SearchResultLink to={`/customer/${item.customerId}`}>
                        {item.companyName}
                      </SearchResultLink>
                      <SearchResultText>
                        {getCustomerItemText(item, idx)}
                      </SearchResultText>
                    </SearchResultItem>
                  )
                })}
            </>
          )}
        </SearchResultsContent>
      </SearchResultsBox>
    </SearchBox>
  )
}

export default Search
