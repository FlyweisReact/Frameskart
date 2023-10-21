/** @format */

import React from "react";
import EyeWearSlider from "../Component/Slider/EyeWearSlider";
import ShopSlider from "../Component/Slider/ShopSlider";
import TemplateSlider from "../Component/Slider/TemplateSlider";
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
        <p>Shop by Frame Style</p>
      </div>

      <div className="carousel-container">
        <ShopSlider />
      </div>

      <div className="bold-heading">
        <p>Trending Eye wear</p>
      </div>

      <div className="carousel-container">
        <EyeWearSlider />
      </div>
      

      <div className="carousel-container_template">
        <TemplateSlider />
      </div>

    </>
  );
};

export default Home;
