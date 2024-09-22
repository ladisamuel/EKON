import config from "../../../config";
import axios from "axios";

const baseUrl = `${config.backendURL}auth`

const registerUser = async (payload) => {
  return await axios.post(`${baseUrl}/register`, payload);
};

const loginUser = async (payload) => {
  return await axios.post(`${baseUrl}/login`, payload);
};
const verifyAccount = async (payload) => {
  return await axios.post(`${baseUrl}/verify_code/`, payload);
};

const passwordReset = async (payload) => {
    return await axios.post(`${baseUrl}/password_reset/`, payload);
  };
  
  const passwordResetConfirm = async (payload) => {
    return await axios.post(`${baseUrl}/password_reset_confirm/`, payload);
  };
  



export {
    registerUser,
    loginUser,
    verifyAccount,
    passwordReset,
    passwordResetConfirm,   
}