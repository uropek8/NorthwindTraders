import styled from 'styled-components'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

export const OrderHeader = styled.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`

export const OrderTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`

export const OrderContent = styled.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`

export const OrderRow = styled.div`
  flex: 1 0 0%;
  max-width: 50%;
`

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const OrderItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`

export const OrderLabel = styled.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`

export const OrderAction = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`

export const OrderBtn = styled(Button)`
  .p-button-label {
    font-weight: 400;
  }
`

export const OrderLink = styled(NavLink)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`

export const OrderTableWrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;

  .p-datatable {
    .p-datatable-thead {
      tr > th {
        color: #000;
        line-height: 24px;
        background-color: #d9e2eb;
      }
    }

    .p-datatable-tbody {
      tr {
        color: #000;

        td {
          line-height: 24px;
          border: none;
        }
      }
    }
  }
`

export const OrderTableTitle = styled.h5`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
`
