import styled, { keyframes } from 'styled-components'
import type { BarProps } from './bar.model'

const fillAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`

export const Bar = styled.div<BarProps>`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '10px'};
  border-radius: ${({ radius }) => radius || '5px'};
  background-color: #e0e0e0;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 0%;
    background: #3498db;
    border-radius: ${({ radius }) => radius || '5px'};
    animation: ${fillAnimation} ${({ duration }) => duration || '2s'} ease-in-out infinite;
  }
`
