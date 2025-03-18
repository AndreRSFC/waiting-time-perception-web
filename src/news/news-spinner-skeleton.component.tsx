import { NewsSkeleton } from './news-skeleton.component'
import { NewsSpinner } from './news-spinner.component'

export const NewsSpinnerSkeleton = () => {
  return (
    <>
      <NewsSpinner />
      <NewsSkeleton />
    </>
  )
}
