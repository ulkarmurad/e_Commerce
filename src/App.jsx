import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './componets/Navbar/Navbar'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
