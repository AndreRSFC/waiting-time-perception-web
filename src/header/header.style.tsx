import styled from 'styled-components'

// Container da barra de navegação
export const TopBarContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #003366;
  padding: 10px 0;
  color: white;
`

// Container para centralizar conteúdo e limitar a largura
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;  // Limite de largura
  padding: 0 20px;
`

// Logo da TopBar (link para a home)
export const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  &:hover {
    color: #ffcc00;
  }
`

// Container de links de navegação
export const NavLinks = styled.nav`
  display: flex;
  gap: 15px;
`

// Estilo para cada item de link na barra de navegação
export const NavLinkItem = styled.div`
  a {
    color: white;
    font-size: 1.1rem;
    text-decoration: none;
    &:hover {
      color: #ffcc00;
    }
  }
`
