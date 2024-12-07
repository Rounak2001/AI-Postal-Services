import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 w-full  bg-blue-600 text-white py-4 px-6 shadow-md z-10 flex items-center">
          <Link to="/">
        <img
          src="\Mindmail logo.jpg" // Path to your logo image
          alt="Logo"
          className="h-10 w-10 mr-4" // Adjust height and width as needed
        />
      </Link>
      <h1 className="text-2xl font-bold"> MailMind: The AI Postmaster</h1>
    </header>
  );
};

export default Header;



// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-blue-600 text-white py-4 px-6 fixed top-0 left-0 w-full z-10">
//       <nav className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">AI-Powered Postal System</h1>
//         <ul className="flex space-x-4">
//           <li><a href="/" className="hover:underline">Home</a></li>
//           <li><a href="/operator-login" className="hover:underline">Operator Login</a></li>
//           <li><a href="/register" className="hover:underline">Register</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

