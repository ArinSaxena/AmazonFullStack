// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import WaterHeater from "assets/WaterHeater.jpg"

// const CartComponent = () => {

//   const cartItems = useSelector((state) => state.cart.cartItems)
//   console.log(cartItems);
//   // const [cartItems, setCartItems] = useState([
//   //   {
//   //     id: 1,
//   //     title: "AO Smith HSE-SHS-025 Storage 25 Litre Water Heater",
//   //     image: "https://via.placeholder.com/150",
//   //     price: 7799,
//   //     quantity: 1,
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Instant Water Heater 15 Litre - High-Efficiency",
//   //     image: "https://via.placeholder.com/150",
//   //     price: 8999,
//   //     quantity: 1,
//   //   },
//   // ]);

//   // const handleQuantityChange = (id, increment) => {
//   //   setCartItems((prevItems) =>
//   //     prevItems.map((item) =>
//   //       item.id === id
//   //         ? { ...item, quantity: Math.max(1, item.quantity + increment) }
//   //         : item
//   //     )
//   //   );
//   // };

//   // const handleRemoveItem = (id) => {
//   //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   // };

//   // const totalPrice = cartItem.reduce(
//   //   (total, item) => total + item.price * item.quantity,
//   //   0
//   // );

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Your Amazon Cart</h1>
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
//           {cartItems.map((item) => (
//             <div
//               key={item.card.id}
//               className="flex items-start space-x-4 border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
//             >
//               <img
//                 src={item.card.image}
//                 alt={item.card.title}
//                 className="w-24 h-24 object-cover"
//               />
//               <div className="flex-1">
//                 <h2 className="text-lg font-semibold">{item.card.title}</h2>
//                 <p className="text-sm text-gray-600">₹{item.card.price ? item.card.price.toLocaleString() : "0"}</p>
//                 <div className="flex items-center mt-2 space-x-2">
//                   <button
//                     // onClick={() => handleQuantityChange(item.id, -1)}
//                     className="px-3 py-1 border rounded-l-md bg-gray-200 hover:bg-gray-300"
//                   >
//                     -
//                   </button>
//                   <span className="px-4 py-1 border">{item.card.quantity}</span>
//                   <button
//                     // onClick={() => handleQuantityChange(item.id, 1)}
//                     className="px-3 py-1 border rounded-r-md bg-gray-200 hover:bg-gray-300"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div className="flex space-x-4 mt-2">
//                   <button
//                     // onClick={() => handleRemoveItem(item.id)}
//                     className="text-red-500 text-sm hover:underline"
//                   >
//                     Remove
//                   </button>
//                   <button className="text-sm text-blue-500 hover:underline">
//                     Save for Later
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span className="text-green-500">FREE</span>
//             </div>
//             <div className="flex justify-between text-sm text-gray-500">
//               <span>Total Savings</span>
//               <span>₹0</span>
//             </div>
//           </div>
//           <hr className="my-4" />
//           <div className="flex justify-between text-lg font-semibold">
//             <span>Total</span>
//             <span>₹{totalPrice.toLocaleString()}</span>
//           </div>
//           <button className="mt-6 w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600">
//             Proceed to Checkout
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default CartComponent;     


import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartComponent = () => {
  // Get cart items from Redux state
  const cartItemsFromState = useSelector((state) => state.cart.cartItems);

  // Maintain cart items in local state for dynamic updates
  const [cartItems, setCartItems] = useState(
    cartItemsFromState.map((item) => ({ ...item, selected: false }))
  );

  // Increment item quantity
  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.card.id === id ? { ...item, card: { ...item.card, quantity: item.card.quantity + 1 } } : item
      )
    );
  };

  // Decrement item quantity
  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.card.id === id && item.card.quantity > 1
          ? { ...item, card: { ...item.card, quantity: item.card.quantity - 1 } }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.card.id !== id));
  };

  // Toggle item selection
  const toggleItemSelection = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.card.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.card.price * item.card.quantity,
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
                key={item.card.id}
                className="flex items-start space-x-4 border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
              >
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleItemSelection(item.card.id)}
                  className="mt-2"
                />
                <img
                  src={item.card.image}
                  alt={item.card.title}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.card.title}</h2>
                  <p className="text-sm text-gray-600">
                    ₹{item.card.price ? item.card.price.toLocaleString() : "0"}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => decrementQuantity(item.card.id)}
                      className="px-3 py-1 border rounded-l-md bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border">{item.card.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.card.id)}
                      className="px-3 py-1 border rounded-r-md bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <button
                      onClick={() => removeItem(item.card.id)}
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
