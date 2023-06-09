import styled from 'styled-components'
import { Button } from 'primereact/button'

export const SupplierBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

export const SupplierHeader = styled.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`

export const SupplierTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`

export const SupplierContent = styled.div`
  display: flex;
  padding: 20px;
`

export const SupplierRow = styled.div`
  flex: 1 0 50%;
  max-width: 50%;
`

export const SupplierList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const SupplierItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`

export const SupplierLabel = styled.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`

export const SupplierAction = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`

export const SupplierBtn = styled(Button)`
  .p-button-label {
    font-weight: 400;
  }
`
