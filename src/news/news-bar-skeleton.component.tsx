import { NewsBar } from './news-bar.component'
import { NewsSkeleton } from './news-skeleton.component'

export const NewsBarSkeleton = () => {
  return (
    <>
      <NewsBar />
      <NewsSkeleton />
    </>
  )
}
