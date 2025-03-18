import { Bar } from '../bar'
import { NewsOverlay } from './news.style'

export const NewsBar = () => {
  return (
    <NewsOverlay>
      <Bar width="350px" height="50px" radius="4px" duration="5s" />
    </NewsOverlay>
  )
}
