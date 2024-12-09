import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const textColor = { color: '#601301' };
  return (
    <div  style={{ backgroundColor: '#F2E7AE'}} className="min-h-screen  flex flex-col justify-center items-center">
      <header className="mb-8 text-center" style={textColor}>
        <h1 className="text-4xl font-bold">AI-Powered Postal System</h1>
        <p className="mt-4 text-lg">
          Enhance efficiency and accuracy in postal operations with our advanced AI-powered address and PIN code validation system. 
        </p>
      </header>

      <section className="flex flex-col items-center space-y-6 max-w-3xl text-center" style={textColor}>
        <p className="text-md px-6">
          Our system provides two main functionalities:
        </p>
        <ul className="list-disc text-left space-y-3">
          <li>
            <strong>Customer Interface:</strong> Validate your postal address and PIN code for accurate deliveries.
          </li>
          <li>
            <strong>Operator Dashboard:</strong> Manage, review, and approve address corrections for seamless postal operations.
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-col sm:flex-row gap-6" style={textColor}>
        <Link to="/customer">
          <button style={{ backgroundColor: '#391a06', color: '#F2E7AE'}}className="  font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition">
            Customer
          </button>
        </Link>
        <Link to="/operator-login">
          <button  style={{ backgroundColor: '#391a06', color: '#F2E7AE'}}  className=" font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition">
            Operator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// bg-gradient-to-r from-blue-400 to-blue-600
// text-white