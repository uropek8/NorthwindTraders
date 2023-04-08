import styled from 'styled-components'
import { Button } from 'primereact/button'

export const NavbarBox = styled.nav`
  width: auto;
  padding-left: 240px;
  display: flex;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f3f4f6;
  background-color: #ffffff;
  z-index: 30;

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`

export const NavbarContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const NavbarBtn = styled(Button)`
  &.p-button {
    display: none;
    width: 40px;
    height: 40px;
    border-color: #111827;
    background-color: #111827;

    @media (max-width: 1024px) {
      display: inline-flex;
    }
  }
`
