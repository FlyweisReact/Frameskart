/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

const Baseurl = "https://frameskart-backend.vercel.app/";

export const successComponent = ({title , msg}) => {
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

export const userLogin = async (payload) => {
  try {
    const response = await axios.post(`${Baseurl}api/v1/user/login` , payload);
    const otp = response.data.data.otp
    successComponent('' , otp)
  } catch {}
};
