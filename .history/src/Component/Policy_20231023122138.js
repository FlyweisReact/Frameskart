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
        img : "/Image/64.png" , 
        title : "100% SECURE PAYMENT"
    },
    {
        img : "/Image/65.png" , 
        title : "HIGH QUALITY  PRODUCTS"
    },
    {
        img : "/Image/66.png" , 
        title : "100% MADE IN INDIA"
    },
    {
        img : "/Image/67.png" , 
        title : "7 - DAYEASY REUTRNS"
    },
    {
        img : "/Image/68.png" , 
        title : "FAST TRACK DELIVERY"
    },
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