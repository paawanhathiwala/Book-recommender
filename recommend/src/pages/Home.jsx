import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/top-books')
      .then((res) => setBooks(res.data))
      .catch((err) => console.error('API error:', err));
  }, []);
  return (
    <div>
        <h1 className='font-semibold text-2xl m-6 text-center'>Highly rated Books</h1>
         <div className="mt-6 grid  grid-cols-3 gap-4 mx-28">
        {books.map((book, index) => (
          <div key={index} className='flex flex-col items-center shadow-md shadow-slate-300 w-60'>
            <img src={book['Image-URL-M']} alt={book['Book-Title']} className="h-40 object-contain mb-2 mx-auto" />
            <h2 className="font-semibold text-lg">{book['Book-Title']}</h2>
            <p className="text-sm text-gray-600">{book['Book-Author']}</p>
            <p className="text-sm text-gray-600">{book['num_ratings']}</p>
             <p className="text-sm text-gray-600">{book['avg_rating']}</p>
          </div>
        ))}
      </div>
         
    </div>
  )
}

export default Home