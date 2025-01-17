import React, { useState } from "react";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "AO Smith HSE-SHS-025 Storage 25 Litre Water Heater",
      image: "https://via.placeholder.com/150",
      price: 7799,
      quantity: 1,
    },
    {
      id: 2,
      title: "Instant Water Heater 15 Litre - High-Efficiency",
      image: "https://via.placeholder.com/150",
      price: 8999,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Amazon Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">₹{item.price.toLocaleString()}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-3 py-1 border rounded-l-md bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-3 py-1 border rounded-r-md bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                  <button className="text-sm text-blue-500 hover:underline">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-500">FREE</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Total Savings</span>
              <span>₹0</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <button className="mt-6 w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
