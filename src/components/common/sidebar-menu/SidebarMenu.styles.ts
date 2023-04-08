import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SidebarWrapper = styled.div`
  aside {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`

export const SidebarBox = styled.aside`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(31, 41, 55);
  z-index: 40;
`

export const SidebarLinkWrap = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: #111827;
`

export const SidebarLink = styled(NavLink)`
  color: #ffffff;
  line-height: 24px;
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const SidebarSubtitle = styled.p`
  color: rgb(229, 231, 235);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  padding: 0 15px;
  margin-top: 15px;
  margin-bottom: 10px;
  opacity: 0.6;
`

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const SidebarListItem = styled.li`
  width: 100%;
`

export const SidebarListLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: rgb(209, 213, 219);
  line-height: 24px;
  padding: 8px 15px;
  background-color: transparent;
  transition: all 0.3s ease;

  &.active {
    background-color: rgb(55, 65, 81);
  }

  &:hover {
    background-color: rgb(55, 65, 81);
  }

  i {
    margin-top: -2px;
    margin-right: 10px;
  }
`
