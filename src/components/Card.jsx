import { Link } from "react-router-dom";

const Card = ({offer}) => {
  

  return (
          <div
            key={offer.id}
            className="bg-white overflow-hidden pt-6 pl-6 relative h-70 border shadow-sm rounded-xl" // Add relative to this div
          >
            {/* Image and Title */}
            <h3 className="text-xl font-semibold">{offer.subtitle}</h3>

            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <Link to="#" className="text-blue-500 hover:underline">
                See all offers
              </Link>
            </div>
          </div>
        
  );
};

export default Card;
