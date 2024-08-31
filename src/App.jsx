import React from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import AboutMe from './Component/About';
import Projects from './Component/Projects';
import Certificates from './Component/Certificates';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Skills from "./Component/Skills";
import MarqueeDemo from './Component/Reviews';

const App = () => {
  return (
    <div className="font-poppins mx-10">

      <Navbar />
      <div className="App">
        <h1 className="text-3xl font-bold text-center mb-8">Marquee Reviews</h1>
        <MarqueeDemo />
      </div>
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
