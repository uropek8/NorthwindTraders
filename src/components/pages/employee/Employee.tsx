import { FC, ReactElement, useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import {
  EmployeeBox,
  EmployeeRow,
  EmployeeBtn,
  EmployeeList,
  EmployeeLink,
  EmployeeItem,
  EmployeeLabel,
  EmployeeTitle,
  EmployeeAction,
  EmployeeHeader,
  EmployeeContent,
} from './Employee.styles'
import { getEmployeeById } from '@/api/employees'
import { capitalizeFromCamelCase } from '@/services/string-service'

interface TEmployee {
  id: string
  name: string
  city: string
  title: string
  notes: string
  region: string
  address: string
  country: string
  hireDate: string
  homePhone: string
  extension: number
  birthDate: string
  employeeId: number
  postalCode: string
  titleOfCourtesy: string
  reportsTo: TEmployeeReports
}
interface TEmployeeReports {
  name: string
  employeeId: number
}
interface TMainRowEmployee {
  name: string
  city: string
  title: string
  address: string
  hireDate: string
  birthDate: string
  titleOfCourtesy: string
}
interface TSecondaryRowEmployee {
  notes: string
  country: string
  homePhone: string
  extension: string
  postalCode: string
}

const Employee: FC = (): ReactElement => {
  const [employee, setEmployee] = useState<Partial<TEmployee>>({})
  const [mainRowEmployee, setMainRowEmployee] = useState<
    Partial<TMainRowEmployee>
  >({})
  const [secondaryRowEmployee, setSecondaryRowEmployee] = useState<
    Partial<TSecondaryRowEmployee>
  >({})
  const [isLoadingEmployee, setIsLoadingEmployee] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const MAIN_KEYS_LIST = [
    'name',
    'title',
    'titleOfCourtesy',
    'birthDate',
    'hireDate',
    'address',
    'city',
  ]
  const SECONDARY_KEYS_LIST = [
    'postalCode',
    'country',
    'homePhone',
    'extension',
    'notes',
  ]

  useEffect(() => {
    fetchEmployee()
  }, [])

  useEffect(() => {
    fetchEmployee()
  }, [location])

  useEffect(() => {
    initalEmployeeRows()
  }, [employee])

  const initalEmployeeRows = () => {
    if (!employee) return

    const mainRow = getCurrentRowEmployee(MAIN_KEYS_LIST)
    const secondaryRow = getCurrentRowEmployee(SECONDARY_KEYS_LIST)

    setMainRowEmployee(mainRow)
    setSecondaryRowEmployee(secondaryRow)
  }

  const getCurrentRowEmployee = (keys: string[]) => {
    if (!employee || !Object.keys(employee).length) return {}

    return keys.reduce((acc, key) => {
      if (!employee[key as keyof TEmployee]) return acc

      acc = {
        ...acc,
        [key]: employee[key as keyof TEmployee],
      }

      return acc
    }, {})
  }

  const fetchEmployee = async () => {
    if (!id) return

    setIsLoadingEmployee(true)

    try {
      const response = await getEmployeeById(id)
      const { employee: employeeData } = response.data

      setEmployee(employeeData)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setIsLoadingEmployee(false)
    }
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <EmployeeBox>
      <EmployeeHeader>
        <EmployeeTitle>
          <i className="pi pi-id-card"></i>
          Employee information
        </EmployeeTitle>
      </EmployeeHeader>
      <EmployeeContent>
        {isLoadingEmployee ? (
          <p>Loading...</p>
        ) : (
          <>
            <EmployeeRow>
              <EmployeeList>
                {Object.keys(mainRowEmployee).length > 0 &&
                  Object.keys(mainRowEmployee).map((key) => {
                    return (
                      <EmployeeItem key={key}>
                        <EmployeeLabel>
                          {capitalizeFromCamelCase(key)}
                        </EmployeeLabel>
                        {mainRowEmployee[key as keyof TMainRowEmployee]}
                      </EmployeeItem>
                    )
                  })}
              </EmployeeList>
            </EmployeeRow>
            <EmployeeRow>
              {Object.keys(secondaryRowEmployee).length > 0 && (
                <EmployeeList>
                  {Object.keys(secondaryRowEmployee).map((key) => {
                    return (
                      <EmployeeItem key={key}>
                        <EmployeeLabel>
                          {capitalizeFromCamelCase(key)}
                        </EmployeeLabel>
                        {
                          secondaryRowEmployee[
                            key as keyof TSecondaryRowEmployee
                          ]
                        }
                      </EmployeeItem>
                    )
                  })}
                  {employee?.reportsTo &&
                    Object.keys(employee?.reportsTo).length > 0 && (
                      <EmployeeItem>
                        <EmployeeLabel>
                          {capitalizeFromCamelCase('reportsTo')}
                        </EmployeeLabel>
                        <EmployeeLink
                          to={`/employee/${employee?.reportsTo?.employeeId}`}
                        >
                          {employee?.reportsTo?.name}
                        </EmployeeLink>
                      </EmployeeItem>
                    )}
                </EmployeeList>
              )}
            </EmployeeRow>
          </>
        )}
      </EmployeeContent>
      <EmployeeAction>
        <EmployeeBtn
          severity="danger"
          label="Go back"
          onClick={handleClickBack}
        />
      </EmployeeAction>
    </EmployeeBox>
  )
}

export default Employee
