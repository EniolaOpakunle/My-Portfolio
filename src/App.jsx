import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './views/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App
