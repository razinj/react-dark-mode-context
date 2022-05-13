import { useState, useEffect, FC, ReactNode } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const changeCurrentTheme = (theme: 'light' | 'dark') => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper
