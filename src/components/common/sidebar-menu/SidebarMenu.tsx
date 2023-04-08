import { FC, ReactElement, useContext } from 'react'
import { Sidebar } from 'primereact/sidebar'

import {
  SidebarBox,
  SidebarLink,
  SidebarList,
  SidebarWrapper,
  SidebarContent,
  SidebarSubtitle,
  SidebarListItem,
  SidebarListLink,
  SidebarLinkWrap,
} from './SidebarMenu.styles'
import LogContext from '@/contex/log/LogContext'

interface SidebarItem {
  linkPath: string
  linkIcon: string
  linkText: string
}

const SidebarMenu: FC = (): ReactElement => {
  const { isShowSidebar, toggleSidebar } = useContext(LogContext)
  const generalItemsList: SidebarItem[] = [
    {
      linkPath: '/',
      linkIcon: 'pi-home',
      linkText: 'Home',
    },
    {
      linkPath: '/dashboard',
      linkIcon: 'pi-desktop',
      linkText: 'Dashboard',
    },
  ]
  const backofficeItemsList: SidebarItem[] = [
    {
      linkPath: '/suppliers',
      linkIcon: 'pi-truck',
      linkText: 'Suppliers',
    },
    {
      linkPath: '/products',
      linkIcon: 'pi-shopping-bag',
      linkText: 'Products',
    },
    {
      linkPath: '/orders',
      linkIcon: 'pi-shopping-cart',
      linkText: 'Orders',
    },
    {
      linkPath: '/employees',
      linkIcon: 'pi-credit-card',
      linkText: 'Employees',
    },
    {
      linkPath: '/customers',
      linkIcon: 'pi-users',
      linkText: 'Customers',
    },
    {
      linkPath: '/search',
      linkIcon: 'pi-search',
      linkText: 'Search',
    },
  ]

  const handleLinkClick = () => {
    if (!isShowSidebar) return

    toggleSidebar(false)
  }

  return (
    <SidebarWrapper>
      <Sidebar
        visible={isShowSidebar}
        showCloseIcon={false}
        className="mobile-sibebar"
        blockScroll
        onHide={() => toggleSidebar(false)}
      >
        <SidebarLinkWrap>
          <SidebarLink to={'/'}>
            <b>Northwind</b> Traders
          </SidebarLink>
        </SidebarLinkWrap>
        <SidebarContent>
          <SidebarSubtitle>General</SidebarSubtitle>
          <SidebarList>
            {generalItemsList.map((item) => {
              return (
                <SidebarListItem key={item.linkText}>
                  <SidebarListLink
                    to={item.linkPath}
                    onClick={handleLinkClick}
                  >
                    <i className={`pi ${item.linkIcon}`}></i>
                    {item.linkText}
                  </SidebarListLink>
                </SidebarListItem>
              )
            })}
          </SidebarList>
          <SidebarSubtitle>Backoffice</SidebarSubtitle>
          <SidebarList>
            {backofficeItemsList.map((item) => {
              return (
                <SidebarListItem key={item.linkText}>
                  <SidebarListLink
                    to={item.linkPath}
                    onClick={handleLinkClick}
                  >
                    <i className={`pi ${item.linkIcon}`}></i>
                    {item.linkText}
                  </SidebarListLink>
                </SidebarListItem>
              )
            })}
          </SidebarList>
        </SidebarContent>
      </Sidebar>
      <SidebarBox>
        <SidebarLinkWrap>
          <SidebarLink to={'/'}>
            <b>Northwind</b> Traders
          </SidebarLink>
        </SidebarLinkWrap>
        <SidebarContent>
          <SidebarSubtitle>General</SidebarSubtitle>
          <SidebarList>
            {generalItemsList.map((item) => {
              return (
                <SidebarListItem key={item.linkText}>
                  <SidebarListLink to={item.linkPath}>
                    <i className={`pi ${item.linkIcon}`}></i>
                    {item.linkText}
                  </SidebarListLink>
                </SidebarListItem>
              )
            })}
          </SidebarList>
          <SidebarSubtitle>Backoffice</SidebarSubtitle>
          <SidebarList>
            {backofficeItemsList.map((item) => {
              return (
                <SidebarListItem key={item.linkText}>
                  <SidebarListLink
                    to={item.linkPath}
                    onClick={handleLinkClick}
                  >
                    <i className={`pi ${item.linkIcon}`}></i>
                    {item.linkText}
                  </SidebarListLink>
                </SidebarListItem>
              )
            })}
          </SidebarList>
        </SidebarContent>
      </SidebarBox>
    </SidebarWrapper>
  )
}

export default SidebarMenu
