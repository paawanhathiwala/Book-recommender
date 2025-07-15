import React from 'react'
import  { useState } from 'react';
import axios from 'axios';


const Recommend = () => {
   const [book, setBook] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/recommend', { book });
      setRecommendations(res.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <div className="p-6 flex items-center justify-center">
      <input
        type="text"
        placeholder="Enter a book name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        className="border px-4 py-2 mr-2"
      />
      <button onClick={handleRecommend} className="bg-blue-500 text-white px-4 py-2">Get Recommendations</button>

     
    </div>

     <div className="mt-6 grid  grid-cols-3 gap-4 mx-32">
        {recommendations.map((rec, index) => (
          <div key={index} className='flex flex-col items-center shadow-md shadow-slate-300 w-60'>
            <img src={rec.image} alt={rec.title} className="h-40 mx-auto" />
            <h2 className="font-bold mt-2">{rec.title}</h2>
            <p className="text-gray-600">{rec.author}</p>
          </div>
        ))}
      </div>
      </div>
  );
};



export default Recommend