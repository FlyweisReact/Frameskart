/** @format */

import React from "react";
import Heading from "../Component/Heading";
import EyeWearSlider from "../Component/Slider/EyeWearSlider";
import ShopSlider from "../Component/Slider/ShopSlider";
import TemplateSlider from "../Component/Slider/TemplateSlider";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const frameData = [
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

  const brandData = [
    {
      name: "IDEE",
      img: "/Image/20.png",
      logo: "/Image/23.png",
    },
    {
      name: "Fuel",
      img: "/Image/21.png",
      logo: "/Image/24.png",
    },
    {
      name: "Scavin",
      img: "/Image/22.png",
      logo: "/Image/25.png",
    },

    {
      name: "Calvin Klein Sunglasses",
      img: "/Image/26.png",
      logo: "/Image/27.png",
    },
    {
      name: "Persol Sunglasses",
      img: "/Image/28.png",
      logo: "/Image/29.png",
    },
    {
      name: "ZEISS Sunglasses",
      img: "/Image/30.png",
      logo: "/Image/31.png",
    },
    {
      name: "Velocity",
      img: "/Image/32.png",
      logo: "/Image/33.png",
    },
    {
      name: "Ray-Ban Sunglasses",
      img: "/Image/34.png",
      logo: "/Image/35.png",
    },
  ];

  const lensdata = [
    {
      name: "SOft",
      img: "https://img.freepik.com/free-photo/man-applying-his-contact-lens_53876-96296.jpg?w=1380&t=st=1697886547~exp=1697887147~hmac=c26de8d1eaeee9a842d7d5f894222424c098514990bda253002e9c17fe313ef0",
      price: 900,
    },
    {
      name: "Disposable",
      img: "https://img.freepik.com/free-photo/female-showing-contact-lenses-his-finger_23-2148310056.jpg?w=1480&t=st=1697886695~exp=1697887295~hmac=3efae3e25aad31771e206483637a19540cdf9db9023301c2f9ce97084e91729f",
      price: 1500,
    },
    {
      name: "Rigid",
      img: "https://img.freepik.com/free-photo/smart-contact-lens-fingertip-new-tech_53876-96801.jpg?w=1380&t=st=1697886666~exp=1697887266~hmac=d2b2d3b1a332b675a92f8c34ecf250c5f74ba798d579980f1b7e462a01f20765",
      price: 1400,
    },
    {
      name: "Rigid",
      img: "https://img.freepik.com/free-photo/smart-contact-lens-fingertip-new-tech_53876-96801.jpg?w=1380&t=st=1697886666~exp=1697887266~hmac=d2b2d3b1a332b675a92f8c34ecf250c5f74ba798d579980f1b7e462a01f20765",
      price: 1400,
    },
  ];


  const bestsellingGlases = [ 
    {
      img : "/Image/11.png" , 
      title : "Magnetic Clip ON" , 
      selling  : 
    }
  ]

  return (
    <>
      <Navbar />

      <div className="Single_Banner">
        <img src="/Image/1.png" alt="" />
      </div>

      <div className="category-banner">
        <div className="Main">
          <img src="/Image/2.png" alt="" />
        </div>
        <div className="Main">
          <img src="/Image/3.png" alt="" />
        </div>
        <div className="Main">
          <img src="/Image/4.png" alt="" />
        </div>
      </div>

      <Heading title={"Shop by Frame Style"} />

      <div className="carousel-container">
        <ShopSlider data={frameData} />
      </div>

      <Heading title={"Trending Eye wear"} />

      <div className="carousel-container">
        <EyeWearSlider />
      </div>

      <div className="carousel-container_template">
        <TemplateSlider />
      </div>

      <Heading title={"Shop by brands"} />

      <div className="carousel-container">
        <ShopSlider data={brandData} />
      </div>

      <Heading title={"Frameskart Sunglasses Series"} />

      <div className="carousel-container">
        <ShopSlider data={frameData} />
      </div>

      <Heading title={"New Arrival"} />

      <div className="carousel-container">
        <EyeWearSlider />
      </div>

      <Heading title={"Shop By Frameskart Series"} />

      <div className="carousel-container">
        <ShopSlider data={brandData} />
      </div>

      <Heading title={"Shop Contact Lenses"} />

      <div className="carousel-container">
        <ShopSlider data={lensdata} />
      </div>
      <Heading title={"Try Glasses/ Contact Lenses In AR"} />

      <div className="Single_Banner cutted_Banner">
        <img
          src="https://www.paranjpevisioncare.in/images/slider/banner-2.jpg"
          alt=""
        />
      </div>

      <Heading title={"Computer Glasses"} />

      <div className="carousel-container">
        <EyeWearSlider />
      </div>

      <Heading title={"Premium Lenses"} />

      <div className="carousel-container">
        <ShopSlider data={lensdata} />
      </div>

      <Heading title={"Shop Accessories"} />

      <div className="carousel-container">
        <ShopSlider data={lensdata} />
      </div>

      <Heading title={"Framekart Smart Series"} />

      <div className="smart-series">
        <div className="Main">
          <img src="/Image/36.png" alt="" />
          <p>Image Capturing Glasses</p>
        </div>
        <div className="Main">
          <img src="/Image/37.png" alt="" />
          <p>Smart Video Glasses </p>
        </div>
        <div className="Main">
          <img src="/Image/38.png" alt="" />
          <p>Smart Audio Glasses</p>
        </div>
      </div>

      <Heading title={"Frameskart Premium Eyewear Series"} />
      <div className="premium_series">
        <div className="Main">
          <img src="/Image/11.png" alt="" />
          <p>Magnetic Clip ON</p>
        </div>
        <div className="Main">
          <img src="/Image/12.png" alt="" />
          <p>Color Changing Frame</p>
        </div>
        <div className="Main">
          <img src="/Image/13.png" alt="" />
          <p>Swimming Glasses</p>
        </div>
      </div>

      <Heading title={"Guides"} />

      <div className="smart-series">
        <div className="Main">
          <img src="/Image/36.png" alt="" />
          <p>Size Guide</p>
        </div>
        <div className="Main">
          <img src="/Image/37.png" alt="" />
          <p>Frame Shape Guide </p>
        </div>
        <div className="Main">
          <img src="/Image/38.png" alt="" />
          <p>Prescription Guide</p>
        </div>
      </div>

      <Heading title={"Bestselling Eyeglasses Shapes"} />
      <div className="premium_series">
        <div className="Main">
          <img src="/Image/11.png" alt="" />
          <p>Magnetic Clip ON</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/12.png" alt="" />
          <p>Color Changing Frame</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/13.png" alt="" />
          <p>Swimming Glasses</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/11.png" alt="" />
          <p>Magnetic Clip ON</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/12.png" alt="" />
          <p>Color Changing Frame</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/13.png" alt="" />
          <p>Swimming Glasses</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/11.png" alt="" />
          <p>Magnetic Clip ON</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/12.png" alt="" />
          <p>Color Changing Frame</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
        <div className="Main">
          <img src="/Image/13.png" alt="" />
          <p>Swimming Glasses</p>
          <div className="price-container">
            <p className="selling">₹ 3600</p>
            <p className="mrp">₹6000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
