import {
  TopBarContainer,
  Logo,
  NavLinks,
  NavLinkItem,
  NavContainer,
} from './header.style'

export const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <NavContainer>
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
      </NavContainer>
    </TopBarContainer>
  )
}
