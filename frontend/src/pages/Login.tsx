// import React, { useState } from 'react';
// import { Roles } from '../models/role';
// import { login } from '../services/authService';
// import { useNavigate } from 'react-router-dom';

// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await login({ username, password, name: '', role: Roles.USER });
//       navigate('/profile');
//     } catch {
//       setErrorMessage('Username or password is incorrect.');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
//         <form onSubmit={handleSubmit}>
//           {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
//           </div>
//           <button type="submit" className="btn btn-danger w-100 mt-3">Sign In</button>
//         </form>
//         <button className="btn btn-link" style={{ color: 'darkgray' }} onClick={() => navigate('/register')}>Create new account!</button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Roles } from '../models/role';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password, name: '', role: Roles.USER });
      navigate('/profile');
    } catch {
      setErrorMessage('Username or password is incorrect.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Sign In</h2>
            <p className="mt-2 text-gray-400">Enter your credentials to access your account</p>
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
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-red-500/20"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/register')}
              className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
            >
              Don't have an account? Create one now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;