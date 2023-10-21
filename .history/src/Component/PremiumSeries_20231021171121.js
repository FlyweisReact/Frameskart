/** @format */

import React from "react";

const PremiumSeries = ({ data }) => {
  return data?.map((i, index) => (
    <div className="premium_series" key={`premium ${index}`} >
      <div className="Main">
        <img src={i.img} alt="" />
        <p> {i.title} </p>
        
        <div className="price-container">
          <p className="selling">₹ 3600</p>
          <p className="mrp">₹6000</p>
        </div>
      </div>
    </div>
  ));
};

export default PremiumSeries;
