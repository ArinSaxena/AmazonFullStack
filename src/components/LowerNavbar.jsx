import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const LowerNavbar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-800 text-white py-2 flex justify-between items-center h-12">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Sidebar Trigger */}
        <button
          className="flex items-center space-x-1 p-2 hover:bg-gray-700 rounded transition"
          onClick={toggleSidebar}
        >
          <FaBars className="text-lg" />
          <span className="text-sm font-medium">All</span>
        </button>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 ml-4 text-sm">
          {[
            "Fresh",
            "MX Player",
            "Sell",
            "Best Sellers",
            "Today's Deals",
            "Mobiles",
          ].map((link, index) => (
            <li key={index} className="hover:bg-gray-700 p-2 rounded">
              <a href="#" className="py-1 px-2">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Dropdown */}
        <select className="hidden md:block bg-gray-800 text-white ml-4 py-2 px-3 rounded-md border border-gray-600 focus:ring focus:ring-yellow-500">
          <option value="dropdown" disabled selected>
            Prime
          </option>
        </select>
      </div>

      {/* Right Section */}
      <div className="flex items-center mr-4">
        <h2 className="text-sm font-medium">SHOP NOW</h2>
      </div>
    </div>
  );
};

export default LowerNavbar;
