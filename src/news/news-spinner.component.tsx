import { Spinner } from '../spinner'
import { NewsOverlay } from './news.style'

export const NewsSpinner = () => {
  return (
    <NewsOverlay>
      <Spinner size="100px" />
    </NewsOverlay>
  )
}
