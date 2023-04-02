import { FC, ReactElement, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  SuppliersBox,
  SuppliersRow,
  SuppliersBtn,
  SuppliersList,
  SuppliersItem,
  SuppliersLabel,
  SuppliersTitle,
  SuppliersAction,
  SuppliersHeader,
  SuppliersContent,
} from './Supplier.styles'
import { getSupplieById } from '@/api/suppliers'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface Supplier {
  id: string
  fax: string
  city: string
  phone: string
  region: string
  address: string
  country: string
  homePage: string
  supplierId: number
  postalCode: string
  companyName: string
  contactName: string
  contactTitle: string
}

const Supplier: FC = (): ReactElement => {
  const [supplier, setSupplier] = useState<Supplier | null>(null)
  const [isLoadingSupplier, setIsLoadingSupplier] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const MAIN_KEYS_LIST = [
    'city',
    'address',
    'companyName',
    'contactName',
    'contactTitle',
  ]
  const SECONDARY_KEYS_LIST = [
    'phone',
    'region',
    'country',
    'homePage',
    'postalCode',
  ]

  useEffect(() => {
    fetchSupplier()
  }, [])

  const fetchSupplier = async () => {
    if (!id) return

    setIsLoadingSupplier(true)

    try {
      const response = await getSupplieById(id)
      const { supplier } = response.data

      setSupplier(supplier)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingSupplier(false)
    }
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <SuppliersBox>
      <SuppliersHeader>
        <SuppliersTitle>
          <i className="pi pi-id-card"></i>
          Supplier information
        </SuppliersTitle>
      </SuppliersHeader>
      <SuppliersContent>
        {isLoadingSupplier && <p>Loading...</p>}
        <SuppliersRow>
          <SuppliersList>
            {supplier &&
              Object.keys(supplier).map((key) => {
                if (
                  !MAIN_KEYS_LIST.includes(key) ||
                  !supplier[key as keyof Supplier]
                )
                  return null

                return (
                  <SuppliersItem key={key}>
                    <SuppliersLabel>
                      {capitalizeFromCamelCase(key)}
                    </SuppliersLabel>
                    {supplier[key as keyof Supplier]}
                  </SuppliersItem>
                )
              })}
          </SuppliersList>
        </SuppliersRow>
        <SuppliersRow>
          <SuppliersList>
            {supplier &&
              Object.keys(supplier).map((key) => {
                if (
                  !SECONDARY_KEYS_LIST.includes(key) ||
                  !supplier[key as keyof Supplier]
                )
                  return null

                return (
                  <SuppliersItem key={key}>
                    <SuppliersLabel>
                      {capitalizeFromCamelCase(key)}
                    </SuppliersLabel>
                    {supplier[key as keyof Supplier]}
                  </SuppliersItem>
                )
              })}
          </SuppliersList>
        </SuppliersRow>
      </SuppliersContent>
      <SuppliersAction>
        <SuppliersBtn
          severity="danger"
          label="Go back"
          onClick={handleClickBack}
        />
      </SuppliersAction>
    </SuppliersBox>
  )
}

export default Supplier
