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
            <li>Design Eyewear</li>
            <li>AR try on</li>
            <li>orders</li>
            <li>vision test</li>
        </ul>
      </div>

      <div className="icons">
        {/* <img src='/Image/wallet.png' alt='' /> */}
        <img src='/Image/heart.png' alt='' />
        <img src='/Image/cart.png' alt='' />
        <img src='/Image/bell.png' alt='' />
    <button>Sign In</button>
        {/* <img src='/Image/user.png' alt='' /> */}
      </div>    
    </div>
  );
};

export default Navbar;
