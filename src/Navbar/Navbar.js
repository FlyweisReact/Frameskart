/** @format */

import React from "react";
import Category from "../Component/Category";

const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <div className="header">
          <div className="logo">
            <img src="/Image/logo.png" alt="" />
          </div>

          <div className="mid-div">
            <div className="search-div">
              <input type="text" placeholder="Sunglasses, Eyewear Frames" />
              <div>
                <img src="/Image/searchIcon.png" alt="" />
              </div>
            </div>

            <ul>
              <li className="active">Home</li>
              <li>Design Eyewear</li>
              <li>AR try on</li>
              <li>orders</li>
              <li>vision test</li>
            </ul>
          </div>

          <div className="icons">
            {/* <img src='/Image/wallet.png' alt='' /> */}
            <img src="/Image/heart.png" alt="" />
            <img src="/Image/cart.png" alt="" />
            <img src="/Image/bell.png" alt="" />
            {/* <img src='/Image/user.png' alt='' /> */}
            <button>Sign In</button>
          </div>
        </div>
      </div>


      {/* Category Section */}
      <Category />
    </>
  );
};

export default Navbar;
