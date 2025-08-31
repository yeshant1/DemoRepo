// import React, { useState } from 'react';
// import type { Course } from '../models/course';
// import { saveCourse } from '../services/courseService';

// interface Props {
//   course: Course;
//   onSave: (course: Course, thumbnail?: File | null) => void;
//   onClose: () => void;
// }

// const CourseSave: React.FC<Props> = ({ course, onSave, onClose }) => {
//   const [title, setTitle] = useState(course.title);
//   const [subtitle, setSubtitle] = useState(course.subtitle);
//   const [price, setPrice] = useState(course.price);
//   const [thumbnail, setThumbnail] = useState<File | null>(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Require thumbnail for create, optional for edit
//     if (!course.id && !thumbnail) {
//       setErrorMessage('Thumbnail file is required.');
//       return;
//     }
//     try {
//       const newCourse: Course = { ...course, title, subtitle, price };
//       onSave(newCourse, thumbnail);
//       onClose();
//     } catch {
//       setErrorMessage('Unexpected error occurred.');
//     }
//   };

//   return (
//     <div className="modal show d-block" tabIndex={-1}>
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <form onSubmit={handleSubmit}>
//             <div className="modal-header">
//               <h5 className="modal-title">Course Details</h5>
//               <button type="button" className="btn-close" onClick={onClose}></button>
//             </div>
//             <div className="modal-body">
//               {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//               <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="subtitle">Subtitle</label>
//                 <input type="text" className="form-control" id="subtitle" value={subtitle} onChange={e => setSubtitle(e.target.value)} required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="price">Price</label>
//                 <input type="number" className="form-control" id="price" value={price} onChange={e => setPrice(Number(e.target.value))} required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="thumbnail">Thumbnail</label>
//                 <input type="file" className="form-control" id="thumbnail" onChange={e => setThumbnail(e.target.files?.[0] || null)} />
//                 {course.id && <small className="text-muted">Leave blank to keep existing thumbnail.</small>}
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
//               <button type="submit" className="btn btn-primary">Save Changes</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseSave;

import React, { useState } from 'react';
import type { Course } from '../models/course';
import { saveCourse } from '../services/courseService';

interface Props {
  course: Course;
  onSave: (course: Course, thumbnail?: File | null) => void;
  onClose: () => void;
}

const CourseSave: React.FC<Props> = ({ course, onSave, onClose }) => {
  const [title, setTitle] = useState(course.title);
  const [subtitle, setSubtitle] = useState(course.subtitle);
  const [price, setPrice] = useState(course.price);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Require thumbnail for create, optional for edit
    if (!course.id && !thumbnail) {
      setErrorMessage('Thumbnail file is required.');
      return;
    }
    try {
      const newCourse: Course = { ...course, title, subtitle, price };
      onSave(newCourse, thumbnail);
      onClose();
    } catch {
      setErrorMessage('Unexpected error occurred.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8">
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h3 className="text-xl font-semibold text-white">
              {course.id ? 'Edit Course' : 'Create Course'}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              &times;
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {errorMessage && (
              <div className="mb-4 flex items-center bg-red-900/30 text-red-200 px-4 py-3 rounded-lg">
                <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="title">Title</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="subtitle"
                value={subtitle}
                onChange={e => setSubtitle(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="price">Price</label>
              <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="price"
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="thumbnail">Thumbnail</label>
              <input
                type="file"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
                id="thumbnail"
                onChange={e => setThumbnail(e.target.files?.[0] || null)}
              />
              {course.id && (
                <p className="text-gray-400 text-sm mt-2">Leave blank to keep existing thumbnail.</p>
              )}
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseSave;