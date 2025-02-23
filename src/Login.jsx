import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Login.css";

// Firebase Imports
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase Configuration (Replace with your actual Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyCUNKAQXdKv8v1ACyl8sGnK-WnVjGHVqTI",
  authDomain: "bizweb-4a318.firebaseapp.com",
  projectId: "bizweb-4a318",
  storageBucket: "bizweb-4a318.firebasestorage.app",
  messagingSenderId: "293938674735",
  appId: "1:293938674735:web:a3e959c1cb09e960c45ada",
  measurementId: "G-264E24WWTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In Successful:", result.user);
      
      // Store authentication state
      localStorage.setItem("isAuthenticated", "true");
      
      // Call the parent function to update the state in App.js
      onLogin();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Google Sign-In failed: " + error.message);
    }
  };
  

  // Handle Form Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
      if (credentials.email === "johndoe@gmail.com" && credentials.password === "password") {
        navigate("/dashboard");
        onLogin();
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-vh-100 d-flex flex-column flex-md-row">
      {/* Left Side - Branding */}
      <div className="bg-primary text-white d-flex flex-column justify-content-center align-items-center p-4 p-md-5" style={{ flex: "1" }}>
        <h1 className="display-4 fw-bold mb-4">BASE</h1>
      </div>

      {/* Right Side - Login Form */}
      <div className="d-flex justify-content-center align-items-center p-4 p-md-5" style={{ flex: "1" }}>
        <div className="card border-0 shadow-lg p-4 p-md-5" style={{ maxWidth: "500px", width: "100%" }}>
          <div className="card-body">
            <h2 className="card-title h3 fw-bold mb-3">Sign In</h2>
            <p className="text-muted mb-4">Sign in to your account</p>

            {/* Social Login Buttons */}
            <div className="d-flex flex-column flex-md-row gap-2 mb-4">
              <button className="btn btn-light flex-grow-1 d-flex align-items-center justify-content-center gap-2 border" onClick={handleGoogleSignIn}>
                <FcGoogle size={20} />
                <span className="d-none d-md-inline">Sign in with Google</span>
              </button>
              <button className="btn btn-light flex-grow-1 d-flex align-items-center justify-content-center gap-2 border">
                <AiFillApple size={20} />
                <span className="d-none d-md-inline">Sign in with Apple</span>
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="bg-light p-4 rounded-3 mb-4">
              <div className="mb-3">
                <label className="form-label fw-medium">Email address</label>
                <input type="email" name="email" className="form-control form-control-lg" value={credentials.email} onChange={handleChange} placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-medium">Password</label>
                <input type="password" name="password" className="form-control form-control-lg" value={credentials.password} onChange={handleChange} placeholder="Enter your password" required />
              </div>
              {error && <div className="text-danger mb-3 text-center">{error}</div>}
              <div className="mb-4">
                <a href="#" className="text-primary text-decoration-none fw-medium">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100 btn-lg position-relative" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Signing in...
                  </>
                ) : 'Sign In'}
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center mb-0">
              Don't have an account? <a href="#" className="text-primary text-decoration-none fw-medium">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
