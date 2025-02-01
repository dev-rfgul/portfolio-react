import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Projects = () => {
    const [filter, setFilter] = useState('Featured');

    const projectData = [
        {
            image: 'images/projects/course/oop.png',
            title: 'Shopping Cart',
            tags: ['Java', 'OOP', 'CLI', 'File Handling'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
        },
        {
            image: 'images/projects/course/se.png',
            title: 'Bus Management System',
            tags: ['Software Engineering', 'Documentation'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/bus-management-system',
        },
        {
            image: 'images/projects/course/eda.jpg',
            title: 'EDA on Telecom Data',
            tags: [, 'EDA', 'Python', 'Pandas','Numpy'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/EDA-churn-analysis',
        },
        {
            image: 'images/projects/course/web.png',
            title: 'Study Group Finder',
            tags: [, 'React JS', 'Node JS', 'MongoDB','Express', 'Tailwind CSS'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/study-group-finder',
            
        },
        {
            image: 'images/projects/js/crypto-price-cheker.png',
            title: 'Crypto Price Ckecker',
            tags: ['HTML', 'CSS', 'JS', 'API'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/crypto-price-checker',
            liveDemoLink: 'https://cryptoprices785.netlify.app/',
        },
        {
            image: 'images/projects/js/music-player.png',
            title: 'Music Player',
            tags: ['HTML', 'CSS', 'JS'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/spotify',
            liveDemoLink: 'https://spotify785.netlify.app/',
        },
        {
            image: 'images/projects/js/qr-code-generator.png',
            title: 'QR Code Generator',
            tags: ['HTML', 'CSS', 'JS', 'API'],
            category: ['Javascript', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/qr-code-generater',
            liveDemoLink: 'https://qrcode785.netlify.app/',
        },
        {
            image: 'images/projects/js/tic-tac-toe.png',
            title: 'Tic Tac Toe Game',
            tags: ['HTML', 'CSS', 'JS', 'Game Logic'], 
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/ticTacToe',
            liveDemoLink: 'https://tictactoe785.netlify.app/',
        },
        {
            image: 'images/projects/js/text-to-speech.png',
            title: 'Text to Speech',
            tags: ['HTML', 'CSS', 'JS', ],
            category: ['Javascript', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/text-to-speech',
            liveDemoLink: 'https://tts785.netlify.app/',
        },
        {
            image: 'images/projects/js/hashtag-gen.png',
            title: 'Hashtags & KeyWords Generator',
            tags: ['HTML', 'CSS', 'JS', 'API'],
            category: ['Javascript', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/hashtag-generator',
            liveDemoLink: 'https://hashtags785.netlify.app/',
        },
        {
            image: 'images/projects/js/weather.png',
            title: 'Weather APP',
            tags: ['HTML', 'CSS', 'JS', 'API'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/weather-app',
            liveDemoLink: 'https://weather785.netlify.app/',
        },
        {
            // image:'images/projects/react/password.jpeg',
            image: 'https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Password Generator',
            tags: ['Vite', 'React JS', 'Tailwind CSS ', ],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/6-password-generator',
            liveDemoLink: 'https://6-password-generator.vercel.app/',
        },
        {
            image: 'images/projects/react/currencytesting.png',
            title: 'Currency Converter',
            tags: ['Vite', 'React ', 'API ', 'Live Conversion',],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/7-currency-converter',
            liveDemoLink: 'https://7-currency-converter-ten.vercel.app/',
        },
        {
            image: 'images/projects/react/todo.jpg',
            title: 'Todo List',
            tags: ['React ', 'Context API ', 'state management',],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/todolist-context-api-',
            liveDemoLink: 'https://todolist-fawn-xi.vercel.app/',
        },
        {
            image: 'images/projects/react/invoice.jpg',
            title: 'Invoice Generator ',
            tags: ['Vite', 'React JS' , 'Download', 'Print'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/invoice-generaator',
            liveDemoLink: 'https://invoice-generaator.vercel.app/',
        },
        {
            image: 'images/projects/react/dice.jpg',
            title: 'Dice Game',
            tags: ['React JS', 'Tailwind CSS','Game Logic'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/dice-game',
            liveDemoLink: 'https://dice-game-lime-five.vercel.app/',
        },

        {
            image: 'images/projects/react/img.jpg',
            title: 'AI Vs Human Game',
            tags: ['Vite', 'React ', 'Tailwind CSS','Number Guessing'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/ai-vs-human-vite-',
            liveDemoLink: 'https://ai-vs-human-game.vercel.app/',
        },
        {
            image: 'images/projects/react/binmukhtar.png',
            title: 'Bin Mukhtar Tax Consultants',
            tags: ['Next', 'React ', 'Company website', 'Tax Consultant website'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/bin-mukhtar',
            liveDemoLink: 'https://binmukhtar.vercel.app/',
        },
        {
            image: 'images/projects/react/bitxcoin.png',
            title: 'Bit x Coin ',
            tags: ['Vite', 'React ', 'Tailwind CSS'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/bitxcoin',
            liveDemoLink: 'https://bitxcoin.vercel.app/',
        },


        {
            image: 'images/projects/backend/backend.jpeg',
            title: 'Currently Learning',
            tags: ['Node JS', 'Express ', 'Mongo DB ', 'API'],
            category: ['Backend', ''],
            githubLink: '',
            liveDemoLink: '',
        },


    ];

    const btns = [
        { label: 'Featured', value: 'Featured' },
        { label: 'Semester', value: 'semester' },
        { label: 'Javascript', value: 'Javascript' },
        { label: 'React JS', value: 'React' },
        { label: 'Backend ', value: 'Backend' },
        { label: 'Show All', value: 'All' },
    ];

    const filterProjects = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(project => project.category.includes(filter));

    return (
        <div id='projects' className="p-4">
            <Heading heading={"Projects"} subHeading={`Total Projects I made: ${projectData.length} `} />
            <div className="flex flex-wrap justify-center mb-8">
                {btns.map((btn) => (
                    <button
                        key={btn.value}
                        className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                            ? 'bg-blue-500 text-white'  // Active button styles
                            : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                            }`}
                        onClick={() => filterProjects(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
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
