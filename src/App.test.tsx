import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  test('should render correctly the app component', () => {
    render(<App />)

    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })
})
