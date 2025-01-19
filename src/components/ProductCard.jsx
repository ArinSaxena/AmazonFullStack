import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "utility/cartSlice";

const ProductCard = ({ card }) => {

  const dispatch = useDispatch();


  const handleSubmit = () =>{
    dispatch(addItem({card}));

  }

  
// dispatch(addItem(card.id));  
  const {
    image,
    title,
    subtitle,
    rating,
    reviews,
    price,
    originalPrice,
    discount,
    deal,
    delivery,
    freeDelivery,
  } = card;

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
      {/* Product Image */}
      
      <img
        src={image}
        alt={title}
        className="rounded-t-lg w-full h-48 object-contain mt-12"
      />
      

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        {/* Features */}
        <p className="mt-2 text-sm text-gray-600">{subtitle}</p>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 font-bold">{rating}</span>
          <span className="text-gray-500 text-sm ml-2">({reviews})</span>
        </div>

        {/* Price Section */}
        <div className="mt-3">
          <span className="text-red-600 font-bold text-lg">₹{price}</span>
          <span className="text-gray-500 text-sm line-through ml-2">
            ₹{originalPrice}
          </span>
          <span className="text-green-600 font-bold text-sm ml-2">{discount}</span>
        </div>

        {/* Offer */}
        <div className="mt-2 text-sm text-red-500">{deal}</div>

        {/* Delivery Info */}
        <div className="mt-2 text-sm text-gray-600">
          {delivery && (
            <>
              Get it by <span className="font-bold text-gray-800">{delivery}</span>
            </>
          )}
        </div>
        {freeDelivery && (
          <div className="text-sm text-green-600 font-semibold">
            FREE Delivery by Amazon
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"  onClick={handleSubmit}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



