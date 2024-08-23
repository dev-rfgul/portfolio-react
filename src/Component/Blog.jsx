 import React, { useState } from 'react';
 const Blog = () => {

     const posts = [
         {
             id: 1,
             title: 'My Brother',
             description: 'This is a short description of the first blog post.',
             author: 'Fatima Jinnah',
             date: 'August 22, 2024',
             imageUrl: 'https:m.media-amazon.com/images/I/41p6yRHyKjL._SY445_SX342_.jpg',
         },
         {
             id: 2,
             title: 'In The Line Of Fire',
             author: 'Pervez Musharraf',
             description: 'This is a short description of the second blog post.',
             date: 'August 23, 2024',
             imageUrl: 'https:m.media-amazon.com/images/I/41bkKmrK6hL._SY445_SX342_.jpg',
         },
         {
             id: 3,
             title: '5 AM Club',
             author: 'Robin Sharma',
             description: 'This is a short description of the third blog post.',
             date: 'August 23, 2024',
             imageUrl: 'https:book-shelf.pk/cdn/shop/files/The5AMClub-Bookshelf.pkPakistan_720x.jpg?v=1701255152',
         },
         {
             id: 4,
             title: 'Atomic Habits',
             author: 'James Clear',
             description: 'This is a short description of the fourth blog post.',
             date: 'August 23, 2024',
             imageUrl: 'https:m.media-amazon.com/images/I/81YkqyaFVEL._SL1500_.jpg',
         },
     ];


     return (
         <div id='book-reviews' className="relative">
             <div className="max-w-6xl mx-auto p-4">
                 <h1 className="text-4xl font-bold text-center mb-8">Books I Read</h1>
                 <div className="grid md:grid-cols-3 gap-6">
                     {posts.map((post) => (
                         <div
                             key={post.id}
                             className="bg-white border-2 border-black border-opacity-60 rounded-lg shadow-md overflow-hidden"
                         >
                             <div className="relative w-full h-56">
                                 <img
                                     src={post.imageUrl}
                                     alt={post.title}
                                     className="absolute inset-0 w-full h-full object-contain"
                                 />
                             </div>
                             <div className="p-4">
                                 <h2 className="text-xl font-semibold mb-2 text-center">{post.title}</h2>
                                 <p className="text-sm font-bold text-gray-500 mb-2 text-center">{post.author}</p>
                                 <p className="text-sm text-gray-500 mb-2 text-center">{post.date}</p>
                                 <p className="text-gray-700 mb-4 text-center">{post.description}</p>
                                 <button
                                     onClick={() => handleReadMore(post)}
                                     className="text-blue-500 hover:underline block text-center"
                                 >
                                     Read more
                                 </button>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>


         </div>
     );
 };

 export default Blog;

