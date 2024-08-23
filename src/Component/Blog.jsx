

import React, { useState } from 'react';
import Card from './Card';

const Blog = () => {
    
    const booksData = [
        {
            key: '1',
            image: 'https:m.media-amazon.com/images/I/41p6yRHyKjL._SY445_SX342_.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'https:m.media-amazon.com/images/I/41p6yRHyKjL._SY445_SX342_.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'https:m.media-amazon.com/images/I/41p6yRHyKjL._SY445_SX342_.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'https:m.media-amazon.com/images/I/41p6yRHyKjL._SY445_SX342_.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
        {
            key: '1',
            image: 'https:m.media-amazon.com/images/I/41p6yRHyKjL._SY445_SX342_.jpg',
            title: 'My Brother',
            tags: ['Fatima Jinnah', '22 Aug 2023']
        },
    ]

    return (
        <div id='bookReviews' className="p-4">
            <div className="text-center mb-12">
                <h2 className="text-lg text-gray-600 mb-2">Books I Read</h2>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Book Reviews</h1>
            </div>
            <div className="flex flex-wrap  justify-center">
                {booksData.map((blog, index) => (
                    <Card
                        className="border border-black border-opacity-60"
                        key={index}
                        image={blog.image}
                        title={blog.title}
                        btnText={'Read More'}
                        btn2Text={false}
                        tags={blog.tags}
                        btn1Url={blog.githubLink}
                        btn2Url={blog.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;
