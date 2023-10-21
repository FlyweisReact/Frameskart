/** @format */

import React from "react";
import ShopSlider from "../Component/Slider/ShopSlider";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="Single_Banner">
        <img src="/Image/1.png" alt="" />
      </div>

      <div className="category-banner">
        <div className="Main">
          <img src="/Image/2.png" alt="" />
        </div>
        <div className="Main">
          <img src="/Image/3.png" alt="" />
        </div>
        <div className="Main">
          <img src="/Image/4.png" alt="" />
        </div>
      </div>

      <div className="bold-heading">
      <p>Shop by Frame Style

      </div>

      <div  className="carousel-container" >
        <ShopSlider />
      </div>
    </>
  );
};

export default Home;
