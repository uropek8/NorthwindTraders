import styled from 'styled-components'
import { Button } from 'primereact/button'

export const SuppliersBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

export const SuppliersHeader = styled.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`

export const SuppliersTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`

export const SuppliersContent = styled.div`
  display: flex;
  padding: 20px;
`

export const SuppliersRow = styled.div`
  flex: 1 0 50%;
  max-width: 50%;
`

export const SuppliersList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const SuppliersItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const SuppliersLabel = styled.label`
  display: block;
  font-weight: 700;
`

export const SuppliersAction = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`

export const SuppliersBtn = styled(Button)`
  .p-button-label {
    font-weight: 400;
  }
`
