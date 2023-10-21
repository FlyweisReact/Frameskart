/** @format */
import Slider from "react-slick";

const ShopSlider = ({data}) => {


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
    <Slider {...settings} className="shop_slider">
      {data?.map((i, index) => (
        <div className="Main" key={`Shop ${index}`}>
          <img src={i.img} alt="" />
          <img src={i.logo} alt='' />
          <p>{i.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ShopSlider;
