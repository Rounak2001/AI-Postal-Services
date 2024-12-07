import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow pt-16">{children}</main>
//       <Footer />
//     </div>
//   );
// };


// console.log('Header rendered');
// console.log('Footer rendered');
// console.log('Layout rendered with children:', children);


// export default Layout;
