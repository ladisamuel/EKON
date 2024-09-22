// import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
// import "primereact/resources/primereact.min.css"; //core css
// import "primeicons/primeicons.css"; //icons
import axios from "axios";
import { toast } from "react-toastify";
import {  useRecoilValue } from "recoil";
import { attachToken } from "./utils/atoms/authAtom";

function Interceptor() {
  const mytoken = useRecoilValue(attachToken);
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error) {
        console.log(error);
        toast.error(error);
        // toast.error(error.response.data);
        // toast.error(error.response.data.detail);
      }
      // if (error==="User not found") {
        
      // }
      // return Promise.reject(error);
    }
  );

  mytoken
  // console.log(mytoken)

  return <></>;
}

export default Interceptor;
