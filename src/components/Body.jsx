import React from "react";
import Carousel from "./Carousel";
import LowerNavbar from "./LowerNavbar";
import Card from "components/Card";
import Form from "components/Form";
import Offers from "./CardContainer";

const Body = () => {
  return (
    <div>
      <LowerNavbar />
      <Carousel />
      <Offers />

    </div>
  );
};

export default Body;
