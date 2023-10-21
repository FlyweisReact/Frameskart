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
        <img src="/Image/5.png" alt="" />
        <p>AVIATER</p>
      </div>
    </Slider>
  );
};

export default ShopSlider;
