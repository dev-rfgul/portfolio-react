


import React, { useState } from 'react';
import Card from './Card';

const Projects = () => {
    const [filter, setFilter] = useState('Featured');

    const projectData = [
        {
            image: 'images/projects/js/crypto.jpeg',
            title: 'Crypto Price Ckecker',
            tags: ['JS', 'API', 'JSON', 'Live Tracking'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/crypto-price-checker',
            liveDemoLink: 'https://cryptoprices785.netlify.app/',
        },
        {
            image: 'images/projects/js/music.jpeg',
            title: 'Music Player',
            tags: ['JS', 'Responsive', 'Spotify', 'HTML'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/spotify',
            liveDemoLink: 'https://spotify785.netlify.app/',
        },
        {
            image: 'images/projects/js/qr.jpeg',
            title: 'QR Code Generator',
            tags: ['API', 'JS', 'Text to QR', 'Responsive'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/qr-code-generater',
            liveDemoLink: 'https://qrcode785.netlify.app/',
        },
        {
            image: 'images/projects/js/tictactoe.jpeg',
            title: 'Tic Tac Toe Game',
            tags: ['HTML', 'CSS', 'JS ', 'Game logic'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/ticTacToe',
            liveDemoLink: 'https://tictactoe785.netlify.app/',
        },
        {
            image: 'images/projects/js/tts.jpeg',
            title: 'Text to Speech',
            tags: ['HTML','CSS','Vanilla JS', 'Text', ],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/text-to-speech',
            liveDemoLink: 'https://tts785.netlify.app/',
        },
        {
            image: 'images/projects/js/weather1.jpeg',
            title: 'Weather APP',
            tags: ['HTML','CSS','JS', 'API','JSON' ],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/text-to-speech',
            liveDemoLink: 'https://tts785.netlify.app/',
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
