import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import AboutMe from './Component/About';
import Projects from './Component/Projects';
import Certificates from './Component/Certificates';
import Contact from './Component/Contact';
import Skills from "./Component/Skills";
import Reviews from './Component/Reviews';
import Loader from './Component/Loader'

const App = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader/> // Show the loader when loading
      ) : (

        <div className="font-poppins ">
          <Navbar />
          <Banner />
          <AboutMe />
          <Reviews />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </div>// Show the page content when loading is done
      )}

    </>

  );
};
export default App;
