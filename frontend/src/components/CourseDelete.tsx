// import React from 'react';

// interface Props {
//   onConfirm: () => void;
//   onClose: () => void;
// }

// const CourseDelete: React.FC<Props> = ({ onConfirm, onClose }) => (
//   <div className="modal show d-block" tabIndex={-1}>
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title">Confirmation</h5>
//           <button type="button" className="btn-close" onClick={onClose}></button>
//         </div>
//         <div className="modal-body">
//           Are you sure to delete the selected course?
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
//           <button type="button" className="btn btn-danger" onClick={onConfirm}>I'm sure!</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default CourseDelete;

import React from 'react';

interface Props {
  onConfirm: () => void;
  onClose: () => void;
}

const CourseDelete: React.FC<Props> = ({ onConfirm, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h3 className="text-xl font-semibold text-white">Confirm Deletion</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            &times;
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-900/20 rounded-full">
            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-300 text-center mb-6">Are you sure you want to delete this course? This action cannot be undone.</p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CourseDelete;