/** @format */

import React from "react";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src="/Image/logo.png" alt="" />
      </div>

      <div className="mid-div">
        <div className="search-div">
          <input type="text" placeholder="Sunglasses, Eyewear Frames" />
          <img src="/Image/searchIcon.png" alt="" />
        </div>
        <ul>
            <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
