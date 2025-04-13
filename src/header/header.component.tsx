import { useState } from 'react'
import {
  CloseIcon,
  HamburgerIcon,
  Logo,
  MenuIcon,
  MobileNavLinks,
  NavContainer,
  NavLinkItem,
  NavLinks,
  TopBarContainer,
} from './header.style'

export const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <TopBarContainer>
      <NavContainer>
        <HamburgerIcon onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon>✕</CloseIcon> : <MenuIcon>☰</MenuIcon>}
        </HamburgerIcon>
        <Logo href="/">Notícias Fictícias</Logo>
        <NavLinks>
          <NavLinkItem>
            <a href="/noticias/tecnologia">Tecnologia</a>
          </NavLinkItem>
          <NavLinkItem>
            <a href="/noticias/saude">Saúde</a>
          </NavLinkItem>
          <NavLinkItem>
            <a href="/noticias/economia">Economia</a>
          </NavLinkItem>
          <NavLinkItem>
            <a href="/noticias/politica">Política</a>
          </NavLinkItem>
          <NavLinkItem>
            <a href="/noticias/cultura">Cultura</a>
          </NavLinkItem>
        </NavLinks>
        {isMenuOpen && (
          <MobileNavLinks>
            <NavLinkItem>
              <a href="/noticias/tecnologia">Tecnologia</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="/noticias/saude">Saúde</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="/noticias/economia">Economia</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="/noticias/politica">Política</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="/noticias/cultura">Cultura</a>
            </NavLinkItem>
          </MobileNavLinks>
        )}
      </NavContainer>
    </TopBarContainer>
  )
}
