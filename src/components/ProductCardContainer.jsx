import React from "react";
import WaterHeater from "assets/WaterHeater.jpg";
import ProductCard from "./ProductCard";

const ProductCardContainer = () => {
  const CardDetails = [
    {
      id: 1,
      title: "AO Smith HSE-SHS-025 Storage 25 Litre Water Heater",
      subtitle: "ABS Body | BEE 5 Star Superior Energy Efficiency",
      image: WaterHeater,
      rating: 4.1,
      reviews: "500+ bought in past month",
      deal: "Republic Day Deal",
      discount: "-46%",
      price: 7799,
      originalPrice: 14400,
      delivery: "Get it by Monday, January 20",
      freeDelivery: true,
      quantity:1,
    },
    {
      id: 2,
      title: "Instant Water Heater 15 Litre - High-Efficiency",
      subtitle: "Energy Efficient | Compact Design",
      image: WaterHeater,
      rating: 4.3,
      reviews: "300+ bought in past month",
      deal: "Winter Sale",
      discount: "-40%",
      price: 8999,
      originalPrice: 15000,
      delivery: "Get it by Tuesday, January 21",
      freeDelivery: true,
      quantity:1,

    },
    {
      id: 3,
      title: "Vertical Water Heater 20 Litre - Premium Build",
      subtitle: "Advanced Heating Technology | Energy Saving",
      image: WaterHeater,
      rating: 4.5,
      reviews: "200+ bought in past month",
      deal: "Hot Deal",
      discount: "-35%",
      price: 6499,
      originalPrice: 10000,
      delivery: "Get it by Wednesday, January 22",
      freeDelivery: false,
      quantity:1,

    },
    {
      id: 4,
      title: "Vertical Water Heater 20 Litre - Premium Build",
      subtitle: "Durable | 5-Star Energy Rating",
      image: WaterHeater,
      rating: 4.2,
      reviews: "700+ bought in past month",
      deal: "Exclusive Offer",
      discount: "-50%",
      price: 7999,
      originalPrice: 16000,
      delivery: "Get it by Thursday, January 23",
      freeDelivery: true,
      quantity:1,

    },
    {
        id: 5,
        title: "AO Smith HSE-SHS-025 Storage 25 Litre Water Heater",
        subtitle: "ABS Body | BEE 5 Star Superior Energy Efficiency",
        image: WaterHeater,
        rating: 4.1,
        reviews: "500+ bought in past month",
        deal: "Republic Day Deal",
        discount: "-46%",
        price: 7799,
        originalPrice: 14400,
        delivery: "Get it by Monday, January 20",
        freeDelivery: true,
        quantity:1,

      },
      {
        id: 6,
        title: "Instant Water Heater 15 Litre - High-Efficiency",
        subtitle: "Energy Efficient | Compact Design",
        image: WaterHeater,
        rating: 4.3,
        reviews: "300+ bought in past month",
        deal: "Winter Sale",
        discount: "-40%",
        price: 8999,
        originalPrice: 15000,
        delivery: "Get it by Tuesday, January 21",
        freeDelivery: true,
        quantity:1,

      },
      {
        id: 7,
        title: "Vertical Water Heater 20 Litre - Premium Build",
        subtitle: "Advanced Heating Technology | Energy Saving",
        image: WaterHeater,
        rating: 4.5,
        reviews: "200+ bought in past month",
        deal: "Hot Deal",
        discount: "-35%",
        price: 6499,
        originalPrice: 10000,
        delivery: "Get it by Wednesday, January 22",
        freeDelivery: true,
        quantity:1,

      },
      {
        id: 8,
        title: "Vertical Water Heater 20 Litre - Premium Build",
        subtitle: "Durable | 5-Star Energy Rating",
        image: WaterHeater,
        rating: 4.2,
        reviews: "700+ bought in past month",
        deal: "Exclusive Offer",
        discount: "-50%",
        price: 7999,
        originalPrice: 16000,
        delivery: "Get it by Thursday, January 23",
        freeDelivery: true,
        quantity:1,

      },
  ];

  return (
    <div className="py-8 bg-gray-100">
      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {CardDetails.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardContainer;
