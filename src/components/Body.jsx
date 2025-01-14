import React from "react";
import Bck1 from "assets/Bck1.jpg";
import Bck2 from "assets/Bck2.jpg";
import Bck3 from "assets/Bck3.jpg";
import Bck4 from "assets/Bck4.jpg";

const Body = () => {
  return (
    <div>
      <img src={Bck1} alt="Background-img" className="w-full" />
      <img src={Bck2} alt="Background-img" className="w-full" />

      <img src={Bck3} alt="Background-img" className="w-full" />
      <img src={Bck4} alt="Background-img" className="w-full" />
    </div>
  );
};

export default Body;
