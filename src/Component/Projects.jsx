

import React, { useState } from 'react';
import Card from './Card';

const Projects = () => {
    const [filter, setFilter] = useState('All');

const projectData = [
    {
        image: 'images/project1.png',
        title: 'Featured Project',
        tags: ['AI', 'NLP', 'React', 'Flask'],
        category: 'Featured', // Added category
        githubLink: '#',
        liveDemoLink: '#',
    },
    {
        image: 'images/project2.png',
        title: 'JS Project',
        tags: ['AI', 'NLP', 'React', 'Flask'],
        category: 'Javascript', // Added category
        githubLink: '#',
        liveDemoLink: '#',
    },
    {
        image: 'images/project1.png',
        title: 'React Project',
        tags: ['AI', 'NLP', 'React', 'Flask'],
        category: 'React', // Added category
        githubLink: '#',
        liveDemoLink: '#',
    },
    {
        image: 'images/project3.png',
        title: 'React Project 2',
        tags: ['AI', 'NLP', 'React', 'Flask'],
        category: 'React', // Added category
        githubLink: '#',
        liveDemoLink: '#',
    },
    {
        image: 'images/project1.png',
        title: 'Backend Project ',
        tags: ['AI', 'NLP', 'React', 'Flask'],
        category: 'Backend', // Added category
        githubLink: '#',
        liveDemoLink: '#',
    },
]

    const filterProjects = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(project => project.category === filter);

    return (

        <div id='projects' className="p-4">
            <div className="text-center mb-12">
                <h2 className="text-lg text-gray-600 mb-2">Get To Know More</h2>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">My Projects</h1>
            </div>

            <div className="flex flex-wrap justify-center mb-8">
                <button
                    className="m-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => filterProjects('Featured')}
                >
                    Featured
                </button>
                <button
                    className="m-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => filterProjects('Javascript')}
                >
                    Javascript
                </button>
                <button
                    className="m-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => filterProjects('React')}
                >
                    React JS
                </button>
                <button
                    className="m-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => filterProjects('Backend')}
                >
                    Backend Projects
                </button>
                <button
                    className="m-2 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    onClick={() => filterProjects('All')}
                >
                    Show All
                </button>
            </div>

            <div className="flex flex-wrap justify-center">
                {filteredProjects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        tags={project.tags}
                        githubLink={project.githubLink}
                        liveDemoLink={project.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
