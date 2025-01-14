import React, { useState } from "react";
import Bck1 from "assets/Bck1.jpg";
import Bck2 from "assets/Bck2.jpg";
import Bck3 from "assets/Bck3.jpg";
import Bck4 from "assets/Bck4.jpg";

const Body = () => {
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
    <div className="relative w-full h-screen"> {/* Full screen container */}
      {/* Display current image */}
      <div className="overflow-hidden w-full h-full">
        <div className="flex transition-all duration-500 ease-in-out w-full h-full">
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={images[currentIndex]}
              alt="Background"
              className="w-full h-full object-cover" // Full width, full height, maintain aspect ratio
            />
          </div>
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

export default Body;
