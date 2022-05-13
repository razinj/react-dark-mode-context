import { FC } from 'react'
import logo from '../logo.svg'
import ThemeSwitch from './ThemeSwitch'

const MainComponent: FC = () => {
  return (
    <div className='font-sans flex flex-col justify-center items-center h-screen dark:bg-zinc-700 dark:text-white'>
      <img src={logo} width={200} alt='React Logo' />
      <h1 className='text-2xl'>Hello World!</h1>
      <h2>React + TailwindCSS Dark Mode App</h2>
      <div className='mt-2'>
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default MainComponent
