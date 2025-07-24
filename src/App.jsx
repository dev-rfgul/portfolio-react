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
            animationOrder='slide'
            cardAlignment='alternating'
            events={[
              {
                year: "Jul 2025 - Present",
                title: "Trainee Software Engineer",
                subtitle: "Aitch Tech ",
                description: "Supported the development team in building and maintaining web applications. Assisted in debugging and troubleshooting issues. Gained hands-on experience in software development processes and methodologies. Participated in code reviews and contributed to improving code quality."
              },
              {
                year: "Nov 2024 - Feb 2025",
                title: "Frontend Developer",
                subtitle: "Project Based",
                description: "Collaborated with a group of freelancers, on a social media type project. Contributed to a social media web app by designing User Profile, Edit Profile, and Category components. Integrated real API endpoints and replaced dummy data with dynamic content, enhancing UX with loading animations during data fetches. Participated in QA testing and issue tracking to ensure functional stability."
              },
              {
                year: "Mar 2024 - May 2024",
                title: "Internship", 
                subtitle: "ByteLogist",
                description: "Developed multiple Chrome extensions using JavaScript and Manifest v3. Youtube Automation Extension which would automatically play the 1st video on the youtube. Gained experience in browser APIs, content scripts, and background scripting."
              },
              {
                year: " Fev 2024 - Mar 2024",
                title: "Internship",
                subtitle: "Codes Fix",
                description: "Built an AI-powered web tool to extract keywords from user-input text and generate hashtag-enhanced content. Implemented AI prompt handling and text regeneration features using GORQ API."
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
