import { FC, ReactElement, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  CustomerBox,
  CustomerRow,
  CustomerBtn,
  CustomerList,
  CustomerItem,
  CustomerLabel,
  CustomerTitle,
  CustomerAction,
  CustomerHeader,
  CustomerContent,
} from './Customer.styles'
import { getCustomerById } from '@/api/customers'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface TCustomer {
  id: string
  fax: string
  city: string
  phone: string
  region: string
  address: string
  country: string
  postalCode: string
  customerId: string
  companyName: string
  contactName: string
  contactTitle: string
}
interface TMainRowCustomer {
  city: string
  address: string
  companyName: string
  contactName: string
  contactTitle: string
}
interface TSecondaryRowCustomer {
  fax: string
  region: string
  postalCode: string
  phone: string
  country: string
}

const Customer: FC = (): ReactElement => {
  const [customer, setCustomer] = useState<Partial<TCustomer>>({})
  const [mainRowCustomer, setMainRowCustomer] = useState<
    Partial<TMainRowCustomer>
  >({})
  const [secondaryRowCustomer, setSecondaryRowCustomer] = useState<
    Partial<TSecondaryRowCustomer>
  >({})
  const [isLoadingCustomer, setIsLoadingCustomer] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const MAIN_KEYS_LIST = [
    'companyName',
    'contactName',
    'contactTitle',
    'address',
    'city',
  ]
  const SECONDARY_KEYS_LIST = [
    'postalCode',
    'region',
    'country',
    'phone',
    'fax',
  ]

  useEffect(() => {
    fetchCustomer()
  }, [])

  useEffect(() => {
    initalCustomerRows()
  }, [customer])

  const initalCustomerRows = () => {
    if (!customer) return

    const mainRow = getCurrentRowCustomer(MAIN_KEYS_LIST)
    const secondaryRow = getCurrentRowCustomer(SECONDARY_KEYS_LIST)

    setMainRowCustomer(mainRow)
    setSecondaryRowCustomer(secondaryRow)
  }

  const getCurrentRowCustomer = (keys: string[]) => {
    if (!customer || !Object.keys(customer).length) return {}

    return keys.reduce((acc, key) => {
      if (!customer[key as keyof TCustomer]) return acc

      acc = {
        ...acc,
        [key]: customer[key as keyof TCustomer],
      }

      return acc
    }, {})
  }

  const fetchCustomer = async () => {
    if (!id) return

    setIsLoadingCustomer(true)

    try {
      const response = await getCustomerById(id)
      const { customer: customerData } = response.data

      setCustomer(customerData)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingCustomer(false)
    }
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <>
      {isLoadingCustomer ? (
        <p>Loading...</p>
      ) : (
        <CustomerBox>
          <CustomerHeader>
            <CustomerTitle>
              <i className="pi pi-id-card"></i>
              Customer information
            </CustomerTitle>
          </CustomerHeader>
          <CustomerContent>
            {Object.keys(customer).length > 0 ? (
              <>
                <CustomerRow>
                  <CustomerList>
                    {Object.keys(mainRowCustomer).length > 0 &&
                      Object.keys(mainRowCustomer).map((key) => {
                        return (
                          <CustomerItem key={key}>
                            <CustomerLabel>
                              {capitalizeFromCamelCase(key)}
                            </CustomerLabel>
                            {mainRowCustomer[key as keyof TMainRowCustomer]}
                          </CustomerItem>
                        )
                      })}
                  </CustomerList>
                </CustomerRow>
                <CustomerRow>
                  {Object.keys(secondaryRowCustomer).length > 0 && (
                    <CustomerList>
                      {Object.keys(secondaryRowCustomer).map((key) => {
                        return (
                          <CustomerItem key={key}>
                            <CustomerLabel>
                              {capitalizeFromCamelCase(key)}
                            </CustomerLabel>
                            {
                              secondaryRowCustomer[
                                key as keyof TSecondaryRowCustomer
                              ]
                            }
                          </CustomerItem>
                        )
                      })}
                    </CustomerList>
                  )}
                </CustomerRow>
              </>
            ) : (
              <p>Empty data</p>
            )}
          </CustomerContent>
          <CustomerAction>
            <CustomerBtn
              severity="danger"
              label="Go back"
              onClick={handleClickBack}
            />
          </CustomerAction>
        </CustomerBox>
      )}
    </>
  )
}

export default Customer
