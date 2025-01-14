import React from "react";
import { FaShoppingCart, FaSearch} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-between px-4 py-2">
      {/* Amazon Logo */}
      <div className="flex items-center flex-grow sm:flex-grow-0">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
        />
      </div>

      {/* Location */}
      <div className="flex items-center space-x-2">
        <img
          src=""
          alt="Location Icon"
          className="h-5 w-5"
        />
        <div className="text-xs">
          <p>Delivering to Meerut 250001</p>
          <h3 className="font-semibold text-sm hover:underline cursor-pointer">
            Update location
          </h3>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-grow items-center bg-white text-black rounded-md overflow-hidden">
        <div className="bg-gray-200 px-4 py-2 text-sm font-semibold flex items-center">
          <p>All</p>
          <img src="" alt="Dropdown" className="h-4 w-4 ml-1" />
        </div>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="flex-grow px-4 py-2 focus:outline-none"
        />
        <div className="bg-yellow-500 px-4 py-2 flex items-center justify-center cursor-pointer">
          <FaSearch className="text-gray-500 h-5 w-5 cursor-pointer" /> {/* Search icon */}

        </div>
      </div>

      {/* Language Preference */}
      <div className="flex items-center space-x-2 text-sm">
        <img src="" alt="Language Icon" className="h-5 w-5" />
        <div>
          <label htmlFor="dropdown" className="cursor-pointer">EN</label>
          <select
            id="dropdown"
            className="ml-1 bg-gray-900 text-white focus:outline-none"
          >
            <option value="" disabled>
              Languages
            </option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>

      {/* Sign-In */}
      <div className="text-xs text-right hover:underline cursor-pointer">
        <p>Hello, sign in</p>
        <p className="font-semibold text-sm">Account & Lists</p>
      </div>

      {/* Returns & Orders */}
      <div className="text-xs hover:underline cursor-pointer">
        <p>Returns</p>
        <p className="font-semibold text-sm">& Orders</p>
      </div>

      {/* Cart */}
      <div className="bg-gray-900 text-white flex items-center justify-between px-4 py-2">
      {/* Other Navbar Items */}

      {/* Cart Section */}
      <div className="flex items-center space-x-1 cursor-pointer">
        <p className="font-bold text-lg">0</p>
        <FaShoppingCart className="h-6 w-6 text-white" /> {/* Replaced img with react-icon */}

      </div>
    </div>
    </div>
  );
};

export default Navbar;
