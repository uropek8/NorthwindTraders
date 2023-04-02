import { FC, ReactElement } from 'react'

import { NavbarBox, NavbarContent } from './Navbar.styles'
import Clock from '@/components/common/clock/Clock'
import NavbarDropdown from '@/components/common/navbar-dropdown/NavbarDropdown'

const Navbar: FC = (): ReactElement => {
  return (
    <NavbarBox>
      <NavbarContent>
        <Clock />
        <NavbarDropdown />
      </NavbarContent>
    </NavbarBox>
  )
}

export default Navbar
