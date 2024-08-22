
// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
// import React from "react";
// import ShinyButton from '@/components/magicui/shiny-button';
// // import Dock from '../components/Dock';

// const Banner = () => {

//     return (
//         <div className="p-10 md:p-20 rounded-lg shadow-xl bg-white">
//             <div className="flex flex-col md:flex-row items-center">
//                 <div className="md:w-1/2 text-black mb-8 md:mb-0 md:pr-8 items-center">
//                     <div className="flex justify-center">
//                         <h1 className="text-lg text-gray-700 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-black">
//                             Hello, I'm
//                         </h1>
//                     </div>
//                     <div className="flex justify-center">
//                         <h1 className="text-5xl font-semibold mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-gray-700">
//                             Muhammad Fahad
//                         </h1>
//                     </div>
//                     <div className="flex justify-center">
//                         <h1 className="text-2xl text-gray-600 mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500">
//                             Frontend Developer | Advancing in MERN Stack
//                         </h1>
//                     </div>
//                     <div className="flex flex-col items-center md:items-start lg:items-center gap-4">
//                         <div className="flex gap-4">

//                             <ShinyButton text='Download CV' />


//                         </div>

//                         {/* Icons Section */}

//                         <div className="flex justify-center md:justify-start lg:justify-center mt-4 space-x-6">
//                             <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black hover:scale-110  transition-colors duration-300">
//                                 <FaGithub size={35} />
//                             </a>
//                             <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110  hover:text-blue-600 transition-colors duration-300">
//                                 <FaLinkedin size={35} />
//                             </a>
//                             <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500  hover:scale-110  transition-colors duration-300">
//                                 <FaInstagram size={35} />
//                             </a>
//                             <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 hover:scale-110  transition-colors duration-300">
//                                 <FaTwitter size={35} />
//                             </a>
//                             <a
//                                 href="https://www.tiktok.com/@your-username"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-black transition-transform duration-300 hover:scale-110 hover:shadow-lg"
//                             >
//                                 <FaTiktok size={35} />
//                             </a>

//                         </div>

//                     </div>
//                 </div>

//                 {/* <div className="md:w-1/2 flex justify-center items-center">
//                     <img
//                         src="/images/banner-img.png"
//                         alt="Profile Picture"
//                         className="w-full md:w-3/4 lg:w-2/3 max-w-xs rounded-lg border-4 border-black shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-none"
//                     />
//                 </div> */}

//                 <div className=" flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-black border-opacity-30 rounded-full overflow-hidden">
//                     <img
//                         src="/images/banner-img.png"
//                         alt="Your Name"
//                         className="object-cover w-full h-full rounded-full object-top"
//                     />
//                 </div>
//             </div>  


//         </div>
//     );
// };

// export default Banner;


import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import React from "react";
import ShinyButton from '@/components/magicui/shiny-button';

const Banner = () => {
    return (
        <div className="p-10 md:p-20 rounded-lg shadow-xl bg-white">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-black mb-8 md:mb-0 md:pr-8 flex flex-col items-center justify-center">
                    <div className="text-center md:text-left mb-4 flex flex-col items-center">
                        <h1 className="text-lg text-gray-700 mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-black">
                            Hello, I'm
                        </h1>
                        <h1 className="text-5xl  font-semibold mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-gray-700">
                            Muhammad Fahad
                        </h1>
                        <h1 className="text-2xl text-gray-600 mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-blue-500">
                            Frontend Developer | Advancing in MERN Stack
                        </h1>
                    </div>
                    <div className="flex justify-center md:justify-start mb-4">
                        <ShinyButton text='Download CV' />
                    </div>

                    {/* Icons Section */}
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black hover:scale-110 transition-colors duration-300">
                            <FaGithub size={35} />
                        </a>
                        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 hover:text-blue-600 transition-colors duration-300">
                            <FaLinkedin size={35} />
                        </a>
                        <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 hover:scale-110 transition-colors duration-300">
                            <FaInstagram size={35} />
                        </a>
                        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 hover:scale-110 transition-colors duration-300">
                            <FaTwitter size={35} />
                        </a>
                        <a href="https://www.tiktok.com/@your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 hover:shadow-lg transition-transform duration-300">
                            <FaTiktok size={35} />
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-black border-opacity-30 rounded-full overflow-hidden">
                        <img
                            src="/images/banner-img.png"
                            alt="Your Name"
                            className="object-cover w-full h-full object-top rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
