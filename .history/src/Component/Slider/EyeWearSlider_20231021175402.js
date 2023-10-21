/** @format */

import Slider from "react-slick";
import { useRef } from "react";

const EyeWearSlider = () => {
  const data = [
    {
      name: "Mazie",
      img: "/Image/11.png",
      selling: 3600,
      mrp: 6000,
    },
    {
      name: "Bailey",
      img: "/Image/12.png",
      selling: 3600,
      mrp: 6000,
    },
    {
      name: "JULES",
      img: "/Image/13.png",
      selling: 3600,
      mrp: 6000,
    },
    {
      name: "Mazie",
      img: "/Image/14.png",
      selling: 3600,
      mrp: 6000,
    },
    {
      name: "Bailey",
      img: "/Image/15.png",
      selling: 3600,
      mrp: 6000,
    },
    {
      name: "JULES",
      img: "/Image/16.png",
      selling: 3600,
      mrp: 6000,
    },
  ];
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="slider_Navigation_container" ></div>
    <Slider {...settings} className="eye_wear_slider">
      {data?.map((i, index) => (
        <div className="Main" key={`eye ${index}`}>
          <img src={i.img} alt="" />
          <p className="title">{i.name}</p>
          <div className="price-container">
            <p className="selling"> ₹{i.selling} </p>
            <p className="mrp"> ₹{i.mrp} </p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default EyeWearSlider;
