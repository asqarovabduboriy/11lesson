import React from 'react'
import AppBar from './Components/AppBar/AppBar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Single from './Components/Page/SingleRoute/Single'
import Product from './Components/Product/Product'

function App() {

  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/' element= {<Product/>}/>
        <Route path='/products/:id' element={<Single/>} />
      </Routes>
    </>
  )
}

export default App
