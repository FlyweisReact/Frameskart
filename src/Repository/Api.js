/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

const Baseurl = "https://frameskart-backend.vercel.app/";

export const successComponent = ({ title, msg }) => {
  return Store.addNotification({
    title: title,
    message: msg,
    type: "success",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const userLogin = async (payload, openHandler) => {
  try {
    const response = await axios.post(`${Baseurl}api/v1/user/login`, payload);
    const otp = response.data.data.otp;
    Store.addNotification({
      title: "You'r OTP is ",
      message: otp,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
    openHandler();
  } catch {}
};

export const otpVerification = async (payload, onHide) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/verify/otp`,
      payload
    );
    const token = response.data.data.token;
    localStorage.setItem("Token", token);
    Store.addNotification({
      title: " ",
      message: "Welcome Back",
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
    onHide();
  } catch {}
};
