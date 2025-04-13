import styled from 'styled-components'

export const BottomBarContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background-color: #333;
  color: white;
  transition: all 0.3s ease;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
`

export const BottomBarLimit = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`

export const BottomBarButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`
