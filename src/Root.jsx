import React from 'react'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function Root() {
  return (
    <div>
<Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default Root