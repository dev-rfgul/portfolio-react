


import React, { useState } from 'react';
import Card from './Card';

const Projects = () => {
    const [filter, setFilter] = useState('Featured');

    const projectData = [
        {
            image: 'images/project1.png',
            title: 'Featured Project',
            tags: ['AI', 'NLP', 'React', 'Flask'],
            category: 'Featured',
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/project2.png',
            title: 'JS Project',
            tags: ['AI', 'NLP', 'React', 'Flask'],
            category: 'Javascript',
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/project1.png',
            title: 'React Project',
            tags: ['AI', 'NLP', 'React', 'Flask'],
            category: 'React',
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/project3.png',
            title: 'React Project 2',
            tags: ['AI', 'NLP', 'React', 'Flask'],
            category: 'React',
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/project1.png',
            title: 'Backend Project',
            tags: ['AI', 'NLP', 'React', 'Flask'],
            category: 'Backend',
            githubLink: '#',
            liveDemoLink: '#',
        },
    ];

    const btns = [
        { label: 'Featured', value: 'Featured' },
        { label: 'Javascript', value: 'Javascript' },
        { label: 'React JS', value: 'React' },
        { label: 'Backend Projects', value: 'Backend' },
        { label: 'Show All', value: 'All' },
    ];

    const filterProjects = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(project => project.category === filter);

    return (
        <div id='projects' className="p-4">
            <div className="text-center mb-12">
                <h2 className="text-lg text-gray-600 mb-2">Projects I Made</h2>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">My Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center mb-8">
                {btns.map((btn) => (
                    <button
                        key={btn.value}
                        className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${
                            filter === btn.value
                                ? 'bg-blue-500 text-white'  // Active button styles
                                : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                        }`}
                        onClick={() => filterProjects(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center">
                {filteredProjects.map((project, index) => (
                    <Card
                        className="border border-black border-opacity-60"
                        key={index}
                        image={project.image}
                        title={project.title}
                        tags={project.tags}
                        btnText='GitHub'
                        btn2Text='Live Demo'
                        btn1Url={project.githubLink}
                        btn2Url={project.liveDemoLink}
                    />
                ))}
            </div>
            {/* <hr className="" /> */}
        </div>
    );
};

export default Projects;
