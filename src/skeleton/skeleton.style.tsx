import styled, { keyframes } from 'styled-components'
import type { SkeletonProps } from './skeleton.model'

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const Skeleton = styled.div<SkeletonProps>`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '20px'};
  border-radius: ${({ radius }) => radius || '4px'};
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`
