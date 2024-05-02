import React from 'react'
import AppBar from './Components/AppBar/AppBar'
import './App.css'
import Product from './Components/Product/Product'
import { Route, Routes } from 'react-router-dom'
import Single from './Components/Page/SingleRoute/Single'

function App() {

  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/products/:id' element={<Single/>} />
      </Routes>
      <Product />
    </>
  )
}

export default App
