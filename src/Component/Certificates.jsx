
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
            githubLink: 'https://coursera.org/share/ca00c1a7e4ad806b02599c8452b508d3',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/github.png',
            title: 'Git & Github',
            tags: ['Git', 'Version Control', 'GitHub'],
            category: ['featured', 'web'],
            githubLink: 'https://coursera.org/share/af886bcafcf5b066b0391cf4f4e19672',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/freecodecamp.png',
            title: 'Responsive Web Design',
            tags: ['HTML', 'CSS', 'Responsive Design'],
            category: ['featured', 'web'],
            githubLink: 'https://www.freecodecamp.org/certification/Fahad785/responsive-web-design',
            liveDemoLink: '#',
        },
        {
            image:'images/certificates/intro-to-python.png',
            title:'Intro to Python',
            tags:['Python','Problem Solving','Programming Language'],
            category:['data science'],
            githubLink:'https://www.datacamp.com/completed/statement-of-accomplishment/course/e4540d6a5b2e9ca52e0016c3413aebb752c1ebbd',
            liveDemoLink:'#',
        },
        {
            image:'images/certificates/EDA.png',
            title:'Exploratary Data Analysis In Python',
            tags:['Python','Data Visualization','Data Analysis'],
            category:['featured','data science'],
            githubLink:'https://www.datacamp.com/completed/statement-of-accomplishment/course/8196a10f16e23c773fae6d00088d25beb51c8104',
            liveDemoLink:'#',
        },
        {
            image:'images/certificates/efficient-code-in-python.png',
            title:'Writing Efficient Code In Python',
            tags:['Python','Code Efficiency','Clean & Readable code '],
            category:['data science'],
            githubLink:'https://www.datacamp.com/completed/statement-of-accomplishment/course/ae42b40c211f763da228c1d3b1c9829462c78ea0',
            liveDemoLink:'#',
        },

        {
            image: 'images/certificates/linux1.png',
            title: 'Intro to Linux',
            tags: ['Linux', 'Operating Systems', 'Shell'],
            category: ['OS'],
            githubLink: 'https://www.coursera.org/account/accomplishments/verify/ZRYVDT6YJU6D',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/linux2.png',
            title: 'Command Line Basics',
            tags: ['Command Line', 'Bash', 'Shell Scripting'],
            category: ['OS'],
            githubLink: 'https://www.coursera.org/account/accomplishments/verify/N5QLPPSVZQV6',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-1.png',
            title: 'Intro to SQL',
            tags: ['SQL', 'Databases', 'Queries'],
            category: ['sql'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/888118d23ea2cd1a288f0a62ac219d50ad1a1667',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-2.png',
            title: 'Intermediate SQL',
            tags: ['SQL', 'Joins', 'Subqueries'],
            category: ['sql'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a96813db410ec0927ac9b9108e0bc4cd0d3a0154',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-3.png',
            title: 'Joining in SQL',
            tags: ['SQL', 'Joins', 'Data Analysis'],
            category: ['sql'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/6056563c8c96ed27399b8e325327821eb04b96f7',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/wordpress.png',
            title: 'WordPress Development',
            tags: ['WordPress', 'CMS', 'Web Development'],
            category: ['web'],
            githubLink: 'https://www.rfgul.live/images/certificates/wordpress.png',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/freelancing.png',
            title: 'Freelancing',
            tags: ['Freelancing', 'Business', 'Client Management'],
            category: ['other'],
            githubLink: 'https://www.rfgul.live/images/certificates/freelancing.png',
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
            githubLink: 'images/certificates/calligraphy.jpg',
            liveDemoLink: '',
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
        { label: 'Data Science', value: 'data science' },
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
        <Heading heading={"Certifications"} subHeading={`Certifications I Have ${certificateData.length}`}/>
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
                    />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
