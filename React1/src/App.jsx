import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Form from './hooks/Form'
import State from './hooks/State'
import Reducer from './hooks/Reducer'

export const userContext = createContext()

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/form' element={<Form />} />
        <Route path='/state' element={<State />} />
        <Route path='/reducer' element={<Reducer />} />
      </Routes>
    </>
  )
}

export default App
