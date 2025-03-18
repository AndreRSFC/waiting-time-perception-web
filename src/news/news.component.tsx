import * as Styled from './news.style'

// Componente de Página de Notícia
export const NewsPage: React.FC = () => {
  return (
    <Styled.NewsContainer>
      <Styled.NewsTitle>
        Evento de Inovação: Startups Brasileiras Apresentam Soluções
        Tecnológicas no Fórum Global
      </Styled.NewsTitle>
      <Styled.NewsSubtitle>
        Nomes importantes do setor de tecnologia estiveram presentes, destacando
        as inovações brasileiras.
      </Styled.NewsSubtitle>
      <Styled.NewsDate>
        Publicado em 20/03/2025 às 15:00 | Atualizado em 20/03/2025 às 18:30
      </Styled.NewsDate>
      <Styled.NewsImage
        src="./news.image.webp"
        alt="Imagem do evento de inovação"
      />
      <Styled.NewsContent>
        Durante o Fórum Global de Inovação, realizado em São Paulo, diversas
        startups brasileiras tiveram a oportunidade de apresentar suas soluções
        tecnológicas ao redor do mundo. O evento contou com a presença de
        grandes nomes do setor de tecnologia, investidores e representantes do
        governo. O principal destaque foi a apresentação de uma nova plataforma
        de inteligência artificial desenvolvida por uma startup paulista, que
        promete revolucionar o mercado de saúde digital. As apresentações
        ocorreram ao longo do dia, com destaque para os avanços em áreas como
        IA, blockchain, e-commerce e soluções para sustentabilidade. A ministra
        da Ciência, Tecnologia e Inovações, Ana Paula Silva, discursou sobre a
        importância do apoio às startups brasileiras, afirmando que o governo
        continuará incentivando o setor através de novos investimentos e
        parcerias. O evento também contou com a participação de vários
        investidores internacionais, que mostraram grande interesse nas soluções
        apresentadas. Segundo João Almeida, CEO da startup TechFuture, "o Brasil
        está se tornando um polo de inovação, com soluções criativas que têm o
        potencial de impactar o mercado global". Em um momento especial, o
        empresário e investidor Carlos Martins foi homenageado pelo governo
        paulista por suas contribuições ao setor de tecnologia no Brasil.
      </Styled.NewsContent>
      <Styled.TopicsContainer>
        <Styled.TopicTitle>Tópicos Relacionados</Styled.TopicTitle>
        <Styled.TopicList>
          <Styled.TopicItem>Startups brasileiras em ascensão</Styled.TopicItem>
          <Styled.TopicItem>
            Inteligência artificial no setor de saúde
          </Styled.TopicItem>
          <Styled.TopicItem>
            Investimentos em tecnologia no Brasil
          </Styled.TopicItem>
        </Styled.TopicList>
      </Styled.TopicsContainer>
      <Styled.CommentSection>
        <Styled.CommentTitle>Comentários</Styled.CommentTitle>
        <Styled.Comment>
          <Styled.CommentUser>Lucas Andrade</Styled.CommentUser>
          <Styled.CommentText>
            Esse evento foi incrível! A tecnologia brasileira tem muito a
            oferecer ao mundo.
          </Styled.CommentText>
        </Styled.Comment>
        <Styled.Comment>
          <Styled.CommentUser>Ana Souza</Styled.CommentUser>
          <Styled.CommentText>
            Estou muito otimista com as inovações que estão surgindo por aqui. O
            Brasil está cada vez mais se destacando no setor de tech!
          </Styled.CommentText>
        </Styled.Comment>
        <Styled.AddCommentButton>Adicionar Comentário</Styled.AddCommentButton>
      </Styled.CommentSection>
    </Styled.NewsContainer>
  )
}
