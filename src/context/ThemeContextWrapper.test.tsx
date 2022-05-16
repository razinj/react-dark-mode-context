import { render } from '@testing-library/react'
import ThemeContextWrapper from './ThemeContextWrapper'

describe('ThemeContextWrapper', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeContextWrapper>
        <p>Hello World!</p>
      </ThemeContextWrapper>
    )

    expect(container).toMatchSnapshot()
  })

  it('should render and call switching theme method correctly', () => {
    expect(document.body).not.toHaveClass('dark')
  })
})
