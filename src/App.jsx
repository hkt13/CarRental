import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Pricing from './components/Pricing'
import Choose from './components/Choose'
import Footer from './components/Footer'
import './App.css'
function App() {

  return (
    <>
   <Navbar/>
   <Home/>
   <About/>
   <Pricing/>
   <Choose/>
   <Footer/>
    </>
  )
}

export default App
