// import React, { useEffect, useState } from 'react';
// import { getAllPurchaseItems } from '../services/purchaseService';
// import { getCurrentUser, logout } from '../services/authService';
// import { changeRole } from '../services/userService';
// import { useNavigate } from 'react-router-dom';
// import type { Purchase } from '../models/purchase';
// import { Roles } from '../models/role';

// const Profile: React.FC = () => {
//   const [purchaseList, setPurchaseList] = useState<Purchase[]>([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [currentUser, setCurrentUser] = useState(getCurrentUser());
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCurrentUser(getCurrentUser());
//     getAllPurchaseItems().then(res => setPurchaseList(res.data)).catch(() => setErrorMessage('Failed to load purchases'));
//   }, []);

//   const handleChangeRole = async () => {
//     const newRole = currentUser?.role === Roles.ADMIN ? Roles.USER : Roles.ADMIN;
//     try {
//       await changeRole(newRole);
//       logout();
//       navigate('/login');
//     } catch {
//       setErrorMessage('Unexpected error occurred.');
//     }
//   };

//   return (
//     <div className="container pt-5">
//       {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//       <div className="card">
//         <div className="card-header">
//           <div className="row">
//             <div className="col-6">
//               <h3>All Purchased Items</h3>
//             </div>
//             <div className="col-6 text-end">
//               Current role is <strong>{currentUser?.role}</strong>
//               {/* <button className="btn btn-primary" onClick={handleChangeRole}>Change Role</button> */}
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {purchaseList.map((item, ind) => (
//                 <tr key={item.id}>
//                   <th>{ind + 1}</th>
//                   <td>{item.title}</td>
//                   <td>₹{item.price}</td>
//                   <td>{item.purchaseTime ? new Date(item.purchaseTime).toLocaleString() : ''}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import { getAllPurchaseItems } from '../services/purchaseService';
import { getCurrentUser, logout } from '../services/authService';
import { changeRole } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import type { Purchase } from '../models/purchase';
import { Roles } from '../models/role';

const Profile: React.FC = () => {
  const [purchaseList, setPurchaseList] = useState<Purchase[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUser(getCurrentUser());
    getAllPurchaseItems()
      .then(res => setPurchaseList(res.data))
      .catch(() => setErrorMessage('Failed to load purchases'))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChangeRole = async () => {
    const newRole = currentUser?.role === Roles.ADMIN ? Roles.USER : Roles.ADMIN;
    try {
      await changeRole(newRole);
      logout();
      navigate('/login');
    } catch {
      setErrorMessage('Unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 flex items-center justify-between bg-red-900/30 text-red-200 px-4 py-3 rounded-lg border border-red-800/50">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errorMessage}</span>
          </div>
          <button 
            onClick={() => setErrorMessage('')} 
            className="text-red-400 hover:text-red-300 transition-colors text-xl"
          >
            &times;
          </button>
        </div>
      )}
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 p-4 bg-gray-800 rounded-xl shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-white">Purchased Courses</h2>
          <p className="text-gray-400 mt-1">Your learning journey</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center">
          <span className="text-gray-300 mr-3">Current role:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            currentUser?.role === Roles.ADMIN 
              ? 'bg-purple-900/30 text-purple-300' 
              : 'bg-blue-900/30 text-blue-300'
          }`}>
            {currentUser?.role}
          </span>
          {/* Uncomment to enable role changing */
          <button 
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
            onClick={handleChangeRole}
          >
            Change Role
          </button>
          }
        </div>
      </div>
      
      {/* Purchases Table */}
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Purchase Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6"><div className="h-4 bg-gray-700 rounded animate-pulse"></div></td>
                    <td className="py-4 px-6"><div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div></td>
                    <td className="py-4 px-6"><div className="h-4 bg-gray-700 rounded animate-pulse w-1/4"></div></td>
                    <td className="py-4 px-6"><div className="h-4 bg-gray-700 rounded animate-pulse w-1/2"></div></td>
                  </tr>
                ))
              ) : purchaseList.length > 0 ? (
                purchaseList.map((item, ind) => (
                  <tr key={item.id} className="hover:bg-gray-750 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-300">{ind + 1}</td>
                    <td className="py-4 px-6 font-medium text-white">{item.title}</td>
                    <td className="py-4 px-6 font-semibold text-green-400">₹{item.price}</td>
                    <td className="py-4 px-6 text-gray-400">
                      {item.purchaseTime ? new Date(item.purchaseTime).toLocaleString() : 'N/A'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-12 px-6 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <svg className="w-16 h-16 mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <p className="text-lg font-medium">No purchases yet</p>
                      <p className="mt-1">Start learning by purchasing your first course</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;