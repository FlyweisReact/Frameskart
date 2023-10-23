/** @format */

import React from "react";
import Slider from "react-slick";

const Policy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Policy_Container">
        <Slider {...settings}  className="shop_slider">
        {data?.map((i, index) => (
          <div className="Main" key={`Shop ${index}`}>
            <img src={i.img} alt="" />
            {i.logo && <img src={i.logo} alt="" className="logo" />}
            <p>{i.name}</p>
            {i.price && <p className="price">₹ {i.price} </p>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Policy;
