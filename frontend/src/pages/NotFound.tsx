// import React from 'react';

// const NotFound: React.FC = () => (
//   <div className="container">
//     <div className="row">
//       <div className="col-md-12 text-center">
//         <span className="display-1">404</span>
//         <div className="mb-4 lead">Oops! We can't seem to find the page you are looking for.</div>
//         <a href="/home" className="btn btn-link">Back to Home</a>
//       </div>
//     </div>
//   </div>
// );

// export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-lg w-full text-center">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* 404 Number */}
        <span className="text-9xl font-bold text-white opacity-20">404</span>
        
        {/* Main Message */}
        <h1 className="text-3xl font-bold text-white mt-4">Page Not Found</h1>
        
        {/* Description */}
        <p className="text-gray-400 text-lg mt-4">
          Oops! We can't seem to find the page you are looking for.
        </p>
        
        {/* Decorative Icon */}
        <div className="my-8">
          <svg 
            className="w-24 h-24 mx-auto text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        
        {/* Back to Home Button */}
        <Link 
          to="/home" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-indigo-500/20"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
          Back to Home
        </Link>
      </div>
      
      {/* Additional Help Text */}
      <p className="text-gray-500 text-sm mt-6">
        If you believe this is an error, please contact support.
      </p>
    </div>
  </div>
);

export default NotFound;