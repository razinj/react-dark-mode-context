import type { FC } from 'react'
import ThemeContextWrapper from './context/ThemeContextWrapper'
import MainComponent from './components/MainComponent'

const App: FC = () => {
  return (
    <ThemeContextWrapper>
      <MainComponent />
    </ThemeContextWrapper>
  )
}

export default App
