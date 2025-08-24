import './App.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Index from './components/Index'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Index  menuOpen={menuOpen} />
    <Footer />
    </>
  )
}

export default App
