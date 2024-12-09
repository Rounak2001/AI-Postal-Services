import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import axios from "axios";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuIED6x1CRBjVCpm34_hoDy2jGBbH7ixk",
  authDomain: "postal-app-aac.firebaseapp.com",
  projectId: "postal-app-aac",
  storageBucket: "postal-app-aac.appspot.com",
  messagingSenderId: "495290683729",
  appId: "1:495290683729:web:134e68a4bedf0ce36d0370",
  measurementId: "G-P16G04WKLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const OperatorRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    pincode: "",
    state: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const { name, phone, email, password, confirmPassword, address, pincode, state } = formData;

    // Validate inputs
    if (!name || !phone || !email || !password || !address || !pincode || !state) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Invalid phone number. Enter a valid 10-digit number.");
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      setError("Invalid pincode. Enter a 6-digit pincode.");
      return;
    }


  try {
    // Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send additional data to your database
    await axios.post("http://localhost:5000/api/users/register", {
      uid: user.uid, // Unique Firebase User ID
      name,
      phone,
      email,
      address,
      pincode,
      state,
    });

    setSuccess("Registration successful!");
    setError("");
    setFormData({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      pincode: "",
      state: "",
    });

    // Redirect to login page
    setTimeout(() => {
      window.location.href = "./operator-login";
    }, 1000);
  } catch (err) {
    setError(err.message || "Registration failed.");
  }
};



  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Register
        </h1>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
        )}
        {success && (
          <div className="bg-green-100 text-green-600 p-3 rounded mb-4">
            {success}
          </div>
        )}
        <form onSubmit={handleRegistration} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <a href="./operator-login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default OperatorRegistration;



