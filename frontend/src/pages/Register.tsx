// import React, { useState } from 'react';
// import { Roles } from '../models/role';
// import { register } from '../services/authService';
// import { useNavigate } from 'react-router-dom';

// const Register: React.FC = () => {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await register({ name, username, password, role: Roles.USER });
//       navigate('/login');
//     } catch (err: any) {
//       if (err?.response?.status === 409) {
//         setErrorMessage('Username already exists.');
//       } else {
//         setErrorMessage('Unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
//         <form onSubmit={handleSubmit}>
//           {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
//           </div>
//           <button type="submit" className="btn btn-danger w-100 mt-3">Sign Up</button>
//         </form>
//         <button className="btn btn-link" style={{ color: 'darkgray' }} onClick={() => navigate('/login')}>I have an account!</button>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Roles } from '../models/role';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({ name, username, password, role: Roles.USER });
      navigate('/login');
    } catch (err: any) {
      if (err?.response?.status === 409) {
        setErrorMessage('Username already exists.');
      } else {
        setErrorMessage('Unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="mt-2 text-gray-400">Join us and start your learning journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="flex items-center bg-red-900/30 text-red-200 px-4 py-3 rounded-lg border border-red-800/50">
                <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-red-500/20"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
            >
              Already have an account? Sign in here!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;