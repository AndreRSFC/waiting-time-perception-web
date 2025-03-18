import styled from 'styled-components'

export const TopBarContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 10px 0;
  color: white;
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 0 20px;
`
export const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  cursor: pointer;
`
export const NavLinks = styled.nav`
  display: flex;
  gap: 15px;
`
export const NavLinkItem = styled.div`
  a {
    color: white;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #4169E1;
    }
  }
`
