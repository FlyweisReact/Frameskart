/** @format */

import React from "react";
import Banner from "../Component/Banner";
import Heading from "../Component/Heading";
import Policy from "../Component/Policy";
import PremiumSeries from "../Component/PremiumSeries";
import EyeWearSlider from "../Component/Slider/EyeWearSlider";
import ShopSlider from "../Component/Slider/ShopSlider";
import TemplateSlider from "../Component/Slider/TemplateSlider";
import VisitStore from "../Component/VisitStore";
import Footer from "../Footer/Footer";
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
      img: "/Image/72.png",
      price: 900,
    },
    {
      name: "Disposable",
      img: "/Image/73.png",
      price: 1500,
    },
    {
      name: "Rigid",
      img: "/Image/53.png",
      price: 1400,
    },
    {
      name: "SOft",
      img: "/Image/72.png",
      price: 900,
    },
    {
      name: "Disposable",
      img: "/Image/73.png",
      price: 1500,
    },
    {
      name: "Rigid",
      img: "/Image/53.png",
      price: 1400,
    },
  ];

  const bestsellingGlases = [
    {
      img: "/Image/11.png",
      title: "Magnetic Clip ON",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/12.png",
      title: "Color Changing Frame",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/13.png",
      title: "Swimming Glasses",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/14.png",
      title: "Magnetic Clip ON",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/15.png",
      title: "Color Changing Frame",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/16.png",
      title: "Swimming Glasses",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/12.png",
      title: "Color Changing Frame",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/13.png",
      title: "Swimming Glasses",
      selling: 3600,
      mrp: 6000,
    },
    {
      img: "/Image/14.png",
      title: "Magnetic Clip ON",
      selling: 3600,
      mrp: 6000,
    },
  ];

  const sunGlassSeries = [
    {
      name: "Polarized",
      img: "/Image/43.png",
    },
    {
      name: "Double Gradient",
      img: "/Image/44.png",
    },
    {
      name: "Sports",
      img: "/Image/45.png",
    },
    {
      name: "Polarized",
      img: "/Image/43.png",
    },
    {
      name: "Double Gradient",
      img: "/Image/44.png",
    },
    {
      name: "Sports",
      img: "/Image/45.png",
    },
  ];

  const brand2 = [
    {
      name: "AURA",
      img: "/Image/46.png",
      logo: "/Image/49.png",
    },
    {
      name: "SPARKLE",
      img: "/Image/47.png",
      logo: "/Image/50.png",
    },
    {
      name: "KIDZ",
      img: "/Image/48.png",
      logo: "/Image/51.png",
    },
    {
      name: "AURA",
      img: "/Image/46.png",
      logo: "/Image/49.png",
    },
    {
      name: "SPARKLE",
      img: "/Image/47.png",
      logo: "/Image/50.png",
    },
    {
      name: "KIDZ",
      img: "/Image/48.png",
      logo: "/Image/51.png",
    },
  ];

  const premimumLens = [
    {
      name: "PILOT LENS",
      img: "/Image/52.png",
    },
    {
      name: "OFFICE LENS",
      img: "/Image/53.png",
    },
    {
      name: "PILOT LENS",
      img: "/Image/52.png",
    },
    {
      name: "PILOT LENS",
      img: "/Image/52.png",
    },
    {
      name: "OFFICE LENS",
      img: "/Image/53.png",
    },
    {
      name: "PILOT LENS",
      img: "/Image/52.png",
    },
  ];

  const lensdata2 = [
    {
      name: "LENS PEN MICTOCLEAR",
      img: "/Image/54.png",
      price: 150,
    },

    {
      name: "SENSEI CLEANER",
      img: "/Image/55.png",
      price: 1500,
    },

    {
      name: "LENS CLEANING PAPER",
      img: "/Image/56.png",
      price: 1400,
    },
    {
      name: "SENSEI CLEANER",
      img: "/Image/55.png",
      price: 1500,
    },
  ];

  const youtubeCorner = [
    {
      name: "Watch Now",
      img: "/Image/60.png",
    },
    {
      name: "Watch Now",
      img: "/Image/61.png",
    },
    {
      name: "Watch Now",
      img: "/Image/62.png",
    },
    {
      name: "Watch Now",
      img: "/Image/60.png",
    },
    {
      name: "Watch Now",
      img: "/Image/61.png",
    },
    {
      name: "Watch Now",
      img: "/Image/62.png",
    },
  ];

  const offBanners = [
    {
      img: "/Image/17.png",
    },

    {
      img: "/Image/18.png",
    },

    {
      img: "/Image/19.png",
    },
  ];

  const firstBanner = [
    {
      img: "/Image/78.png",
    },

    {
      img: "/Image/79.png",
    },

    {
      img: "/Image/80.png",
    },
    {
      img: "/Image/81.png",
    },
    {
      img: "/Image/82.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="carousel-container_template" style={{ paddingTop: 0 }}>
        <TemplateSlider data={firstBanner} />
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
        <TemplateSlider data={offBanners} />
      </div>

      <Heading title={"Shop by brands"} />

      <div className="carousel-container">
        <ShopSlider data={brandData} />
      </div>

      <Heading title={"Frameskart Sunglasses Series"} />

      <div className="carousel-container">
        <ShopSlider data={sunGlassSeries} />
      </div>

      <Heading title={"New Arrival"} />

      <div className="carousel-container">
        <EyeWearSlider />
      </div>

      <Heading title={"Shop By Frameskart Series"} />

      <div className="carousel-container">
        <ShopSlider data={brand2} />
      </div>

      <Heading title={"Shop Contact Lenses"} />

      <div className="carousel-container">
        <ShopSlider data={lensdata} />
      </div>
      <Heading title={"Try Glasses/ Contact Lenses In AR"} />
      <Banner img={"/Image/74.png"} />
         <div className="carousel-container_template" style={{ paddingTop: 0 }}>
        <TemplateSlider data={firstBanner} />
      </div>

      <Heading title={"Computer Glasses"} />

      <div className="carousel-container">
        <EyeWearSlider />
      </div>

      <Heading title={"Premium Lenses"} />

      <div className="carousel-container">
        <ShopSlider data={premimumLens} />
      </div>

      <Heading title={"Shop Accessories"} />

      <div className="carousel-container">
        <ShopSlider data={lensdata2} />
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
          <img src="/Image/75.png" alt="" />
          <p>Size Guide</p>
        </div>
        <div className="Main">
          <img src="/Image/76.png" alt="" />
          <p>Frame Shape Guide </p>
        </div>
        <div className="Main">
          <img src="/Image/77.png" alt="" />
          <p>Prescription Guide</p>
        </div>
      </div>

      <Heading title={"Bestselling Eyeglasses Shapes"} />
      <PremiumSeries data={bestsellingGlases} />

      <div className="store_two_section">
        <div className="Main">
          <img src="/Image/39.png" alt="" />
          <p>Eye Test at Home</p>
        </div>
        <div className="Main">
          <img src="/Image/57.png" alt="" />
          <p>Frame Tryon at Home</p>
        </div>
        <div className="Main">
          <img src="/Image/58.png" alt="" />
          <p>Buy At Store</p>
        </div>
        <div className="Main">
          <img src="/Image/59.png" alt="" />
          <p>Breakage Coverage</p>
        </div>
      </div>

      <Heading title={"Bestselling Sunglasses Shapes"} />
      <PremiumSeries data={bestsellingGlases} />

      <Heading title={" YouTube Corner"} />

      <div className="carousel-container">
        <ShopSlider data={youtubeCorner} />
      </div>
      <Banner img={"/Image/40.png"} />
      <VisitStore />
      <Policy />
      <Footer />
    </>
  );
};

export default Home;
