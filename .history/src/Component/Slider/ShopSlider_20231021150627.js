/** @format */
import Slider from "react-slick";

const ShopSlider = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings} className="">
    <div className="Main">
    <div className="Image"></div>

    </div>
    </Slider>
  );
};

export default ShopSlider;
