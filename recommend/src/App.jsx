import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recommend from './pages/Recommend'

const App = () => {
  return (
    <div className= ' min-h-screen bg-slate-200 '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recommand' element={<Recommend/>}/>
      </Routes>
    </div>
  )
}

export default App