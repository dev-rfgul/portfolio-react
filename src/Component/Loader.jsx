import React, { useEffect, useState } from "react";

const LoaderComponent = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        //    Progress bar animation
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);
    return (
        <div
            id="loader"
            className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${progress === 100 ? "opacity-0 invisible" : "opacity-100"
                }`}
        >
            {/* Logo */}
            <img
                id="logo"
                src="/logo.svg"
                alt="DEV RF-GUL Logo"
                className="w-72 h-72 animate-fadeInOut"
            />


            <div
                id="welcome-msg"
                className="text-white text-4xl mt-4 text-center font-poppins transition-opacity duration-1000 ease-in-out opacity-100"
            >
                Welcome to RF GUL's Portfolio
            </div>

            {/* Progress Container */}
            <div
                id="progress-container"
                className="w-4/5 h-5 mt-8 bg-gray-800 rounded-lg overflow-hidden"
            >
                {/* Progress Bar */}
                <div
                    id="progress-bar"
                    style={{ width: `${progress}%` }}
                    className="h-full bg-white rounded-lg transition-all duration-500"
                ></div>
            </div>

            {/* Progress Number */}
            <div
                id="progress-number"
                className="text-white text-xl mt-3 font-poppins"
            >
                {progress}%
            </div>
        </div>
    );
};

export default LoaderComponent;