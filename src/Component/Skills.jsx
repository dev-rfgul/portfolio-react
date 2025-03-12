// import IconCloud from '@/components/magicui/IconCloud';


// import React from 'react'
// import Heading from './Heading'

// const slugs = [
//     "linux",
//     "ubuntu",
//     "terminal", "html5",
//     "css3",
//     "tailwindcss",
//     "bootstrap",
//     "javascript",
//     "typescript",
//     "java",
//     "linux",
//     "cplusplus",
//     "react",
//     "android",
//     "nodedotjs",
//     "nextdotjs",
//     "firebase",
//     "vercel",
//     "git",
//     "github",
//     "gitlab",
//     "githubcopilot",
//     "visualstudiocode",
//     "npm",
//     "mongodb",
//     "express"
// ];


// const Skills = () => {
//     return (
//         <div id="skills" className="py-16 bg-white">
//             <Heading heading={"Skills"} subHeading={"Skills i have"} />
//             <div className="flex flex-col md:flex-row w-full min-h-screen p-6 md:p-10">
//                 {/* Left Side: Skills Image */}
//                 <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 animate-fade-in">
//                     <div className="p-4 md:p-6 rounded-full animate-spin-slow">
//                         <IconCloud iconSlugs={slugs} />
//                     </div>
//                 </div>

//                 {/* Right Side: Skills List */}
//                 <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-6 space-y-4">
//                     <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Skills and Expertise</h2>
//                     <div className="space-y-3 md:space-y-4 pr-0 md:pr-16">
//                         <SkillItem skill="JavaScript" stars={4} />
//                         <SkillItem skill="TypeScript" stars={3} />
//                         <SkillItem skill="Tailwind CSS" stars={5} />
//                         <SkillItem skill="React JS" stars={4} />
//                         <SkillItem skill="Next JS" stars={3} />
//                         <SkillItem skill="GitHub" stars={3} />
//                         <SkillItem skill="Vercel" stars={3} />
//                         <SkillItem skill="Netlify" stars={3} />
//                         <SkillItem skill="Java" stars={4} />
//                         <SkillItem skill="C++" stars={4} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// const SkillItem = ({ skill, stars }) => (
//     <div className="flex items-center justify-between p-2 rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md animate-fade-in-up">
//         <span className="text-lg font-medium text-gray-800">{skill}</span>
//         <div className="flex text-black">
//             <span className="inline-block">
//                 {'★'.repeat(stars)}
//             </span>
//             <span className="inline-block">
//                 {'☆'.repeat(5 - stars)}
//             </span>
//         </div>
//     </div>
// );

// export default Skills



import IconCloud from '@/components/magicui/IconCloud';
import React, { useState, useEffect, useRef } from 'react';
import Heading from './Heading';
import { motion } from 'framer-motion';

// Organized skills by category with additional metadata
const skillsData = {
    frontend: [
        { name: "HTML5", level: 5, slug: "html5", experience: "6+ years" },
        { name: "CSS3", level: 5, slug: "css3", experience: "6+ years" },
        { name: "JavaScript", level: 4, slug: "javascript", experience: "5+ years" },
        { name: "TypeScript", level: 3, slug: "typescript", experience: "3+ years" },
        { name: "React JS", level: 4, slug: "react", experience: "4+ years" },
        { name: "Next.js", level: 3, slug: "nextdotjs", experience: "2+ years" },
        { name: "Tailwind CSS", level: 5, slug: "tailwindcss", experience: "3+ years" },
        { name: "Bootstrap", level: 4, slug: "bootstrap", experience: "5+ years" },
    ],
    backend: [
        { name: "Node.js", level: 3, slug: "nodedotjs", experience: "3+ years" },
        { name: "Express", level: 3, slug: "express", experience: "3+ years" },
        { name: "MongoDB", level: 3, slug: "mongodb", experience: "2+ years" },
        { name: "Firebase", level: 4, slug: "firebase", experience: "3+ years" },
    ],
    languages: [
        { name: "JavaScript", level: 4, slug: "javascript", experience: "5+ years" },
        { name: "TypeScript", level: 3, slug: "typescript", experience: "3+ years" },
        { name: "Java", level: 4, slug: "java", experience: "5+ years" },
        { name: "C++", level: 4, slug: "cplusplus", experience: "4+ years" },
    ],
    tools: [
        { name: "Git", level: 4, slug: "git", experience: "5+ years" },
        { name: "GitHub", level: 4, slug: "github", experience: "5+ years" },
        { name: "GitLab", level: 3, slug: "gitlab", experience: "3+ years" },
        { name: "VS Code", level: 5, slug: "visualstudiocode", experience: "5+ years" },
        { name: "GitHub Copilot", level: 4, slug: "githubcopilot", experience: "1+ year" },
        { name: "NPM", level: 4, slug: "npm", experience: "4+ years" },
    ],
    platforms: [
        { name: "Vercel", level: 3, slug: "vercel", experience: "2+ years" },
        { name: "Netlify", level: 3, slug: null, experience: "3+ years" },
        { name: "Linux", level: 3, slug: "linux", experience: "4+ years" },
        { name: "Ubuntu", level: 3, slug: "ubuntu", experience: "4+ years" },
        { name: "Android", level: 3, slug: "android", experience: "3+ years" },
    ]
};

// Extract all slugs for the icon cloud
const slugs = Object.values(skillsData)
    .flat()
    .map(skill => skill.slug)
    .filter(slug => slug !== null);

const SkillProgress = ({ level, name, animated = false }) => {
    const percentage = (level / 5) * 100;
    const progressRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="w-full" ref={progressRef}>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">{name}</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 transition-all duration-1000 ease-out"
                    style={{
                        width: animated && isVisible ? `${percentage}%` : '0%',
                        transition: animated && isVisible ? 'width 1s ease-out' : 'none'
                    }}
                ></div>
            </div>
        </div>
    );
};

const SkillItem = ({ skill, showExperience = false }) => {
    const stars = Array(5).fill(0);

    return (
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm transition-all duration-300 hover:scale-102 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 group">
            <div className="flex items-center gap-3">
                {skill.slug && (
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                        <img
                            src={`https://cdn.simpleicons.org/${skill.slug}/444`}
                            alt={skill.name}
                            className="w-5 h-5 dark:invert"
                        />
                    </div>
                )}
                <div>
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    {showExperience && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{skill.experience}</p>
                    )}
                </div>
            </div>
            <div className="flex text-yellow-400">
                {stars.map((_, index) => (
                    <span key={index} className="text-lg">
                        {index < skill.level ? "★" : "☆"}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    const categories = [
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "languages", label: "Languages" },
        { id: "tools", label: "Tools" },
        { id: "platforms", label: "Platforms" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-16 bg-white dark:bg-gray-900" ref={skillsRef}>
            <Heading heading={"Skills"} subHeading={"My Technical Proficiencies"} />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side: Skills Icon Cloud */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute -inset-4  rounded-full opacity-30 blur-xl animate-pulse"></div>
                            <div className={`relative p-6 rounded-full transition-all duration-1000 ${isVisible ? 'animate-spin-slow opacity-100' : 'opacity-0'}`}>
                                <IconCloud iconSlugs={slugs} />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Skills Details */}
                    <div className="w-full lg:w-3/5">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-500">
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white">Skills & Expertise</h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    I specialize in building modern, responsive web applications using the latest technologies.
                                    My strengths lie in frontend development with React and Next.js, backed by solid programming fundamentals.
                                </p>
                            </div>

                            {/* Tabs Navigation */}
                            <div className="flex overflow-x-auto space-x-2 mb-6 pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveTab(category.id)}
                                        className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${activeTab === category.id
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                                            }`}
                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>

                            {/* Top Skills Progress Bars */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Top Skills</h3>
                                <div className="space-y-4">
                                    {skillsData[activeTab]
                                        .sort((a, b) => b.level - a.level)
                                        .slice(0, 3)
                                        .map((skill, index) => (
                                            <SkillProgress
                                                key={index}
                                                name={skill.name}
                                                level={skill.level}
                                                animated={isVisible}
                                            />
                                        ))}
                                </div>
                            </div>

                            {/* All Skills in Category */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                                    All {categories.find(c => c.id === activeTab)?.label} Skills
                                    <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">({skillsData[activeTab].length})</span>
                                </h3>
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    key={activeTab}
                                >
                                    {skillsData[activeTab].map((skill, index) => (
                                        <motion.div key={index} variants={item}>
                                            <SkillItem skill={skill} showExperience={true} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Learning Next */}
                        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Currently Learning</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Three.js", "GraphQL", "Docker", "AWS", "Rust"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-200 dark:border-blue-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;