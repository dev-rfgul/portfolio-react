// import React, { useState, useEffect } from 'react';
// import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa';
// import Heading from './Heading'
// const Contact = () => {
//     // Define initial colors and transitions

//     const [iconColor,setIconColor]=useState({
//         linkedin: 'black',
//         github: 'black',
//         twitter: 'black',
//         facebook: 'black',
//         instagram: 'black',
//         youtube: 'black',
//         whatsapp: 'black',
//         phone: 'black'
//     })

//     const colors = {
//         linkedin: '#0077b5',
//         github: '#333',
//         twitter: '#1da1f2',
//         facebook: '#1877f2',
//         instagram: '#e4405f',
//         youtube: '#ff0000',
//         whatsapp: '#25d366',
//         phone: '#007bff'
//     };

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setIconColor(prevColors => {
//                 const newColors = {};
//                 Object.keys(prevColors).forEach(key => {
//                     // Toggle between black and respective color
//                     newColors[key] = prevColors[key] === 'black' ? colors[key] : 'black';
//                 });
//                 return newColors;
//             });
//         }, 1000); // Change every 1 second

//         return () => clearInterval(intervalId); // Cleanup on unmount
//     }, []);

//     return (
//         <div id='contact' className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
//             <Heading heading="Let's Connect " subHeading={"Ask or tell Something "}/>
//             <p className="text-lg mb-12 text-gray-700 max-w-md text-center">
//                 Feel free to reach out to me on any of the following platforms. I look forward to connecting with you!
//             </p>
//             <div className="flex space-x-8">
//                 <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin className="text-5xl" style={{ color: iconColor.linkedin }} />
//                 </a>
//                 <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
//                     <FaGithub className="text-5xl" style={{ color: iconColor.github }} />
//                 </a>
//                 <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
//                     <FaTwitter className="text-5xl" style={{ color: iconColor.twitter }} />
//                 </a>
//                 <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
//                     <FaFacebook className="text-5xl" style={{ color: iconColor.facebook }} />
//                 </a>
//                 <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
//                     <FaInstagram className="text-5xl" style={{ color: iconColor.instagram }} />
//                 </a>
//                 <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer">
//                     <FaYoutube className="text-5xl" style={{ color: iconColor.youtube }} />
//                 </a>
//                 <a href="https://wa.me/yourprofile" target="_blank" rel="noopener noreferrer">
//                     <FaWhatsapp className="text-5xl" style={{ color: iconColor.whatsapp }} />
//                 </a>
//                 <a href="tel:+923000000000">
//                     <FaPhone className="text-5xl" style={{ color: iconColor.phone }} />
//                 </a>
//             </div>
//             <p className="text-sm text-gray-500 mt-12">© 2024 Dev RF-GUL . All rights reserved.</p>
//         </div>
//     );
// };

// export default Contact;


import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa';
import Heading from './Heading';

const Contact = () => {
    // Define initial colors and transitions

    const [iconColor, setIconColor] = useState({
        linkedin: 'black',
        github: 'black',
        twitter: 'black',
        facebook: 'black',
        instagram: 'black',
        youtube: 'black',
        whatsapp: 'black',
        phone: 'black'
    });

    const colors = {
        linkedin: '#0077b5',
        github: '#333',
        twitter: '#1da1f2',
        facebook: '#1877f2',
        instagram: '#e4405f',
        youtube: '#ff0000',
        whatsapp: '#25d366',
        phone: '#007bff'
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconColor(prevColors => {
                const newColors = {};
                Object.keys(prevColors).forEach(key => {
                    // Toggle between black and respective color
                    newColors[key] = prevColors[key] === 'black' ? colors[key] : 'black';
                });
                return newColors;
            });
        }, 1000); // Change every 1 second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div id='contact' className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-12 lg:p-24">
            <Heading heading="Let's Connect" subHeading={"Ask or tell Something"} />
            <p className="text-lg mb-6 md:mb-12 text-gray-700 max-w-md text-center">
                Feel free to reach out to me on any of the following platforms. I look forward to connecting with you!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.linkedin }} />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.github }} />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.twitter }} />
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.facebook }} />
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.instagram }} />
                </a>
                <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.youtube }} />
                </a>
                <a href="https://wa.me/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.whatsapp }} />
                </a>
                <a href="tel:+923000000000">
                    <FaPhone className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.phone }} />
                </a>
            </div>
            <p className="text-sm text-gray-500 mt-6 md:mt-12">© 2024 Dev RF-GUL. All rights reserved.</p>
        </div>
    );
};

export default Contact;
