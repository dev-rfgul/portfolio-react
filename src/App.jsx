// import {React} from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import AboutMe from './Component/About';
import Projects from './Component/Projects';
import Certificates from './Component/Certificates';
import Contact from './Component/Contact';
import Skills from "./Component/Skills";
import Reviews from './Component/Reviews';
import Loader from './Component/Loader'
import Chatbot from './Component/Chatbot';
import { ScrollTimeline } from './components/lightswind/scroll-timeline';
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader /> // Show the loader when loading
      ) : (

        <div className="font-poppins">
          <Navbar />
          <Banner />
          <ScrollTimeline
            cardVariant='elevated'
            cardEffect='shadow'
            progressIndicator={true}
            revealAnimation='slide'
            parallaxIntensity={0.1}
          />
          <AboutMe />
          <Reviews />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Chatbot />
        </div>// Show the page content when loading is done
      )}

    </>

  );
};
export default App;
