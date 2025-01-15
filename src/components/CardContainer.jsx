import React from "react";
import Card from "components/Card";
import Laptop from "assets/Laptop.jpg";


const CardContainer = () => {
  const offers = [
    {
      id: 1,
      title: "Offer 1",
      subtitle: "Up to 75% off | Electronics",
      image: Laptop,
    },
    {
      id: 2,
      title: "Offer 2",
      subtitle: "Up to 50% off | Fashion",
      image: Laptop,
    },
    {
      id: 3,
      title: "Offer 3",
      subtitle: "Up to 40% off | Home Appliances",
      image: Laptop,
    },
    {
      id: 4,
      title: "Offer 4",
      subtitle: "Up to 60% off | Sports Gear",
      image: Laptop,
    },
    {
      id: 5,
      title: "Offer 5",
      subtitle: "Up to 80% off | Furniture",
      image: Laptop,
    },
    {
      id: 6,
      title: "Offer 6",
      subtitle: "Up to 30% off | Books",
      image: Laptop,
    },
    {
      id: 7,
      title: "Offer 7",
      subtitle: "Up to 90% off | Grocery",
      image: Laptop,
    },
    {
      id: 8,
      title: "Offer 8",
      subtitle: "Up to 50% off | Toys & Games",
      image: Laptop,
    },
  ];
  return (
    <div>
      <div className="relative py-8 bg-gray-100">
        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
          {offers.map((offer) => (
            <Card offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
