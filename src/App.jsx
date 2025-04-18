import { useState } from 'react'
import './App.css'
import Products from './components/products/Products'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Layout from './components/shared/Layout'
import Contact from './components/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    
     
       <Router>
          <Navbar/>
          <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/products" element={<Layout><Products /></Layout>} />
      <Route path="/contact" element={<Layout><Contact/></Layout>} />
    </Routes>

       </Router>
     
  )
}

export default App
