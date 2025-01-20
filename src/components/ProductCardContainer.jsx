
import ProductCard from "./ProductCard";
import { CardDetails } from "data";

const ProductCardContainer = () => {
  

  return (
    <div className="py-8 bg-gray-100 mt-64">
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
