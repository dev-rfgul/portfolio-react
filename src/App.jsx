import React from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import AboutMe from './Component/About';
import Projects from './Component/Projects';
import Certificates from './Component/Certificates';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Skills  from "./Component/Skills";


const App = () => {
  return (
    <div className="font-poppins mx-10">
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
      <Blog />
      <Contact />
    </div>
  );
};
export default App;
