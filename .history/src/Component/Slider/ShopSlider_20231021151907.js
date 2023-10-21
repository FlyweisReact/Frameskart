/** @format */
import Slider from "react-slick";

const ShopSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 1500,
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
        <img src="/Image/5.png" alt="" />
        <p>HEXA</p>
      </div>
      <div className="Main">
        <img src="/Image/5.png" alt="" />
        <p>TRANSPARENT  </p>
      </div>
    </Slider>
  );
};

export default ShopSlider;
