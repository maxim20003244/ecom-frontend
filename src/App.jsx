import React, { useState } from 'react'
import './App.css'
import Products from './components/products/Products'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Layout from './components/shared/Layout'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'



function App() {
  const [count, setCount] = useState(0)

  return (


    
    <React.Fragment>
     
       <Router>
          <Navbar/>
          <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/products" element={<Layout><Products /></Layout>} />
      <Route path="/contact" element={<Layout><Contact/></Layout>} />
      <Route path="/cart" element={<Layout><Cart/></Layout>} />
    </Routes>

       </Router>
       <Toaster position='top-center'/>
       </React.Fragment>
     
  )
}

export default App
