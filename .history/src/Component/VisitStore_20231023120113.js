/** @format */

import React from "react";

const VisitStore = () => {
  return (
    <div className="Visit_Store">
      <div className="left">
        <img src="/Image/63.png" alt="" />
      </div>
      <div className="right">
        <h5>Visit Nearby Store</h5>
        <div className="search-div">
          <input type="text" placeholder="Sunglasses, Eyewear Frames" />
          <div>
            <img src="/Image/searchIcon.png" alt="" />
          </div>
        </div>
        <div className="content">
          <p className="title"> Kanpur Sisamau</p>
          <p className="desc">Sisamau , P Road Kanpur</p>
        </div>
      </div>
    </div>
  );
};

export default VisitStore;
