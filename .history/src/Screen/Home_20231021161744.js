/** @format */

import React from "react";
import EyeWearSlider from "../Component/Slider/EyeWearSlider";
import ShopSlider from "../Component/Slider/ShopSlider";
import TemplateSlider from "../Component/Slider/TemplateSlider";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const frameData = [
    {
      name: "AVIATER",
      img: "/Image/5.png",
    },
    {
      name: "WAYFARER",
      img: "/Image/6.png",
    },
    {
      name: "ROUND",
      img: "/Image/7.png",
    },
    {
      name: "HEXA",
      img: "/Image/8.png",
    },
    {
      name: "TRANSPARENT",
      img: "/Image/9.png",
    },
    {
      name: "CAT EYE ",
      img: "/Image/10.png",
    },
  ];


  const brandData = [
    {
      name: "AVIATER",
      img: "/Image/5.png",
    },
    {
      name: "WAYFARER",
      img: "/Image/6.png",
    },
    {
      name: "ROUND",
      img: "/Image/7.png",
    },
    {
      name: "HEXA",
      img: "/Image/8.png",
    },
    {
      name: "TRANSPARENT",
      img: "/Image/9.png",
    },
    {
      name: "CAT EYE ",
      img: "/Image/10.png",
    },
  ];

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
        <ShopSlider data={frameData} />
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

      <div className="bold-heading">
        <p>Shop by brands</p>
      </div>

      <div className="carousel-container">
        <ShopSlider data={brandData} />
      </div>
    </>
  );
};

export default Home;
