/** @format */

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { otpVerification } from "../../Repository/Api";

export function OtpModal(props) {
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(props.show === true && 30);

  const payload = { mobileNumber: props.number, otp };

  const submitHandler = (e) => {
    e.preventDefault();
    otpVerification(payload, props.onHide);
  };

  useEffect(() => {
    if(props.show){
        setSeconds(30)
    }
  })

  useEffect(() => {
    if (props.show) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, props]);

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
        <form onSubmit={submitHandler}>
          <input
            type="tel"
            placeholder="OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">Verify</button>
          <p className="cash">
            Not received your code? 0:{String(seconds).padStart(2, "0")}
          </p>

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
