import { FC, ReactElement } from 'react'

import {
  SidebarBox,
  SidebarLinkWrap,
  SidebarLink,
  SidebarContent,
  SidebarSubtitle,
  SidebarList,
  SidebarListItem,
  SidebarListLink,
} from './Sidebar.styles'

interface SidebarItem {
  linkPath: string
  linkIcon: string
  linkText: string
}

const Sidebar: FC = (): ReactElement => {
  const sidebarItemsList: SidebarItem[] = [
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

  return (
    <SidebarBox>
      <SidebarLinkWrap>
        <SidebarLink to={'/'}>
          <b>Northwind</b> Traders
        </SidebarLink>
      </SidebarLinkWrap>
      <SidebarContent>
        <SidebarSubtitle>General</SidebarSubtitle>
        <SidebarList>
          {sidebarItemsList.map((item) => {
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
      </SidebarContent>
    </SidebarBox>
  )
}

export default Sidebar
