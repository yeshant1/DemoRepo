// import React from 'react';
// import AppRouter from './routes/AppRouter';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CourseBuddy from './CourseBuddy';

// const App: React.FC = () => {
//   return
//   (
//     <>
//      <AppRouter />;
//   <CourseBuddy />
//   </>
//   );
// };

// export default App;

import React from 'react';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

import CourseBuddy from './components/CourseBuddy';

const App: React.FC = () => {
  return (
    <>
      <AppRouter />
      <CourseBuddy />
    </>
  );
};

export default App;
