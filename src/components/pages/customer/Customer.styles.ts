import styled from 'styled-components'
import { Button } from 'primereact/button'

export const CustomerBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

export const CustomerHeader = styled.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`

export const CustomerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`

export const CustomerContent = styled.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`

export const CustomerRow = styled.div`
  flex: 1 0 0%;
  max-width: 50%;
`

export const CustomerList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const CustomerItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`

export const CustomerLabel = styled.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`

export const CustomerAction = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`

export const CustomerBtn = styled(Button)`
  .p-button-label {
    font-weight: 400;
  }
`
