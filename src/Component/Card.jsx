
import React from 'react';

const Card = ({ image, title, tags, githubLink, liveDemoLink }) => {
    return (
        <>

            <div className="max-w-sm overflow-hidden shadow-lg m-4 border-2  rounded-2xl border-gray-700 bg-white transition-transform transform hover:scale-105">

                <div className='flex justify-center p-4'>
                    <img
                        className="w-full h-48 object-cover rounded-t-2xl transition-transform transform hover:scale-105"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2 text-gray-900">{title}</div>
                    <p className="text-gray-700 text-base">
                        {tags.map(tag => (
                            <span
                                key={tag}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2 transition-colors hover:bg-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                    <a
                        href={githubLink}
                        className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v9l5 5M12 3l-5 5 5 5"></path>
                        </svg>
                        <span>Github</span>
                    </a>
                    <a
                        href={liveDemoLink}
                        className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v9l5 5M12 3l-5 5 5 5"></path>
                        </svg>
                        <span>Live Demo</span>
                    </a>

                </div>
            </div>
        </>
    );
};

export default Card;
