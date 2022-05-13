import React from 'react'
import ThemeContextWrapper from './context/ThemeContextWrapper'
import MainComponent from './components/MainComponent'

const App: React.FC = () => {
  return (
    <ThemeContextWrapper>
      <MainComponent />
    </ThemeContextWrapper>
  )
}

export default App
