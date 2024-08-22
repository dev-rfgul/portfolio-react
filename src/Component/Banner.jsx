
// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

// import React from "react";

// const Banner = () => {
//     const cvUrl = 'images/cv.pdf'; // Replace with the actual URL of your CV

//     return (
//         <div className=" p-10 md:p-20 rounded-lg shadow-xl  ">
//             <div className="flex flex-col md:flex-row items-center">
//                 <div className="md:w-1/2 text-black mb-8 md:mb-0 md:pr-8  items-center">
//                     <div className="flex  justify-center">

//                         <h1 className="text-lg text-gray-700 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-black">
//                             Hello, I'm
//                         </h1>
//                     </div>
//                     <div className="flex justify-center ">


//                         <h1 className="text-5xl font-semibold mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-gray-700">
//                             Muhammad Fahad
//                         </h1>
//                     </div>

//                     <div className="flex justify-center">
//                         <h1 className="text-2xl text-gray-600 mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500">
//                             Frontend Developer | Advancing in MERN Stack
//                         </h1>
//                     </div>
//                     <div className="flex justify-center md:justify-start lg:justify-center gap-1">

//                         <a
//                             href={cvUrl}
//                             download
//                             className="bg-white text-black border-black border-2 py-2 px-6 rounded-md shadow-md hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300"
//                         >
//                             Download CV
//                         </a>

//                         <a
//                             href={cvUrl}
//                             download
//                             className="bg-black text-white py-2 px-6 rounded-md shadow-md hover:bg-gray-700 hover:text-white hover:border-2 hover:border-black hover:shadow-lg transition-all duration-300"
//                         >
//                             Download CV
//                         </a>
//                     </div>
//                 </div>

//                 <div className="  md:w-1/2  flex justify-center items-center">
//                     <img
//                         src="/images/banner-img.png"
//                         alt="Profile Picture"
//                         className="w-full md:w-3/4 lg:w-2/3 max-w-xs rounded-lg border-4 border-black shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-none"
//                     />
//                 </div>
//             </div>
//             <div className="flex space-x-4">
//                 <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
//                     <FaGithub size={30} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin size={30} />
//                 </a>
//                 <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
//                     <FaInstagram size={30} />
//                 </a>
//                 <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
//                     <FaTwitter size={30} />
//                 </a>
//                 <a href="https://www.tiktok.com/@your-username" target="_blank" rel="noopener noreferrer">
//                     <FaTiktok size={30} />
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import React from "react";
import ShinyButton from '@/components/magicui/shiny-button';
// import Dock from '../components/Dock';

const Banner = () => {

    return (
        <div className="p-10 md:p-20 rounded-lg shadow-xl bg-white">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-black mb-8 md:mb-0 md:pr-8 items-center">
                    <div className="flex justify-center">
                        <h1 className="text-lg text-gray-700 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-black">
                            Hello, I'm
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-5xl font-semibold mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-gray-700">
                            Muhammad Fahad
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-2xl text-gray-600 mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500">
                            Frontend Developer | Advancing in MERN Stack
                        </h1>
                    </div>
                    <div className="flex flex-col items-center md:items-start lg:items-center gap-4">
                        <div className="flex gap-4">

                            <ShinyButton text='Download CV'  />


                        </div>

                        {/* Icons Section */}
                        
                        <div className="flex justify-center md:justify-start lg:justify-center mt-4 space-x-6">
                            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black hover:scale-110  transition-colors duration-300">
                                <FaGithub size={35} />
                            </a>
                            <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110  hover:text-blue-600 transition-colors duration-300">
                                <FaLinkedin size={35} />
                            </a>
                            <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500  hover:scale-110  transition-colors duration-300">
                                <FaInstagram size={35} />
                            </a>
                            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 hover:scale-110  transition-colors duration-300">
                                <FaTwitter size={35} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                            >
                                <FaTiktok size={35} />
                            </a>

                        </div>
                       
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center">
                    <img
                        src="/images/banner-img.png"
                        alt="Profile Picture"
                        className="w-full md:w-3/4 lg:w-2/3 max-w-xs rounded-lg border-4 border-black shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-none"
                    />
                </div>
            </div>


        </div>
    );
};

export default Banner;
