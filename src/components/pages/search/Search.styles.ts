import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
`

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const SearchFormItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchFormLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`

export const SearchFormInput = styled(InputText)`
  max-width: 450px;
`

export const SearchFormRadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
`

export const SearchFormRadioWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SearchFormRadioLabel = styled.label`
  font-size: 14px;
  margin-left: 15px;
`

export const SearchResultsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

export const SearchResultsTitle = styled.h5`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 15px;
`

export const SearchResultsContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const SearchEmptyText = styled.p`
  font-size: 16px;
  margin: 0;
`

export const SearchResultItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchResultLink = styled(NavLink)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`

export const SearchResultText = styled.p`
  color: #9ca3af;
  margin: 0;
`
