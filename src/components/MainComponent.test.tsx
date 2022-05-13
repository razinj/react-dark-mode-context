import { render } from '@testing-library/react'
import MainComponent from './MainComponent'

describe('MainComponent', () => {
  it('should match snapshot', () => {
    const { container } = render(<MainComponent />)

    expect(container).toMatchSnapshot()
  })

  it('should render component correctly', () => {
    const { getByText, getByAltText } = render(<MainComponent />)

    expect(getByAltText(/React Logo/i)).toBeInTheDocument()
    expect(getByText(/Hello World/i)).toBeInTheDocument()
  })
})
