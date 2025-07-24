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
    }, 3000); // Loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader /> // Show the loader when loading
      ) : (

        <div className="font-poppins ">
          <Navbar />
          <Banner />
          <ScrollTimeline
            title='Experience'
            subtitle='Here are some of my professional experiences and journey'
            animationOrder='sequential'
            cardAlignment='alternating'
            events={[
              {
                year: "2024",
                title: "Software Engineering Intern",
                subtitle: "Bytelogist",
                description: "Worked on full-stack web development projects using modern technologies. Gained experience in React, Node.js, and database management. Contributed to multiple client projects and learned industry best practices."
              },
              {
                year: "2023",
                title: "Web Development Intern", 
                subtitle: "Code with Harry",
                description: "Focused on frontend development and responsive design. Built interactive user interfaces using HTML, CSS, JavaScript, and React. Participated in code reviews and collaborative development workflows."
              },
              {
                year: "2023",
                title: "Junior Developer Intern",
                subtitle: "Codes Fix",
                description: "Started my journey in software development. Learned fundamental programming concepts, version control with Git, and basic web development principles. Worked on small projects and bug fixes."
              }
            ]}
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
