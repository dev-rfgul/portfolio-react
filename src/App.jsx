import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import AboutMe from './Component/About'

const App = () => {
  return (
    <div className="font-poppins">
      <div className=''>
        <Navbar />
        <Banner />
        <AboutMe />
      </div>
    </div>
  )
}

export default App