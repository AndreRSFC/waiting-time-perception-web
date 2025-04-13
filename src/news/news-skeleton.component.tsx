import { Skeleton } from '../skeleton'
import * as StyledSkeleton from './news-skeleton.style'
import * as Styled from './news.style'
import { Topics } from './topics'

export const NewsSkeleton = () => {
  return (
    <div>
      <Styled.NewsContainer>
        <StyledSkeleton.TitleContainer>
          <Skeleton width="100%" height="50px" className="title-line" />
          <Skeleton width="100%" height="50px" className="title-line" />
          <Skeleton width="50%" height="50px" className="title-line" />
          <Skeleton
            width="90%"
            height="50px"
            className="title-line extra-560"
          />
          <Skeleton
            width="70%"
            height="50px"
            className="title-line extra-425"
          />
        </StyledSkeleton.TitleContainer>
        <StyledSkeleton.SubtitleContainer>
          <Skeleton width="100%" height="33px" className="subtitle-line" />
          <Skeleton width="50%" height="33px" className="subtitle-line" />
          <Skeleton
            width="80%"
            height="33px"
            className="subtitle-line extra-560"
          />
        </StyledSkeleton.SubtitleContainer>
        <StyledSkeleton.DateContainer>
          <Skeleton width="100%" height="24px" className="date-line" />
          <Skeleton width="60%" height="24px" className="date-line extra-560" />
        </StyledSkeleton.DateContainer>
        <StyledSkeleton.ImageContainer>
          <Skeleton width="100%" height="400px" className="image-skeleton" />
        </StyledSkeleton.ImageContainer>
        <StyledSkeleton.ContentContainer>
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="100%" height="24px" className="content-line" />
          <Skeleton width="50%" height="24px" className="content-line" />
        </StyledSkeleton.ContentContainer>
      </Styled.NewsContainer>
      <Topics />
    </div>
  )
}
