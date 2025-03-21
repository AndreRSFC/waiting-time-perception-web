import * as Styled from './bottom-bar.style'

interface BottomBarProps {
  onClickToNext: () => void
  onClickToFinish: () => void
  isBottomBarVisible: boolean
  isLastItem: boolean
}

export const BottomBar = ({
  onClickToNext,
  onClickToFinish,
  isBottomBarVisible,
  isLastItem,
}: BottomBarProps) => {
  return (
    <Styled.BottomBarContainer isVisible={isBottomBarVisible}>
      <Styled.BottomBarLimit>
        {isLastItem ? (
          <Styled.BottomBarButton onClick={onClickToNext}>
            Carregar Próximo
          </Styled.BottomBarButton>
        ) : (
          <Styled.BottomBarButton onClick={onClickToFinish}>
            Finalizar o Estudo
          </Styled.BottomBarButton>
        )}
      </Styled.BottomBarLimit>
    </Styled.BottomBarContainer>
  )
}
