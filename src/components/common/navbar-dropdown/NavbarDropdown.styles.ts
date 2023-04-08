import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 0;
  }

  .pi-ellipsis-v {
    display: none;

    @media (max-width: 1024px) {
      display: inline-block;
    }
  }

  .pi-bars,
  .pi-angle-down {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`

export const DropdownButtonText = styled.span`
  padding: 0 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`
