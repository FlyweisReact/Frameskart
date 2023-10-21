/** @format */
import Slider from "react-slick";

const ShopSlider = () => {
  const data = [
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <Slider {...settings} className="shop_slider">
    
      <div className="Main">
        <img src="/Image/5.png" alt="" />
        <p>AVIATER</p>
      </div>
      <div className="Main">
        <img src="/Image/6.png" alt="" />
        <p>WAYFARER</p>
      </div>
      <div className="Main">
        <img src="/Image/7.png" alt="" />
        <p>ROUND</p>
      </div>
      <div className="Main">
        <img src="/Image/8.png" alt="" />
        <p>HEXA</p>
      </div>
      <div className="Main">
        <img src="/Image/9.png" alt="" />
        <p>TRANSPARENT </p>
      </div>
      <div className="Main">
        <img src="/Image/10.png" alt="" />
        <p>CAT EYE </p>
      </div>
    </Slider>
  );
};

export default ShopSlider;
