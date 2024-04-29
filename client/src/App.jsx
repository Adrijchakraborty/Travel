import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Home, Packeges } from './pages'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/packeges' element={<Packeges/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App