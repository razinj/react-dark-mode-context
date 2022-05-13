import { render } from '@testing-library/react'
import ThemeContextWrapper from './ThemeContextWrapper'

describe('ThemeContextWrapper', () => {
  let componentContainer: HTMLElement

  beforeEach(() => {
    const { container } = render(
      <ThemeContextWrapper>
        <p>Hello World!</p>
      </ThemeContextWrapper>
    )
    componentContainer = container
  })

  it('should match snapshot', () => {
    expect(componentContainer).toMatchSnapshot()
  })

  it('should render and call switching theme method correctly', () => {
    expect(document.body).not.toHaveClass('dark')
  })
})
