import React, { useState } from "react";
import Bck1 from "assets/Hero1.jpg";
import Bck2 from "assets/Hero2.jpg";
import Bck3 from "assets/Hero3.png";
import Bck4 from "assets/Hero4.jpg";

const Carousel = () => {
  const images = [Bck1, Bck2, Bck3, Bck4]; // Array of images

  const [currentIndex, setCurrentIndex] = useState(0); // Initial index set to 0

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to the first image
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length // Loop to the last image
    );
  };

  return (
    <div className="relative w-full h-80%">
      {/* Display current image */}
      <div className="overflow-hidden w-full h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Move the images left/right based on current index
          }}
        >
          {images.map((image, index) => (
  <div key={index} className="relative flex-shrink-0 w-full h-full">
    {/* Gradient Overlay */}
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    
    {/* Image */}
    <img 
      src={image}
      alt={`Background ${index + 1}`}
      className="w-full h-full object-cover z-0"
    />
  </div>
))}

        </div>
      </div>

      {/* Next and Previous Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
