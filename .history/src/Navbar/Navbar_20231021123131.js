/** @format */

import React from "react";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src="/Image/logo.png" alt="" />
      </div>

      <div className="mid-div" >
      <div className="search-div">
        <input type='text' placeholder="Sunglasses, Eyewear Frames" />
        <img src='/Image/searchIcon'
      </div>

      </div>
    </div>
  );
};

export default Navbar;
