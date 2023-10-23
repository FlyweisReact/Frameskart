/** @format */

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { userLogin } from "../../Repository/Api";
import { OtpModal } from "./OtpModal";

export function LoginModal(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [openOtp, setOpenOtp] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    userLogin(mobileNumber);
  };

  return (
    <>
    <OtpModal show={open}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="Login_Container">
          <div className="close">
            <img src="/Image/close.png" alt="" onClick={() => props.onHide()} />
          </div>
          <h5>Login / Sign Up</h5>
          <p className="desc">
            We do not share your personal details <br /> with anyone.
          </p>
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setMobileNumber(e.target.value)}
              type="tel"
              placeholder="Enter your Mobile Number"
            />
            <button type="submit">Proceed</button>
            <p className="cash">
              Get <span style={{ color: "#FE9800" }}>₹100</span> Cash on Signup
            </p>

            <span className="with"> or Login with</span>

            <div className="social-login">
              <img src="/Image/70.png" alt="" />
              <img src="/Image/71.png" alt="" />
            </div>

            <span className="with" style={{ marginBottom: "0" }}>
              {" "}
              By signing in your agree to our
            </span>
            <span className="privacy">Terms of Service & Privacy Policy</span>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
