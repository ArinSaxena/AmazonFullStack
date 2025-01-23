import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  decreaseItem,
  increaseItem,
  toggleItemSelection,
} from "utility/cartSlice";

const CartComponent = () => {
  // Get cart items from Redux state
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const [toggle, setToggle] = useState("false");

  const dispatch = useDispatch();

  // const handleSubmit = () =>{
  //   axios.post("http:localhost/6060/api/cart"
  //     ,{
  //       item:card,    // body
  //     }, {
  //     headers:{
  //       Authorization:`Bearer ${token}`
  //     }
  //   })
  //   .then(response => {
  //     const items = response?.data?.cart || [];
  //     dispatch(setCartItems(items));
  //     console.log('success');
  //   })
  //   .catch(err => console.error(err));
  //   dispatch(addItem({...card}));

  // }

  const handleToggle = (id) => {
    dispatch(toggleItemSelection(id));
  };

  // Remove item from cart
  const removeItemFromCart = (id) => {
    console.log(id, "id");
    dispatch(removeItem(id));
  };

  const incrementQuantity = (id) => {
    dispatch(increaseItem(id));
  };
  const decrementQuantity = (id) => {
    dispatch(decreaseItem(id));
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
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-4 border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
              >
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleToggle(item.id)}
                  className="mt-2"
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    ₹{item.price ? item.price.toLocaleString() : "0"}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-3 py-1 border rounded-l-md bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-3 py-1 border rounded-r-md bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <button
                      onClick={() => removeItemFromCart(item.id)}
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
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
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
