import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HomeBody = styled.div`
  padding: 15px;
`

export const HomeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
`

export const HomeSubTitle = styled.p`
  color: #9ca3af;
  margin-top: 0;
  margin-bottom: 15px;
`

export const HomeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const HomeInfo = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  max-width: 100%;
`

export const HomeText = styled.p`
  margin: 0;
`

export const HomeLink = styled(NavLink)`
  color: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`

export const HomeImage = styled.div`
  flex: 1 0 384px;
  max-width: 384px;

  @media (max-width: 1024px) {
    flex: 1 0 100%;
    max-width: 100%;
    margin-top: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
