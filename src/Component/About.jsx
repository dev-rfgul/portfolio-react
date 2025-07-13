
// import React, { useState } from 'react';
// import Heading from './Heading';
// import { motion } from 'framer-motion';

// const AboutMe = () => {
//     const [isHovered, setIsHovered] = useState(false);

//     const stats = [
//         { icon: "👥", title: "Education", detail: "B.Sc. Computer Science", institution: "Islamia University Bahawalpur" },
//         { icon: "🏅", title: "Experience", detail: "1 Year", institution: "Frontend Development" },
//         { icon: "🚀", title: "Projects", detail: "30+", institution: "Practice Projects" },
//         { icon: "📚", title: "Learning", detail: "Backend Development", institution: "Beginner" }
//     ];

//     return (
//         <section id='about' className="py-16 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//             >
//                 <Heading heading={"About Me"} subHeading={"Get to know more about me"} />
//             </motion.div>

//             <div className="mt-12 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16">
//                 <motion.div
//                     className="w-full md:w-1/3 lg:w-2/5 flex justify-center"
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     viewport={{ once: true }}
//                 >
//                     <div
//                         className="relative group overflow-hidden rounded-2xl border-2 border-black shadow-xl"
//                         onMouseEnter={() => setIsHovered(true)}
//                         onMouseLeave={() => setIsHovered(false)}
//                     >
//                         <img
//                             src="/images/banner2-img.jpeg"
//                             alt="Profile Picture"
//                             className={`w-full max-w-lg object-cover object-center h-96 transition-all duration-500 ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
//                         />
//                         <div className={`absolute inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//                             <div className="text-white text-center p-6">
//                                 <h3 className="text-2xl font-bold mb-2">Let's Connect!</h3>
//                                 <div className="flex justify-center space-x-4 mt-4">
//                                     <a href="https://www.linkedin.com/in/rf-gul" target='_blank' className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                                         </svg>
//                                     </a>
//                                     <a href="https://github.com/dev-rfgul" target='_blank' className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                                         </svg>
//                                     </a>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     className="w-full md:w-2/3 lg:w-3/5 flex flex-col gap-8"
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     viewport={{ once: true }}
//                 >
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {stats.map((stat, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-black transition-all hover:shadow-xl"
//                                 whileHover={{ y: -5 }}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3, delay: 0.1 * index }}
//                                 viewport={{ once: true }}
//                             >
//                                 <div className="text-4xl mb-4 text-blue-600">{stat.icon}</div>
//                                 <h2 className="text-2xl font-bold text-gray-800">{stat.title}</h2>
//                                 <p className="text-gray-700 text-lg mt-2">{stat.detail}</p>
//                                 <p className="text-gray-500 font-bold">{stat.institution}</p>
//                             </motion.div>
//                         ))}
//                     </div>

//                     <motion.div
//                         className="mt-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.6 }}
//                         viewport={{ once: true }}
//                     >
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
//                         <p className="text-lg leading-relaxed text-gray-700">
//                             I am a <span className='font-bold text-black'>Frontend Developer</span> with <span className='font-bold text-black'> 6+ Months </span> of experience in the Front End Development. I have worked on <span className='font-bold text-black'>30+ practice projects </span>and have a good understanding of frontend development, currently <span className='font-bold text-black'>learning backend development</span> to become a full-stack developer.
//                         </p>
//                         <div className="mt-6 flex flex-wrap gap-2">
//                             {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Git', 'Responsive Design'].map((skill, index) => (
//                                 <span key={index} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium">
//                                     {skill}
//                                 </span>
//                             ))}
//                         </div>
//                         <div className="mt-6">
//                             <a href="#contact" className="inline-block px-6 py-3 bg-white text-black border border-gray-900 font-medium rounded-lg  transition-colors shadow-md hover:shadow-lg">
//                                 Get In Touch
//                             </a>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default AboutMe;

// import React from 'react';
import Heading from './Heading';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const stats = [
        { icon: "👥", title: "Education", detail: "B.Sc. Computer Science", institution: "Islamia University Bahawalpur" },
        { icon: "🏅", title: "Trainee Software Engineer", detail: "6 Months", institution: "Aitch Tech " },
        { icon: "🚀", title: "Projects", detail: "30+", institution: "Practice Projects" },
        { icon: "📚", title: "Learning", detail: "Angular + DSA", institution: "Beginner" }
    ];

    return (
        <section id='about' className="py-16 px-6 md:px-8 lg:px-32 bg-gradient-to-b from-gray-50 to-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Heading heading={"About Me"} subHeading={"Get to know more about me"} />
            </motion.div>

            <motion.div
                className="mt-12 w-full flex flex-col items-center gap-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-black transition-all hover:shadow-xl"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            viewport={{ once: true }}
                        >
                            {/* <div className="text-4xl mb-4 text-blue-600">{stat.icon}</div> */}
                            <h2 className="text-2xl font-bold text-gray-800">{stat.title}</h2>
                            <p className="text-gray-700 text-lg mt-2">{stat.detail}</p>
                            <p className="text-gray-500 font-bold">{stat.institution}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-full max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        I am a <span className='font-bold text-black'>Trainee Software Engineer</span> - Full Stack with <span className='font-bold text-black'>6+ Months</span> of experience in Full Stack Web  Development <span className='font-bold text-black'>MERN & Django</span> I have worked on <span className='font-bold text-black'>30+ practice projects</span> which included <span className='font-bold text-blue-800'><a target='_blank' href='https://www.taskai.studio'>Task AI Studio</a></span> and <span className='font-bold text-blue-800'><a href='https://www.glowzlifestyle.shop' target='_blank'>Glowz Lifestyle </a></span>(Ecom Website) have a good understanding of Full Stack development.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {[ 'JavaScript','React', 'Node JS', 'Express JS', 'MongoDB','Django', 'Git', 'GitHub', 'Deployment','Responsive Design'].map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="mt-6">
                        <a href="#contact" className="inline-block px-6 py-3 bg-white text-black border border-gray-900 font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
