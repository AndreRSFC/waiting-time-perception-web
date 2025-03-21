import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 520px;
  padding: 20px;
  margin: 0 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const ModalIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  svg {
    width: 200px;
    height: auto;
  }
`

export const ModalTitle = styled.h2`
  color: #333;
  font-size: 20px;
`

export const ModalText = styled.p`
  text-align: justify;
  font-size: 14px;
`

export const ModalButton = styled.button`
  width: 100%;
  border: none;
  padding: 10px 20px;
  background-color: #6c63ff;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  color: #fff;
  margin-top: 12px;

  &:hover {
    background-color: #665DF5;
  }
`
