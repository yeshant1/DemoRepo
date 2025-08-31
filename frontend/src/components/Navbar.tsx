// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { getCurrentUser, logout } from '../services/authService';
// import type { Role } from '../models/role';
// import { Roles } from '../models/role';

// const Navbar: React.FC = () => {
//   const user = getCurrentUser();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar navbar-expand navbar-dark bg-dark">
//       <Link to="/home" className="navbar-brand ms-1">
//         <img width={40} alt="Course Logo" src="/favicon.ico" />
//         Apna Course Platform
//       </Link>
//       <div className="navbar-nav me-auto">
//         {user?.role === Roles.ADMIN && (
//           <div className="nav-item">
//             <Link to="/admin" className="nav-link">Admin</Link>
//           </div>
//         )}
//         <div className="nav-item">
//           <Link to="/home" className="nav-link">Home</Link>
//         </div>
//       </div>
//       {!user?.id ? (
//         <div className="navbar-nav ms-auto">
//           <div className="nav-item">
//             <Link to="/register" className="nav-link">Sign Up</Link>
//           </div>
//           <div className="nav-item">
//             <Link to="/login" className="nav-link">Sign In</Link>
//           </div>
//         </div>
//       ) : (
//         <div className="navbar-nav ms-auto">
//           <div className="nav-item">
//             <Link to="/profile" className="nav-link">{user.username}</Link>
//           </div>
//           <div className="nav-item">
//             <span className="nav-link" style={{ cursor: 'pointer' }} onClick={handleLogout}>Sign Out</span>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';
import type { Role } from '../models/role';
import { Roles } from '../models/role';

const Navbar: React.FC = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center text-white font-bold text-xl">
              <img width={40} alt="Course Logo" src="/favicon.ico" className="mr-2" />
              Apna Course Platform
            </Link>
            <div className="hidden md:flex items-center space-x-4 ml-8">
              {user?.role === Roles.ADMIN && (
                <Link 
                  to="/admin" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Admin
                </Link>
              )}
              <Link 
                to="/home" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            {!user?.id ? (
              <div className="flex space-x-4">
                <Link 
                  to="/register" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign Up
                </Link>
                <Link 
                  to="/login" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/profile" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {user.username}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {user?.role === Roles.ADMIN && (
            <Link 
              to="/admin" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Admin
            </Link>
          )}
          <Link 
            to="/home" 
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;