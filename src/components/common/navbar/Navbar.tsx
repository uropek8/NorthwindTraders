import { FC, ReactElement, useContext } from 'react'

import LogContext from '@/contex/log/LogContext'
import Clock from '@/components/common/clock/Clock'
import { NavbarBtn, NavbarBox, NavbarContent } from './Navbar.styles'
import NavbarDropdown from '@/components/common/navbar-dropdown/NavbarDropdown'

const Navbar: FC = (): ReactElement => {
  const { isShowSidebar, toggleSidebar } = useContext(LogContext)

  const handleToggleSidebar = () => {
    toggleSidebar(!isShowSidebar)
  }

  return (
    <NavbarBox>
      <NavbarContent>
        <Clock />
        <NavbarBtn
          severity="secondary"
          icon="pi pi-bars"
          onClick={handleToggleSidebar}
        />
        <NavbarDropdown />
      </NavbarContent>
    </NavbarBox>
  )
}

export default Navbar
