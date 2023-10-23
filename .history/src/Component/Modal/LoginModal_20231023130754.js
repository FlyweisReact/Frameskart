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
          <p className="cash">Get <span>₹100</span> Cash on Signup</p>
        </form>
      </Modal.Body>
    </Modal>
  );
}
