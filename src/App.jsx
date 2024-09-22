import { useState } from "react";
import "./App.css";
// import Router from "./routers/Router";

import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import Interceptor from "./Interceptor";
import { RouterProvider } from "react-router-dom";
import RouterAux from "./routers/RouterAux";
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (

    // <div className="">
    //   <Router />

    // </div>

    <RecoilRoot>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        // className='max-w-32 fixed z-50 border'
      />

      <Interceptor />
      <RouterProvider router={RouterAux} />
    </RecoilRoot>
  );
}



export default App;
