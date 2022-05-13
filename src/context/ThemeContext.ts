import { createContext } from 'react'

const defaultValue = {
  currentTheme: 'light',
  changeCurrentTheme: (theme: 'light' | 'dark') => {},
}

const ThemeContext = createContext(defaultValue)

export default ThemeContext
