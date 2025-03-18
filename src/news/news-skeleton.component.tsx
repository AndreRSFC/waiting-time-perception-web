import { Skeleton } from '../skeleton'
import * as Styled from './news.style'
import { Topics } from './topics'

export const NewsSkeleton = () => {
  return (
    <div>
      <Styled.NewsContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginBottom: '20px',
          }}
        >
          <Skeleton width="100%" height="50px" />
          <Skeleton width="100%" height="50px" />
          <Skeleton width="50%" height="50px" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            marginBottom: '10px',
          }}
        >
          <Skeleton width="100%" height="33px" />
          <Skeleton width="50%" height="33px" />
        </div>
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          <Skeleton width="100%" height="24px" />
        </div>
        <div
          style={{
            marginBottom: '20px',
          }}
        >
          <Skeleton width="100%" height="400px" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '11px',
            marginBottom: '30px',
          }}
        >
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="100%" height="24px" />
          <Skeleton width="50%" height="24px" />
        </div>
      </Styled.NewsContainer>
      <Topics />
    </div>
  )
}
