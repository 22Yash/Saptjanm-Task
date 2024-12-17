import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-3xl font-extrabold">
          <Link to="/" className="hover:text-indigo-200 transition duration-300">
            Matrimony App
          </Link>
        </h1>
        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link
            to="/"
            className="relative hover:text-indigo-200 transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="relative hover:text-indigo-200 transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Sign Up
          </Link>
          <Link
            to="/dashboard"
            className="relative hover:text-indigo-200 transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="relative hover:text-indigo-200 transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
