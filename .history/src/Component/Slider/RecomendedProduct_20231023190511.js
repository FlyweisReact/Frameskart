/** @format */

import { useRef } from "react";
import Slider from "react-slick";

const RecomendedProduct = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
    <div className="slider_Navigation_container">

      <Slider {...settings} ref={sliderRef} className="Recomended_Product">
        <div className="Main">
          <img src="/Image/87.png" alt="" />
          <p>Watch Now</p>
        </div>
        <div className="Main">
          <img src="/Image/87.png" alt="" />
          <p>Watch Now</p>
        </div>
        <div className="Main">
          <img src="/Image/87.png" alt="" />
          <p>Watch Now</p>
        </div>
        <div className="Main">
          <img src="/Image/87.png" alt="" />
          <p>Watch Now</p>
        </div>
        <div className="Main">
          <img src="/Image/87.png" alt="" />
          <p>Watch Now</p>
        </div>
      </Slider>

      <div className="navigation">
        <img
          src="/Image/41.png"
          onClick={prevSlide}
          className="PrevImg"
          alt=""
        />
        <img
          src="/Image/42.png"
          onClick={nextSlide}
          className="NextImg"
          alt=""
        />
      </div>
    </div>
  );
};

export default RecomendedProduct;
