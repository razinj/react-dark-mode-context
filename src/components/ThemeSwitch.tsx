import React from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeSwitch = () => {
  const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext)

  return (
    <button
      data-testid='switch-theme-btn'
      style={{
        padding: 5,
        borderRadius: 5,
        color: currentTheme === 'light' ? 'white' : 'black',
        background: currentTheme === 'light' ? 'black' : 'white',
      }}
      onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
      Go {currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
    </button>
  )
}

export default ThemeSwitch