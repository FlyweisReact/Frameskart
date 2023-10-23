/** @format */

import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export function OtpModal(props) {
  const [otp, setOtp] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  return (
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
        <h5>OTP Sent</h5>
        <p className="desc">OTP sent to {props.number}</p>
        <form>
          <input type="tel" placeholder="OTP" />
          <button type="submit">Verify</button>
          <p className="cash">Not received your code? 0:22</p>

          <span className="with" style={{ marginBottom: "0" }}>
            {" "}
            By signing in your agree to our
          </span>
          <span className="privacy">Terms of Service & Privacy Policy</span>
        </form>
      </Modal.Body>
    </Modal>
  );
}