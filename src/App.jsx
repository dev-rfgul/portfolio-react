import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import AboutMe from './Component/About'
import Projects from './Component/Projects'
import Certificates from './Component/Certificates'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Marquee from './components/magicui/marquee'
import ReviewCard from './components/magicui/ReviewCard'


const App = () => {
  return (
    <div className="font-poppins">

      <Navbar />
      <Banner />
      <AboutMe />
      <Projects />
      <Certificates />
      <Blog />
      <Contact />
      {/* <ReviewCard /> */}


    </div>

  )
}

export default App