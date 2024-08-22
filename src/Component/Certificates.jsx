


// import React, { useState } from 'react';
// import Card from './Card';

// const Certificates = () => {
//     const [filter, setFilter] = useState('All');

//     const certificateData = [
//         {
//             image: 'images/certificates/freecodecamp.png',
//             title: 'Responsive Web Design',
//             tags: ['HTML', 'CSS', 'Responsive Design'],
//             category: 'featured',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/react.png',
//             title: 'React Basics',
//             tags: ['React', 'JavaScript', 'JSX'],
//             category: 'featured',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/github.png',
//             title: 'Git & Github',
//             tags: ['Git', 'Version Control', 'GitHub'],
//             category: 'featured',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/linux1.png',
//             title: 'Intro to Linux',
//             tags: ['Linux', 'Operating Systems', 'Shell'],
//             category: 'OS',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/linux2.png',
//             title: 'Command Line Basics',
//             tags: ['Command Line', 'Bash', 'Shell Scripting'],
//             category: 'OS',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/sql-1.png',
//             title: 'Intro to SQL',
//             tags: ['SQL', 'Databases', 'Queries'],
//             category: 'sql',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/sql-2.png',
//             title: 'Intermediate SQL',
//             tags: ['SQL', 'Joins', 'Subqueries'],
//             category: 'sql',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/sql-3.png',
//             title: 'Joining in SQL',
//             tags: ['SQL', 'Joins', 'Data Analysis'],
//             category: 'sql',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/wordpress.png',
//             title: 'WordPress Development',
//             tags: ['WordPress', 'CMS', 'Web Development'],
//             category: 'all',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//         {
//             image: 'images/certificates/freelancing.png',
//             title: 'Freelancing',
//             tags: ['Freelancing', 'Business', 'Client Management'],
//             category: 'all',
//             githubLink: '#',
//             liveDemoLink: '#',
//         },
//     ];

//     const filterCertificates = (category) => {
//         setFilter(category);
//     };

//     const filteredCertificates = filter === 'All'
//         ? certificateData
//         : certificateData.filter(certificate => certificate.category === filter || filter === 'All');

//     return (
//         <div className="p-6">
//             <div className="text-center mb-12">
//                 <h2 className="text-lg text-gray-600 mb-2">Get To Know More</h2>
//                 <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Certifications</h1>
//             </div>

//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//                 <button
//                     className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'featured' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
//                     onClick={() => filterCertificates('featured')}
//                 >
//                     Featured
//                 </button>
//                 <button
//                     className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'OS' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
//                     onClick={() => filterCertificates('web')}
//                 >
//                     Web
//                 </button>
//                 <button
//                     className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'OS' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
//                     onClick={() => filterCertificates('OS')}
//                 >
//                     OS
//                 </button>
//                 <button
//                     className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'sql' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
//                     onClick={() => filterCertificates('sql')}
//                 >
//                     SQL
//                 </button>
//                 <button
//                     className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'sql' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
//                     onClick={() => filterCertificates('sql')}
//                 >
//                     Other
//                 </button>
//                 <button
//                     className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'All' ? 'bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} focus:ring-2 focus:ring-gray-300`}
//                     onClick={() => filterCertificates('All')}
//                 >
//                     Extra Cirricular
//                 </button>
//             </div>

//             <div className="flex flex-wrap justify-center gap-6">
//                 {filteredCertificates.map((certificate, index) => (
//                     <Card
//                         key={index}
//                         image={certificate.image}
//                         title={certificate.title}
//                         tags={certificate.tags}
//                         githubLink={certificate.githubLink}
//                         liveDemoLink={certificate.liveDemoLink}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Certificates;


import React, { useState } from 'react';
import Card from './Card';

const Certificates = () => {
    const [filter, setFilter] = useState('featured');

    const certificateData = [
        {
            image: 'images/certificates/react.png',
            title: 'React Basics',
            tags: ['React', 'JavaScript', 'JSX'],
            category: ['featured', 'web'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/github.png',
            title: 'Git & Github',
            tags: ['Git', 'Version Control', 'GitHub'],
            category: ['featured', 'web'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/freecodecamp.png',
            title: 'Responsive Web Design',
            tags: ['HTML', 'CSS', 'Responsive Design'],
            category: ['featured', 'web'],
            githubLink: '#',
            liveDemoLink: '#',
        },

        {
            image: 'images/certificates/linux1.png',
            title: 'Intro to Linux',
            tags: ['Linux', 'Operating Systems', 'Shell'],
            category: ['OS'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/linux2.png',
            title: 'Command Line Basics',
            tags: ['Command Line', 'Bash', 'Shell Scripting'],
            category: ['OS'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-1.png',
            title: 'Intro to SQL',
            tags: ['SQL', 'Databases', 'Queries'],
            category: ['sql'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-2.png',
            title: 'Intermediate SQL',
            tags: ['SQL', 'Joins', 'Subqueries'],
            category: ['sql'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-3.png',
            title: 'Joining in SQL',
            tags: ['SQL', 'Joins', 'Data Analysis'],
            category: ['sql'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/wordpress.png',
            title: 'WordPress Development',
            tags: ['WordPress', 'CMS', 'Web Development'],
            category: ['web'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/freelancing.png',
            title: 'Freelancing',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['other'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/acting.jpg',
            title: 'Best Actor Award',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['extracirricular'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/APS.jpg',
            title: 'APS Certificate',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['extracirricular'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/calligraphy.jpg',
            title: 'Calligraphy Norway',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['extracirricular'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/NLFP.jpg',
            title: 'NLFP',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['extracirricular'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/IKSC.jpg',
            title: 'IKSC',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['extracirricular'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/essay.jpg',
            title: 'Essay Writing',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['extracirricular'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/painting.jpg',
            title: 'Painting',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['extracirricular'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        
        
        
        
        

    ];

    const filterCertificates = (category) => {
        setFilter(category);
    };

    const filteredCertificates = filter === 'All'
        ? certificateData
        : certificateData.filter(certificate => certificate.category.includes(filter));

    return (
        <div className="p-6">
            <div className="text-center mb-12">
                <h2 className="text-lg text-gray-600 mb-2">Get To Know More</h2>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Certifications</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                    className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'featured' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
                    onClick={() => filterCertificates('featured')}
                >
                    Featured
                </button>
                <button
                    className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'web' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
                    onClick={() => filterCertificates('web')}
                >
                    Web
                </button>
                <button
                    className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'sql' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
                    onClick={() => filterCertificates('sql')}
                >
                    SQL
                </button>
                <button
                    className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'OS' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
                    onClick={() => filterCertificates('OS')}
                >
                    OS
                </button>
                <button
                    className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'other' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
                    onClick={() => filterCertificates('other')}
                >
                    Other
                </button>
                <button
                    className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'other' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} focus:ring-2 focus:ring-blue-300`}
                    onClick={() => filterCertificates('extracirricular')}
                >
                    Extra Cirricular
                </button>
                <button
                    className={`py-2 px-6 text-white rounded-lg focus:outline-none ${filter === 'All' ? 'bg-gray-600' : 'bg-gray-500 hover:bg-gray-600'} focus:ring-2 focus:ring-gray-300`}
                    onClick={() => filterCertificates('All')}
                >
                    Show All
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {filteredCertificates.map((certificate, index) => (
                    <Card
                        key={index}
                        image={certificate.image}
                        title={certificate.title}
                        tags={certificate.tags}
                        githubLink={certificate.githubLink}
                        liveDemoLink={certificate.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
