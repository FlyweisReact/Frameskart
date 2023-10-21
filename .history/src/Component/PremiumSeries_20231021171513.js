/** @format */

import React from "react";

const PremiumSeries = ({ data }) => {
  return 
    <div className="premium_series" key={`premium ${index}`}>
    data?.map((i, index) => (
      <div className="Main">
        <img src={i.img} alt="" />
        <p> {i.title} </p>
        {i.selling && i.mrp && (
          <div className="price-container">
            <p className="selling">₹ {i.selling}</p>
            <p className="mrp">₹{i.mrp} </p>
          </div>
        )}
      </div>
    </div>
  ));
};

export default PremiumSeries;
