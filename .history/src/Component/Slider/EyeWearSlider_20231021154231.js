/** @format */

import Slider from "react-slick";

const EyeWearSlider = () => {
  const data = [
    {
      name: "AVIATER",
      img: "/Image/11.png",
      selling: 3600,
      mrp: 6000,
    },
    {
      name: "WAYFARER",
      img: "/Image/12.png",
    },
    {
      name: "ROUND",
      img: "/Image/13.png",
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
    <Slider {...settings} className="eye_wear_slider">
      {data?.map((i, index) => (
        <div className="Main" key={`Shop ${index}`}>
          <img src={i.img} alt="" />
          <p>{i.name}</p>
          <div className="price-container">
          <p className="selling"> {i.selling} </p>
          <p className="selling"> {i.mrp} </p>

          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EyeWearSlider;