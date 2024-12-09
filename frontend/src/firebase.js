



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';




// Import pages
import Home from './pages/Home';
import CustomerHome from './pages/CustomerHome';
import OperatorDashboard from './pages/OperatorDashboard';
import OperatorLogin from "./pages/OperatorLogin";
import OperatorRegistration from "./pages/OperatorRegistration";
import Layout from './components/Layout';

// Firebase Auth setup
const auth = getAuth();

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operator-login" element={<OperatorLogin />} />
        <Route path="/customer" element={<CustomerHome />} />
        <Route 
          path="/operator" 
          element={isAuthenticated ? <OperatorDashboard /> : <OperatorLogin />} 
        />
        <Route path="/register" element={<OperatorRegistration />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;

