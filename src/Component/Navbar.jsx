
// import React, { useState } from "react";

// const Page = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div>
//             <div className="flex items-center justify-between pl-11 pr-11 h-16 text-center ">
//                 <div>
//                     <img className="w-1/4" src="/images/logo.png" alt="logo" />
//                 </div>

//                 <div className="hidden md:flex m-4">
//                     <ul className="flex space-x-11 text-2xl">
//                         <li >
//                             <a className=" hover:text-gray-700" href="#">
//                                 Home
//                             </a>
//                         </li>
//                         <li >
//                             <a className="hover:text-gray-700" href="#">
//                                 About Us
//                             </a>
//                         </li>
//                         <li >
//                             <a className="hover:text-gray-700" href="#">
//                                 Experience
//                             </a>
//                         </li>   
//                         <li >
//                             <a className="hover:text-gray-700" href="#">
//                                 Projects
//                             </a>
//                         </li>
//                         <li >
//                             <a className="hover:text-gray-700" href="#">
//                                 Certificates
//                             </a>
//                         </li>
//                         <li >
//                             <a className="hover:text-gray-700" href="#">
//                                 Contact Me
//                             </a>
//                         </li>
//                     </ul>
//                 </div>



//                 <div className="md:hidden m-4 flex items-center">
//                     <button onClick={toggleMenu} className="text-xl">
//                         &#9776;
//                     </button>
//                 </div>
//             </div>

//             {menuOpen && (
//                 <div className="md:hidden bg-white text-black px-11 py-4">
//                     <ul>
//                         <li className="py-2 border-b border-gray-300">
//                             <a className="block hover:text-gray-700" href="#">
//                                 Home
//                             </a>
//                         </li>
//                         <li className="py-2 border-b border-gray-300">
//                             <a className="block hover:text-gray-700" href="">
//                                 About Us
//                             </a>
//                         </li>
//                         <li className="py-2 border-b border-gray-300">
//                             <a className="block hover:text-gray-700" href="#">
//                                 Services
//                             </a>
//                         </li>
//                         <li className="py-2 border-b border-gray-300">
//                             <a className="block hover:text-gray-700" href="#">
//                                 Testimonials
//                             </a>
//                         </li>
//                         <li className="py-2 border-b border-gray-300">
//                             <a className="block hover:text-gray-700" href="#">
//                                 Contact Us
//                             </a>
//                         </li>
//                         <li className="py-2">
//                             <button className="w-full bg-blue-300 hover:bg-blue-400 hover:font-extrabold rounded-md text-black h-9">
//                                 Login
//                             </button>
//                         </li>
//                         <li className="py-2">
//                             <button className="w-full border-2 border-sky-500 hover:border-black font-bold rounded-md h-9 hover:bg-blue-300">
//                                 Sign up
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Page;
import React, { useState } from "react";

const Page = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-gray-100">
            <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4 bg-white shadow-md">
                <div>
                    <img className="w-24 md:w-32" src="/images/logo.png" alt="logo" />
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6 text-lg">
                        <li><a className="hover:text-blue-600 transition-colors" href="#">Home</a></li>
                        <li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
                        <li><a className="hover:text-blue-600 transition-colors" href="#">Experience</a></li>
                        <li><a className="hover:text-blue-600 transition-colors" href="#">Projects</a></li>
                        <li><a className="hover:text-blue-600 transition-colors" href="#">Certificates</a></li>
                        <li><a className="hover:text-blue-600 transition-colors" href="#">Contact Me</a></li>
                    </ul>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-2xl text-blue-600">
                        &#9776;
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden bg-white text-black px-4 py-6 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
                    menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="space-y-4">
                    <li>
                        <a className="block text-lg hover:text-blue-600 transition-colors" href="#">Home</a>
                    </li>
                    <li>
                        <a className="block text-lg hover:text-blue-600 transition-colors" href="#">About Us</a>
                    </li>
                    <li>
                        <a className="block text-lg hover:text-blue-600 transition-colors" href="#">Experience</a>
                    </li>
                    <li>
                        <a className="block text-lg hover:text-blue-600 transition-colors" href="#">Projects</a>
                    </li>
                    <li>
                        <a className="block text-lg hover:text-blue-600 transition-colors" href="#">Certificates</a>
                    </li>
                    <li>
                        <a className="block text-lg hover:text-blue-600 transition-colors" href="#">Contact Me</a>
                    </li>
                    <li>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Login
                        </button>
                    </li>
                    <li>
                        <button className="w-full border-2 border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Sign up
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Page;
