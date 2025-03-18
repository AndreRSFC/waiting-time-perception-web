import styled, { keyframes } from 'styled-components'
import type { SpinnerProps } from './spinner.model'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<SpinnerProps>`
  width: ${({ size }) => size || '40px'};
  height: ${({ size }) => size || '40px'};
  border-radius: 50%;
  border: 4px solid #e0e0e0;
  border-top-color: #3498db;
  animation: ${spin} 1s linear infinite;
`
