import IconCloud from '@/components/magicui/IconCloud';


import React from 'react'

const slugs = [
    "linux",
    "ubuntu",
    "terminal", "html5",
    "css3",
    "tailwindcss",
    "bootstrap",
    "javascript",
    "typescript",
    "java",
    "linux",
    "cplusplus",
    "react",
    "android",
    "nodedotjs",
    "nextdotjs",
    "firebase",
    "vercel",
    "git",
    "github",
    "gitlab",
    "githubcopilot",
    "visualstudiocode",
];


const Skills = () => {
    return (
        <div id="skills" className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl text-gray-600 mb-2">Skills I Have</h2>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Skills</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="relative flex h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-[48rem] items-center justify-center overflow-hidden rounded-xl border border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 px-16 sm:px-24 md:px-32 pb-16 sm:pb-24 md:pb-32 pt-10 sm:pt-12 md:pt-16">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </div>
    );


}

export default Skills


