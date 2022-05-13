import { useState, useEffect, FC, ReactNode } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const changeCurrentTheme = (theme: 'light' | 'dark') => setCurrentTheme(theme)

  useEffect(() => {
    if (currentTheme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [currentTheme])

  return <ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper
