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

  const lensdata = [
    {
      name: "IDEE",
      img: "https://img.freepik.com/free-photo/man-applying-his-contact-lens_53876-96296.jpg?w=1380&t=st=1697886547~exp=1697887147~hmac=c26de8d1eaeee9a842d7d5f894222424c098514990bda253002e9c17fe313ef0",
      price: 900,
    },
    {
      name: "Disposable",
      img: "https://img.freepik.com/free-photo/girl-store-trying-glasses_23-2148920020.jpg?w=1380&t=st=1697886628~exp=1697887228~hmac=62dd9d6c1e7b837a6110fc1861fffea0eaba83f04af3663d17611264d7be2396",
      price: 900,
    },
    {
      name: "IDEE",
      img: "https://img.freepik.com/free-photo/man-applying-his-contact-lens_53876-96296.jpg?w=1380&t=st=1697886547~exp=1697887147~hmac=c26de8d1eaeee9a842d7d5f894222424c098514990bda253002e9c17fe313ef0",
      price: 900,
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

      <Heading title={"Frameskart Sunglasses Series"} />

      <div className="carousel-container">
        <ShopSlider data={frameData} />
      </div>

      <Heading title={"New Arrival"} />

      <div className="carousel-container">
        <EyeWearSlider />
      </div>

      <Heading title={"Shop By Frameskart Series"} />

      <div className="carousel-container">
        <ShopSlider data={brandData} />
      </div>

      <Heading title={"Shop Contact Lenses"} />

      <div className="carousel-container">
        <ShopSlider data={lensdata} />
      </div>
    </>
  );
};

export default Home;
