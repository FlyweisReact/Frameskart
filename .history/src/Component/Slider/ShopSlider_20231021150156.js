/** @format */
import Slider from "react-slick";

const ShopSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings} className="">
      <div>dsad</div>
      <div>dsad</div>
      <div>dsad</div>
      <div>dsad</div>
    </Slider>
  );
};

export default ShopSlider;
