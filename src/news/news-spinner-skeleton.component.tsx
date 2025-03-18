import { NewsSpinner } from './news-spinner.component'
import { NewsSkeleton } from './news-skeleton.component'

export const NewsSpinnerSkeleton = () => {
  return (
    <>
      <NewsSpinner />
      <NewsSkeleton />
    </>
  )
}
