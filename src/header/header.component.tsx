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
        {/* Ícone do hamburger para dispositivos móveis (à esquerda) */}
        <HamburgerIcon onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon>✕</CloseIcon> : <MenuIcon>☰</MenuIcon>}
        </HamburgerIcon>

        <Logo href="/">Notícias Fictícias</Logo>

        {/* Menu para desktop */}
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

        {/* Menu para dispositivos móveis */}
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
