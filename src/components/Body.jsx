import CardContainer from "./CardContainer";
import Carousel from "./Carousel";
import LowerNavbar from "./LowerNavbar";
import ProductCardContainer from "./ProductCardContainer";

const Body = () => {
  return (
    <div>
      <LowerNavbar />
      <Carousel />
      <CardContainer />
      <ProductCardContainer/>

    </div>
  );
};

export default Body;
