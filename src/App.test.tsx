import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('should render correctly the app component', () => {
    render(<App />)

    expect(screen.getByText('Notícias Fictícias')).toBeTruthy()
  })
})
