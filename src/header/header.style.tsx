import styled from 'styled-components'

export const TopBarContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 10px 0;
  color: white;
  position: relative;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

export const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    width: fit-content;
  }
`

export const NavLinks = styled.nav`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLinkItem = styled.div`
  a {
    pointer-events: none;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #4169E1;
    }
  }
`

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    display: block;
    z-index: 10;
    position: relative;
  }
`

export const MenuIcon = styled.span`
  color: white;
`

export const CloseIcon = styled.span`
  color: white;
`

export const MobileNavLinks = styled.nav`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #000;
    width: 100%;
    padding: 20px;
    z-index: 100;
    
    ${NavLinkItem} {
      margin-bottom: 15px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
