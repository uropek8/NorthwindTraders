import styled from 'styled-components'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

export const ProductHeader = styled.div`
  padding: 10px 20px;
  background-color: rgb(217, 226, 235);
`

export const ProductTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 20px;
  font-weight: 500;

  i {
    margin-right: 6px;
  }
`

export const ProductContent = styled.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
`

export const ProductRow = styled.div`
  flex: 1 0 50%;
  max-width: 50%;
`

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`

export const ProductLabel = styled.label`
  display: block;
  font-weight: 700;
  line-height: 1.4;
`

export const ProductAction = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #e5e7eb;
`

export const ProductBtn = styled(Button)`
  .p-button-label {
    font-weight: 400;
  }
`

export const ProductLink = styled(NavLink)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`
