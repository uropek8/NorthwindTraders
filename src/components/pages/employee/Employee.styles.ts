import styled from 'styled-components'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'

export const EmployeeBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

export const EmployeeHeader = styled.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`

export const EmployeeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`

export const EmployeeContent = styled.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`

export const EmployeeRow = styled.div`
  flex: 1 0 0%;
  max-width: 50%;
`

export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const EmployeeItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`

export const EmployeeLabel = styled.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`

export const EmployeeAction = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`

export const EmployeeBtn = styled(Button)`
  .p-button-label {
    font-weight: 400;
  }
`

export const EmployeeLink = styled(NavLink)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`
