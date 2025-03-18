import * as Styled from '../news.style'

export const Topics = () => {
  return (
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
  )
}
