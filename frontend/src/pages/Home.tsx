// import React, { useEffect, useState } from 'react';
// import { getAllCourses } from '../services/courseService';
// import type { Course } from '../models/course';
// import { getCurrentUser } from '../services/authService';
// import { createPayment } from '../services/razorpayService';
// import { confirmPaymentSuccess } from '../services/purchaseService';
// import type { Purchase } from '../models/purchase';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

// const Home: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [infoMessage, setInfoMessage] = useState('');

//   useEffect(() => {
//     getAllCourses().then(setCourses).catch(() => setErrorMessage('Failed to load courses'));
//   }, []);

//   const purchase = async (course: Course) => {
//     const user = getCurrentUser();
//     if (!user?.id) {
//       setErrorMessage('You should login to buy a course');
//       return;
//     }
//     try {
//       const orderRes = await createPayment(course.price);
//       const order = orderRes.data;
//       const options = {
//         key: 'rzp_test_62PkGMZ4214nuj',
//         amount: order.amount,
//         currency: order.currency,
//         name: 'Online Course Seller',
//         description: course.title,
//         order_id: order.id,
//         handler: async (response: any) => {
//           const purchaseObj: Purchase = {
//             userId: user.id,
//             courseId: course.id,
//             title: course.title,
//             price: course.price,
//           };
//           await confirmPaymentSuccess(
//             purchaseObj,
//             response.razorpay_payment_id,
//             response.razorpay_order_id,
//             response.razorpay_signature
//           );
//           setInfoMessage('Purchase successful!');
//         },
//         theme: { color: '#3399cc' },
//       };
//       // @ts-ignore
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch {
//       setErrorMessage('Payment failed');
//     }
//   };

//   return (
//     <div className="container p-3">
//       {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//       {infoMessage && <div className="alert alert-success">{infoMessage}</div>}
//       <div className="d-flex flex-wrap">
//         {courses.map((item, ind) => (
//           <div key={item.id} className="card m-3" style={{ width: 300, backgroundColor: '#f8f7f7' }}>
//             <div className="card-body">
//               <h5 className="card-title text-uppercase">{item.title}</h5>
//               <div className="card-subtitle text-muted">{item.subtitle}</div>
//             </div>
//             <img src={item.thumbnailUrl} alt={item.title + ' thumbnail'} className="card-img-top" />
//             {/* <FontAwesomeIcon icon={faUserGraduate} className="ms-auto me-auto course-icon" /> */}
//             <div className="row mt-2 p-3">
//               <div className="col-6 mt-2 ps-4">₹{item.price}</div>
//               <div className="col-6">
//                 <button className="btn btn-outline-success w-100" onClick={() => purchase(item)}>
//                   Buy
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { getAllCourses } from '../services/courseService';
// import type { Course } from '../models/course';
// import { getCurrentUser } from '../services/authService';
// import { createPayment } from '../services/razorpayService';
// import { confirmPaymentSuccess } from '../services/purchaseService';
// import type { Purchase } from '../models/purchase';

// const Home: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [infoMessage, setInfoMessage] = useState('');

//   useEffect(() => {
//     getAllCourses().then(setCourses).catch(() => setErrorMessage('Failed to load courses'));
//   }, []);

//   const purchase = async (course: Course) => {
//     const user = getCurrentUser();
//     if (!user?.id) {
//       setErrorMessage('You should login to buy a course');
//       return;
//     }
//     try {
//       const orderRes = await createPayment(course.price);
//       const order = orderRes.data;
//       const options = {
//         key: 'rzp_test_62PkGMZ4214nuj',
//         amount: order.amount,
//         currency: order.currency,
//         name: 'Online Course Seller',
//         description: course.title,
//         order_id: order.id,
//         handler: async (response: any) => {
//           const purchaseObj: Purchase = {
//             userId: user.id,
//             courseId: course.id,
//             title: course.title,
//             price: course.price,
//           };
//           await confirmPaymentSuccess(
//             purchaseObj,
//             response.razorpay_payment_id,
//             response.razorpay_order_id,
//             response.razorpay_signature
//           );
//           setInfoMessage('Purchase successful!');
//         },
//         theme: { color: '#3399cc' },
//       };
//       // @ts-ignore
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch {
//       setErrorMessage('Payment failed');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6">
//       {/* Messages */}
//       {errorMessage && (
//         <div className="mb-6 flex items-center justify-between bg-red-900/30 text-red-200 px-4 py-3 rounded-lg border border-red-800/50">
//           <div className="flex items-center">
//             <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//             </svg>
//             <span>{errorMessage}</span>
//           </div>
//           <button 
//             onClick={() => setErrorMessage('')} 
//             className="text-red-400 hover:text-red-300 transition-colors text-xl"
//           >
//             &times;
//           </button>
//         </div>
//       )}
      
//       {infoMessage && (
//         <div className="mb-6 flex items-center justify-between bg-green-900/30 text-green-200 px-4 py-3 rounded-lg border border-green-800/50">
//           <div className="flex items-center">
//             <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//             </svg>
//             <span>{infoMessage}</span>
//           </div>
//           <button 
//             onClick={() => setInfoMessage('')} 
//             className="text-green-400 hover:text-green-300 transition-colors text-xl"
//           >
//             &times;
//           </button>
//         </div>
//       )}

//       {/* Courses Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {courses.map((item) => (
//           <div key={item.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             {/* Course Image */}
//             <div className="h-48 overflow-hidden">
//               <img 
//                 src={item.thumbnailUrl} 
//                 alt={item.title + ' thumbnail'} 
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {/* Course Content */}
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{item.title}</h3>
//               <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.subtitle}</p>
              
//               {/* Price and Buy Button */}
//               <div className="flex items-center justify-between mt-4">
//                 <span className="text-2xl font-bold text-green-400">₹{item.price}</span>
//                 <button 
//                   onClick={() => purchase(item)}
//                   className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/20"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {courses.length === 0 && !errorMessage && (
//         <div className="flex flex-col items-center justify-center py-20 text-gray-500">
//           <svg className="w-16 h-16 mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//           </svg>
//           <p className="text-lg font-medium mb-2">No courses available</p>
//           <p className="text-gray-400">Check back later for new courses</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import { getAllCourses } from '../services/courseService';
// import type { Course } from '../models/course';
// import { getCurrentUser } from '../services/authService';
// import { createCheckoutSession } from '../services/purchaseService';
// import type { Purchase } from '../models/purchase';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";


// // Load Stripe (use your public key from .env)
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// const Home: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [infoMessage, setInfoMessage] = useState('');

//   useEffect(() => {
//     getAllCourses()
//       .then(setCourses)
//       .catch(() => setErrorMessage('Failed to load courses'));
//   }, []);

//   const purchase = async (course: Course) => {
//     const user = getCurrentUser();
//     if (!user?.id) {
//       setErrorMessage('You should login to buy a course');
//       return;
//     }
//     try {
//       const purchaseObj: Purchase = {
//         userId: user.id,
//         courseId: course.id,
//         title: course.title,
//         price: course.price,
//       };

//       // 1. Ask backend to create a Checkout session
//       const sessionRes = await createCheckoutSession(purchaseObj);
//       const { id: sessionId } = sessionRes.data;

//       // 2. Redirect to Stripe Checkout
//       const stripe = await stripePromise;
//       if (!stripe) throw new Error("Stripe.js failed to load");
//       await stripe.redirectToCheckout({ sessionId });

//     } catch (err) {
//       console.error(err);
//       setErrorMessage('Payment initialization failed');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6">
//       {/* Error message */}
//       {errorMessage && (
//         <div className="mb-6 bg-red-900/30 text-red-200 px-4 py-3 rounded-lg border border-red-800/50 flex justify-between">
//           <span>{errorMessage}</span>
//           <button onClick={() => setErrorMessage('')}>×</button>
//         </div>
//       )}
//       {/* Success message */}
//       {infoMessage && (
//         <div className="mb-6 bg-green-900/30 text-green-200 px-4 py-3 rounded-lg border border-green-800/50 flex justify-between">
//           <span>{infoMessage}</span>
//           <button onClick={() => setInfoMessage('')}>×</button>
//         </div>
//       )}

//       {/* Courses grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {courses.map((item) => (
//           <div
//             key={item.id}
//             className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={item.thumbnailUrl}
//                 alt={item.title + ' thumbnail'}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
//                 {item.title}
//               </h3>
//               <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.subtitle}</p>
//               <div className="flex items-center justify-between mt-4">
//                 <span className="text-2xl font-bold text-green-400">₹{item.price}</span>
//                 <button
//                   onClick={() => purchase(item)}
//                   className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/20"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {courses.length === 0 && !errorMessage && (
//         <div className="flex flex-col items-center justify-center py-20 text-gray-500">
//           <p className="text-lg font-medium mb-2">No courses available</p>
//           <p className="text-gray-400">Check back later for new courses</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../services/courseService';
import type { Course } from '../models/course';
import { getCurrentUser } from '../services/authService';
import { createCheckoutSession } from '../services/purchaseService';
import type { Purchase } from '../models/purchase';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Load Stripe (use your public key from .env)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// ----------------- Demo Stripe Modal -----------------
interface StripeDemoModalProps {
  courseTitle: string;
  amount: number;
  onClose: () => void;
}

const StripeDemoModal: React.FC<StripeDemoModalProps> = ({ courseTitle, amount, onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [message, setMessage] = useState('');

  const handlePay = () => setMessage("Payment successful! (Demo only)");

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <h2 className="text-xl font-bold mb-4">Pay for {courseTitle}</h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />

        <button
          onClick={handlePay}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-2"
        >
          Pay ₹{amount}
        </button>

        {message && <p className="text-green-600 mb-2">{message}</p>}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

// ----------------- Home Component -----------------
const Home: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [demoCourse, setDemoCourse] = useState<Course | null>(null);

  useEffect(() => {
    getAllCourses()
      .then(setCourses)
      .catch(() => setErrorMessage('Failed to load courses'));
  }, []);

  const purchase = async (course: Course) => {
    const user = getCurrentUser();
    if (!user?.id) {
      setErrorMessage('You should login to buy a course');
      return;
    }

    // Open demo Stripe UI
    setDemoCourse(course);

    // Actual backend call can remain here for real payment
    try {
      const purchaseObj: Purchase = {
        userId: user.id,
        courseId: course.id,
        title: course.title,
        price: course.price,
      };

      const sessionRes = await createCheckoutSession(purchaseObj);
      const { id: sessionId } = sessionRes.data;

      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe.js failed to load");
      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error(err);
      setErrorMessage('Payment initialization failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Messages */}
      {errorMessage && (
        <div className="mb-6 bg-red-900/30 text-red-200 px-4 py-3 rounded-lg border border-red-800/50 flex justify-between">
          <span>{errorMessage}</span>
          <button onClick={() => setErrorMessage('')}>×</button>
        </div>
      )}
      {infoMessage && (
        <div className="mb-6 bg-green-900/30 text-green-200 px-4 py-3 rounded-lg border border-green-800/50 flex justify-between">
          <span>{infoMessage}</span>
          <button onClick={() => setInfoMessage('')}>×</button>
        </div>
      )}

      {/* Courses grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.thumbnailUrl}
                alt={item.title + ' thumbnail'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.subtitle}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-green-400">₹{item.price}</span>
                <button
                  onClick={() => purchase(item)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/20"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && !errorMessage && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <p className="text-lg font-medium mb-2">No courses available</p>
          <p className="text-gray-400">Check back later for new courses</p>
        </div>
      )}

      {/* Stripe Demo Modal */}
      {demoCourse && (
        <StripeDemoModal
          courseTitle={demoCourse.title}
          amount={demoCourse.price}
          onClose={() => setDemoCourse(null)}
        />
      )}
    </div>
  );
};

export default Home;
