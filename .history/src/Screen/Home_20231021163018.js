/** @format */

import React from "react";
import Heading from "../Component/Heading";
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
      name: "IDEE",
      img: "/Image/20.png",
      logo: "/Image/23.png",
    },
    {
      name: "Fuel",
      img: "/Image/21.png",
      logo: "/Image/24.png",
    },
    {
      name: "Scavin",
      img: "/Image/22.png",
      logo: "/Image/25.png",
    },

    {
      name: "Calvin Klein Sunglasses",
      img: "/Image/26.png",
      logo: "/Image/27.png",
    },
    {
      name: "Persol Sunglasses",
      img: "/Image/28.png",
      logo: "/Image/29.png",
    },
    {
      name: "ZEISS Sunglasses",
      img: "/Image/30.png",
      logo: "/Image/31.png",
    },
    {
      name: "Velocity",
      img: "/Image/32.png",
      logo: "/Image/33.png",
    },
    {
      name: "Ray-Ban Sunglasses",
      img: "/Image/34.png",
      logo: "/Image/35.png",
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

      <Heading title={"Shop by Frame Style"} />

      <div className="carousel-container">
        <ShopSlider data={frameData} />
      </div>

      <Heading title={"Trending Eye wear"} />

      <div className="carousel-container">
        <EyeWearSlider />
      </div>

      <div className="carousel-container_template">
        <TemplateSlider />
      </div>

      <Heading title={"Shop by brands"} />

      <div className="carousel-container">
        <ShopSlider data={brandData} />
      </div>


      <Heading title={"Shop by brands"} />
      <div className="bold-heading">
        <p></p>
      </div>

      <div className="carousel-container">
        <ShopSlider data={frameData} />
      </div>
    </>
  );
};

export default Home;
