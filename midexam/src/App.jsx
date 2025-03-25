import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountDownLightMode from './CountDownLightMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountDownLightMode/>
    </>
  )
}

export default App
