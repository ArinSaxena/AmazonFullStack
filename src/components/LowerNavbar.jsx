import React, { useState } from "react";
import {FaBars} from "react-icons/fa";

const LowerNavbar = () => {
  return (
    <div className="bg-gray-800 text-white py-2 flex justify-between items-center h-10 ">
      {/* Left Section */}
      <div className="flex items-center space-x-1">
        {/* Menu Icon */}
        {/* <img src={FaBars} alt="menubar" className="w-10 h-10 cursor-pointer" /> */}
        <FaBars className="mr-1 ml-3"/>

        {/* Menu Item */}
        <li className="list-none text-sm font-medium cursor-pointer">All</li>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm">
          <li className="hover:border-2 hover:border-white">
            <a href="#" className="hover:text-white py-1 px-2">
              Fresh
            </a>
          </li>
          <li className="hover:border-2 hover:border-white">
            <a href="#" className="hover:text-white py-1 px-2">
              MX Player
            </a>
          </li>
          <li className="hover:border-2 hover:border-white">
            <a href="#" className="hover:text-white py-1 px-2">
              Sell
            </a>
          </li>
          <li className="hover:border-2 hover:border-white">
            <a href="#" className="hover:text-white py-1 px-2">
              Best Sellers
            </a>
          </li>
          <li className="hover:border-2 hover:border-white">
            <a href="#" className="hover:text-white py-1 px-2">
              Today's Deals
            </a>
          </li>
          <li className="hover:border-2 hover:border-white">
            <a href="#" className="hover:text-white py-1 px-2">
              Mobiles
            </a>
          </li>
        </ul>

        {/* Select Dropdown */}
        <select className="bg-gray-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2">
          <option value="dropdown" disabled selected>
            Prime
          </option>
        </select>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mr-2">
        <h2 className="text-sm font-medium ">SHOP NOW</h2>
      </div>
    </div>
  );
};

export default LowerNavbar;
