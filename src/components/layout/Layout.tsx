import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import { ContentSection } from './Layout.styles'
import Navbar from '@/components/common/navbar/Navbar'
import Sidebar from '@/components/common/sidebar/Sidebar'

const Layout: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContentSection>
        <Outlet />
      </ContentSection>
    </>
  )
}

export default Layout
