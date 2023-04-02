import { FC, ReactElement, SyntheticEvent, useRef } from 'react'

import { Menu } from 'primereact/menu'

import {
  DropdownWrapper,
  DropdownButton,
  DropdownButtonText,
} from './NavbarDropdown.styles'

const NavbarDropdown: FC = (): ReactElement => {
  const refMenu = useRef<Menu>(null)
  const menuList = [
    {
      label: 'Introducing D1',
      icon: 'pi pi-link',
      className: 'menu-item',
      url: 'https://blog.cloudflare.com/introducing-d1',
    },
    {
      label: 'SQLite SQL Flavour',
      icon: 'pi pi-link',
      className: 'menu-item',
      url: 'https://www.sqlite.org/lang.html',
    },
    {
      label: 'Durable Objects',
      icon: 'pi pi-link',
      className: 'menu-item',
      url: 'https://developers.cloudflare.com/workers/learning/using-durable-objects/',
    },
  ]

  const handleClick = (e: SyntheticEvent<Element, Event>) => {
    if (!refMenu.current) return

    refMenu.current.toggle(e)
  }

  return (
    <DropdownWrapper>
      <Menu
        ref={refMenu}
        model={menuList}
        popup
        style={{
          fontSize: '14px',
        }}
      />
      <DropdownButton onClick={handleClick}>
        <i className="pi pi-bars"></i>
        <DropdownButtonText>SQLite Links</DropdownButtonText>
        <i className="pi pi-angle-down"></i>
      </DropdownButton>
    </DropdownWrapper>
  )
}

export default NavbarDropdown
