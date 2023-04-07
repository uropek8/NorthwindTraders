import styled from 'styled-components'

export const DashboardBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const DashboardInfo = styled.div`
  display: flex;
  column-gap: 20px;
`

export const DashboardInfoItem = styled.div`
  flex: 1 0 0%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
`

export const DashboardTitle = styled.h5`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`

export const DashboardText = styled.p`
  margin: 0;
`

export const DashboardDesc = styled.span`
  font-size: 14px;
`

export const DashboardLabel = styled.label`
  color: #9ca3af;
  font-size: 12px;
`

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

export const DashboardList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`

export const DashboardListItem = styled.li`
  display: flex;
  flex-direction: column;
`

export const DashboardListText = styled.p`
  margin: 0;
  font-family: 'Space Mono', monospace;
`
