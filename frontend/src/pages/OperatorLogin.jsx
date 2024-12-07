import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuIED6x1CRBjVCpm34_hoDy2jGBbH7ixk",
  authDomain: "postal-app-aac.firebaseapp.com",
  projectId: "postal-app-aac",
  storageBucket: "postal-app-aac.appspot.com",
  messagingSenderId: "495290683729",
  appId: "1:495290683729:web:134e68a4bedf0ce36d0370",
  measurementId: "G-P16G04WKLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const OperatorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false); // State for switching between login and signup
  const [emailReset, setEmailReset] = useState(""); // For password reset input
  const [showResetForm, setShowResetForm] = useState(false); // To toggle showing reset form

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      window.location.href = "/operator"; // Redirect to Operator Dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign-up successful! You can now log in.");
      setIsSignup(false); // Switch to login mode
    } catch (err) {
      if (err.code === "auth/operation-not-allowed") {
        setError("Email/Password sign-up is not enabled in Firebase Console.");
      } else {
        setError(err.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
      window.location.href = "/operator"; // Redirect to the Operator Dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Facebook login successful!");
      window.location.href = "/operator"; // Redirect to the Operator Dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!emailReset) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, emailReset);
      alert("Password reset email sent. Please check your inbox.");
      setEmailReset(""); // Clear input after sending reset email
      setShowResetForm(false); // Hide reset form
    } catch (err) {
      setError(err.message);
    }
  };

  // Trigger redirection to registration page when "Sign up here" is clicked
  const handleNavigateToRegistration = () => {
    
    window.location.href = "/register";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          {isSignup ? "Operator Sign Up" : "Operator Login"}
        </h1>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {/* Conditional form rendering for Login and Sign Up */}
        {isSignup ? (
          <form onSubmit={handleEmailSignUp} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login with Email
            </button>
          </form>
        )}

        <div className="my-4 text-center text-gray-500">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition mb-2"
        >
          Login with Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="w-full bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
        >
          Login with Facebook
        </button>

        {/* Forgot Password section */}
        {!isSignup && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowResetForm(!showResetForm)} // Toggle visibility of reset form
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </button>
            {showResetForm && (
              <form onSubmit={handleForgotPassword} className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Enter your email to reset password
                  </label>
                  <input
                    type="email"
                    value={emailReset}
                    onChange={(e) => setEmailReset(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Reset Password
                </button>
              </form>
            )}
          </div>
        )}

        <div className="mt-4 text-center text-gray-500">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-blue-600 hover:underline"
              >
                Login here
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={handleNavigateToRegistration}
                
                className="text-blue-600 hover:underline"
              >
                Sign up here
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OperatorLogin;
