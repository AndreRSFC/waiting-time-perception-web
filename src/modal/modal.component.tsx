import * as Styled from './modal.style'

interface StartProps {
  onClick: () => void
  title: string
  text: string
  image: React.ReactNode
  buttonText: string
}

export const Modal = ({
  onClick,
  image,
  text,
  title,
  buttonText,
}: StartProps) => {
  return (
    <Styled.ModalContainer>
      <Styled.ModalIconWrapper>{image}</Styled.ModalIconWrapper>
      <Styled.ModalTitle>{title}</Styled.ModalTitle>
      <Styled.ModalText>{text}</Styled.ModalText>
      <Styled.ModalButton onClick={onClick}>{buttonText}</Styled.ModalButton>
    </Styled.ModalContainer>
  )
}
