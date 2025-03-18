import App from './app'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  test('should render correctly the app component', () => {
    render(<App />)

    expect(screen.getByText('Notícias Fictícias')).toBeInTheDocument()
  })
})
