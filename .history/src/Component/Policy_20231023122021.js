/** @format */

import React from "react";
import Slider from "react-slick";

const Policy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

  const data = [
    {
        img : ""
    }
  ]

  return (
    <div className="Policy_Container">
      <Slider {...settings} className="policy_slider">
        <div className="Main">
          <img src="/Image/64.png" alt="" />
          <p>100% SECURE PAYMENT</p>
        </div>
        <div className="Main">
          <img src="/Image/64.png" alt="" />
          <p>100% SECURE PAYMENT</p>
        </div>
        <div className="Main">
          <img src="/Image/64.png" alt="" />
          <p>100% SECURE PAYMENT</p>
        </div>
        <div className="Main">
          <img src="/Image/64.png" alt="" />
          <p>100% SECURE PAYMENT</p>
        </div>
        <div className="Main">
          <img src="/Image/64.png" alt="" />
          <p>100% SECURE PAYMENT</p>
        </div>
        <div className="Main">
          <img src="/Image/64.png" alt="" />
          <p>100% SECURE PAYMENT</p>
        </div>
      </Slider>
    </div>
  );
};

export default Policy;
