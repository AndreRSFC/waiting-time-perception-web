import { useEffect, useState } from 'react'
import { fetchDataAfterDelay } from './app.util'
import { TopBar } from './header'
import {
  NewsBar,
  NewsBarSkeleton,
  NewsPage,
  NewsSkeleton,
  NewsSpinner,
  NewsSpinnerSkeleton,
} from './news'
import { LoadingTypesEnum } from './app.constant'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingType, setLoadingType] = useState<LoadingTypesEnum>(
    LoadingTypesEnum.EMPTY
  )

  useEffect(() => {
    const types = Object.values(LoadingTypesEnum)
    const randomType = types[Math.floor(Math.random() * types.length)]
    setLoadingType(randomType)
  }, [])

  useEffect(() => {
    fetchDataAfterDelay().then(() => {
      setIsLoading(false)
    })
  })

  return (
    <>
      <TopBar />
      {isLoading && loadingType === LoadingTypesEnum.SPINNER && <NewsSpinner />}
      {isLoading && loadingType === LoadingTypesEnum.BAR && <NewsBar />}
      {isLoading && loadingType === LoadingTypesEnum.SKELETON && (
        <NewsSkeleton />
      )}
      {isLoading && loadingType === LoadingTypesEnum.SKELETON_BAR && (
        <NewsBarSkeleton />
      )}
      {isLoading && loadingType === LoadingTypesEnum.SKELETON_SPINNER && (
        <NewsSpinnerSkeleton />
      )}
      {!isLoading && <NewsPage />}
    </>
  )
}

export default App
