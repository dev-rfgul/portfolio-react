import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Get the current count from localStorage
        const storedCount = localStorage.getItem('visitorCount');

        // If there's a count stored, set it as the initial count
        if (storedCount) {
            setCount(Number(storedCount));
        }

        // Increment the count and update localStorage
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem('visitorCount', newCount);
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="text-center my-4 p-4 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Visitor Counter</h2>
            <p className="text-lg">Total Visitors: {count}</p>
        </div>
    );
};

export default VisitorCounter;
