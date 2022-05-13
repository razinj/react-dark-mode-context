import { fireEvent, render } from '@testing-library/react'
import ThemeContext from '../context/ThemeContext'
import ThemeSwitch from './ThemeSwitch'

describe('ThemeSwitch', () => {
  it('should match snapshot', () => {
    const { container } = render(<ThemeSwitch />)

    expect(container).toMatchSnapshot()
  })

  it('should render and call switching theme method correctly', () => {
    const changeCurrentThemeFn = jest.fn()

    const { getByTestId } = render(
      <ThemeContext.Provider
        value={{
          currentTheme: 'light',
          changeCurrentTheme: changeCurrentThemeFn,
        }}
      >
        <ThemeSwitch />
      </ThemeContext.Provider>
    )

    const switchThemeBtn = getByTestId('switch-theme-btn')

    expect(switchThemeBtn).toBeInTheDocument()

    fireEvent.click(switchThemeBtn)

    expect(changeCurrentThemeFn).toBeCalledTimes(1)
    expect(changeCurrentThemeFn).toBeCalledWith('dark')
  })
})
