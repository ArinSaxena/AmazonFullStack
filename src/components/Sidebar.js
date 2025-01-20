import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Amazon</h2>
        <ul className="space-y-4">
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Home</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Today's Deals</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Customer Service</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Gift Cards</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Registry</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Sell</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Account</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Prime</a></li>
          <li><a href="#" className="hover:bg-gray-700 p-2 rounded">Your Orders</a></li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Amazon</h1>
        <p className="text-lg">Browse through the best deals and products.</p>
        {/* Add additional content here */}
      </div>
    </div>
  );
};

export default Sidebar;
