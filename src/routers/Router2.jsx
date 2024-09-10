import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import DashBoard from '../pages/main/DashBoard'
import Login from '../pages/auth/Login'
import DataEntryOne from "../pages/main/DataEntryOne";
import Main from "../pages/main/Main";
import DataEntryTwo from "../pages/main/DataEntryTwo";
import AllEntry from "../pages/main/AllEntry";

export default function Router2() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Main />} >
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="addNew1" element={<DataEntryOne />} />
            <Route path="addNew2" element={<DataEntryTwo />} />
            <Route path="entries/allEntries" element={<AllEntry />} />
          </Route>


        </Routes>
        {/* <Toaster /> */}
      </BrowserRouter>
    </div>
  );
}

