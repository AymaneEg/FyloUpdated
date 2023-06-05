import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
       <NavBar/>
       <LandingPage/>
       <Footer/>
    </div>
  )
}

export default App
