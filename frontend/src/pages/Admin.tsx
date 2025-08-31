// import React, { useEffect, useState } from 'react';
// import { getAllCourses, saveCourse, deleteCourse } from '../services/courseService';
// import type { Course } from '../models/course';
// import CourseSave from '../components/CourseSave';
// import CourseDelete from '../components/CourseDelete';
// import { getCurrentUser } from '../services/authService';

// const Admin: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//   const [showSaveModal, setShowSaveModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   useEffect(() => {
//     // Ensure token is set in Axios on page load
//     getCurrentUser();
//     getAllCourses().then(setCourses).catch(() => setErrorMessage('Failed to load courses'));
//   }, []);

//   // Modal logic
//   const createCourseRequest = () => {
//     setSelectedCourse({ title: '', subtitle: '', price: 0 });
//     setShowSaveModal(true);
//   };
//   const editCourseRequest = (item: Course) => {
//     setSelectedCourse({ ...item });
//     setShowSaveModal(true);
//   };
//   const deleteCourseRequest = (item: Course) => {
//     setSelectedCourse(item);
//     setShowDeleteModal(true);
//   };

//   const handleSaveCourse = async (course: Course, thumbnail?: File | null) => {
//     console.log('Saving course:', course);
//     try {
//       const res = await saveCourse(course, thumbnail);
//       console.log('Save response:', res);
//       if (course.id) {
//         // Edit: update course in list
//         setCourses(prev => prev.map(c => c.id === res.data.id ? res.data : c));
//       } else {
//         // Create: add new course
//         setCourses(prev => [...prev, res.data]);
//       }
//       setShowSaveModal(false);
//       setSelectedCourse(null);
//     } catch (err) {
//       console.error('Save error:', err);
//       setErrorMessage('Unexpected error occurred.');
//     }
//   };

//   const handleDeleteCourse = async () => {
//     if (!selectedCourse) return;
//     console.log('Deleting course:', selectedCourse);
//     try {
//       const res = await deleteCourse(selectedCourse.id!);
//       console.log('Delete response:', res);
//       setCourses(courses.filter(c => c.id !== selectedCourse.id));
//       setShowDeleteModal(false);
//       setSelectedCourse(null);
//     } catch (err) {
//       console.error('Delete error:', err);
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
//               <h3>All Courses</h3>
//             </div>
//             <div className="col-6 text-end">
//               <button className="btn btn-primary" onClick={createCourseRequest}>Create Course</button>
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
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courses.map((item, ind) => (
//                 <tr key={item.id}>
//                   <th>{ind + 1}</th>
//                   <td>{item.title}</td>
//                   <td>₹{item.price}</td>
//                   <td>{item.createTime ? new Date(item.createTime).toLocaleString() : ''}</td>
//                   <td>
//                     <button className="btn btn-primary me-1" onClick={() => editCourseRequest(item)}>Edit</button>
//                     <button className="btn btn-danger" onClick={() => deleteCourseRequest(item)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {showSaveModal && selectedCourse && (
//         <CourseSave
//           course={selectedCourse}
//           onSave={handleSaveCourse}
//           onClose={() => {
//             setShowSaveModal(false);
//             setSelectedCourse(null);
//           }}
//         />
//       )}
//       {showDeleteModal && selectedCourse && (
//         <CourseDelete
//           onConfirm={handleDeleteCourse}
//           onClose={() => {
//             setShowDeleteModal(false);
//             setSelectedCourse(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Admin;
import React, { useEffect, useState } from 'react';
import { getAllCourses, saveCourse, deleteCourse } from '../services/courseService';
import type { Course } from '../models/course';
import CourseSave from '../components/CourseSave';
import CourseDelete from '../components/CourseDelete';
import { getCurrentUser } from '../services/authService';

const Admin: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        // Ensure token is set in Axios on page load
        await getCurrentUser();
        const coursesData = await getAllCourses();
        setCourses(coursesData);
      } catch (error) {
        setErrorMessage('Failed to load courses');
        console.error('Error loading courses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCourses();
  }, []);

  // Modal logic
  const createCourseRequest = () => {
    setSelectedCourse({ title: '', subtitle: '', price: 0 });
    setShowSaveModal(true);
  };
  
  const editCourseRequest = (item: Course) => {
    setSelectedCourse({ ...item });
    setShowSaveModal(true);
  };
  
  const deleteCourseRequest = (item: Course) => {
    setSelectedCourse(item);
    setShowDeleteModal(true);
  };

  const handleSaveCourse = async (course: Course, thumbnail?: File | null) => {
    console.log('Saving course:', course);
    try {
      const res = await saveCourse(course, thumbnail);
      console.log('Save response:', res);
      if (course.id) {
        // Edit: update course in list
        setCourses(prev => prev.map(c => c.id === res.data.id ? res.data : c));
      } else {
        // Create: add new course
        setCourses(prev => [...prev, res.data]);
      }
      setShowSaveModal(false);
      setSelectedCourse(null);
    } catch (err) {
      console.error('Save error:', err);
      setErrorMessage('Unexpected error occurred.');
    }
  };

  const handleDeleteCourse = async () => {
    if (!selectedCourse) return;
    console.log('Deleting course:', selectedCourse);
    try {
      const res = await deleteCourse(selectedCourse.id!);
      console.log('Delete response:', res);
      setCourses(courses.filter(c => c.id !== selectedCourse.id));
      setShowDeleteModal(false);
      setSelectedCourse(null);
    } catch (err) {
      console.error('Delete error:', err);
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
          <h2 className="text-2xl font-bold text-white">Course Management</h2>
          <p className="text-gray-400 mt-1">Create and manage your courses</p>
        </div>
        <button 
          onClick={createCourseRequest}
          className="mt-4 sm:mt-0 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-indigo-500/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Course
        </button>
      </div>
      
      {/* Courses Table */}
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date Created</th>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
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
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <div className="h-8 w-8 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-8 w-8 bg-gray-700 rounded animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : courses.length > 0 ? (
                courses.map((item, ind) => (
                  <tr key={item.id} className="hover:bg-gray-750 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-300">{ind + 1}</td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-medium text-white">{item.title}</span>
                        {item.subtitle && (
                          <span className="text-sm text-gray-400 mt-1">{item.subtitle}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-green-400">₹{item.price}</td>
                    <td className="py-4 px-6 text-gray-400">
                      {item.createTime ? new Date(item.createTime).toLocaleString() : 'N/A'}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => editCourseRequest(item)}
                          className="p-2 bg-blue-900/30 hover:bg-blue-800/40 text-blue-300 hover:text-blue-200 rounded-lg transition-colors duration-200"
                          aria-label="Edit course"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteCourseRequest(item)}
                          className="p-2 bg-red-900/30 hover:bg-red-800/40 text-red-300 hover:text-red-200 rounded-lg transition-colors duration-200"
                          aria-label="Delete course"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 px-6 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="bg-gray-700 p-4 rounded-full mb-3">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium">No courses found</p>
                      <p className="mt-1">Create your first course to get started</p>
                      <button 
                        onClick={createCourseRequest}
                        className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Create Course
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Modals */}
      {showSaveModal && selectedCourse && (
        <CourseSave
          course={selectedCourse}
          onSave={handleSaveCourse}
          onClose={() => {
            setShowSaveModal(false);
            setSelectedCourse(null);
          }}
        />
      )}
      
      {showDeleteModal && selectedCourse && (
        <CourseDelete
          onConfirm={handleDeleteCourse}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedCourse(null);
          }}
        />
      )}
    </div>
  );
};

export default Admin;