import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import { ContentSection } from './Layout.styles'
import Navbar from '@/components/common/navbar/Navbar'
import SidebarMenu from '@/components/common/sidebar-menu/SidebarMenu'

const Layout: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <SidebarMenu />
      <ContentSection>
        <Outlet />
      </ContentSection>
    </>
  )
}

export default Layout
