
import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

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
    const btns = [
        { label: 'Featured', value: 'featured' },
        { label: 'Web', value: 'web' },
        { label: 'SQL', value: 'sql' },
        { label: 'OS', value: 'OS' },
        { label: 'Other', value: 'other' },
        { label: 'All', value: 'All' },
        { label: 'Extra Cirricular', value: 'extracirricular' },
    ]

    const filterCertificates = (category) => {
        setFilter(category);
    };

    const filteredCertificates = filter === 'All'
        ? certificateData
        : certificateData.filter(certificate => certificate.category.includes(filter));

    return (
        <div id='certificates' className="p-6">
        <Heading heading={"Certifications"} subHeading={"certifications I Had"}/>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {btns.map((btn) => (
                    <button
                        key={btn.value}
                        className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                            ? 'bg-blue-500 text-white'  // Active button styles
                            : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                            }`}
                        onClick={() => filterCertificates(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap  justify-center gap-6">
                {filteredCertificates.map((certificate, index) => (
                    <Card
                        key={index}
                        image={certificate.image}
                        title={certificate.title}
                        tags={certificate.tags}
                        btnText={'View Certificate'}
                        btn2Text={false}
                        btn1Url={certificate.githubLink}
                        btn2Url={certificate.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
