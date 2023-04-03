import { FC, ReactElement, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  SupplierBox,
  SupplierRow,
  SupplierBtn,
  SupplierList,
  SupplierItem,
  SupplierLabel,
  SupplierTitle,
  SupplierAction,
  SupplierHeader,
  SupplierContent,
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
      const { supplier: supplierData } = response.data

      setSupplier(supplierData)

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
    <SupplierBox>
      <SupplierHeader>
        <SupplierTitle>
          <i className="pi pi-id-card"></i>
          Supplier information
        </SupplierTitle>
      </SupplierHeader>
      <SupplierContent>
        {isLoadingSupplier && <p>Loading...</p>}
        <SupplierRow>
          <SupplierList>
            {supplier &&
              Object.keys(supplier).map((key) => {
                if (
                  !MAIN_KEYS_LIST.includes(key) ||
                  !supplier[key as keyof Supplier]
                )
                  return null

                return (
                  <SupplierItem key={key}>
                    <SupplierLabel>
                      {capitalizeFromCamelCase(key)}
                    </SupplierLabel>
                    {supplier[key as keyof Supplier]}
                  </SupplierItem>
                )
              })}
          </SupplierList>
        </SupplierRow>
        <SupplierRow>
          <SupplierList>
            {supplier &&
              Object.keys(supplier).map((key) => {
                if (
                  !SECONDARY_KEYS_LIST.includes(key) ||
                  !supplier[key as keyof Supplier]
                )
                  return null

                return (
                  <SupplierItem key={key}>
                    <SupplierLabel>
                      {capitalizeFromCamelCase(key)}
                    </SupplierLabel>
                    {supplier[key as keyof Supplier]}
                  </SupplierItem>
                )
              })}
          </SupplierList>
        </SupplierRow>
      </SupplierContent>
      <SupplierAction>
        <SupplierBtn
          severity="danger"
          label="Go back"
          onClick={handleClickBack}
        />
      </SupplierAction>
    </SupplierBox>
  )
}

export default Supplier
