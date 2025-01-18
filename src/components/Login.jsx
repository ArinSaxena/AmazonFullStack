// src/components/LoginPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Container */}
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-24"
          />
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Sign-In</h2>

          {/* Email Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500"
          >
            Sign In
          </button>
        </form>

        {/* Create Account Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            New to Amazon?{" "}
            <Link to="/signup" className="text-yellow-500 hover:underline">
              Create your Amazon account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
