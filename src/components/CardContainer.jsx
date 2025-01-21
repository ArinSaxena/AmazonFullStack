import React from "react";
import Card from "components/Card";
import {offers} from "data";



const CardContainer = () => {
  
  return (
    <div>
      {/* <div className="absolute mb-50 py-8 bg-gray-100 z-10"> */}
      <div className="absolute top-0 z-10 w-full mt-[340px]">

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10" >
          {offers.map((offer) => (
            <Card key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
