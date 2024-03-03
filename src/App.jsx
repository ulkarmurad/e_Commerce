import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Home from './componets/Home/Home'
import Navbar from './componets/Navbar/Navbar'
import Electronics from './componets/Pages/Electronics'
import Jewelery from './componets/Pages/Jewelery'
import Men from './componets/Pages/Men'
import Women from './componets/Pages/Women'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './componets/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-900'>
      <Navbar/>
      </div>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/jewelery' element={<Jewelery/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/women' element={<Women/>}/>
      
      </Routes>

      <div className='bg-slate-900'>
      <Footer/>
      </div>
    
    </>
  )
}

export default App
