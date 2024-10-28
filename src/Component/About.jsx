

import React from 'react';
import Heading from './Heading'

const AboutMe = () => {
    return (
        <section id='about' className="py-12 px-6 md:px-8 lg:px-16 bg-gray-50">
            <Heading heading={"About Me"} subHeading={"Get to know more about me"} />
            <div className="flex  flex-col md:flex-row items-center justify-md:justify-between space-y-8 md:space-y-0 md:space-x-6 lg:space-x-12">
                <div className="w-full md:w-3/10 lg:w-1/3 flex justify-center items-center">
                    <img
                        src="/images/banner3-img.jpeg"
                        alt="Profile Picture"
                        className="w-full max-w-lg rounded-lg border-2 border-black object-cover object-center shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>

                <div className="w-full md:w-7/10 lg:w-2/4 flex flex-col gap-6 md:gap-8 lg:gap-12 relative md:-ml-6 lg:-ml-12">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">

                        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg border border-black border-opacity-60 w-full md:w-1/2">
                            <div className="text-3xl md:text-4xl mb-4 text-blue-600">👥</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Education</h2>
                            <p className="text-gray-700 text-base md:text-lg mt-2">B.Sc. Computer Science</p>
                            <p className="text-gray-500 font-bold">Islamia University Bahawalpur</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg border border-black border-opacity-60 w-full md:w-1/2">
                            <div className="text-3xl md:text-4xl mb-4 text-blue-600">🏅</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Experience</h2>
                            <p className="text-gray-700 text-base md:text-lg mt-2">6 Months</p>
                            <p className="text-gray-500 font-bold">Frontend Development</p>
                        </div>

                    </div>
                    <div className="text-justify  text-gray-700 max-w-3xl ">
                        <p className="   md:text-lg leading-relaxed">
                            I am a <span className='font-bold'>Frontend Developer</span> with <span className='font-bold'> 6+ Months </span> of experience in the Front End Development. I have worked on  <span className='font-bold'>30+   practice projects </span>and have a good understanding of frontend development, currently <span className='font-bold'>learning backend development</span> to become a full-stack developer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
