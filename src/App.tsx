import { useEffect, useState } from 'react'
import { TopBar } from './header'
import { NewsBar, NewsPage, NewsSkeleton, NewsSpinner, Topics } from './news'
import { fetchDataAfterDelay } from './app.util'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingType, setLoadingType] = useState<
    'spinner' | 'bar' | 'skeleton'
  >('spinner')

  // Simulando a troca do tipo de carregamento no mount
  useEffect(() => {
    const types = ['spinner', 'bar', 'skeleton', '']
    setLoadingType(types[Math.floor(Math.random() * types.length)])
  }, []) // O array vazio faz isso acontecer apenas uma vez no mount

  useEffect(() => {
    fetchDataAfterDelay().then(() => {
      setIsLoading(false)
    })
  })

  return (
    <>
      <TopBar />
      {isLoading && loadingType === 'spinner' && <NewsSpinner />}
      {isLoading && loadingType === 'bar' && <NewsBar />}
      {isLoading && loadingType === 'skeleton' && <NewsSkeleton />}
      {!isLoading && <NewsPage />}
    </>
  )
}

export default App
