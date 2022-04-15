import { render, screen } from '@testing-library/react'
import App from '../../App'
import '@testing-library/jest-dom'

test('renders title on the page', () => {
	render(<App />)
	const text = screen.getByTestId('myTitle')
	expect(text).toBeInTheDocument()
})
