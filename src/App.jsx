import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import AboutMe from './Component/About'
import Projects from './Component/Projects'
import Certificates from './Component/Certificates'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import BlogPost from './Component/BlogPost'

const App = () => {
  return (
    <div className="font-poppins">
      <div className=''>
        <Navbar />
        <Banner />
        <AboutMe />
        <Projects />
        <Certificates />
        <Blog />
        {/* <BlogPost/> */}
        <Contact/>
      </div>
    </div>
  )
}

export default App