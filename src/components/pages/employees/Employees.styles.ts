import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const EmployeesContent = styled.div`
  width: 100%;

  .p-datatable {
    .p-datatable-thead {
      tr > th {
        color: #000;
        line-height: 24px;
        background-color: #d9e2eb;
        white-space: nowrap;
      }
    }

    .p-datatable-tbody {
      tr {
        color: #000;

        td {
          line-height: 24px;
          border: none;
          white-space: nowrap;
        }
      }
    }

    .p-datatable-emptymessage {
      td {
        text-align: center;
      }
    }
  }

  .p-paginator {
    .p-paginator-pages {
      .p-paginator-page {
        min-width: 40px;
        height: 40px;
      }
    }

    .p-paginator-first,
    .p-paginator-prev,
    .p-paginator-next,
    .p-paginator-last {
      min-width: 40px;
      height: 40px;
    }

    &.p-paginator-bottom {
      border-width: 0;
    }
  }
`

export const EmployeesTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 15px;
  color: inherit;
  font-size: 20px;
  font-weight: 500;
`

export const ColumnImageWrapper = styled.div`
  display: flex;
`

export const ColumnImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

export const ColumnLink = styled(NavLink)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`
