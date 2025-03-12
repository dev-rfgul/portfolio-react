

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Page = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Router>
            <div className="bg-gray-100" id="navbar">
                {/* Navbar */}
                <div className="fixed z-50 top-0 left-0 right-0 bg-white shadow-md">
                    <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-1"> {/* Adjusted padding */}
                        <div>
                            <img className="w-20 md:w-28" src="/images/logo.png" alt="logo" />
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <ul className="flex space-x-4 text-base md:text-lg">
                                <li>
                                    <ScrollLink to="home" smooth={true} duration={500} className="hover:text-blue-600 transition-colors cursor-pointer">
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="about" smooth={true} duration={500} className="hover:text-blue-600 transition-colors cursor-pointer">
                                        About
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="testimonials" smooth={true} duration={500} className="hover:text-blue-600 transition-colors cursor-pointer">
                                        Testimonials
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-blue-600 transition-colors cursor-pointer">
                                        Skills
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-blue-600 transition-colors cursor-pointer">
                                        Projects
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="certificates" smooth={true} duration={500} className="hover:text-blue-600 transition-colors cursor-pointer">
                                        Certificates
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-blue-600 transition-colors cursor-pointer">
                                        Contact
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-2xl text-black">
                                &#9776;
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden bg-white text-black px-4 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                        style={{ minHeight: menuOpen ? "50px" : "0" }} // Ensure it takes minimal height when closed
                    >
                        <ul className="space-y-2">
                            <li>
                                <ScrollLink to="home" smooth={true} duration={500} className="block text-lg hover:text-blue-600 transition-colors cursor-pointer">
                                    Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="about" smooth={true} duration={500} className="block text-lg hover:text-blue-600 transition-colors cursor-pointer">
                                    About
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="testimonials" smooth={true} duration={500} className="block text-lg hover:text-blue-600 transition-colors cursor-pointer">
                                    Testimonials
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="projects" smooth={true} duration={500} className="block text-lg hover:text-blue-600 transition-colors cursor-pointer">
                                    Projects
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="certificates" smooth={true} duration={500} className="block text-lg hover:text-blue-600 transition-colors cursor-pointer">
                                    Certificates
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="contact" smooth={true} duration={500} className="block text-lg hover:text-blue-600 transition-colors cursor-pointer">
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="pt-20">
                    {/* Add your sections here */}
                </div>
            </div>
        </Router>
    );
};

export default Page;
