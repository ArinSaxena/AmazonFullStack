
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { CardDetails } from "data";
import axios from "axios";

const ProductCardContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6060/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log(products)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-8 bg-gray-100 mt-64">
      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {products.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardContainer;
