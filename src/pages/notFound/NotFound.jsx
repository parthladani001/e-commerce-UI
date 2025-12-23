import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black flex flex-col">

      <div className="py-10 px-4 md:px-16 lg:px-24">
        <nav className="text-sm">
          <span className="text-gray-400">Home</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium">404 Error</span>
        </nav>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center pb-32">
        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-widest mb-6">
          404 Not Found
        </h1>
        
        <p className="text-sm md:text-base text-gray-800 mb-12">
          Your visited page not found. You may go home page.
        </p>

        <Link 
            to="/"
          className="bg-[#DB4444] text-white px-10 py-4 rounded-sm font-medium hover:bg-[#c13b3b] transition-colors"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;