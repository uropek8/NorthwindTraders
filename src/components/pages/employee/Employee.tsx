import { FC, ReactElement, useState, useEffect, useContext } from 'react'
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
import { ISqlMetric } from '@/types/types'
import LogContext from '@/contex/log/LogContext'
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
interface TMainRow {
  name: string
  city: string
  title: string
  address: string
  hireDate: string
  birthDate: string
  titleOfCourtesy: string
}
interface TSecondaryRow {
  notes: string
  country: string
  homePhone: string
  extension: string
  postalCode: string
}

const Employee: FC = (): ReactElement => {
  const [employee, setEmployee] = useState<Partial<TEmployee>>({})
  const [mainRow, setMainRow] = useState<Partial<TMainRow>>({})
  const [secondaryRow, setSecondaryRow] = useState<Partial<TSecondaryRow>>({})
  const [isLoadingEmployee, setIsLoadingEmployee] = useState(false)
  const { metrics, updateLogMetrics, updateErrorMsg } = useContext(LogContext)
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
    initalContentRows()
  }, [employee])

  const fetchEmployee = async () => {
    if (!id) return

    setIsLoadingEmployee(true)

    try {
      const response = await getEmployeeById(id)
      const { employee: employeeData, sqlLog } = response.data
      const preparedSqlLog = getPreparedSqlLogs(sqlLog, 1)

      setEmployee(employeeData)
      updateSqlMetrics(preparedSqlLog)

      return Promise.resolve()
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      updateErrorMsg(message)

      return Promise.reject(error)
    } finally {
      setIsLoadingEmployee(false)
    }
  }

  const initalContentRows = () => {
    if (!employee) return

    const mainRowContent = getCurrentRow(MAIN_KEYS_LIST)
    const secondaryRowContent = getCurrentRow(SECONDARY_KEYS_LIST)

    setMainRow(mainRowContent)
    setSecondaryRow(secondaryRowContent)
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

  const getCurrentRow = (keys: string[]) => {
    return keys.reduce((acc, key) => {
      if (!employee[key as keyof TEmployee]) return acc

      acc = {
        ...acc,
        [key]: employee[key as keyof TEmployee],
      }

      return acc
    }, {})
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
                {Object.keys(mainRow).length > 0 &&
                  Object.keys(mainRow).map((key) => {
                    return (
                      <EmployeeItem key={key}>
                        <EmployeeLabel>
                          {capitalizeFromCamelCase(key)}
                        </EmployeeLabel>
                        {mainRow[key as keyof TMainRow]}
                      </EmployeeItem>
                    )
                  })}
              </EmployeeList>
            </EmployeeRow>
            <EmployeeRow>
              {Object.keys(secondaryRow).length > 0 && (
                <EmployeeList>
                  {Object.keys(secondaryRow).map((key) => {
                    return (
                      <EmployeeItem key={key}>
                        <EmployeeLabel>
                          {capitalizeFromCamelCase(key)}
                        </EmployeeLabel>
                        {secondaryRow[key as keyof TSecondaryRow]}
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
