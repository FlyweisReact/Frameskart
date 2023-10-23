/** @format */

import React from "react";
import { Modal } from "react-bootstrap";

export function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Login_Container">
        <div className="close">
          <img src="/Image/close.png" alt="" />
        </div>
        <h5>Login / Sign Up</h5>
        <p className="desc">
          We do not share your personal details <br /> with anyone.
        </p>
        <form>
          <input type="tel" placeholder="Enter your Mobile Number" />
          <button>Proceed</button>
          <p className="cash">
            Get <span style={{ color: "#FE9800" }}>₹100</span> Cash on Signup
          </p>

          <span className="with"> or Login with</span>

          <div className="social-login">
            <img src="/Image/70.png" alt="" />
            <img src="/Image/71.png" alt="" />
          </div>

          <span className="with" style={{ margin: "0" }}>
            {" "}
            By signing in your agree to our
          </span>
          <span className="privacy">Terms of Service & Privacy Policy</span>
        </form>
      </Modal.Body>
    </Modal>
  );
}
