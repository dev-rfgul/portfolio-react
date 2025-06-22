
import React, { useState } from 'react';

// Enhanced Minimalist Card Component
const Card = ({ title, description, features, tags, btn1Url, btn2Url, btnText, btn2Text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group w-full max-w-sm bg-white rounded-2xl border border-gray-800 hover:border-gray-500 p-6 transition-all duration-700 hover:shadow-2xl hover:shadow-gray-100/50 cursor-pointer relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

            {/* Header */}
            <div className="relative mb-6">
                <h3 className="font-bold text-2xl mb-2 text-gray-900">{title}</h3>
                {description && (
                    <p className="text-gray-600 text-md leading-relaxed line-clamp-2">{description}</p>
                )}
            </div>

            {/* Dynamic content area */}
            <div className="relative min-h-24 mb-6">
                <div className={`absolute inset-0 transition-all duration-500 ${!isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    {/* Default state - Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs rounded-full font-medium border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    {/* Hover state - Features */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Features</h4>
                        <div className="space-y-2">
                            {features && features.slice(0, 3).map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 text-sm text-gray-700"
                                    style={{
                                        animation: isHovered ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
                                    }}
                                >
                                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="px-6 pt-4 pb-2 flex flex-wrap justify-center gap-4">
                <a
                    href={btn1Url}
                    className="py-2 px-6 border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {btnText}
                </a>
                {btn2Text && (
                    <a
                        href={btn2Url}
                        className="py-2 px-6 border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {btn2Text}
                    </a>
                )}
            </div>

            <style jsx>{`
                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
        </div>
    );
};

// Enhanced Heading Component
const Heading = ({ heading, subHeading }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{heading}</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subHeading}</p>
    </div>
);

const Projects = () => {
    const [filter, setFilter] = useState('Featured');

    const projectData = [
        {
            title: 'Shopping Cart',
            description: 'OOP-based shopping cart system with file handling capabilities',
            features: ['Object-Oriented Design', 'File I/O Operations', 'CLI Interface', 'Data Persistence'],
            tags: ['Java', 'OOP', 'CLI', 'File Handling'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
            liveDemoLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
        },
        {
            title: 'Bus Management System',
            description: 'Complete documentation and system design for bus operations',
            features: ['System Architecture', 'Requirements Analysis', 'UML Diagrams', 'Documentation'],
            tags: ['Software Engineering', 'Documentation', 'UML'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/bus-management-system',
            liveDemoLink: 'https://github.com/dev-rfgul/bus-management-system',
        },
        {
            title: 'EDA on Telecom Data',
            description: 'Comprehensive exploratory data analysis on customer churn',
            features: ['Data Visualization', 'Statistical Analysis', 'Pattern Recognition', 'Insights Generation'],
            tags: ['Python', 'Pandas', 'Numpy', 'EDA'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/EDA-churn-analysis',
            liveDemoLink: 'https://github.com/dev-rfgul/EDA-churn-analysis/blob/main/customer-churn-analysis.ipynb'
        },
        {
            title: 'Study Group Finder',
            description: 'Full-stack web app to connect students for collaborative learning',
            features: ['User Authentication', 'Real-time Matching', 'Group Management', 'Responsive Design'],
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/study-group-finder',
            liveDemoLink: 'https://study-group-finder-cyan.vercel.app/',
        },
        {
            title: 'Crypto Price Checker',
            description: 'Real-time cryptocurrency price tracking application',
            features: ['Live Price Updates', 'Multiple Currencies', 'Price Charts', 'API Integration'],
            tags: ['JavaScript', 'API', 'HTML', 'CSS'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/crypto-price-checker',
            liveDemoLink: 'https://cryptoprices785.netlify.app/',
        },
        {
            title: 'Music Player',
            description: 'Spotify-inspired music player with modern interface',
            features: ['Audio Controls', 'Playlist Management', 'Responsive UI', 'Track Progress'],
            tags: ['JavaScript', 'HTML', 'CSS', 'Audio API'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/spotify',
            liveDemoLink: 'https://spotify785.netlify.app/',
        },
        {
            title: 'QR Code Generator',
            description: 'Generate QR codes for any text or URL instantly',
            features: ['Instant Generation', 'Custom Sizes', 'Download Options', 'URL Validation'],
            tags: ['JavaScript', 'API', 'HTML', 'CSS'],
            category: ['Javascript', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/qr-code-generater',
            liveDemoLink: 'https://qrcode785.netlify.app/',
        },
        {
            title: 'Tic Tac Toe Game',
            description: 'Classic game with smart AI opponent and score tracking',
            features: ['AI Opponent', 'Score Tracking', 'Game History', 'Responsive Design'],
            tags: ['JavaScript', 'Game Logic', 'HTML', 'CSS'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/ticTacToe',
            liveDemoLink: 'https://tictactoe785.netlify.app/',
        },
        {
            title: 'Text to Speech',
            description: 'Convert any text to natural-sounding speech',
            features: ['Multiple Voices', 'Speed Control', 'Voice Selection', 'Browser Compatible'],
            tags: ['JavaScript', 'Web Speech API', 'HTML', 'CSS'],
            category: ['Javascript', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/text-to-speech',
            liveDemoLink: 'https://tts785.netlify.app/',
        },
        {
            title: 'Hashtags & Keywords Generator',
            description: 'AI-powered hashtag and keyword generation for social media',
            features: ['AI Generation', 'Social Media Optimization', 'Keyword Research', 'Copy to Clipboard'],
            tags: ['JavaScript', 'API', 'HTML', 'CSS'],
            category: ['Javascript', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/hashtag-generator',
            liveDemoLink: 'https://hashtags785.netlify.app/',
        },
        {
            title: 'Weather App',
            description: 'Get real-time weather updates for any location worldwide',
            features: ['Live Weather Data', 'Location Search', 'Weather Forecasts', 'Temperature Units'],
            tags: ['JavaScript', 'Weather API', 'HTML', 'CSS'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/weather-app',
            liveDemoLink: 'https://weather785.netlify.app/',
        },
        {
            title: 'Password Generator',
            description: 'Generate secure passwords with customizable options',
            features: ['Custom Length', 'Character Sets', 'Strength Meter', 'Copy to Clipboard'],
            tags: ['React', 'Vite', 'Tailwind CSS', 'Security'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/6-password-generator',
            liveDemoLink: 'https://6-password-generator.vercel.app/',
        },
        {
            title: 'Currency Converter',
            description: 'Real-time currency conversion with live exchange rates',
            features: ['Live Exchange Rates', 'Multiple Currencies', 'Historical Data', 'Conversion History'],
            tags: ['React', 'Vite', 'API', 'Live Conversion'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/7-currency-converter',
            liveDemoLink: 'https://7-currency-converter-ten.vercel.app/',
        },
        {
            title: 'Todo List',
            description: 'Feature-rich todo app with Context API state management',
            features: ['Add/Edit/Delete Tasks', 'Mark Complete', 'Local Storage', 'Filter Options'],
            tags: ['React', 'Context API', 'State Management', 'Local Storage'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/todolist-context-api-',
            liveDemoLink: 'https://todolist-fawn-xi.vercel.app/',
        },
        {
            title: 'Invoice Generator',
            description: 'Professional invoice generator with download and print features',
            features: ['PDF Generation', 'Print Support', 'Custom Templates', 'Tax Calculations'],
            tags: ['React', 'Vite', 'PDF', 'Print'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/invoice-generaator',
            liveDemoLink: 'https://invoice-generaator.vercel.app/',
        },
        {
            title: 'Dice Game',
            description: 'Interactive dice game with beautiful animations and scoring',
            features: ['Animated Dice', 'Score System', 'Multiple Players', 'Game Statistics'],
            tags: ['React', 'Tailwind CSS', 'Game Logic', 'Animations'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/dice-game',
            liveDemoLink: 'https://dice-game-lime-five.vercel.app/',
        },
        {
            title: 'AI Vs Human Game',
            description: 'Number guessing game where you compete against AI',
            features: ['AI Opponent', 'Difficulty Levels', 'Score Tracking', 'Game Analytics'],
            tags: ['React', 'Vite', 'Tailwind CSS', 'AI Logic'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/ai-vs-human-vite-',
            liveDemoLink: 'https://ai-vs-human-game.vercel.app/',
        },
        {
            title: 'Bin Mukhtar Tax Consultants',
            description: 'Professional website for tax consultation services',
            features: ['SEO Optimized', 'Contact Forms', 'Service Pages', 'Mobile Responsive'],
            tags: ['Next.js', 'React', 'Company Website', 'SEO'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/bin-mukhtar',
            liveDemoLink: 'https://binmukhtar.vercel.app/',
        },
        {
            title: 'Bit x Coin',
            description: 'Modern cryptocurrency landing page with animations',
            features: ['Modern Design', 'Smooth Animations', 'Responsive Layout', 'Performance Optimized'],
            tags: ['React', 'Vite', 'Tailwind CSS', 'Crypto'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/bitxcoin',
            liveDemoLink: 'https://bitxcoin.vercel.app/',
        },
        {
            title: 'Currently Learning Backend',
            description: 'Exploring server-side development and API creation',
            features: ['RESTful APIs', 'Database Design', 'Authentication', 'Server Architecture'],
            tags: ['Node.js', 'Express', 'MongoDB', 'API'],
            category: 'Backend',
            githubLink: '',
            liveDemoLink: '',
        },
    ];

    const btns = [
        { label: 'Featured', value: 'Featured' },
        { label: 'Semester', value: 'semester' },
        { label: 'Javascript', value: 'Javascript' },
        { label: 'React JS', value: 'React' },
        { label: 'Backend', value: 'Backend' },
        { label: 'Show All', value: 'All' },
    ];

    const filterProjects = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(project => project.category.includes(filter));

    return (
        <div id='projects' className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <Heading
                    heading="Projects"
                    subHeading={`Showcasing ${projectData.length} projects across different technologies`}
                />

                {/* Enhanced Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {btns.map((btn) => (
                        <button
                            key={btn.value}
                            className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                                ? 'bg-gray-500 text-white'  // Active button styles
                                : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                                }`}
                            onClick={() => filterProjects(btn.value)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid with enhanced layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="w-full"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <Card
                                title={project.title}
                                description={project.description}
                                features={project.features}
                                tags={project.tags}
                                btnText="GitHub"
                                btn2Text="Live Demo"
                                btn1Url={project.githubLink}
                                btn2Url={project.liveDemoLink}
                            />
                        </div>
                    ))}
                </div>

                {/* No projects message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>

            <style jsx>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
        </div>
    );
};

export default Projects;